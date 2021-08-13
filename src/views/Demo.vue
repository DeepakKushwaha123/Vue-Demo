<template>
  <div class="demo">
    <h1 v-if="show" class="text-white text-center">Welcome</h1>
    <h1 v-else class="text-white text-center">Deepak</h1>
    <button
      v-on:click="display"
      class="btn btn-primary m-auto text-center d-flex"
      style="outline: none; border: none; box-shadow: none;"
    >
      Click Name
    </button>
    <h3 class="text-center text-white d-flex justify-content-center mt-3">
      {{ number }}
    </h3>
    <div class="d-flex justify-content-center">
      <button
        v-on:click="incre"
        class="btn btn-primary text-center mr-2 mt-3"
        style="outline: none; border: none; box-shadow: none;"
      >
        Increament
      </button>
      <button
        v-on:click="decre"
        class="btn btn-primary text-center m-0 mt-3"
        style="outline: none; border: none; box-shadow: none;"
      >
        Decreament
      </button>
    </div>
    <div class="d-flex justify-content-center flex-column mt-3 w-50 m-auto">
      <span class="mt-3 text-white text-center">{{ title }}</span>
      <input
        v-model="title"
        type="text"
        id="inputtext"
        placeholder="type here"
        style="border: none; outline: none; padding: 5px 10px;height: 50px; border-radius: 4px;"
        class="d-flex mt-3 mb-5"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      show: true,
      number: 0,
      Text: "Deepak",
      title: "",
    };
  },
  methods: {
    display() {
      this.show = !this.show;
    },
    incre() {
      this.number++;
    },
    decre() {
      this.number == 0 ? (this.number = 0) : this.number--;
    },
  },
};
</script>

<style></style>
