<template>
  <div>
    <h2>Formulaire d'édition:</h2>
    <input id="nom" type="text" class="form-control" v-model="newNom" />
    <input id="nom" type="text" class="form-control" v-model="newAge" />
    <button class="btn btn-dark" @click="majDonnees">MAJ des données</button>
  </div>
</template>

<script>
export default {
  props: {
    nomUpdated: {
      type: String,
      required: true,
    },
    ageUpdated: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      newNom: this.nomUpdated,
      newAge: this.ageUpdated,
    }
  },
  emit: ['update-user'],
  methods: {
    submitData() {
      this.$emit('update-user', this.nom, this.age)
    },
  },
}
</script>
