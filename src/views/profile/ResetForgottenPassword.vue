<template>
  <h1> Reset Forgotten Password</h1>



  <div class="inputContainer">
    <label for="email"> Email: </label>
    <input type="email" id="email" v-model="email">
  </div>

  <div class="inputContainer">
    <label for="password"> Password: </label>
    <input type="password" id="password" v-model="password">
  </div>

  <div class="inputContainer">
    <label for="passwordConfirm"> Confirm Password: </label>
    <input type="password" id="passwordConfirm" v-model="passwordConfirm">
  </div>


  <div class="buttonContainer">
    <button @click="setNewPassword"> Set new Password </button>
  </div>
</template>

<script setup>
  import {ref} from 'vue'
  import {supabase} from "../../client/supabase.js";

  const email = ref('')
  const password = ref('')
  const passwordConfirm = ref('')
  async function setNewPassword() {

    if (password.value !== passwordConfirm.value){
      alert("Passwords do not match")
    }

    //const tempSession = supabase.auth.getSession()

    const {data,errorUserUpdate} = await supabase.auth.updateUser({
      email: email.value,
      password: password.value
    })
    if (data){
      console.log(data)
    }else{
      console.log(errorUserUpdate)
    }

  }
</script>

<style scoped>

</style>