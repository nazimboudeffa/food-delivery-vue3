<template>
  <NavBar />
  <PizzaList />
</template>

<script>
import NavBar from './components/NavBar.vue'
import PizzaList from './components/PizzaList.vue'

export default {
  name: 'App',
  components: {
    NavBar, PizzaList
  }
}
</script>

<style>

</style>
