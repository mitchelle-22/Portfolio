<template>
    <div id="contactpage" class=" w-screen h-screen py-8 " :style="{'background-color':'#E0E0E0'}">
        <div class="max-w-screen-xl mt-4 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-purple-100 text-gray-900 rounded-lg shadow-lg">
        <div class="flex flex-col justify-between">
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
            <div class="text-gray-700 mt-8">
              Hate forms? Send me an <span class="underline">email</span> instead.
            </div>
          </div>
          <div class="mt-8 text-center">
              <img src="@/assets/icons/contact.svg" />
          </div>
        </div>
         <div class="">
          <div>
            <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
            <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" 
            id="name" type="text" placeholder=""  v-model="fullname">
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              id="email" type="text"  v-model="email">
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea
              class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div class="mt-8">
            <button
              class="uppercase text-sm font-bold tracking-wide bg-purple text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              type="submit"
              @click="submitForm">
              Send Message
            </button>
          </div>
        </div>
        </div>
    </div>
</template>
<script>
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {

    data() {
        return {
            v$: useValidate(),
      fullname: "",
      email: "", 
    };
  },
     methods: {
    submitForm() {
      this.v$.$validate() // checks all inputs
if (!this.v$.$error) { // if ANY fail validation
	alert('Form successfully submitted.')
} else {
alert('Form failed validation')		}
    },
  },
  validations() {
    return {
        fullname:{ required },
      email: { required },
    }
  }
}
</script>
<style>

</style>