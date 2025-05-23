<template>
  <div class="container p-3">
    <ul class="list-group">
      <!-- <h2 class="list-group-item">{{unAmiName}}</h2>  -->
      <!-- <p>{{ afficherPremiumTest() }}</p> -->
      <h2 class="list-group-item">
        {{ unAmiName }} {{ this.premium === false ? 'Ami premium' : 'Ami nul' }}
      </h2>
      <button @click="afficherDetails" class="btn btn-outline-dark">
        {{ !detailsVisibles ? 'Voir Détails' : 'Masquer Détails' }}
      </button>
      <button @click="afficherPremiumTest" class="btn btn-outline-dark">
        {{ !this.premium ? 'Ami premium' : 'Ami nul' }}
      </button>
      <ul v-if="detailsVisibles" class="list-group">
        <li class="list-group-item">{{ unAmiPhone }}</li>
        <li class="list-group-item">{{ unAmiMail }}</li>
        <li class="list-group-item">{{ unAmiName }}</li>
      </ul>
    </ul>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UnAmi',
  // props: ['unAmiName', 'unAmiPhone', 'unAmiMail', 'premium']
  props: {
    id: {
      type: String,
      required: true,
    },
    unAmiName: {
      type: String,
      required: true,
    },
    unAmiPhone: {
      type: String,
      required: true,
    },
    unAmiMail: {
      type: String,
      required: true,
    },
    premium: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function validate($value) {
      //   return $value === '1' || $value === '0'
    },
  },
  data() {
    return {
      detailsVisibles: false,
      // premiumData: this.premium,
    }
  },
  methods: {
    afficherDetails() {
      this.detailsVisibles = !this.detailsVisibles
    },
    afficherPremiumTest() {
      // if (this.premiumData === '1') {
      //   this.premiumData = '0'
      // } else {
      //   this.premiumData = '1'
      // }
      // this.premiumData = !this.premiumData
      this.$emit('mon-event-premium', this.id)
    },
  },
})
</script>
