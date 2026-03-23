<template>
    <div class="card shadow">
        <img :src="pelicula.poster" :alt="pelicula.nombre" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">
                {{ pelicula.nombre }}
            </h5>
            <p class="card-text text-muted">
                {{ pelicula.year }}
            </p>
            <p class="card-text text-muted small">
                <span class="me-3">🎭Actores: {{ pelicula.actores ? pelicula.actores.length : 0 }}</span>
                <span>🎬Generos: {{ pelicula.generos ? pelicula.generos.length : 0 }}</span>
            </p>
        </div>
        <div class="d-flex justify-content-center gap-2 card-footer">
            <router-link :to="`/peliculas/${pelicula.id}`" class="btn btn-sm btn-info">Detalles</router-link>
            <button @click="emit('edit', pelicula)" class="btn btn-sm btn-primary">Editar</button>
            <button @click="emit('delete', pelicula.id)" class="btn btn-sm btn-danger">Elimnar</button>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        pelicula: Object
    })

    const emit = defineEmits([
        'edit',
        'delete'
    ])
</script>

<style scoped>
</style>