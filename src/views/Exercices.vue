<script setup>
import UnAmi from '@/components/UnAmi.vue'
</script>

<template>
  <main>
    <hr />
    <router-link to="/vmodel">
      <a class="nav-link" href="#">V-model</a>
    </router-link>
    <hr />
    <router-link to="/bug">
      <a class="nav-link" href="#">Bug</a>
    </router-link>
    <hr />
    <router-link to="/reactivite">
      <a class="nav-link" href="#">Reactivite</a>
    </router-link>
    <hr />
    <router-link to="/dynamicstyle">
      <a class="nav-link" href="#">Dynamic</a>
    </router-link>
    <hr />
    <router-link to="/dynamiccomposition">
      <a class="nav-link" href="#">Dynamic Composition</a>
    </router-link>
    <hr />
    <router-link to="/listecourses">
      <a class="nav-link" href="#">Liste des courses</a>
    </router-link>
    <hr />
    Exos props
    <UnAmi
      id="1"
      unAmiMail="mail@orange.fr"
      unAmiPhone="01768176189"
      unAmiName="Stef"
      :premium="true"
    />
  </main>
</template>
