<template>

    <section class="testimonials">
 
<h1 class="text-center mt-5 mb-5">Some transformations from close peers</h1>
<div class="box2 pt-5">
<h2 class="socrates text-center">"It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable.”         -Socrates</h2>




<div class="row text-center">
  <div class="col-lg-6"> <h1 class="shrink"><figure><img src="https://i.postimg.cc/CLktcYj5/My_project_(13).jpg" alt=""><figcaption>Before</figcaption></figure></h1></div>
  <div class="col-lg-6"> <h1 class="grow"><figure><img src="https://i.postimg.cc/VkPgvC0L/My_project_(14).jpg" alt=""><figcaption>After</figcaption></figure></h1></div>

</div>



<div class="row text-center">
  <div class="col-lg-6"> <h1 class="shrink"><figure><img src="https://i.postimg.cc/NjWCZMkX/IMG-20220616-WA0005.jpg" alt=""><figcaption>Before</figcaption></figure></h1></div>
  <div class="col-lg-6"> <h1 class="grow"><figure><img src="https://i.postimg.cc/mZPRHdg2/My_project_(15).jpg" alt=""><figcaption>After</figcaption></figure></h1></div>
 
</div>



<div class="row text-center">
  <div class="col-lg-6"> <h1 class="shrink"><figure><img src="https://i.postimg.cc/1Xxwm57f/My-project-20.jpg" alt=""><figcaption>Before</figcaption></figure></h1></div>
  <div class="col-lg-6"> <h1 class="grow"><figure><img src="https://i.postimg.cc/VNCX3C43/My-project-21.jpg" alt=""><figcaption>After</figcaption></figure></h1></div>
 
</div>





</div>
    </section>
    </template>
    <script>

        
    </script>
    <style scoped>
    /* Font Style */
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&family=Roboto:wght@100;300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Tangerine&display=swap');

    .d-flex {
  display: flex;
}
.socrates{
  font-family: 'Tangerine', cursive;
  font-size: 50px;
color: white;
text-shadow: 2px 2px black;
}

img {
  width: auto;
    height: 600px;
    border:2px solid black;
      box-shadow: 10px 10px 5px black;
      -moz-box-shadow: 10px 10px 5px black;
      -webkit-box-shadow: 10px 10px 5px black;
      -khtml-box-shadow: 10px 10px 5px black;

}


.grow img{
transition: 1s ease;
}

.grow img:hover{
-webkit-transform: scale(1.2);
-ms-transform: scale(1.2);
transform: scale(1.2);
transition: 1s ease;
}



.shrink img {
transition: 1s ease;
}

.shrink img:hover{
-webkit-transform: scale(0.8);
-ms-transform: scale(0.8);
transform: scale(0.8);
transition: 1s ease;
}

.box1{
  /* background-color: #0E4204; */
padding: 16px;
}



.box2{
  background-image: linear-gradient(to right bottom, #89ac7b, #6a905c, #4d753f, #2f5b22, #0e4204);
padding: 16px;
}

.test1{
  background-color: #646357;
  width: 900px;
  /* border: 5px solid green; */
  padding-right: 20px;
  margin: 20px;
  border-radius: 1%;
}
.test2{
  background-color: #0E4204;
  width: 900px;
  /* border: 5px solid green; */
  padding-right: 20px;
  margin: 20px;
  border-radius: 1%;
}

figcaption{
  margin-top: 18px;
  font-size: 50px;
  color: white;
text-shadow: 2px 2px black;

}
    
    </style>
    
    