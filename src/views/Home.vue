<template>
  <div class="home">
     <h1>Hello</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Alert from '@/components/garage/Alert.vue';

@Component({
  components: {
    Alert,
  },
})
export default class Home extends Vue {}
</script>
