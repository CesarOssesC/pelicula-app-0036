<template>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container">
            <a class="navbar-brand" href="#">Peliculas!</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                    <router-link class="nav-link active" aria-current="page" to="/peliculas">Películas</router-link>
                    <router-link class="nav-link" to="/actores">Actores</router-link>
                    <router-link class="nav-link" to="/generos">Géneros</router-link>
                </div>
                <div class="navbar-nav ms-auto">
                    <router-link class="nav-link" to="/register">Registrarse</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
</script>

<style scoped>
</style>