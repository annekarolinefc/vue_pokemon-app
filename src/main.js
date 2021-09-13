import { createApp } from 'vue'

//Importando a rota
import { createRouter, createWebHistory } from "vue-router";

import App from './App.vue'

//Importando os componentes para criação das páginas
import PokemonList from "./components/PokemonList.vue";
import PokemonDetail from "./components/PokemonDetail.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: PokemonList },
        { path: "/pokemon/id", name: "pokemon", component: PokemonDetail }
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app')
