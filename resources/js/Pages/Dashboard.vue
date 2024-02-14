<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import MoviesList from "@/Components/app/MoviesList.vue";
</script>

<template>

    <AuthenticatedLayout>
        <MoviesList/>
    </AuthenticatedLayout>
</template>
