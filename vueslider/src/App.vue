<template>
  <div id="app">
    <Slides></Slides>
  </div>
</template>

<script>
import Slides from './components/Slides'

export default {
  name: 'App',
  components: {
    Slides
  }
}
</script>

<style>
#app {
  max-width: 900px;
}
</style>
