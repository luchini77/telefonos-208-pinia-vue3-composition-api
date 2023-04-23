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
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(4, 78, 157);
    background: linear-gradient(
        0deg,
        rgba(4, 78, 157, 1) 0%,
        rgba(0, 174, 255, 1) 100%
    );
}
    
</style>
