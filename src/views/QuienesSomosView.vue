<script setup>
import { aboutText, missionText, shortPhrase, visionText } from '../data/siteContent'
</script>

<template>
  <header class="page-header">
    <h1 class="page-title">¿Quiénes somos?</h1>
    <p class="lead">{{ shortPhrase }}</p>
  </header>

  <section class="section-card">
    <p>{{ aboutText }}</p>
  </section>

  <div class="split-grid">
    <article class="section-card">
      <h2 class="section-title">Misión</h2>
      <p>{{ missionText }}</p>
    </article>
    <article class="section-card">
      <h2 class="section-title">Visión</h2>
      <p>{{ visionText }}</p>
    </article>
  </div>
</template>
