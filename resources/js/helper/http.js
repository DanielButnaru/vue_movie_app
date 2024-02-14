import {usePage} from "@inertiajs/vue3";


//facem o functie care sa faca un request catre tmdb si sa returneze datele

export default async function useHttp(category, type) {
    try {
        const TMDB_TOKEN = "570d5fe2d97f2f123f81c5bb3e33160d"
        const response = await fetch(`https://api.themoviedb.org/3/${type}/${category}?api_key=${TMDB_TOKEN}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }


}
