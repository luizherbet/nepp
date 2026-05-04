<script setup>
import { aboutText, missionText, shortPhrase, visionText } from '../data/siteContent'
</script>

<template>
  <section class="section-card">
    <h1 class="page-title">¿Quiénes somos?</h1>
    <p class="lead">{{ shortPhrase }}</p>
    <p>{{ aboutText }}</p>
  </section>

  <section class="split-grid">
    <article class="section-card">
      <h2 class="section-title">Misión</h2>
      <p>{{ missionText }}</p>
    </article>
    <article class="section-card">
      <h2 class="section-title">Visión</h2>
      <p>{{ visionText }}</p>
    </article>
  </section>
</template>
