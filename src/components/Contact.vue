<template>
<br>
<br>
<br>
<br>
 <div class="contact row text-center">
 <div class="contact-form col-lg-6">
  <form
  action="https://formspree.io/f/xeqnrenb"
  method="POST">
  <div>
  <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button type="submit">Send</button>
  </div>
</form>
  </div>


  <div class="col-lg-6">
<p><i class="fa-solid fa-location-dot"></i></p> 
<p><i class="fa-solid fa-phone"></i></p> 
<p><i class="fa-solid fa-envelope"></i></p> 

<hr>
  </div>

</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

body {
  background-color: black;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

hr{
    border-color: rgba(255,255,255,.6)  
}

</style>