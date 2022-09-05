
<template>
  <div>
    <Home />
    <About />
    <Footer />
  </div>
</template>
<script>
import About from "../components/About.vue";
import Footer from "@/components/Footer.vue";
import Home from "../components/Home.vue";

export default {
  components: {
    About,
    Footer,
    Home,
    
},
};
</script>
<style>
html, body {
    max-width: 100%;
    overflow-x: hidden;
}

  
</style>
