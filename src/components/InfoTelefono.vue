<template>
    <h1>Informacion del Telefono:</h1>
    <div class="card py-2">
        <div class="card-header">
            Nivel: {{ storeFono.telefono.nivel }}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Telefono: {{ storeFono.telefono.telefono }}</li>
            <li class="list-group-item">Ubicación: {{ storeFono.telefono.ubicacion }}</li>
            <li class="list-group-item">Número de Telefono: {{ storeFono.telefono.numero_telefono }}</li>
            <li class="list-group-item">Estado Actual: {{ storeFono.telefono.estado }}</li>
        </ul>
        <div class="card-footer">
            Información: {{ storeFono.telefono.info }}
        </div>

    </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue';
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