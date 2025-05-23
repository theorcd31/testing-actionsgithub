<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  const res = await fetch('http://localhost:3001/api/messages')
  const data = await res.json()
  console.log(data)
})
</script>

<template>
  <main>
    <!-- test -->
    <h1>Bienvenue sur cette application de test de déploiement</h1>
  </main>
</template>
