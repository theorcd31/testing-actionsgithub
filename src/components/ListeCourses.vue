<template>
  <div id="monApp">
    <div class="m-3">
      <h2>La liste des courses 🛍</h2>
      <input v-model="nomProduit" type="text" class="form-control" />
      <button @click="ajouterProduit" class="btn btn-success mt-3">
        Ajouter à votre Liste de Courses
      </button>
      <hr />
      <h2 v-if="listeDesCourses.length === 0">Aucune course</h2>
      <ul v-if="masquerListe">
        <li
          v-for="(unProduit, unIndex) in listeDesCourses"
          v-bind:key="unProduit"
          v-on:click="supprimerProduit(unIndex)"
        >
          {{ unIndex }} - {{ unProduit }}
        </li>
      </ul>
      <button @click="affichageListe" class="btn btn-info mt-3">
        {{ messageButton }}
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
      nomProduit: '',
      listeDesCourses: [],
      masquerListe: true,
    }
  },
  computed: {
    messageButton() {
      return this.masquerListe ? 'Masquer Liste' : 'Afficher Liste'
    },
  },
  methods: {
    ajouterProduit() {
      this.listeDesCourses.push(this.nomProduit)
    },
    supprimerProduit(unIndex) {
      this.listeDesCourses.splice(unIndex, 1)
    },
    affichageListe() {
      this.masquerListe = !this.masquerListe
    },
  },
  watch: {},
})
</script>
