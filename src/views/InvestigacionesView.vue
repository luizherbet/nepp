<script setup>
import { investigaciones } from '../data/siteContent'
</script>

<template>
  <section class="section-card">
    <h1 class="page-title">Investigaciones</h1>
    <ul class="clean-list clean-list--spaced">
      <li v-for="item in investigaciones" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>
