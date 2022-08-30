<template>
<section class="nav">
  <!-- <div> -->
     <!-- <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id="">
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li> <router-link to="/Home">Home</router-link> </li>
                <li><router-link to="/Programs">Programs</router-link></li>
              <li> <router-link to="/Plans">Nutrition Plans</router-link></li>
             <li> <router-link to="/Contact">Contact</router-link></li>
             <li> <router-link to="/Users">Users</router-link></li>
              <li> <router-link to="/Login"><i class="fa-solid fa-user"></i></router-link></li> <p class="divider">|</p>
                <li> <router-link to="/Cart"><i class="fa-solid fa-cart-shopping"></i></router-link></li>
            </ul>
            <h1 class="logo">Do it for Zyzz</h1>
        </div>
    </nav>
  </div> -->

  <header>
  <h1 class="logo"><a href="#">Do it for Zyzz</a></h1>
  <input type="checkbox" id="nav-toggle" class="nav-toggle">
  <nav>
    <ul>
      <li> <router-link to="/Home">Home</router-link> </li>
      <li><router-link to="/Programs">Programs</router-link></li>
      <li><router-link to="/Plans">Nutrition Plans</router-link></li>
      <li> <router-link to="/Contact">Contact</router-link></li>
      <li> <router-link to="/Register">Register</router-link></li>
      <li> <router-link to="/Users">Users</router-link></li>
      <li> <router-link to="/Login"><i class="fa-solid fa-user"></i></router-link></li> <p class="divider">|</p>
    </ul>
  </nav>
  <label for="nav-toggle" title="Show navbar" class="nav-toggle-label">
    <span></span>
  </label>
</header>

  </section>
</template>
<script>
export default {
  name: "Nav",
};


</script>
<style scoped>

*,
*::before,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  --white:green;
  --pink: rgba(232, 67, 147,1.0);
  --black: rgba(0, 0, 0, .8);
}

html{ font-size: 17px; }

body{
  font-family: 'Playfair Display', serif;
  background-image: url(https://images.unsplash.com/photo-1543682704-15adeb008ac4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=341&q=80);
}


header{
  text-align: center;
  position: fixed;
  width: 100vw;
  background-color: #016300;
  z-index:1;
  height: 55px;
  border-bottom: black

}

.logo{ 
  margin: 0; 
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2px;
}

.logo a{ 
  color: var(--pink);
}

a{ text-decoration: none; }

nav{
  position: absolute;
  text-align: left;
  top: 100%; 
  left: 0;
  background: var(--black);
  width: 100vw;
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 400ms ease-in-out;
}

nav a{
  color: var(--white);
  font-size: 1rem;
  opacity: 0;
  transition: opacity 150ms ease-in-out;
}

nav a:hover{ border-top: 2px dotted var(--pink); }

nav ul{
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  font-size: 5px;
}

nav li{ margin: 1.2rem; }

.nav-toggle{ display: none; }

.nav-toggle-label{
  position: absolute;
  top: 0;
  left: 0;
  margin-left: .8rem;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.nav-toggle-label span,
.nav-toggle-label span::before,
.nav-toggle-label span::after{
  display: block;
  background: purple;
  height: 3px;
  width: 35px;
  position: relative;
}

.nav-toggle-label span::before,
.nav-toggle-label span::after{
  content: "";
  position: absolute;
}

.nav-toggle-label span::before{ bottom: 7px; }

.nav-toggle-label span::after{ top: 7px;}

.nav-toggle:checked ~ nav{ 
  transform: scale(1, 1);
}

.nav-toggle:checked ~ nav a{
  opacity: 1;
  transition: opacity 250ms ease-in-out 250ms;
}

@media screen and (min-width: 800px){
  .nav-toggle-label,
  .nav-toggle{
    display: none;
  }
  header{
    display: grid;
    grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;
  }
  .logo{
    grid-column: 2 / 3;
  }
  nav{
    grid-column: 3 / 4;
    all: unset;
  }
  nav a{
    opacity: 1;
  }
  nav ul{
    display: flex;
    justify-content: flex-end;
  }
}

/* *,
*::after,
*::before{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.html{
    font-size: 62.5%;
}


.navbar input[type="checkbox"],
.navbar .hamburger-lines{
    display: none;
}

.container{
    max-width: 1200px;
    width: 90%;
    margin: auto;
}

.navbar{
    box-shadow: 0px 5px 10px 0px#016300;
    position: fixed;
    width: 100%;
    background: black;
    color: #000;
    opacity: 0.85;
    z-index: 100;
}

.navbar-container{
    display: flex;
    justify-content: space-between;
    height: 64px;
    align-items: center;
}

.menu-items{
    order: 2;
    display: flex;
}
.logo{
    order: 1;
    font-size: 2.1rem;
     font-family: 'Great Vibes', cursive;
  color: #cc9d18;
    text-shadow: 1px 1px 0px #ff0000;
    transform: rotate(354deg)
}

.menu-items li{
    list-style: none;
    margin-left: 1.5rem;
    font-size: 1.3rem;
}

.navbar a{
    color:white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease-in-out;
}

.navbar a:hover{
    color: #620063;
}

@media (max-width: 920px){
    .navbar{
        opacity: 0.95;
    }

    .navbar-container input[type="checkbox"],
    .navbar-container .hamburger-lines{
        display: block;
    }

    .navbar-container{
        display: block;
        position: relative;
        height: 64px;
    }

    .navbar-container input[type="checkbox"]{
        position: absolute;
        display: block;
        height: 32px;
        width: 30px;
        top: 20px;
        left: 20px;
        z-index: 5;
        opacity: 0;
        cursor: pointer;
    }

    .navbar-container .hamburger-lines{
        display: block;
        height: 28px;
        width: 35px;
        position: absolute;
        top: 20px;
        left: 20px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .navbar-container .hamburger-lines .line{
        display: block;
        height: 4px;
        width: 100%;
        border-radius: 10px;
        background: #18cc9d;
    }
    
    .navbar-container .hamburger-lines .line1{
        transform-origin: 0% 0%;
        transition: transform 0.3s ease-in-out;
    }

    .navbar-container .hamburger-lines .line2{
        transition: transform 0.2s ease-in-out;
    }

    .navbar-container .hamburger-lines .line3{
        transform-origin: 0% 100%;
        transition: transform 0.3s ease-in-out;
    }

    .navbar .menu-items{
        padding-top: 100px;
        background: #fff;
        height: 100vh;
        max-width: 300px;
        transform: translate(-150%);
        display: flex;
        flex-direction: column;
        margin-left: -40px;
        padding-left: 40px;
        transition: transform 0.5s ease-in-out;
        box-shadow:  5px 0px 10px 0px #aaa;
        overflow: scroll;
    }

    .navbar .menu-items li{
        margin-bottom: 1.8rem;
        font-size: 1.1rem;
        font-weight: 500;
    }

    .logo{
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 2.5rem;
    }

    .navbar-container input[type="checkbox"]:checked ~ .menu-items{
        transform: translateX(0);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1{
        transform: rotate(45deg);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2{
        transform: scaleY(0);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3{
        transform: rotate(-45deg);
    }

}

@media (max-width: 400px){
    .navbar-container input[type="checkbox"]:checked ~ .logo{
        display: none;
    }
    .logo{
  display: none;
    }
}
 */

</style>

