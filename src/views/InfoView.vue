<template>
    <div class="container py-3">
        <h3>vista admin</h3>
        <InfoTelefono />
        <router-link class="btn btn-success" to="/admin">Volver</router-link>
    </div>
</template>

<script setup>
import InfoTelefono from '../components/InfoTelefono.vue';
</script>