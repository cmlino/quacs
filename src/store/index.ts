import { CatalogCourse, Department, PrerequisiteJSON } from "@/typings";

import axios from "axios";
import createPersistedState from "vuex-persistedstate";

import Vue from "vue";
import VueAxios from "vue-axios";
import Vuex from "vuex";

import SCHOOLS_JSON from "./data/schools.json";
import DATA_STATS_JSON from "./data/meta.json";

import settings from "./modules/settings";
import prerequisites from "./modules/prerequisites";
import schedule from "./modules/schedule";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    schools: SCHOOLS_JSON as {
      name: string;
      depts: { code: string; name: string }[];
    }[],
    dataStats: DATA_STATS_JSON as { last_updated: string },
    departments: [] as Department[], // asynchronously loaded
    catalog: {} as { [id: string]: CatalogCourse }, // asynchronously loaded
    prerequisitesData: {} as { [id: string]: PrerequisiteJSON }, // asynchronously loaded
    lastNewSchedule: 0,
    warningMessage: "",
    updateAvailable: false,
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
    init({ commit }): void {
      import("./data/catalog.json").then((catalog) =>
        commit("SET_CATALOG", catalog)
      );

      import("./data/courses.json").then((departments) =>
        commit("SET_DEPARTMENTS", departments.default)
      );

      import("./data/prerequisites.json").then((prereqs) =>
        commit("SET_PREREQUISITES_DATA", prereqs)
      );
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
