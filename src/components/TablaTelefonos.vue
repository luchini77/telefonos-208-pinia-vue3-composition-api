<template>
    <h1 class="text-center py-3">Telefonos</h1>
    <div id="button-container" class="btn-group my-2" role="group" aria-label="Basic example">
        <button class="btn btn-primary" @click="filtro('UCL')">UCL</button>
        <button class="btn btn-primary" @click="filtro('PRODUCCION')">Producción</button>
        <button class="btn btn-primary" @click="filtro('ACARREO')">Acarreo</button>
        <button class="btn btn-primary" @click="filtro('SNV')">Subnivel</button>
    </div>
    <div class="row">
        <div class="col-lg-12 col-sm-12">
            <ul class="list-group" v-for="telefono in telefonosFiltrados" :key="telefono.id">
                <li class="list-group-item d-flex justify-content-between mb-1" :class="telefono.estado === 'operativo'
                    ? 'list-group-item-success'
                    : telefono.estado === 'incompleto'
                        ? 'list-group-item-warning'
                        : 'list-group-item-danger'">
                    Ubicación: {{ telefono.ubicacion }} - {{ telefono.nivel }}

                    <div>
                        <router-link v-if="!store.userData" class="btn btn-info btn-sm" :to="`/${telefono.id}`">
                            Informacion
                        </router-link>
                        <button v-if="store.userData" class="btn btn-warning btn-sm ms-1" @click="buscar(telefono.id)">
                            Actualizar
                        </button>
                        <button v-if="store.userData" class="btn btn-danger btn-sm ms-1" @click="borrar(telefono.id)">
                            Eliminar
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useUserStore } from '../stores/auth';
import { useFonoStore } from '../stores/telefono';

import { storeToRefs } from 'pinia';

import router from '../router'
import Swal from 'sweetalert2'

const store = useUserStore()

const storeFono = useFonoStore()

const { telefonosFiltrados } = storeToRefs(storeFono)

const filtro = (nivel) => {
    storeFono.filtrarNivel(nivel)
}

onMounted(async () => {
    await storeFono.cargarTelefonos()
    await storeFono.filtrarNivel('UCL')
})

const borrar = (id) => {
    Swal.fire({
        title: "Seguro que desea Eliminar?",
        text: "¿Este Telefono?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    })
        .then(resultado => {
            if (resultado.value) {
                // Hicieron click en "Sí"
                storeFono.deleteTelefono(id)
            } else {
                // Dijeron que no
                console.log("*NO se elimina la venta*");
            }
        })

}

const buscar = (id) => {
    storeFono.buscarTelefono(id)
    router.push(`/actualizar/${id}`)
}

</script>

<style scoped>
#button-container {
    width: 333px;
    margin: 0 auto !important;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>