<template>
    <div class="relative w-500 z-50">
        <div>
            <TextInput
                type="text"
                class="flex items-center px-3.5 py-2.5 text-slate-400 "
                v-model="search"
                @keyup.enter="onSearch"
                placeholder="Search"/>

        </div>
        <div class="absolute bg-gray-800">
            <div v-if="showingDropdown" class="block">
                <ul>

                    <li v-for="result in searchResults" :key="result.id" @click="hideDropdown"
                        class="hover:bg-gray-700 px-3 py-3 text-white">
                        <a class="hover:bg-gray-700 px-3 py-3 flex items-center">
                            <img :src="`https://image.tmdb.org/t/p/w92/${result.poster_path}`" alt="poster" class="w-8">
                            <span class="ml-4"> {{ result.title }} </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div v-else class="block">
                <p class="px-3 py-3 text-white">No results found</p>
            </div>

        </div>
    </div>
</template>


<script setup>
import {ref} from 'vue';
import TextInput from "@/Components/TextInput.vue";

const search = ref('');
const showingDropdown = ref('false');
const searchResults = ref([]);

const onSearch = async () => {
    const TMDB_TOKEN = "570d5fe2d97f2f123f81c5bb3e33160d"


    if (search.value.length >= 2) {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search.value}&api_key=${TMDB_TOKEN}`);
        const data = await response.json();
        searchResults.value = data.results;
        showingDropdown.value = true;
        if(searchResults.value.length === 0){
            showingDropdown.value = false;
        }
    }else{

        showingDropdown.value = false;
    }

}


</script>

<style scoped>
/* Stiluri specifice componentei aici */
</style>

