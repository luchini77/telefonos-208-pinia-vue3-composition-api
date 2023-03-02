<template>
    <div class="container py-3">
        <h1>Actualizar telefono</h1>
        <form @submit.prevent="updateTelefono(telefono)">
            <FormTelefono :telefono="telefono"/>
        </form>
    </div>
</template>

<script setup>
import FormTelefono from '../components/FormTelefono.vue';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue'
import { useFonoStore } from '../stores/telefono'

const storeFono = useFonoStore()


const telefono = ref({
    nivel: '',
    ubicacion: '',
    telefono: '',
    numero_telefono: '',
    estado: '',
    info: ''
})

onMounted(async () => {
    const route = useRoute()
    const id = route.params.id
    await storeFono.buscarTelefono(id)

    telefono.value.id = storeFono.telefono.id
    telefono.value.nivel = storeFono.telefono.nivel
    telefono.value.ubicacion = storeFono.telefono.ubicacion
    telefono.value.telefono = storeFono.telefono.telefono
    telefono.value.numero_telefono = storeFono.telefono.numero_telefono
    telefono.value.estado = storeFono.telefono.estado
    telefono.value.info = storeFono.telefono.info

    
})

const updateTelefono = () => {
    storeFono.updateTelefono(telefono.value);
}

</script>