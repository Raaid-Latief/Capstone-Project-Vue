<template>
<br>
<br>
<br>
<div class="row">
<div class="card card-01 col-lg-6">
          <img class="card-img-top" src="https://i.postimg.cc/CLrBvYpp/My_project_(1).jpg" alt="Card image cap">
          <div class="card-body">
            <span class="badge-box"><i class="fa fa-check"></i></span>
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-default text-uppercase">Explore</a>
          </div>
        </div>
        </div>
        
          

    <div class="container" v-if="programs">
        <h2 class="display-2">Programs</h2>
        <div class="row d-flex flex-wrap ourProducts">
            <div class="card" v-for="(programs, index) in programs"
             :key="index">
            <img :src="programs.imgURL" class="card-img-top img-fluid" :alt="programs.title">
            <div class="card-body">
                <h5 class="card-title">{{programs.title}}</h5>
                <ul class="navbar-nav">
                    <li>
                        Price: R<span>{{programs.price}}</span>
                    </li>
                </ul>
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
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700');

section{
  float:left;
  width:100%;
  padding:30px 0; 
  position:relative; 
  overflow:hidden; 
  background:#6F8D8A;
  margin: 30px;
}

section:before{
  content:"";
  position:absolute; 
  width:110%; 
  height:100%;   
  background-color:#fff; 
  filter: blur(10px); 
  z-index:0; 
  transform: scale(2);-ms-transform: scale(2); 
  -webkit-transform: scale(2);
}

.btn-default{
  background:#006EFF; width: 100%; color:#fff; font-weight:700; text-shadow:1px 1px 0 rgba(0,0,0,0.2); font-size:14px;
}
.card{
  box-shadow:2px 2px 20px rgba(0,0,0,0.3); border:none; margin-bottom:30px;
}
.card:hover{
  transform: scale(1.05);
  transition: all 1s ease;
  z-index: 999;
}
.card-01 .card-body{
  position:relative; padding-top:40px;
}
.card-01 .badge-box{
  position:absolute; 
  top:-20px; left:50%; width:100px; height:100px;margin-left:-50px; text-align:center;
}
.card-01 .badge-box i{
  background:#006EFF; color:#fff; border-radius:50%;  width:50px; height:50px; line-height:50px; text-align:center; font-size:20px;
}
.card-01 .height-fix{
  height:455px; overflow:hidden;
}

.card-01 .height-fix .card-img-top{width:auto!important;}

.profile-box{
  background-size:cover; float:left; width:100%; text-align:center; padding:30px 0; position:relative; overflow:hidden;
}

.card-01.height-fix .card-img-overlay{
  top:unset; 
  color:#fff;
  background: -moz-linear-gradient(top, rgba(26,96,111,0) 0%, rgba(26,96,111,0) 1%, rgba(24,87,104,0.91) 31%, rgba(21,65,89,0.91) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, rgba(26,96,111,0) 0%,rgba(26,96,111,0) 1%,rgba(24,87,104,0.91) 31%,rgba(21,65,89,0.91) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, rgba(26,96,111,0) 0%,rgba(26,96,111,0) 1%,rgba(24,87,104,0.91) 31%,rgba(21,65,89,0.91) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001a606f', endColorstr='#e8154159',GradientType=0 );
}
.card-01.height-fix .fa{color: #fff;font-size: 22px;margin-right: 18px;};



</style>