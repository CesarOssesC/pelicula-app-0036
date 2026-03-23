<template>
    <div v-if="pelicula">
        <h2>{{ pelicula.nombre }}</h2>
        <p v-for="actor in getNombreActores()" :key="actor">{{ actor }}</p>
        <p></p>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import { getPeliculas } from '@/services/peliculaService';
    import { getActores } from '@/services/actorService';
    import { getGeneros } from '@/services/generoService';

    const route = useRoute()
    const router = useRouter()
    const volver = () => {
        router.back
    }

    const pelicula = ref(null)
    const actores = ref([])
    const generos = ref([])

    const cargarDatos = async () => {
        try {
            const peliculas = await getPeliculas()
            pelicula.value = peliculas.find(p => p.id === route.params.id)
            actores.value = await getActores()
            generos.value = await getGeneros()
        } catch (error) {
            console.error('Error al cargar los datos', error)
        }
    }

    onMounted(cargarDatos)

    const getNombreActores = () => {
        if (!pelicula.value.actores) return []

        return actores.value
            .filter(actor => pelicula.value.actores.includes(actor.id))
            .map(actor => actor.nombre)
    }
</script>

<style scoped>
</style>