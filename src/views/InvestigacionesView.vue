<script setup>
import { investigaciones } from '../data/siteContent'
</script>

<template>
  <header class="page-header">
    <h1 class="page-title">Investigaciones</h1>
    <p class="lead">Líneas y proyectos de investigación en curso del núcleo.</p>
  </header>

  <section class="section-card">
    <ul class="clean-list">
      <li v-for="item in investigaciones" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>
