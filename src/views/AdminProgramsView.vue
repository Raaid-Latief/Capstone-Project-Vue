<template>
    <br>
    <br>
    <br>
    <div class="container-fluid">
      <h1>
        Program ADMIN<span class="text-white ms-2"
        ></span>
      </h1>
      <div class="admin my-5">
        <router-link href="" to="/adminUser" class="adminUser">
          <button type="button" class="btn btn-lg">USER ADMIN</button>
        </router-link>
        <button
          type="button"
          class="btn btn-primary ms-5"
          data-target="#myModal" data-toggle="modal" data-backdrop="static" data-keyboard="false"
        >
          <i class="fa-solid fa-circle-plus"></i><span class="ms-2">ADD</span>
        </button>
        <!-- Modal -->
        <div
          class="modal fade"
          id="myModal" data-keyboard="false" data-backdrop="static"
          tabindex="-1"
          aria-labelledby="addingModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-dark" id="addingModalLabel">
                  ADD PROGRAM
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="addingProgram()">
                  <div class="name form-floating">
                    <input
                      type="text"
                      class="form-control mb-2"
                      id="floatingName"
                      placeholder="NAME"
                      v-model="title"
                    />
                    <label for="floatingName">TITLE</label>
                  </div>
                  <div class="image form-floating">
                    <input
                      type="text"
                      class="form-control mb-2"
                      id="floatingImage"
                      placeholder="IMAGE"
                      v-model="imgURL"
                    />
                    <label for="floatingImage">IMAGE</label>
                  </div>
                  <div class="form-floating category">
                    <select
                      class="form-select mb-2"
                      aria-label="Default select example"
                      v-model="category"
                    >
                    <option value="strength">Strength</option>
                            <option value="hypertrophy">Hypertrophy</option>
                            <option value="powerbuilding">Powerbuilding</option>
                    </select>
                    <label for="floatingCategory">CATEGORY</label>
                  </div>
                  <div class="price form-floating">
                    <input
                      type="number"
                      class="form-control mb-2"
                      id="floatingPrice"
                      placeholder="PRICE"
                      v-model="price"
                    />
                    <label for="floatingPrice">PRICE</label>
                  </div>
                  <div class="description form-floating">
                    <input
                      type="text"
                      class="form-control mb-2"
                      id="floatingDescription"
                      placeholder="DESCRIPTION"
                      v-model="description"
                    />
                    <label for="floatingDescription">DESCRIPTION</label>
                  </div>
                  <button type="submit" class="button">SAVE</button>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="button btn-secondary"
                  data-bs-dismiss="modal"
                >
                  CLOSE
                </button>
                <button type="button" class="button btn-primary">
                  SAVE CHANGES
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th scope="col">IMAGE</th>
            <th scope="col">TITLE</th>
            <th scope="col">CATEGORY</th>
            <th scope="col">PRICE</th>
            <th scope="col">GENDER</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">DELETE</th>
            <th scope="col">EDIT</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(program, index) of programs" :key="index">
            <td scope="row"><img v-bind:src="program.imgURL" alt="" /></td>
            <td>{{ program.title }}</td>
            <td>{{ program.category }}</td>
            <td>R{{ program.price }}</td>
            <td>{{ program.gender }}</td>
            <td class="desc">{{ program.description }}</td>
            <td>
              <button class="btn" @click="deleteProgram(program.program_id)">
                <i class="fa-solid fa-trash"></i
                ><span class="ms-2">DELETE</span></button
              ><UpdateModal :program="program" />
            </td>
            <td>
              <!-- Button trigger modal -->
  
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                :data-bs-target="`#modal${index}`"
              >
                <i class="fa-solid fa-pen"></i><span class="ms-2">EDIT</span>
              </button>
  
              <!-- Modal -->
              <div
                class="modal fade"
                :id="`modal${index}`"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                v-for="(program, index) of programs"
                :key="index"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title text-dark" id="exampleModalLabel">
                        EDIT PROGRAM
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form @submit.prevent="updateProgram(program.program_id)">
                        <div class="name form-floating">
                          <input
                            type="text"
                            class="form-control mb-2"
                            id="floatingName"
                            placeholder="NAME"
                            v-model="program.title"
                          />
                          <label for="floatingName">NAME</label>
                        </div>
                        <div class="form-floating category">
                          <select
                            class="form-select mb-2"
                            aria-label="Default select example"
                            v-model="program.category"
                          >
                            <option value="strength">strength</option>
                            <option value="hypertrophy">Hypertrophy</option>
                            <option value="powerbuilding">Powerbuilding</option>

                          </select>
                          <label for="floatingCategory">CATEGORY</label>
                        </div>
                        <div class="price form-floating">
                          <input
                            type="number"
                            class="form-control mb-2"
                            id="floatingPrice"
                            placeholder="PRICE"
                            v-model="program.price"
                          />
                          <label for="floatingPrice">PRICE</label>
                        </div>
                        <div class="description form-floating">
                          <input
                            type="text"
                            class="form-control mb-2"
                            id="floatingDescription"
                            placeholder="DESCRIPTION"
                            v-model="program.description"
                          />
                          <label for="floatingDescription">DESCRIPTION</label>
                        </div>
                        <button type="submit" class="button">SAVE</button>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="button btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        CLOSE
                      </button>
                      <button type="button" class="button btn-primary">
                        SAVE CHANGES
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: ["program_id"],
    mounted() {
      this.$store.dispatch("getPrograms");
      console.log(this.index);
    },
    data() {
      return {
        search: "",
        category: "all",
        title: "",
        imgURL: "",
        price: "",
        description: "",
        gender: ""
      };
    },
    computed: {
      programs() {
        return this.$store.state.programs;
      },
      program() {
        return this.$store.state.program;
      },
      filteredPrograms() {
        return this.$store.state.programs?.filter((programs) => {
          let isMatch = true;
          if (!program.title?.toLowerCase().includes(this.search.toLowerCase()))
            isMatch = false;
          if (this.category !== "all" && program.category !== this.category)
            isMatch = false;
          return isMatch;
        });
      },
    },
    methods: {
      deleteProgram(id) {
        return this.$store.dispatch("deleteProgram", id);
      },
      updateProgram(id) {
        return this.$store.dispatch("updateProgram", id);
      },
  
      addingProgram() {
        const program = {
          title: this.title,
          imgURL: this.imgURL,
          category: this.category,
          price: this.price,
          description: this.description,
          gender: this.gender
        };
        this.$store.dispatch("addingProgram", program);
      },
    },
  };
  </script>
  
  <style scoped>
  .container-fluid {
    margin: 20px;
    padding: 10px;
    color: black;
  }
  
  .container-fluid h1 {
    color: black;
    text-shadow: 2px 3px 4px #016300;
  }
  
  table {
    width: 1450px;
    padding: 15px;
  }
  
  th {
    border: solid 1px black;
    color: black;
  }
  
  td {
    border: solid 1px black;
    width: 20px;
  }
  
  .admin {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
  
  .adminUser {
    text-decoration: none;
    color: #04bcff;
  }
  
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  
  button.btn {
    font-size: 16px;
    background-color: black;
    color: #fff;
    min-height: 40px;
    width: 150px;
    padding: 5px;
    text-align: center;
  }
  
  button.btn:hover {
    background-color: #fff;
    color: black;
  }
  
  button.button {
    font-size: 16px;
    background-color: black;
    color: #fff;
    min-height: 40px;
    width: 150px;
    padding: 5px;
    text-align: center;
  }
  
  button.button:hover {
    background-color: #04bcff;
    color: black;
  }
  
  label {
    color: #04bcff;
    margin-bottom: 20px;
  }
  
  @media screen and (max-width: 800px) {
    img {
      width: 100px;
    }
    .admin {
      padding: 0;
      margin: 0;
    }
  }
  
  @media screen and (max-width: 300px) {
    .admin {
      display: flex;
      flex-direction: column;
    }
  
    .table {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: fit-content;
    }
  }
  </style>