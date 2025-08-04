<template>
  <h1> Test Form </h1>

  <div class="inputContainer">
    <label for="token_hash"> Token: </label>
    <input type="text" id="token_hash" v-model="token_hash">
  </div>

  <div class="inputContainer">
    <label for="email"> Email: </label>
    <input type="email" id="email" v-model="email">
  </div>

  <div class="inputContainer">
    <label for="password"> Password: </label>
    <input type="password" id="password" v-model="password">
  </div>




  <div class="buttonContainer">
    <button @click="setNewPassword"> Set new Password </button>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {supabase} from "@/client/supabase.js";

const email = ref('')
const token_hash = ref('')
const password = ref('')

  async function setNewPassword() {
    const { errorOpt } = await supabase.auth.verifyOtp({
      token_hash: this.$route.query.token_hash,
      type: 'email',
    })

    if (errorOpt){
      console.log(errorOpt)
    }

    const { dataSignIn, errorSignIn } = await supabase.auth.signInWithOtp({
      email: email.value,
      options: {
        // set this to false if you do not want the user to be automatically signed up
        shouldCreateUser: false,
      },
    })



    const {data,errorUserUpdate} = await supabase.auth.updateUser({
      email: email.value,
      password: password.value
    })
  }
</script>

<style scoped>

</style>