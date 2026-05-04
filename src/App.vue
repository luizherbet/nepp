<script setup>
import { ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

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
    <header class="site-header">
      <div class="site-header__inner">
        <div class="masthead">
          <RouterLink to="/" class="brand">
            <span class="brand__mark" aria-hidden="true" />
            <span>
              <span class="brand__title">GEPSYCT</span>
              <span class="brand__subtitle">Políticas Sociales y Condiciones de Trabajo</span>
            </span>
          </RouterLink>

          <div class="masthead__right">
            <p class="institute">IIGG</p>
            <div class="socials" aria-label="Social links">
              <span>f</span>
              <span>◎</span>
              <span>𝕏</span>
            </div>
          </div>
        </div>

        <button
          class="menu-button"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-controls="site-nav"
          aria-label="Abrir menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span />
          <span />
          <span />
        </button>

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
  </div>
</template>
