<template>
    <h1 class="text-center py-2">Listado de Telefonos</h1>
    <div>
        <table class="table text-center">
            <thead>
                <tr>
                    <th>Nivel</th>
                    <th>Ubicación</th>
                    <th>Telefono</th>
                    <th>N° Telefono</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="telefono in telefonos" :key="telefono.id">
                    <td>{{ telefono.nivel }}</td>
                    <td>{{ telefono.ubicacion }}</td>
                    <td>{{ telefono.telefono }}</td>
                    <td>{{ telefono.numero_telefono }}</td>
                    <td>{{ telefono.estado }}</td>
                    <td>
                        <router-link
                            v-if="!store.userData"
                            class="btn btn-info btn-sm" 
                            :to="`/${telefono.id}`"
                        >
                            Informacion
                        </router-link>
                        <button
                            v-if="store.userData"
                            class="btn btn-warning btn-sm ms-1"
                            @click="buscar(telefono.id)"
                        >
                            Actualizar
                        </button>
                        <button 
                            v-if="store.userData"
                            class="btn btn-danger btn-sm ms-1" 
                            @click="borrar(telefono.id)"
                        >
                            Eliminar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useUserStore } from '../stores/auth';
import { useFonoStore } from '../stores/telefono';
import router from '../router'

const store = useUserStore()

const storeFono = useFonoStore()

const telefonos = computed(() => {
    return storeFono.telefonos
})

onMounted(() => {
    storeFono.cargarTelefonos()
})

const borrar = (id) => {
    storeFono.deleteTelefono(id)
}

const buscar = (id) => {
    storeFono.buscarTelefono(id)
    router.push(`/actualizar/${id}`)
}

</script>