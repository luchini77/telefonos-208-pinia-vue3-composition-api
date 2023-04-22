<template>
    <h1>Informacion del Telefono:</h1>
    <div class="card py-2 mb-2 bg-primary text-white">
        <div class="card-header">
            <h5>Nivel: {{ storeFono.telefono.nivel }}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item bg-info">Telefono: {{ storeFono.telefono.telefono }}</li>
            <li class="list-group-item bg-info">Ubicación: {{ storeFono.telefono.ubicacion }}</li>
            <li class="list-group-item bg-info">Número de Telefono: {{ storeFono.telefono.numero_telefono }}</li>
            <li class="list-group-item bg-info">Estado Actual: {{ storeFono.telefono.estado }}</li>
        </ul>
        <div class="card-footer">
            Información: {{ storeFono.telefono.info }}
        </div>

    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useFonoStore } from '../stores/telefono';
import { useRoute } from 'vue-router';

const props = defineProps({
    id: String
})

const storeFono = useFonoStore()

onMounted(() => {
    const route = useRoute()
    const id = route.params.id
    storeFono.buscarTelefono(id)
})

</script>