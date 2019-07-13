<template>
  <div class="general">
      <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="goTo('home')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="goTo('about')">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
          <v-list-tile @click="goTo('personal')">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Personal</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="#f5f9ff" fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Kareba Melo</v-toolbar-title>
      <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn icon>
        <v-icon>search</v-icon>
       </v-btn>
    

      <v-menu offset-y  v-if="isLogin">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
         <v-icon>more_vert</v-icon>
      </v-btn>
       
      </template>
      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          @click="goTo(item.url)"
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

    </v-toolbar-items>
      

    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
        <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="#f5f9ff" app>
      <span>&copy; 2019</span>
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({

    props: {
      source: String,
    },
    methods: {
      goTo: function(routerName: string) {
          this.$router.push(routerName);
      },
    },
})
export default class General extends Vue {
    drawer: boolean = false
    items: {title:string,url:string}[] =  [
        { title: 'Profile',url:'profile'},
        { title: 'Credit' ,url:'credit'},
        { title: 'Logout', url:'logout'}
      ]
    get isLogin(): boolean{
      let token: string = window.localStorage.getItem("token") as string;
     
      if(token){
        return true;
      }
      return false;
    }
    goTo(url:string): void{
      this.$router.push(url)
    }
}
</script>
