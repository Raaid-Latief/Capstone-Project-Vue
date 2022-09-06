<template>

  

  <nav>
    <h1 class="logo"><img src="https://i.postimg.cc/DfSMW42V/My_project__11_-removebg-preview.png" alt=""></h1>
    <div class="nav-links">
     <router-link to="/Home">Home</router-link> 
    <router-link to="/Programs">Programs</router-link>
     <router-link to="/Contact">Contact</router-link>
     <router-link to="/AdminProgram">Admin</router-link>
     <router-link to="/Cart">Cart</router-link>
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
    height: 74px;
    padding-left: 30px;

  }

  nav{
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:  #9d18cc;
    position: fixed;
    z-index: 9999;
    box-shadow: #9d18cc;

  }
.nav-links{
  text-decoration: none;
  padding: 2px;
  color: black;
  
}

a:link,
a:visited {
  color: black;
  text-decoration: none;
  padding: 10px;
  margin-left: 5px;
  
}

a:hover {
 text-decoration: underline;
  color: green;
  text-shadow: 1px 1px 0px black;
}
</style>
