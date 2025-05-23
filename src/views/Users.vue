<template>
  <div class="card text-center m-4">
    <activeUser nom="Test" :age="2" @update-user="updateUser" />
    <userData
      :nomUpdated="this.nom"
      :ageUpdated="this.age"
      @update-user="updateUser"
    />
  </div>
</template>

<script>
import activeUser from '../components/activeUser.vue'
import userData from '../components/userData.vue'
export default {
  name: 'Users',
  components: {
    activeUser,
    userData,
  },
  methods: {
    updateUser(newData) {
      this.nom = newData.nom
      this.age = newData.age
    },
  },
}
</script>
