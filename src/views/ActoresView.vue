<template>
    <h2 class="text-center my-5">Actores</h2>

    <ActorForm 
        :actor="actorSeleccionado"
        @guardar="guardarActor"
    />
    <!-- aqui ira el formulario de actores -->

    <table class="table table-striped table-hover mb-5">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="actor in actores" :key="actor.id">
                <td>{{ actor.nombre }}</td>
                <td class="text-end">
                    <button class="btn btn-primary btn-sm me-3" @click="editActor(actor)">Editar</button>
                    <button class="btn btn-danger btn-sm me-3" @click="removeActor(actor.id)">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import ActorForm from '@/components/ActorForm.vue';
    import { 
        getActores,
        createActor,
        updateActor,
        deleteActor
    } from '@/services/actorService';

    const actores = ref([])
    const actorSeleccionado = ref(null)
    const isEditing = ref(false)
    
    const cargarActores = async () => {
        try {
            actores.value = await getActores()
        } catch (error) {
            console.error('Error al cargar los actores', error)
        }
    }

    onMounted(cargarActores)

    const guardarActor = async (actor) => {
        if (isEditing.value) {
            await updateActor(actorSeleccionado.value.id, actor)
        } else {
            await createActor(actor)
        }

        actorSeleccionado.value = null
        isEditing.value = false

        await cargarActores()
    }

    const editActor = (actor) => {
        actorSeleccionado.value = actor
        isEditing.value = true
    }

    const removeActor = async (id) => {
        if (!confirm('Seguro/a que deseas eliminar este actor/actriz???')) return
        await deleteActor(id)
        cargarActores()
    }
</script>

<style scoped>
</style>