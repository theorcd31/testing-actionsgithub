<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav
    class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light"
  >
    <router-link to="/">
      <a class="navbar-brand" href="#">Accueil</a>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <router-link to="/antagoniste">
          <li class="nav-item active">
            <a class="nav-link" href="#">Antagoniste</a>
          </li>
        </router-link>
        <router-link to="/about">
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </router-link>
        <router-link to="/exercices">
          <li class="nav-item">
            <a class="nav-link" href="#">Exercice</a>
          </li>
        </router-link>
        <router-link to="/bestofrendo">
          <li class="nav-item">
            <a class="nav-link" href="#">Besto Frendo (exo Ami)</a>
          </li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
