<template>
    <h1 class="text-center my-5 fw-bold display-5">Películas!</h1>
    <!-- aqui eventualmente ira el formulario -->

    <div class="row">
        <div class="col-md-3 mb-5" v-for="pelicula in peliculas" :key="pelicula.id">
            <PeliculaCard 
                :pelicula="pelicula"
            />
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, watch } from 'vue'
    import PeliculaCard from '@/components/PeliculaCard.vue';
    import {
        getPeliculas,
        createPelicula,
        updatePelicula,
        deletePelicula
    } from '@/services/peliculaService'
    import { getActores } from '@/services/actorService';
    import { getGeneros } from '@/services/generoService';

    const peliculas = ref([])
    const actores = ref([])
    const generos = ref([])

    const peliculaSeleccionada = ref(null)
    const isEditing = ref(false)

    const cargarDatos = async () => {
        try {
            peliculas.value = await getPeliculas()
            actores.value = await getActores()
            generos.value = await getGeneros()
        } catch (error) {
            console.error('Error al cargar los datos', error)
        }
    }

    onMounted(cargarDatos)
</script>

<style scoped>
</style>