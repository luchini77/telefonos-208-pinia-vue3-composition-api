<template>
    <div class="container py-3">
        <h1>Agregar telefono</h1>
        <form @submit.prevent="agregarTelefono">
            <FormTelefono :telefono="telefono"/>
        </form>
    </div>
</template>

<script setup>
import FormTelefono from '../components/FormTelefono.vue';
import { ref } from 'vue'
import { useFonoStore } from '../stores/telefono';

const storeFono = useFonoStore()

const telefono = ref({
    id: Date.now(),
    nivel: '',
    ubicacion: '',
    telefono: '',
    numero_telefono: '',
    estado: '',
    info: ''
})

const agregarTelefono = () => {
    storeFono.getTelefono(telefono.value);
}
</script>