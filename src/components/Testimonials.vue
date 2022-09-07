<template>

    <section class="testimonials">
<h1 class="text-center mt-5 mb-5">Some transformations from close peers</h1>

<div class=" row d-flex">
<!-- <div class="flip-card col-lg-6 col-sml-12">
  <div class="flip-card-inner">
    <div class="flip-card-face">
      <img src="https://images.unsplash.com/photo-1515896769750-31548aa180ed?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjE4NzAyNDM&ixlib=rb-1.2.1&q=80" alt="Avatar" style="width:500px;height:300px;">
    </div>
    <div class="flip-card-behind la">
      <h1>Los Angeles</h1>
    </div>
  </div>
  <div>hello</div>
</div> -->

<!-- <div class="flip-card col-lg-6 col-sml-12">
  <div class="flip-card-inner">
    <div class="flip-card-face">
      <img src="https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjE4NzE1NTQ&ixlib=rb-1.2.1&q=80" style="width:500px;height:300px;">
    </div>
    <div class="flip-card-behind hawai">
      <h1>Hawai</h1>
    </div>
  </div>
</div> -->


<div class="row text-center">
  <div class="col-lg-3"> <h1 class="img"><img src="https://i.postimg.cc/CLktcYj5/My-project-13.jpg" alt=""></h1></div>
  <div class="col-lg-3"> <h1 class="img"><img src="https://i.postimg.cc/VkPgvC0L/My-project-14.jpg" alt=""></h1></div>
  <div class="test col-lg-6"></div>
</div>

<div class="row text-center">
  <div class="col-lg-3"> <h1 class="img"><img src="https://i.postimg.cc/NjWCZMkX/IMG-20220616-WA0005.jpg" alt=""></h1></div>
  <div class="col-lg-3"> <h1 class="img"><img src="https://i.postimg.cc/mZPRHdg2/My-project-15.jpg" alt=""></h1></div>
  <div class="test col-lg-6"></div>
</div>



</div>

    </section>
    </template>
    <script>

        
    </script>
    <style scoped>
    /* Font Style */
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&family=Roboto:wght@100;300&display=swap');
    
    .d-flex {
  display: flex;
}

img {
  width: auto;
    height: 600px;
    border: 4px solid black;
    box-shadow: #9d18cc;

}

.test{
  background-color: #9d18cc;
  width: 900px;
  border: 5px solid green;
  padding-right: 20px;
  margin: 20px;
  border-radius: 1%;
}


.flip-card {
  background-color: transparent;
  width: 500px;
  height: 300px;
  perspective: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform .98s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-face, .flip-card-behind {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-face {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-behind {
  color: white;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.la {
  background-image: linear-gradient(to right top, #ff9bf7, #ff90c7, #ff9c89, #ffbe4d, #f8e526);
}

.hawai {
  background-image: linear-gradient(to right bottom, #9bf2ff, #79e4ff, #7cd0ff, #a6b6ff, #d994ff);
}
    
    </style>
    
    