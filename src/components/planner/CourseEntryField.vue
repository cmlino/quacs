<template>
  <b-input-group class="mb-3">
    <b-form-input
      v-model="courseCode"
      :state="validCourseSyntax"
      placeholder="Course Code"
      aria-lable="Course Code"
      trim
      :formatter="formatCourse"
    ></b-form-input>

    <b-input-group-append>
      <b-button size="sm" @click="removeCourse">
        <font-awesome-icon :icon="['fas', 'trash']"></font-awesome-icon>
      </b-button>
    </b-input-group-append>

    <b-form-invalid-feedback>
      Format "ABCD-1234"
    </b-form-invalid-feedback>
    <!-- I dont actually show any form valid feedback, but having this here keeps
                     The page nicely spaced out and not bouncing-->
    <b-form-valid-feedback id="valid-feedback">
      Format "ABCD-1234"
    </b-form-valid-feedback>
  </b-input-group>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  BButton,
  BFormInput,
  BFormInvalidFeedback,
  BFormValidFeedback,
  BInputGroup,
  BInputGroupAppend,
} from "bootstrap-vue";

@Component({
  components: {
    "b-button": BButton,
    "b-form-input": BFormInput,
    "b-form-invalid-feedback": BFormInvalidFeedback,
    "b-form-valid-feedback": BFormValidFeedback,
    "b-input-group": BInputGroup,
    "b-input-group-append": BInputGroupAppend,
  },
})
export default class CourseEntryField extends Vue {
  @Prop() value: string;
  courseCode = "";

  formatCourse(value: string): string {
    console.log(`Formatting ${value}`);
    return value
      .toUpperCase()
      .replace("_", "-")
      .replace(" ", "-")
      .substring(0, 9);
  }

  get validCourseSyntax(): boolean {
    if (this.courseCode === "") {
      return null;
    }

    let valid = this.courseCode.match("^[a-zA-Z]{4}[-_\\s]\\d{4}$") !== null;

    console.log(`Emitting ${this.courseCode}`);
    this.$emit("input", this.courseCode);

    return valid;
  }

  removeCourse(): null {
    console.log("deleting");
    this.$emit("delete");
  }
}
</script>

<style>
#valid-feedback {
  visibility: hidden;
}
</style>
