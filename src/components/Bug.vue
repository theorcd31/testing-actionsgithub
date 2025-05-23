<template>
  <div class="container card text-center">
    <h2>Je sers à compter</h2>
    <p>
      Si tu cliques sur le plus j'ajoute, si tu cliques sur le moins je (me)
      retire
    </p>
    <p>
      <button class="btn btn-danger" @click="del()">-</button> Le nombre :
      {{ this.number }}
      <button class="btn btn-success" @click="add()">+</button>
    </p>
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
      number: 0,
      numeroBis: 0,
      paramOne: 65,
      paramTwo: 48,
    }
  },
  methods: {
    add() {
      this.number += 1
    },
    del() {
      this.number -= 1
    },

    addBis(x) {
      this.numeroBis += x
    },
    delBis(x) {
      this.numeroBis -= x
    },
  },
})
</script>

<style scoped lang="css"></style>
