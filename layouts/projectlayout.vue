

<template>
  <div class="app">
    <div class="container">
      <Header />
      <Nav />
      <main>       
         <slot/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
  import Header from '@/components/Header.vue'
  import Nav from '@/components/Nav.vue'

  export default {    
    components: {
      Header,
      Nav
    }
  }
</script>

<style scoped>
.app {
  border: 2px solid darkseagreen;
}
header {
  background: #c4c2c2;
  padding: 0.4rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.body {
  display: flex;
}
.sidebar {
  flex-basis: 30%;
  background: #f1eeee;
  text-align: center;
}

.nav {
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
}

footer {
  padding: 0.4rem 0;
  text-align: center;
  background: #999393;
}
.footer__nav {
  padding: 0 2rem;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
}
.router-link-exact-active {
  color: greenyellow;
}
</style>
