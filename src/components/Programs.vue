<template>
<br>
<br>
<br>
<div class="container">
	<div class="row justify-content-center">
		<div class="col-lg-4 col-md-6 col-sm-12">
      <h2>Muscle and Strength Program</h2>
      <div class="card" v-for="(programs, index) in programs"
 :key="index">
				<div class="overlay"></div>
				<div class="content">
          <h4 class="card-title">{{programs.title}}</h4>
          <h5 class="category">{{programs.category}}</h5>
          <h5 class="price">R{{programs.price}}</h5>
 <div><button class="button">Buy Now</button></div>
				</div>
				
			</div>
		</div>
	</div>
</div>




</template>

<script>
import { mapActions } from 'vuex';
export default {
    computed: {
        programs() {
            return this.$store.state.programs
        }
    },
    mounted() {
        this.$store.dispatch('getPrograms');
    },
    methods: {
        getPrograms() {
            this.store.dispatch("getProgram");
        },
        ...mapActions(["getProgram"]),
    }
}
</script>

<style scoped>

body {

	justify-content: center;
	align-items: center;
}

.container {
	padding: 70px 0;

}
.card {
	height: 300px;
	background: url("https://image.freepik.com/free-vector/colorful-gradient-liquid-shapes-background_23-2148250143.jpg"),
		#ffffff;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 25px;
	margin: 10px;
	transition: 0.25s ease-in;
}

.card .content {
	position: absolute;
	bottom: 10px;
	left: 25px;
}

.card .content h4 {
	font-family: Ubuntu;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	color: #f2f2f2;
	margin-bottom: 10px;
	margin-top: 0;
}

.card .content h6 {
	font-family: Ubuntu;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	color: #f2f2f2;
	margin-bottom: 10px;
	margin-top: 0;
}

.card .fav {
	position: absolute;
	top: 25px;
	right: 25px;
	cursor: pointer;
}

.card .fav i {
	color: white;
}

.card:hover {
	transform: scale(1.05);
}

.card:hover {
	background-position: top;
}


/* button */
.button{background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 13px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
border-radius: 30px;
}



</style>