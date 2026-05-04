<script setup>
import { RouterLink } from 'vue-router'
import { shortPhrase } from '../data/siteContent'
</script>

<template>
  <section class="hero-card">
    <p class="hero-card__kicker">Núcleo de Estudos</p>
    <h1 class="hero-card__title">Políticas de Proteção Social</h1>
    <p class="hero-card__text">{{ shortPhrase }}</p>
  </section>

  <section class="section-card">
    <h2 class="section-title">Accesos rápidos</h2>
    <div class="quick-grid">
      <RouterLink to="/quienes-somos" class="quick-item">
        <h3>¿Quiénes somos?</h3>
        <p>Fundamentación, misión y visión del núcleo.</p>
      </RouterLink>
      <RouterLink to="/equipo" class="quick-item">
        <h3>Equipo</h3>
        <p>Docentes, investigadoras/es, estudiantes y asociados.</p>
      </RouterLink>
      <RouterLink to="/investigaciones" class="quick-item">
        <h3>Investigaciones</h3>
        <p>Líneas y proyectos en curso.</p>
      </RouterLink>
      <RouterLink to="/publicaciones" class="quick-item">
        <h3>Publicaciones</h3>
        <p>Repositorio de resultados y producción académica.</p>
      </RouterLink>
    </div>
  </section>
</template>
