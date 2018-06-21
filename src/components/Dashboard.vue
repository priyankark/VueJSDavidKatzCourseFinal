<template>
<div class="">
  <h3> Events Dashboard </h3>

  <button class="btn btn-danger btn-sm signout-btn" name="button" @click="signOut"> Sign Out </button> 
  <br>
  <AddEvent/>
  <div class="col-md-12">
    <EventItem
      v-for="(event_item,index) in this.$store.state.events"
      :event="event_item"
      :key="index"
    />
  </div>

</div>
</template>

<script>
import { firebaseApp, eventsRef } from '../firebaseApp';
import AddEvent from './AddEvent.vue';
import EventItem from './EventItem.vue';

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
      firebaseApp.auth().signOut()
    }
  },
  components:{
    AddEvent,
    EventItem
  },
  mounted() {
    eventsRef.on('value',snap=>{
      let events=[];
      snap.forEach(event=>{
        events.push(event.val())
      })
      console.log('events',events);
      this.$store.dispatch('setEvents',events);
    });
  }
}
</script>

