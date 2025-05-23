<template>
  <div>
    <h1>Liste de courses</h1>
    <input v-model="produit" type="text" class="form-control" />
    <button v-on:click="ajouterProduit">Ajouter produit à la liste</button>
    <p v-if="listeCourses.length == 0">Rien dans la liste</p>

    <ul
      v-for="(unProduit, index) in listeCourses"
      :key="unProduit"
      :style="{ display: param }"
    >
      <li v-on:click="supprimer(index)">{{ index }} - {{ unProduit }}</li>
    </ul>
    <button v-if="this.active == true" v-on:click="afficher">
      Masquer liste
    </button>
    <button v-else v-on:click="afficher">Afficher Liste</button>
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
      produit: '',
      listeCourses: [],
      active: true,
      param: '',
    }
  },
  methods: {
    ajouterProduit() {
      this.listeCourses.push(this.produit)
      console.log(this.listeCourses)
    },
    supprimer(index) {
      this.listeCourses.splice(index, 1)
    },
    afficher() {
      this.active = !this.active
      if (this.active == true) {
        this.param = 'block'
      } else {
        this.param = 'none'
      }
    },
  },
})
</script>
