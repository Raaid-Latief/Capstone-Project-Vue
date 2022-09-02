<template>
  <div class="container-fluid">
    <h1>PROGRAMS<span class="text-white ms-2"><i class="fa-solid fa-exclamation"></i><i class="fa-solid fa-exclamation ms-2"></i></span></h1>
    <div class="functions my-5">
            <button class="btn ms-2" @click="sortProducts">
                SORT BY PRICE
            </button>
            <input class="ms-3 my-2" type="text" v-model="search" placeholder="Search" />
            <select v-model="category" class="ms-3">
                <option value="all">All</option>
                <option value="bedding">Bedding</option>
                <option value="carpet">Carpet</option>
                <option value="mirror">Mirror</option>
                <option value="shelf">Shelf</option>
                <option value="headboard">Headboard</option>
                <option value="lamp">Lamp</option>
                <option value="table">Table</option>
            </select>
            <button class="btn ms-3 my-2" @click="sortProduct">
                SORT BY NAME
            </button>
    </div>
    <div class="programs">
        <div class="cards" v-for="program in Programs" :key="program.program_id">
            <div class="row">
                <div class="col-6">
                    <img :src="program.imgURL" class="img-fluid" />
                </div>
                <div class="col-6">
                    <h5>{{ program.title }}</h5>
                    <p class="py-2"><span>Category</span>: {{ program.category }}</p>
                    <p class="py-2"><span>Price</span>: R{{ program.price }}</p>
                    <p class="py-2"><span>Description</span>: {{ program.description }}</p>
                </div>
                <!-- <div class="buttons mb-2">
                    <router-link :to="{ name: 'program', params: { id: program.product_id} }">
                    <button class="btn btn-lg ms-2 my-1">
                        VIEW PRODUCT
                    </button>
                    </router-link>
                    <button @click="addToCart(product)" class="btn btn-lg ms-2 my-1">
                        ADD TO CART
                    </button>
                </div> -->
            </div>
        </div>
        <ProgramCard v-for="program of filteredPrograms" :key="program.program_id" :program="program" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
// import ProductCard from '@/components/ProductCard.vue'
export default {
    // name: 'ProductView',
    // components: {
    //     ProductCard,
    // },
    computed: {
        Programs() {
            return this.$store.state.programs;
        },
    },
    mounted() {
        this.$store.dispatch("getPrograms");
    },
    methods: {
        getProgram() {
            this.$store.dispatch("getProgram");
        },
        // ...mapActions(["getProgram"]),
        // addToCart(item) {
        //     this.$store.commit("updateCart", item);
        // },
        // sortProduct() {
        //     this.$store.commit("sortProductsByName");
        // },
        sortPrograms() {
            this.$store.commit("sortProgramsByPrice");
        },
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}
.container-fluid h1 {
    color: black;
    text-shadow: 2px 3px 4px white; 
}
.col-6 img {
  width: 300px;
  height: 400px;
  object-fit:cover;
  
  -webkit-box-reflect:below 2px linear-gradient(transparent, transparent, #0004);
  
  transform-origin:center;
  transform:perspective(800px) rotateY(25deg);
  transition:0.8s;
}
.cards {
  width:600px;
  min-height:550px;
  display:flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  gap:20px;
  border: 1px solid black;
  margin: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  
}
.cards:hover img {
  opacity:0.3;
}
.cards img:hover {
  transform:perspective(800px)       rotateY(0deg);
  opacity:1;
}
.products {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 20px;
    padding: 10px;
}
.col-6 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
}
span {
    color: black;
}
.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
button.btn {
    font-size: 16px;
    background-color: black;
    color: #fff;
    min-height: 40px;
    width: 200px;
    padding: 5px;
    text-align: center;
}
button.btn:hover {
    background-color: #fff;
    color: black; 
}
input {
    min-width: 700px;
    padding: 10px;
}
select {
    width: 300px;
    height: 49px;
    padding: 10px;
}
.col-6 h5 {
    color: black;
    text-shadow: 2px 2px 2px white;
}
/* .cards {
    width: 400px;
    height: 600px;
    border: 2px solid black;
    margin: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
} */
/* .cards img {
    width: 300px;
    height: 200px;
    object-fit: cover;
} */
@media screen and (max-width: 600px) {
    .buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>