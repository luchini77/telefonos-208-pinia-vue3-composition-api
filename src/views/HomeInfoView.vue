<template>
    <div class="container py-3">
        <InfoTelefono :id="id"/>
        <router-link class="btn btn-success py-2" to="/">Volver</router-link>
    </div>
</template>

<script setup>
import InfoTelefono from '../components/InfoTelefono.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const id = route.params.id
</script>