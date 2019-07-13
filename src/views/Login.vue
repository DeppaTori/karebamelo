<template>
  <div class="login">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar  color="#f5f9ff">
                <v-toolbar-title>Login form</v-toolbar-title>
              
               
              </v-toolbar>
              <v-alert v-if="showError"
      :value="true"
      type="warning"
    >
      Invalid username or password.
    </v-alert>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="username" ></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
               
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#f5f9ff" @click="submit">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
 
})
export default class Login extends Vue {
    username: string ='';
    password: string = '';
    showError: boolean = false;

    submit(): void {
      if (this.username.length > 0 && this.password.length > 0) {
        if (this.username === 'admin' && this.password === 'password') {
           // console.log(this.$route.query.redirect);
            window.localStorage.setItem('token', 'myToken');
            let redirect: string = this.$route.query.redirect as string;
            // redirect = redirect===null || "" ?"/":redirect;
            this.$router.push(redirect);
        }else{
           this.showError = true;
        }
      }
    }
}
</script>
