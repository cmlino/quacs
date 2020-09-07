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

Vue.use(Vuex);
Vue.use(VueAxios, axios);

// This is a compile-time generated variable
// eslint-disable-next-line
declare const SEMESTERS: number[];

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
  },
  actions: {
    init({ dispatch, commit }, semester: number): void {
      const DATA_DIR = `./data/${semester}`;

      import(`${DATA_DIR}/schools.json`).then((schools) =>
        commit("SET_SCHOOLS", schools)
      );

      import(`${DATA_DIR}/catalog.json`).then((catalog) =>
        commit("SET_CATALOG", catalog)
      );

      import(`${DATA_DIR}/courses.json`).then((departments) =>
        commit("SET_DEPARTMENTS", departments.default)
      );

      import(`${DATA_DIR}/prerequisites.json`).then((prereqs) =>
        commit("SET_PREREQUISITES_DATA", prereqs)
      );

      commit("schedule/initializeStore");

      dispatch("schedule/init", { initWasm: true, semester });
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
        "schedule.storedVersion",
        "schedule.currentTerm",
        "schedule.currentCourseSet",
        "schedule.courseSets",
        "settings.timePreference",
        "settings.colorTheme",
        "settings.hidePrerequisites",
        "prerequisites.priorCourses",
        "prerequisites.enableChecking",
      ],
      rehydrated: (store) => {
        store.commit("schedule/initSelectedSetions");
        store.dispatch("schedule/init", false);
      },
    }),
  ],
});
