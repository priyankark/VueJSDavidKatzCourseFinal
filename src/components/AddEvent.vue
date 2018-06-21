<template>
<div class="container-fluid">
 <h4> Add an event <input type="checkbox" v-model="showForm"> </h4>
 <div class="form" v-if="showForm">
     <div class="form-group" >
         <label>Title</label>
         <input type="text" class="form-control" v-model="events.title" >
    </div>   
    <div class="form-group">
         <label>Description</label>
         <input type="text" class="form-control" v-model="events.description" >
    </div> 
    <div class="form-group">
         <label>Date</label>
         <input type="date" class="form-control" v-model="events.date" >
    </div> 
    <div class="form-group">
         <label>Location</label>
         <input type="text" class="form-control" v-model="events.location">
    </div> 
    <button class="btn btn-sm btn-primary" @click="addEvent"> Submit </button>
</div>
</div>    
</template>


<script>
import {eventsRef} from '../firebaseApp';


export default {
    data() {
       return {
          events: {
             title:'',
             description: '',
             date: '',
             location: '',
             email: ''
          } ,
        showForm: false
       } 
    },

    methods: {
        addEvent() {
            this.events.email=this.$store.state.user.email;
            eventsRef.push(this.events);
        }
    }

}



</script>