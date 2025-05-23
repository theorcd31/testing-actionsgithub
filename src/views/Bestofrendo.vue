<template>
  <h2>Liste d'amis</h2>
  <UnAmi
    v-for="UnAmi in lesAmis"
    :premium="UnAmi.premium"
    v-on:mon-event-premium="reactionStatus"
    :id="UnAmi.id"
  />
  <NewAmi />
</template>

<script>
import NewAmi from '../components/NewAmi.vue'
import UnAmi from '../components/UnAmi.vue'

export default {
  name: 'Bestofrendo',
  components: {
    UnAmi,
    NewAmi,
  },
  methods: {
    reactionStatus($leIdDansUnAmi) {
      const unAmiIdentified = [this.lesAmis].find(
        unTruc => unTruc.id === $leIdDansUnAmi,
      )
      unAmiIdentified.premium = !unAmiIdentified.premium
    },
  },
  data() {
    return {
      lesAmis: [
        {
          id: 'lasticot',
          name: 'COCO L ASTICOT',
          phone: '01234 5678 991',
          email: 'coco@lasticot.com',
          premium: false,
        },
        {
          id: 'janine',
          name: 'Janine DeLavega',
          phone: '09876 543 221',
          email: 'janine@delavega.com',
          premium: false,
        },
        {
          id: 'jojo',
          name: 'jojoLeBarjo',
          phone: '123 12346 24',
          email: 'jojo@barjo.com',
          premium: false,
        },
        {
          id: 'kimonoSurUnFrigo',
          name: 'Steven Seagal',
          phone: '+338765477',
          email: 'steven@seagal.com',
          premium: false,
        },
      ],
    }
  },
}
</script>
