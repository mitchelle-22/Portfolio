<template>
<div id="homepage" class=" w-screen h-screen py-8" :style="{'background-color':'#E0E0E0'}">
  <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple">HELLO
        <br class="hidden lg:inline-block">
      </h1>
       <div class="container text-4xl">
          I'm <a class="text-purple">Michelle Ramela</a>
        </div>
      <p class="mb-8 leading-relaxed">Full-Stack Developer / Web Developer</p>
      <div class="flex justify-center ">
        

        <button type="button" class="flex justify-left items-center bg-purple  text-white text-xl font-bold p-2 m-2 rounded-full  h-7 w-7 ">
        <a href="https://www.facebook.com/mitchelle.ramela.9">
        <img src="@/assets/icons/facebook.svg" /> 
        </a> 
      </button>
  
       <button type="button" class="flex items-center bg-white  text-purple text-xl font-bold p-2 m-2 rounded-full  h-7 w-7 ">
        <a href="https://www.instagram.com/mitchellefetty/">
        <img src="@/assets/icons/insta.svg" />
        </a>
      </button>

       <button type="button" class="flex items-center bg-white  text-purple text-xl font-bold p-2 m-2 rounded-full  h-7 w-7 ">
       <a href="https://www.linkedin.com/in/michelle-ramela-790359193/">
        <img src="@/assets/icons/linkedin.svg" />
       </a>
      </button>

       <button type="button" class="flex items-center bg-white  text-purple text-xl font-bold p-2 m-2 rounded-full  h-7 w-7 ">
       <a href="https://github.com/mitchelle-22/Portfolio">
        <img src="@/assets/icons/github.svg" />
        </a>
      </button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
     <img src="@/assets/icons/homepage.svg" />
    </div>
  </div>
</section>
  </div>


</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      showMenu: true,
    };
  },
  methods: {
    toggleNav: function () {
      this.showMenu = !this.showMenu;
    }
    }
}
 
</script>
