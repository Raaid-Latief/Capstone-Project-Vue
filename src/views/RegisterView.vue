<template>
    <br>
    <br>
<!-- 
  <div class="container-fluid">
    <h1 class="text-center">REGISTER<span class="text-white ms-2"><i class="fa-solid fa-exclamation"></i><i class="fa-solid fa-exclamation ms-2"></i></span></h1>
    <div class="output my-5">
        <form>
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                            <input type="text" v-model="fullname" class="form-control"  id="exampleFormControlInput1" placeholder="your username">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="email" v-model="email" class="form-control" required id="exampleFormControlInput1" placeholder="enter your email">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                        <input type="password" v-model="password" class="form-control" required id="exampleFormControlInput1" placeholder="password">
                    </div>

                <button type="submit" @click.prevent="Register()" class="btn">Sign up</button>
                </div>
            </form>
        <div class="mt-5">
        <p>
          Already got an account?
          <span><p class="login-btn"><router-link href="#" to="/login" class="login">Log In</router-link></p></span
          >
        </p>
      </div>
    </div>
  </div> -->

  <div class="login-page">
  <div class="form">
    <h1>Register</h1>
    <form onsubmit="Login(event)" class="text-center my-3">
        <input type="text" placeholder="fullname" v-model="fullname" />
      <input type="email    " placeholder="email" v-model="email"/>
      <input type="password" placeholder="password" v-model="password" />
     
      <button type="submit" @click.prevent="Register()" class="btn">Sign up</button>
      <p class="mt-4">
          Already have an account?
          <span
            ><router-link href="#" to="/login" class="register"
              >Sign In</router-link
            ></span
          >
        </p>
        
    </form>
  </div>
  <div class="welcome">
  <div class="text-center" v-if="user">Welcome back {{ user.fullname }}!
    <router-link class="text-center" to="/Profile">View your Account</router-link>
  </div>
</div>
  
</div>

  
<Footer />
    
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
    data() {
        return {
            fullname: "",
            email: "",
            password: "",
        };
    },
    methods: {
        Register() {
            this.$store.dispatch("Register", {
                fullname: this.fullname,
                email: this.email,
                password: this.password,
            });
        }
    },
    components: { Footer, Footer }
}
</script>

<style scoped>

@import url(https://fonts.googleapis.com/css?family=Roboto:300);



h1{
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: black;
  text-shadow: 1px 1px 0px #016300;
    font-size: 30px;
  padding-bottom: 5px;
}

.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
 
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 500px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}
body {
  background: #76b852; /* fallback for old browsers */
  background: rgb(141,194,111);
  background: linear-gradient(90deg, rgba(141,194,111,1) 0%, rgba(118,184,82,1) 50%);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;      
}


.welcome{
  font-size: 50px;
}




</style>