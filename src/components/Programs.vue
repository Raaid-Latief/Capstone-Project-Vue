<template>
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