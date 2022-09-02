<template>

  

  <nav>
    <h1 class="logo"><img src="https://i.postimg.cc/DfSMW42V/My_project__11_-removebg-preview.png" alt=""></h1>
  <!-- <input type="checkbox" id="nav-toggle" class="nav-toggle"> -->
    <div class="nav-links">
     <router-link to="/Home">Home</router-link> 
    <router-link to="/Programs">Programs</router-link>
    <router-link to="/Plans">Nutrition Plans</router-link>
     <router-link to="/Contact">Contact</router-link>
     <router-link to="/Users">Users</router-link>
       <router-link to="/Login"><i class="fa-solid fa-user"></i></router-link>
      </div>
    
  </nav>
  <label for="nav-toggle" title="Show navbar" class="nav-toggle-label">
    <span></span>
  </label>


  
</template>
<script>
export default {
  name: "Nav",
};


</script>
<style scoped>

  img{
    width: auto;
    height: 100px;
  }

  nav{
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }


</style>

