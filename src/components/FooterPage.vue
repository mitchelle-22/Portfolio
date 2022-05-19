<template>
<div id="footerPage">
   <footer class="footer footer-center bg-base-300 text-base-content max-w-screen-xl md:px-12 lg:px-16 xl:px-32 px-10 mx-auto">
   
		<div
			class="grid-flow-col md:place-self-center py-4 font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
		>
			&copy; {{ copyrightDate }}.
			<a
				href="https://github.com/mitchelle-22/Portfolio"
				target="__blank"
				class="font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
			>
				{{ projectName }}
			</a>
			. Developed by
			<a
				href="https://michelle.ramela"
				target="__blank"
				class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
				>{{ author }}</a
			>
		</div>
  </footer>
	</div>
</template>

<script>

export default {
  
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'Vue.js & TailwindCSS Portfolio',
			author: 'MICHELLE RAMELA',
		};
	},
   
};
</script>

<style>

</style>