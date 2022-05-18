<template>
<div id="homepage" class=" w-screen h-screen py-8" :style="{'background-color':'#E0E0E0'}">
  <div class="container flex flex-row mt-8 justify-between ">
    <div class="container">
      <span class="inline-grid grid-cols-1 gap-2 mt-40 pl-16">
        <h3 class="text-purple text-4xl pl-16 ">Hello</h3>
        <div class="container text-4xl pl-16">
          I'm <a class="text-purple">Michelle Ramela</a>
        </div>
        <h3 class="pl-16">Full-Stack Developer / Web Developer</h3>


        <div class="flex flex-row items-center gap-2 pl-20 ">
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
       
      </span>
    </div>
    <div class="flex items-center image mt-10 pr-10">
      <span class="inline-grid grid-cols-1 gap-4 pl-10">
        <img src="@/assets/icons/homepage.svg" />
      </span>
    </div>
  </div>
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
