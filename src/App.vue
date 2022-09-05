<template>
  <header>
    <NavBar />
  </header>  
  <router-view></router-view>
  <footer>
    <FooterSection />
  </footer>
</template>
<script>
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    NavBar, FooterSection
  }
}
</script>
