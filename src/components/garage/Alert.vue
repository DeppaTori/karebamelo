<template>
  <div class="alert">
    <h1>{{ msg }}</h1>
   <v-alert
      :value="true"
      type="success"
    >
      This is a success alert.
    </v-alert>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Alert extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
