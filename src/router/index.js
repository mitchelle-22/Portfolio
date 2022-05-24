import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import ExperiencetPage from "@/views/ExperiencePage.vue";
import PortFolio from"@/views/PortFolio.vue"
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/experience",
    name: "ExperiencePage",
    component: ExperiencetPage,
  },
  {
    path: "/portfolio",
    name: "PortFolio",
    component: PortFolio,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;