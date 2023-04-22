<template>
    <Navbar />
    <div class="background">
        <RouterView />
        <Footer />
    </div>
        
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
.background {
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 20%, rgba(0,212,255,1) 89%); 
}
    
</style>
