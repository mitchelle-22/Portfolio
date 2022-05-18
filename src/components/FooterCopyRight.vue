<template>
<div id="footerCopyRight">
    <div class="flex justify-center items-center text-center">
		<div
			class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
		>
			&copy; {{ copyrightDate }}.
			<a
				href="https://github.com/realstoman/vuejs-tailwindcss-portfolio"
				target="__blank"
				class="font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
			>
				{{ projectName }}
			</a>
			. Developed by
			<a
				href="https://stoman.me"
				target="__blank"
				class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
				>{{ author }}</a
			>
		</div>
        <footer-copy-right />
	</div>
</template>

<script>
import FooterCopyRight from './components/FooterCopyRight.vue'
export default {
    components:{
        FooterCopyRight
    },
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