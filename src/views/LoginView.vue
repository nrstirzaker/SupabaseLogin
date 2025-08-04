<template>
  <div class="inputContainer">
    <label for="email"> Email: </label>
    <input type="email" id="email" v-model="email">
  </div>

  <div class="inputContainer">
    <label for="password"> Password: </label>
    <input type="password" id="password" v-model="password">
  </div>

  <div class="buttonContainer">
    <button @click="createAccount"> Create</button>
    <button @click="login"> Login</button>
    <button @click="seeCurrentUser"> See user</button>
    <button @click="logout"> Logout</button>
    <button @click="forgotPassword"> Forgot Password</button>
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
async function createAccount() {
  console.log("create account");
  const {data, errors} = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  });


  if (errors) {
    console.log(errors);
  }else{
    console.log(data)
  }
}

async function login() {
  console.log("login");
  console.log("create account");
  const {data, errors} = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  });


  if (errors) {
    console.log(errors);
  }else{
    console.log(data)
  }
}

async function seeCurrentUser() {

  const localUser = await supabase.auth.getSession();
  console.log("see current user: ");
  console.log(localUser);
}

async function logout() {
  console.log("logout");
  const error = await supabase.auth.signOut();
  if (error) console.log(error)
}



</script>

<style>

.inputContainer {
  display: flex;
  flex-direction: column;
}

input {
  font-size: 1.5em;
}
.buttonContainer {
  display: flex;
  flex-direction: column;
  margin-top: 1em;
}

button {
  margin-bottom: 1em;
  padding: 1em 2em 1em 2em;
}
</style>