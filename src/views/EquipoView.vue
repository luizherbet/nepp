<script setup>
import {
  asociados,
  coordinadoras,
  estudiantesGrado,
  estudiantesMaestria,
  investigadoras,
} from '../data/siteContent'
</script>

<template>
  <section class="section-card">
    <header class="team-heading">
      <span class="team-heading__icon" aria-hidden="true" />
      <h1 class="page-title">Equipo</h1>
    </header>
    <hr class="team-divider" />

    <h2 class="section-title">Coordinadoras</h2>
    <div class="people-grid">
      <article v-for="person in coordinadoras" :key="person.name" class="person-card">
        <div class="person-card__avatar">{{ person.name.charAt(0) }}</div>
        <div>
          <h3>{{ person.name }}</h3>
          <p>{{ person.bio }}</p>
          <p class="person-card__contact">Contacto: {{ person.contact }}</p>
          <button class="person-card__cv" type="button">CV Completo</button>
        </div>
      </article>
    </div>

    <h2 class="section-title section-title--spaced">Investigadoras/es</h2>
    <div class="people-grid">
      <article v-for="person in investigadoras" :key="person.name" class="person-card">
        <div class="person-card__avatar">{{ person.name.charAt(0) }}</div>
        <div>
          <h3>{{ person.name }}</h3>
          <p>{{ person.bio }}</p>
          <p class="person-card__contact">Contacto: {{ person.contact }}</p>
          <button class="person-card__cv" type="button">CV Completo</button>
        </div>
      </article>
    </div>

    <h2 class="section-title section-title--spaced">Estudiantes</h2>
    <ul class="clean-list">
      <li><strong>Grado:</strong> {{ estudiantesGrado.join(', ') }}</li>
      <li><strong>Maestría:</strong> {{ estudiantesMaestria.join(', ') }}</li>
    </ul>

    <h2 class="section-title section-title--spaced">Asociados</h2>
    <ul class="clean-list">
      <li v-for="item in asociados" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>
