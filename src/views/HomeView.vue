<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hello World</h1>
    <button @click="goToDaybook">Primary</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    goToDaybook(){
      this.$router.push({name: 'not-entry'})
    }
  },
}
</script>

<style lang="scss">
button{
  background-color: blue;
}
</style>