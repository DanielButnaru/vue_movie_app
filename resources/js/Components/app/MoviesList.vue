<template>
    <div class="container mx-auto px-4 mt-16">
<!--        <div>-->

<!--            <h2 class="uppercase tracking-wider text-lg font-semibold text-gray-500">Popular Movies</h2>-->
<!--            <div class="flex flex-row gap-8 ">-->

<!--                <div v-for="movie in popularMovies" :key="movie.id">-->
<!--                    <MovieCard :movie="movie"/>-->
<!--                </div>-->

<!--            </div>-->
<!--        </div>-->
<!--        <div>-->
<!--            <h2 class="uppercase tracking-wider text-lg font-semibold text-gray-500">Up Coming</h2>-->
<!--            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">-->
<!--                <div v-for="movie in upComingMovies" :key="movie.id">-->
<!--                    <MovieCard :movie="movie"/>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <div>
            <h2 class="uppercase tracking-wider text-lg font-semibold text-gray-500">Top Rated</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                <div v-for="tv in topRatedMovies" :key="tv.id" >
                    <TvShowCard :tv="tv" :type="type"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
//Imports
// import MovieCard from "@/Components/app/MovieCard.vue"
import {onMounted, ref} from "vue";
import useHttp from "@/helper/http.js";
import TvShowCard from "@/Components/app/TvShowCard.vue";


//Use
//Refs
const popularMovies = ref([]);
const upComingMovies = ref([]);
const topRatedMovies = ref([]);
const type = 'tv';
//Computed
//Methods
//Hooks
onMounted(() => {

    const type = 'movie';

    const category = ['popular', 'upcoming', 'top_rated'];


    // for(let i = 0; i < category.length; i++){
    //     useHttp(category[i], type).then(data => {
    //         if(category[i] === 'popular'){
    //             popularMovies.value = data;
    //         }else if(category[i] === 'upcoming'){
    //             upComingMovies.value = data;
    //         // }else if(category[i] === 'top_rated'){
    //         //     topRatedMovies.value = data;
    //         // }
    //     })
    // };

    useHttp('popular', 'tv').then(data => {

        topRatedMovies.value = data;

        console.log(data);

    });

})



//TODO: mutam codul de aici pe pagina de home si reformulam componenta de pentru a afisa filme sau seriale in functie de tipul de date primit
//TODO: !!de modificat de asemnea variabilele si numele componentelor

</script>

<style scoped>

</style>
