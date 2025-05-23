<template>
  <div class="container card text-center">
    <h2>Je sers à compter</h2>
    <p>
      Si tu cliques sur le plus j'ajoute, si tu cliques sur le moins je (me)
      retire
    </p>
    <p>
      <button class="btn btn-danger" @click="del()">+1</button>
      <button class="btn btn-success" @click="add()">+5</button>
    </p>
    <p>Le nombre : {{ this.number }}</p>
    <p>{{ this.reponse }}</p>
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
  watch: {
    leNombre(value) {
      if (value == 7) {
        this.reponse = 'Gagné !'
      } else if (value > 7) {
        this.reponse = 'Tu as dépassé le nombre mystère'
      } else if (value > 30) {
        this.reponse = "Bon t'abuses t'es hyper loin on recommence"
        setTimeout(() => {
          this.value = 0
        }, 3000)
      } else {
        this.reponse = 'Essaie encore'
      }
    },
  },
  data() {
    return {
      number: 0,
      reponse: '',
    }
  },
  methods: {
    add() {
      this.number += 5
    },
    del() {
      this.number += 1
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
