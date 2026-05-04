<script setup>
import { ref } from 'vue'

const menu = [
  { id: 'nucleo', label: '¿Quiénes somos?' },
  { id: 'integrantes', label: 'Equipo' },
  { id: 'investigaciones', label: 'Investigaciones' },
  { id: 'publicaciones', label: 'Publicaciones' },
]

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const coordinadoras = [
  {
    nome: 'Amilton Moretto',
    bio: 'Docente e pesquisador do NEPP.',
    contato: 'amilton.moretto@nepp.org',
  },
  {
    nome: 'Claudia Bisaggio Soares',
    bio: 'Docente e pesquisadora do NEPP.',
    contato: 'claudia.soares@nepp.org',
  },
]

const investigadoras = [
  {
    nome: 'Maria Alejandra Nicolás',
    bio: 'Pesquisadora em políticas sociais e bem-estar.',
    contato: 'alejandra.nicolas@nepp.org',
  },
  {
    nome: 'Flavio Gaitán',
    bio: 'Pesquisador em proteção social e trabalho.',
    contato: 'flavio.gaitan@nepp.org',
  },
]

const estudiantesGrado = ['Lucas Andy Gamboa']
const estudiantesMaestria = ['Enmanuel Pérez de Zayas']

const asociados = [
  'Gustavo Gamallo, UBA',
  'Pilar Arcidiácono, UBA',
  'Cecilia del Bono, UBA',
  'Carlos Fidel, UNQ',
]

const investigaciones = [
  'PIC 4519-2026. Capitalismo periférico, pobreza y desigualdades en los países del Mercosur.',
  'INCT-IBGE. Vulnerabilidade e mercado de trabalho no Brasil.',
  'Desmonte del Estado y políticas de protección social. Argentina y Brasil en perspectiva comparada.',
]
</script>

<template>
  <div class="site">
    <header class="topbar">
      <div class="topbar-inner">
        <div class="topbar-head">
          <p class="brand">NEPP</p>
          <button
            class="menu-toggle"
            type="button"
            :aria-expanded="isMenuOpen"
            aria-controls="main-nav"
            aria-label="Abrir menu de navegação"
            @click="toggleMenu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav id="main-nav" class="top-nav" :class="{ 'is-open': isMenuOpen }">
          <a
            v-for="item in menu"
            :key="item.id"
            :href="`#${item.id}`"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
        </nav>
      </div>
    </header>

    <main class="container">
      <section class="page-title">
        <h1>Equipo</h1>
      </section>

      <section id="nucleo" class="section">
        <h2>El Núcleo</h2>
        <p class="phrase">
          Investigación, formación y difusión sobre políticas sociales, protección social y
          bienestar.
        </p>
        <p>
          El Núcleo de Estudos sobre Políticas de Proteção Social es un espacio académico dedicado
          al análisis de las políticas sociales, la protección social y las condiciones de vida
          desde una perspectiva crítica e interdisciplinaria.
        </p>
      </section>

      <section id="integrantes" class="section">
        <h2>Coordinadoras</h2>
        <div class="card-grid">
          <article v-for="item in coordinadoras" :key="item.nome" class="person-card">
            <div class="avatar">{{ item.nome.charAt(0) }}</div>
            <div>
              <h3>{{ item.nome }}</h3>
              <p>{{ item.bio }}</p>
              <p class="contacto">Contacto: {{ item.contato }}</p>
            </div>
          </article>
        </div>

        <h2 class="group-title">Investigadoras/es</h2>
        <div class="card-grid">
          <article v-for="item in investigadoras" :key="item.nome" class="person-card">
            <div class="avatar">{{ item.nome.charAt(0) }}</div>
            <div>
              <h3>{{ item.nome }}</h3>
              <p>{{ item.bio }}</p>
              <p class="contacto">Contacto: {{ item.contato }}</p>
            </div>
          </article>
        </div>

        <h2 class="group-title">Estudiantes</h2>
        <ul class="simple-list">
          <li><strong>Grado:</strong> {{ estudiantesGrado.join(', ') }}</li>
          <li><strong>Maestría:</strong> {{ estudiantesMaestria.join(', ') }}</li>
        </ul>

        <h2 class="group-title">Asociados</h2>
        <ul class="simple-list">
          <li v-for="item in asociados" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section id="investigaciones" class="section">
        <h2>Investigaciones</h2>
        <ul class="simple-list">
          <li v-for="item in investigaciones" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section id="publicaciones" class="section">
        <h2>Publicaciones</h2>
        <p>Em construção.</p>
      </section>
    </main>
  </div>
</template>
