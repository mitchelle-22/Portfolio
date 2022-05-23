<template>
<div id="app">
  <div id="nav" class=" bg-grey">
    
     <div>
      
      <nav
        class="
          container
          px-6
          py-8
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="
              text-xl
              font-bold
              text-gray-800
              lg:text-2xl
              hover:text-blue-400
            "
            >MR
          </router-link>
          <!-- Mobile menu button -->
          <div @click="toggleNav" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
          
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
           <router-link to="/">
            Home 
           </router-link>
          </li>
          <li class="text-sm font-bold text-gray-800  hover:text-blue-400"  >
          <router-link to="about">
          About
          </router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
          Experince
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            Portfolio
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            <router-link to="/contact">
            Contact
            </router-link>
          </li>
      
        </ul>
      </nav>
    </div>
   
    </div>
    <router-view />
   
 
</div>
<footer-page />
 

  
</template>

<script>

import FooterPage from '@/components/FooterPage.vue'

export default {
  components:{
    FooterPage
  },
}
</script>