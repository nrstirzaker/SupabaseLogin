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


  <div class="buttonContainer">
    <button @click="createAccount"> Create </button>
    <button @click="login"> Login </button>
    <button @click="seeUser"> See user </button>
    <button @click="logout"> Logout </button>
    <button @click="forgotPassword"> Forgot Password </button>
  </div>
</template>


<script setup>
import {ref} from 'vue'
import {supabase} from '../client/supabase.js'


const email = ref('')
const password = ref('')

async function forgotPassword() {
  const {data,error} = await supabase.auth.resetPasswordForEmail(email.value)

  if (error){
    console.log(error)
  }else{
    console.log(data)
  }
}


</script>

<style scoped>

</style>