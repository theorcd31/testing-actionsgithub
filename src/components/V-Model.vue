<template>
  <div class="container">
    <div class="mb-3">
      <p>v-on (keyup) + v-bind (value)</p>
      <input
        v-on:keyup="afficherNameUser($event)"
        v-bind:value="nameUser"
        type="text"
        class="form-control"
      />
    </div>
    <div class="mb-3">
      <p>{{ nameUser }}</p>
    </div>
    <div class="mb-3">
      <p>v-model</p>
      <!-- modèle MVC vs MVVM  -->
      <input v-model="userName" type="text" class="form-control" />
    </div>
    <div class="mb-3">
      <p>{{ userName }}</p>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TwoWayBindingOpt',

  data() {
    return {
      nameUser: '',
      userName: '',
    }
  },

  methods: {
    afficherNameUser(event) {
      this.nameUser = event.target.value
    },
  },
})
</script>
