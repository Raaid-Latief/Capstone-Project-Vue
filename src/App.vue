<template>
  <nav class="row">
   <div class="col-lg-8">
    <router-link to="/home">Home</router-link> |
      <router-link to="/programs">Training Programs</router-link> |
        <router-link to="/plans">Nutrition Plans</router-link> |
          <router-link to="/contact">Contact</router-link> |
              <router-link to="/admin">Admin</router-link> |
                 <router-link to="/login">Login </router-link> |
          </div>

          <div class="col-lg-4">
            <div class="row">
            <h3 class="col-lg-4">Login</h3>
            <h3 class="col-lg-4">Register</h3>
            <h3 class="col-lg-4">Cart</h3>
            </div>
          </div>

    
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #088300;
}
</style>
