<template>
  <div class="home">
     <h1>Hello</h1>
     
     <div>
        <product v-for="item in myProduct" v-bind:key="item.id">

        </product>
      </div>
     
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Alert from '@/components/garage/Alert.vue';
import Product from '@/components/home/Product.vue';
import Products,{Product as ProductType} from '@/data/Products';

@Component({
  components: {
    Alert,
    Product
  },
})
export default class Home extends Vue {
   myProduct(): ProductType[] {
     return Products;
   }
}
</script>
