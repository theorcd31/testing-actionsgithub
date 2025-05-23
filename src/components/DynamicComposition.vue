<template>
  <div id="monApp">
    <div class="m-3">
      <div :style="{ display: maClass }">
        <input
          id="showInput"
          type="text"
          class="form-control"
          v-on:keyup="toggleColor"
          :style="{ colorDynamic: this.maClasseHello }"
        />
        <h1 class="form-label mt-1" :class="{ maClasseHello: colorDynamic }">
          Hello World (class dynamique)
        </h1>
      </div>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          v-on:keyup="toggleClass"
          :style="{ classDynamic: this.maClasseWorld }"
        />
        <h1 class="form-label mt-1" :class="{ maClasseWorld: classDynamic }">
          Hello World (couleur dynamique)
        </h1>
      </div>
      <div class="mb-3 form-check"></div>
      <button class="btn btn-primary" v-on:click="toggleAffichage">
        Afficher 1er Titre
      </button>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Counter',
  components: {},
  props: {
    // v-model
    modelValue: {
      default: '',
    },
  },
  emits: {
    // v-model event with validation
    'update:modelValue': value => value !== null,
  },
  data() {
    return {
      colorDynamic: false,
      classDynamic: false,
      active: true,
      maClass: '',
    }
  },
  methods: {
    toggleColor() {
      this.colorDynamic = true
    },
    toggleClass() {
      this.classDynamic = true
    },
    toggleAffichage() {
      this.active = !this.active
      if (this.active == true) {
        this.maClass = 'block'
      } else {
        this.maClass = 'none'
      }
    },
  },
})
</script>

<style>
.maClasseHello {
  background-color: steelblue;
  font-family: Impact;
  color: beige;
}
.maClasseWorld {
  background-color: rgb(200, 0, 255);
  color: chartreuse;
}
</style>
