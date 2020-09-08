import { CatalogCourse, Department, PrerequisiteJSON } from "@/typings";

import axios from "axios";
import createPersistedState from "vuex-persistedstate";

import Vue from "vue";
import VueAxios from "vue-axios";
import Vuex from "vuex";

import DATA_STATS_JSON from "./data/meta.json";

import settings from "./modules/settings";
import prerequisites from "./modules/prerequisites";
import schedule from "./modules/schedule";
import SEMESTERS from "@/store/semesters.json";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    schools: [] as {
      name: string;
      depts: { code: string; name: string }[];
    }[], // asynchronously loaded
    dataStats: DATA_STATS_JSON as { last_updated: string },
    departments: [] as Department[], // asynchronously loaded
    catalog: {} as { [id: string]: CatalogCourse }, // asynchronously loaded
    prerequisitesData: {} as { [id: string]: PrerequisiteJSON }, // asynchronously loaded
    lastNewSchedule: 0,
    warningMessage: "",
    updateAvailable: false,
    currentTerm: SEMESTERS[0],
    CURRENT_STORAGE_VERSION: "0.0.4",
    storedVersion: "", // If a value is in localstorage, this will be set to that on load
  },
  getters: {
    shouldShowAlert: (state) => {
      return state.warningMessage !== "";
    },

    warningMessage: (state) => {
      return state.warningMessage;
    },

    departmentsInitialized: (state) => {
      return state.departments.length > 0;
    },

    catalogInitialized: (state) => {
      return Object.keys(state.catalog).length !== 0;
    },

    prerequisitesDataInitialized: (state) => {
      return state.prerequisitesData !== {};
    },
  },
  mutations: {
    SET_SCHOOLS(state, schools): void {
      state.schools = schools;
    },

    SET_DEPARTMENTS(state, departments): void {
      state.departments = departments;
    },

    SET_CATALOG(state, catalog): void {
      state.catalog = catalog;
    },

    SET_PREREQUISITES_DATA(state, data): void {
      state.prerequisitesData = data;
    },

    setWarningMessage(state, message): void {
      state.warningMessage = message;
    },

    toggleUpdateNotice(state, newValue: boolean): void {
      state.updateAvailable = newValue;
    },

    SET_TERM(state, newValue: number): void {
      state.currentTerm = newValue;
    },
  },
  actions: {
    async init({ state, dispatch, commit }, semester: number): Promise<void> {
      if (state.storedVersion !== state.CURRENT_STORAGE_VERSION) {
        // eslint-disable-next-line
        console.log("Out of date or uninitialized sections, clearing");

        commit("schedule/reInitializeStore");
      }

      // Load everything before committing it so we can ensure the correct order
      // of data being updated.
      // This avoids a race condition.
      const schools = await import(
        `./data/semester_data/${semester}/schools.json`
      );
      const catalog = await import(
        `./data/semester_data/${semester}/catalog.json`
      );
      const prereqs = await import(
        `./data/semester_data/${semester}/prerequisites.json`
      );
      const departments = await import(
        `./data/semester_data/${semester}/courses.json`
      );

      commit("SET_SCHOOLS", schools);
      commit("SET_CATALOG", catalog);
      commit("SET_PREREQUISITES_DATA", prereqs);
      commit("SET_DEPARTMENTS", departments.default);

      dispatch("schedule/init", { initWasm: true, semester });
    },

    updateTerm({ commit }, semester: number): void {
      commit("SET_TERM", semester);
      commit("schedule/setCurrentTerm", semester);
    },
  },
  modules: {
    settings,
    prerequisites,
    schedule,
  },
  plugins: [
    createPersistedState({
      paths: [
        "storedVersion",
        "schedule.currentCourseSet",
        "schedule.courseSets",
        "settings.timePreference",
        "settings.colorTheme",
        "settings.hidePrerequisites",
        "prerequisites.priorCourses",
        "prerequisites.enableChecking",
      ],
      rehydrated: (store) => {
        store.commit("schedule/initSelectedSections");
        store.dispatch("schedule/init", false);
      },
    }),
  ],
});
