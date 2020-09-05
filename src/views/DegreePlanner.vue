<template>
  <b-card-group columns style="column-count: 2">
    <Planner
      v-for="semester in semesters"
      v-bind:semester="semester"
      v-bind:key="semester"
    />
  </b-card-group>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Planner from "../components/Planner.vue";
import { BCardGroup } from "bootstrap-vue";

@Component({
  components: { Planner, "b-card-group": BCardGroup },
})
export default class DegreePlanner extends Vue {
  get semesters(): string[] {
    return [
      "Fall 2018",
      "Spring 2019",
      "Fall 2019",
      "Spring 2020",
      "Fall 2020",
      "Spring 2021",
      "Fall 2021",
      "Spring 2022",
    ];
  }
}
</script>
