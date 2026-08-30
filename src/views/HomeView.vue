<script setup>
import { RouterLink } from 'vue-router'
import { institutionFullName, pillars, shortPhrase } from '../data/siteContent'
</script>

<template>
  <section class="hero">
    <div class="hero__content">
      <p class="hero__kicker">{{ institutionFullName }}</p>
      <h1 class="hero__title">Políticas de Proteção Social</h1>
      <p class="hero__text">{{ shortPhrase }}</p>
      <RouterLink to="/quienes-somos" class="hero__cta">
        Conocer el núcleo
        <span class="hero__cta-arrow" aria-hidden="true">→</span>
      </RouterLink>
    </div>
  </section>

  <div class="pillars">
    <article v-for="(pillar, index) in pillars" :key="pillar.title" class="pillar">
      <span class="pillar__number">0{{ index + 1 }}</span>
      <h2 class="pillar__title">{{ pillar.title }}</h2>
      <p class="pillar__text">{{ pillar.description }}</p>
    </article>
  </div>

  <header class="section-header">
    <span class="section-header__label">Explorar</span>
    <h2 class="section-header__title">Accesos rápidos</h2>
  </header>

  <div class="quick-grid">
    <RouterLink to="/quienes-somos" class="quick-item">
      <h3>¿Quiénes somos?</h3>
      <p>Fundamentación, misión y visión del núcleo de investigación.</p>
      <span class="quick-item__arrow">Leer más →</span>
    </RouterLink>
    <RouterLink to="/equipo" class="quick-item">
      <h3>Equipo</h3>
      <p>Docentes, investigadoras/es, estudiantes y asociados del grupo.</p>
      <span class="quick-item__arrow">Ver equipo →</span>
    </RouterLink>
    <RouterLink to="/investigaciones" class="quick-item">
      <h3>Investigaciones</h3>
      <p>Líneas y proyectos de investigación en curso.</p>
      <span class="quick-item__arrow">Explorar →</span>
    </RouterLink>
    <RouterLink to="/publicaciones" class="quick-item">
      <h3>Publicaciones</h3>
      <p>Repositorio de resultados y producción académica.</p>
      <span class="quick-item__arrow">Consultar →</span>
    </RouterLink>
  </div>
</template>
