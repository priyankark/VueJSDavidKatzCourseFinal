<template>
<div class="form-inline">
  <h3> Sign In  </h3>
  <div class="form-group">
    <input  v-model="email" type="text" placeholder="email" class="form-control" />
    <input  v-model="password" class="form-control" type="password" placeholder="password" value=""  />
    <button class="btn btn-primary" @click="signIn"> Sign In </button>
  </div> 
  <br>
  <router-link to="/signup"> Not a user? Signup. </router-link>
  <p>    {{error.message}} </p>
  <br>
</div>
</template>

<script>
import { firebaseApp } from '../firebaseApp';
export default {
    data() {
        return {
            email:'',
            passsword:'',
            error:{
                message:''
            }
        }
    },
    methods: {
        signIn() {
           firebaseApp.auth().signInWithEmailAndPassword(this.email,this.password)
           .catch(error=>{
                this.error=error})
        }
    }
}


</script>