<template>
<div class="form-inline">
  <h3> Sign Up  </h3>
  <div class="form-group">
    <input  v-model="email" type="text" placeholder="email" class="form-control" />
    <input  v-model="password" class="form-control" type="password" placeholder="password" value=""  />
    <button class="btn btn-primary" @click="signUp"> Sign Up </button>
  </div> 
  <br>
  <router-link to="/signin"> Already a user? Sign In </router-link>
  <br>
  <p>    {{error.message}} </p>
  <br>
  
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
        signUp() {
           firebaseApp.auth().createUserWithEmailAndPassword(this.email,this.password)
           .catch(error=>{
                this.error=error})
        }
    }
}


</script>