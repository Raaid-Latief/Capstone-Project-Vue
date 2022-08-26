
<template>
  
        <div class="container">
      <div id="login" class="d-flex justify-content-center flex-column">
        <h1 class="text-center">Login</h1>
        <form onsubmit="Login(event)" class="text-center my-3">
          <input type="email" placeholder="Email" v-model="email" />
          <input type="text" placeholder="Password" v-model="password" />
          <button type="submit" class="btn btn primary" @click.prevent="Login()">Login</button>
        </form>
        </div>
      </div>


</template>

<script>
export default {
  data() {
        return {
            email: "",
            password: "",
         
        };
    },
    methods: {
        Login(){
        this.$store.dispatch("Login", {
            email: this.email,
            password: this.password,
        });
    },
},
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');


* {
    box-sizing: border-box;
}

body {
    background-color: steelblue;
    color: #fff;
    font-family: 'Muli', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
}

.container {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 40px;
    border-radius: 5px;
}

.container h1 {
    text-align: center;
    margin-bottom: 30px;
}

.container a {
    text-decoration: none;
    color: lightblue;
}

.form-control {
    position: relative;
    margin: 20px 0 40px;
    width: 300px;
}

.form-control input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px #fff solid;
    display: block;
    width: 100%;
    padding: 1rem 0;
    font-size: 18px;
    color: #fff;
}

.form-control input:focus,
.form-control input:valid {
    outline: none;
    border-bottom-color: lightblue;

}

.btn {
    cursor: pointer;
    display: inline-block;
    width: 100%;
    background: lightblue;
    padding: 1rem;
    font-family: inherit;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
}

.btn:active {
    transform: scale(0.98);
}

.text {
    margin-top: 30px;
    text-align: center;
}

.form-control label {
    position: absolute;
    top: 1rem;
    left: 0;
}

.form-control label span {
    display: inline-block;
    font-size: 18px;
    min-width: 5px;
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-control input:focus + label span,
.form-control input:valid + label span {
    color: lightblue;
    transform: translateY(-30px);
}


</style>