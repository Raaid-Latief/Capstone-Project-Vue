 import { createStore } from 'vuex'
 import axios from 'axios';
 import router from '@/router';

 const fitnessUrl = "https://capstone-raaid.herokuapp.com";
 
 console.log(fitnessUrl);

 export default createStore({
   state: {
     users: null,
     user: null,
     programs: null,
     program: null,
    plans: null,
    token: null,
    cart: []
  },
   getters: {
    getUsers: state => state.users,
    getPrograms: state => state.programs
   },
   mutations: {
    
        setUsers(state, users) {
          state.users = users
        },
        setUser(state, user) {
          state.user = user
        },
        setPrograms(state, programs) {
          state.programs = programs
        },
        setProgram(state, program) {
            state.program = program
          },
        setToken(state, token) {
            state.token = token
          },

   },
   actions: {    
    getUsers: async (context)=> {

      fetch(`${fitnessUrl}/users`)
      .then((res) => res.json())
      .then((data) => {
          if (data.length === 0) {
          console.log(data);
          } else {
              console.log(data);
              context.commit("setUsers", data);
          } 
      });
      },  
   getPrograms: async (context)=> {

    fetch(`${fitnessUrl}/programs`)
    .then((res) => res.json())
    .then((data) => {
        if (data.length === 0) {
        console.log(data);
        } else {
            console.log(data);
            context.commit("setPrograms", data);
        } 
    });
    }    
},


// // Single product is same

// getPrograms: async (context, id)=> {

//     fetch(`${fitnessUrl}/programs/${id}`)
//     .then((res) => res.json())
//     .then((program) => {
         
//             console.log(program),
//             context.commit("setProgram", program);
//     });  
// },

// Login
Login: async (context, payload) => {
    fetch(`${fitnessUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          // Saveing token to the store
          context.commit("setToken", data.token);

          // Once token
          // Verify Route
          fetch(`${fitnessUrl}/users/users/verify`, {
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": data.token,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              context.commit("setUser", data.user);
              alert(data.user.email);
              router.push({
                name: "programs",
              });
            });
        }
        //   });
        // router.push({
        //   name: "products",
 });
},
  modules: {
   }
 })
