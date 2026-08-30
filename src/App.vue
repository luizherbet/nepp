<script setup>
import { ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { institutionFullName, institutionName, university, universityAbbr } from './data/siteContent'

const route = useRoute()
const isMenuOpen = ref(false)

const menu = [
  { to: '/', label: 'Inicio' },
  { to: '/quienes-somos', label: '¿Quiénes somos?' },
  { to: '/equipo', label: 'Equipo' },
  { to: '/investigaciones', label: 'Investigaciones' },
  { to: '/publicaciones', label: 'Publicaciones' },
]

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
  },
)
</script>

<template>
  <div class="site">
    <div class="top-bar">
      <div class="top-bar__inner">
        <span class="top-bar__university">{{ universityAbbr }} — {{ university }}</span>
      </div>
    </div>

    <header class="site-header">
      <div class="site-header__inner">
        <div class="masthead">
          <RouterLink to="/" class="brand">
            <span class="brand__mark" aria-hidden="true" />
            <span>
              <span class="brand__title">{{ institutionName }}</span>
              <span class="brand__subtitle">{{ institutionFullName }}</span>
            </span>
          </RouterLink>

          <button
            class="menu-button"
            type="button"
            :aria-expanded="isMenuOpen"
            aria-controls="site-nav"
            aria-label="Abrir menú"
            @click="isMenuOpen = !isMenuOpen"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav id="site-nav" class="site-nav" :class="{ 'site-nav--open': isMenuOpen }">
          <RouterLink
            v-for="item in menu"
            :key="item.to"
            :to="item.to"
            class="site-nav__link"
          >
            {{ item.label }}
          </RouterLink>
        </nav>
      </div>
    </header>

    <main class="container">
      <RouterView />
    </main>

    <footer class="site-footer">
      <div class="site-footer__inner">
        <div>
          <p class="site-footer__brand">{{ institutionName }}</p>
          <p class="site-footer__desc">
            {{ institutionFullName }}. Investigación, formación y difusión sobre políticas
            sociales y protección social en América Latina.
          </p>
        </div>
        <div>
          <p class="site-footer__heading">Navegación</p>
          <ul class="site-footer__list">
            <li v-for="item in menu" :key="item.to">
              <RouterLink :to="item.to">{{ item.label }}</RouterLink>
            </li>
          </ul>
        </div>
        <div>
          <p class="site-footer__heading">Institución</p>
          <ul class="site-footer__list">
            <li>{{ university }}</li>
            <li>{{ universityAbbr }}</li>
          </ul>
        </div>
      </div>
      <div class="site-footer__bottom">
        <span>&copy; {{ new Date().getFullYear() }} {{ institutionName }}</span>
        <span>{{ university }}</span>
      </div>
    </footer>
  </div>
</template>
