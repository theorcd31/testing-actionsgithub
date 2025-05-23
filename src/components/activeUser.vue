<template>
  <div class="card text-center">
    <p>{{ nom }}</p>
    <p>{{ age }}</p>
    <img v-bind:src="profile" alt="" class="w-50" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile:
        'https://www.bibamagazine.fr/wp-content/uploads/biba/2021/01/29-492x405.png',
    }
  },
  props: {
    nom: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
}
</script>
