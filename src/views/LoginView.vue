<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LoginView"
})
</script>

<template>
  <h1> Test Form </h1>
  <div class="inputContainer">
    <label for="email"> Email: </label>
    <input type="email" id="email" v-model="email">
  </div>

  <div class="inputContainer">
    <label for="email"> Password: </label>
    <input type="password" id="password" v-model="password">
  </div>

  <div class="inputContainer">
    <label for="firstName"> First Name </label>
    <input type="firstName" id="firstName" v-model="firstName">
  </div>

  <div class="buttonContainer">
    <button @click="createAccount"> Create </button>
    <button @click="login"> Login </button>
    <button @click="seeUser"> See user </button>
    <button @click="logout"> Logout </button>
  </div>
</template>

<style scoped>

</style>