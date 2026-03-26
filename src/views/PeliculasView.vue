<template>
    <h1 class="text-center my-5 fw-bold display-5">🎬 Películas 🎬</h1>
    <!-- aqui eventualmente ira el formulario -->
    <PeliculaForm 
        v-if="isAdmin"
        :pelicula="peliculaSeleccionada"
        :actores="actores"
        :generos="generos"
        @guardar="guardarPelicula"
    />

    <div class="row">
        <div class="col-md-3 mb-5" v-for="pelicula in peliculas" :key="pelicula.id">
            <PeliculaCard 
                :pelicula="pelicula"
                @edit="editPelicula"
                @delete="removePelicula"
            />
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, computed } from 'vue'
    import { useStore } from 'vuex'
    import PeliculaCard from '@/components/PeliculaCard.vue';
    import {
        getPeliculas,
        createPelicula,
        updatePelicula,
        deletePelicula
    } from '@/services/peliculaService'
    import { getActores } from '@/services/actorService';
    import { getGeneros } from '@/services/generoService';
    import PeliculaForm from '@/components/PeliculaForm.vue';

    const store = useStore()

    const peliculas = ref([])
    const actores = ref([])
    const generos = ref([])

    const peliculaSeleccionada = ref(null)
    const isEditing = ref(false)

    const isAdmin = computed(() => store.state.rol === 'admin')

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

    const guardarPelicula = async (pelicula) => {
        if (isEditing.value) {
            await updatePelicula(peliculaSeleccionada.value.id, pelicula)
        } else {
            await createPelicula(pelicula)
        }

        peliculaSeleccionada.value = null
        isEditing.value = false

        await cargarDatos()
    }

    const editPelicula = (pelicula) => {
        peliculaSeleccionada.value = pelicula
        isEditing.value = true
    }

    const removePelicula = async (id) => {
        if (!confirm('Seguro/a que deseas eliminar esta película???')) return
        await deletePelicula(id)
        cargarDatos()
    }
</script>

<style scoped>
</style>