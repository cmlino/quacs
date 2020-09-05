<template>
  <b-card class="mt-3" :header="semester">
    <b-form>
      <CourseEntryField
        v-for="idx of courseCodes.keys()"
        v-model="courseCodes[idx]"
        :key="idx"
        @delete="removeCourseCode(idx)"
      />

      <b-button block @click="addCourseCode()">
        <font-awesome-icon :icon="['fas', 'plus']"></font-awesome-icon>
      </b-button>
    </b-form>
  </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { BButton, BCard, BForm } from "bootstrap-vue";

import CourseEntryField from "./planner/CourseEntryField.vue";

@Component({
  components: {
    CourseEntryField,
    "b-button": BButton,
    "b-card": BCard,
    "b-form": BForm,
  },
})
export default class Planner extends Vue {
  @Prop() readonly semester!: string;
  courseCodes: string[] = [""];

  formatCourse(value: string): string {
    return value
      .toUpperCase()
      .replace("_", "-")
      .replace(" ", "-")
      .substring(0, 9);
  }

  /*
  get lastCourseCode(): string {
    return this.courseCodes[this.courseCodes.length - 1];
  }

  @Watch("lastCourseCode")
  onLastCourseCodeChanged(val: string, oldVal: string): null {
    console.log(val);
    if (oldVal === "" && val !== "") {
      this.courseCodes.push("");
    }
  }
  */

  addCourseCode(): null {
    this.courseCodes.push("");
  }

  removeCourseCode(idx: number): null {
    console.log(idx);
    this.courseCodes.splice(idx, 1);
    if (this.courseCodes.length === 0) {
      this.courseCodes.push("");
    }
  }
}
</script>
