import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

import * as quacsWorker from "@/workers/schedule.worker";
import Vue from "vue";
import { CourseSet } from "@/typings";

// yay typescript fun
const worker = ((quacsWorker as unknown) as () => typeof quacsWorker)() as typeof quacsWorker;

// This is a compile-time generated variable
// eslint-disable-next-line
declare const SEMESTERS: number[];

const DEFAULT_COURSE_SET = "Course Set 1";

const DEFAULT_COURSE_SETS: {
  [term: number]: CourseSet;
} = {};
DEFAULT_COURSE_SETS[SEMESTERS[0]] = { DEFAULT_COURSE_SET: {} };

@Module({ namespaced: true })
export default class Schedule extends VuexModule {
  numCurrentSchedules = 0;
  CURRENT_STORAGE_VERSION = "0.0.3";
  storedVersion = ""; // If a value is in localstorage, this will be set to that on load
  currentlyGeneratingSchedules = false;
  needToGenerateSchedules = false;
  currentCourseSet = DEFAULT_COURSE_SET;
  courseSets: {
    [term: number]: CourseSet;
  } = DEFAULT_COURSE_SETS;

  wasmLoaded = false;
  lastNewSchedule = 0;

  @Mutation
  initializeStore(): void {
    if (this.storedVersion !== this.CURRENT_STORAGE_VERSION) {
      // eslint-disable-next-line
      console.log("Out of date or uninitialized sections, clearing");

      this.courseSets = DEFAULT_COURSE_SETS;
      this.currentCourseSet = DEFAULT_COURSE_SET;

      this.storedVersion = this.CURRENT_STORAGE_VERSION;
    }
  }

  get getCourseSets(): CourseSet {
    return this.courseSets[this.context.rootState.currentTerm];
  }

  @Mutation
  switchCurrentCourseSet(p: { name: string }): void {
    for (const sec in this.courseSets[this.context.rootState.currentTerm][
      this.currentCourseSet
    ]) {
      worker.setSelected(sec, false);
    }
    this.currentCourseSet = p.name;
    for (const sec in this.courseSets[this.context.rootState.currentTerm][
      this.currentCourseSet
    ]) {
      if (
        this.courseSets[this.context.rootState.currentTerm][
          this.currentCourseSet
        ][sec]
      ) {
        worker.setSelected(sec, true);
      }
    }
  }

  @Mutation
  createNewCourseSet(p: { name: string }): void {
    Vue.set(this.courseSets[this.context.rootState.currentTerm], p.name, {});
  }

  @Action
  addCourseSet(p: { name: string }): boolean {
    //Cannot add a courseSet with a name of one that exists
    if (this.courseSets[this.context.rootState.currentTerm][p.name]) {
      return false;
    }
    this.context.commit("createNewCourseSet", p);
    this.context.commit("switchCurrentCourseSet", p);
    return true;
  }

  @Mutation
  deleteCourseSet(p: { name: string }): void {
    Vue.delete(this.courseSets[this.context.rootState.currentTerm], p.name);
  }

  @Action
  removeCourseSet(p: { name: string }): boolean {
    if (
      Object.keys(this.courseSets[this.context.rootState.currentTerm]).length <=
      1
    ) {
      return false;
    }
    this.context.commit("deleteCourseSet", p);
    if (this.currentCourseSet === p.name) {
      this.context.commit("switchCurrentCourseSet", {
        name: Object.keys(
          this.courseSets[this.context.rootState.currentTerm]
        )[0],
      });
      this.context.dispatch("generateCurrentSchedulesAndConflicts");
    }
    return true;
  }

  @Mutation
  setSelected(p: { crn: string; selected: boolean }): void {
    Vue.set(
      this.courseSets[this.context.rootState.currentTerm][
        this.currentCourseSet
      ],
      p.crn,
      p.selected
    );
    worker.setSelected(p.crn, p.selected);
  }

  @Mutation
  setWasmLoaded(state: boolean): void {
    this.wasmLoaded = state;
  }

  @Mutation
  setLastNewSchedule(time: number): void {
    this.lastNewSchedule = time;
  }

  @Action({ rawError: true })
  async init(p: { initWasm: boolean; semester: number }): Promise<void> {
    if (p.initWasm) {
      // eslint-disable-next-line
      console.log("initializing worker");
      await worker.init(p.semester);
      // eslint-disable-next-line
      console.log("worker initialized");
    }

    for (const sec in this.courseSets[this.context.rootState.currentTerm][
      this.currentCourseSet
    ]) {
      if (
        this.courseSets[this.context.rootState.currentTerm][
          this.currentCourseSet
        ][sec]
      ) {
        await worker.setSelected(sec, true);
      }
    }

    const shouldSetWarningMessage = !this.context.rootState.shouldShowAlert;
    if (shouldSetWarningMessage) {
      this.context.commit("setWarningMessage", "Generating schedules...", {
        root: true,
      });
    }

    this.context.dispatch("generateCurrentSchedulesAndConflicts");

    this.context.commit("setWasmLoaded", true);

    if (shouldSetWarningMessage) {
      this.context.commit("setWarningMessage", "", {
        root: true,
      });
    }
  }

  @Mutation
  initSelectedSetions(): void {
    //initialize courseSets if they are empty. There should never be an empty courseSet
    // if (Object.keys(this.courseSets).length === 0) {
    //   Vue.set(this.courseSets, this.context.rootState.currentTerm, {});
    // }
    // if (Object.keys(this.courseSets[this.context.rootState.currentTerm]).length === 0) {
    //   Vue.set(this.courseSets, this.context.rootState.currentTerm, {});
    //   Vue.set(this.courseSets[this.context.rootState.currentTerm], this.currentCourseSet, {});
    // }

    for (const section in this.courseSets[this.context.rootState.currentTerm][
      this.currentCourseSet
    ]) {
      worker.setSelected(
        section,
        this.courseSets[this.context.rootState.currentTerm][
          this.currentCourseSet
        ][section]
      );
    }
  }

  get getInConflict(): (crn: number) => Promise<boolean> {
    return (crn: number) => worker.getInConflict(crn);
  }

  get isSelected(): (crn: string) => boolean {
    return (crn: string) =>
      this.courseSets[this.context.rootState.currentTerm][
        this.currentCourseSet
      ][crn] === true;
  }

  get getSchedule() {
    return (idx: number): Promise<Uint32Array> => worker.getSchedule(idx);
  }

  get numSchedules(): number {
    return this.numCurrentSchedules;
  }

  @Mutation
  setNumSchedules(num: number): void {
    this.numCurrentSchedules = num;
  }

  @Mutation
  setNeedToGenerateSchedules(state: boolean): void {
    this.needToGenerateSchedules = state;
  }

  @Mutation
  setCurrentlyGeneratingSchedules(state: boolean): void {
    this.currentlyGeneratingSchedules = state;
  }

  get getNeedToGenerateSchedules(): boolean {
    return this.needToGenerateSchedules;
  }

  get getCurrentlyGeneratingSchedules(): boolean {
    return this.currentlyGeneratingSchedules;
  }

  @Action({ rawError: true })
  async generateCurrentSchedulesAndConflicts(): Promise<void> {
    this.context.commit("setNeedToGenerateSchedules", true);

    if (this.context.getters.currentlyGeneratingSchedules) {
      // We've marked that we need to generate the schedule again,
      // so the function call currently running will take it from here
      return;
    }

    const shouldSetWarningMessage = !this.context.rootState.shouldShowAlert;
    if (shouldSetWarningMessage) {
      this.context.commit("setWarningMessage", "Generating schedules...", {
        root: true,
      });
    }

    while (this.context.getters.getNeedToGenerateSchedules) {
      this.context.commit("setNeedToGenerateSchedules", false);

      this.context.commit(
        "setNumSchedules",
        await worker.generateCurrentSchedulesAndConflicts()
      );

      this.context.commit("setLastNewSchedule", Date.now());
    }

    if (shouldSetWarningMessage) {
      this.context.commit("setWarningMessage", "", {
        root: true,
      });
    }
  }
}
