<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <span class="navbar-brand ms-4">
                <h3>Telefonos 208</h3>
            </span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li>
                        <router-link v-if="store.userData" class="nav-link" to="/agregar">Agregar</router-link>
                    </li>
                </ul>
                <div>
                    <button v-if="!store.userData" type="button" class="btn btn-outline-success mx-2" data-bs-toggle="modal"
                        data-bs-target="#login">
                        <span class="material-symbols-outlined">
                            login
                        </span>
                    </button>
                    <!-- Cerrar sesión -->
                    <button v-if="store.userData" @click="store.logoutUser" class="btn btn-outline-danger me-2">
                        <span class="material-symbols-outlined">
                            logout
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </nav>
    <ModalLogin />
</template>

<script setup>
import { useUserStore } from '../stores/auth';
import ModalLogin from '../components/ModalLogin.vue'

const store = useUserStore()
</script>