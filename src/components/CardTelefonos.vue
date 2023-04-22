<template>
    <h1 class="text-center py-3">Telefonos</h1>

    <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
            <div class="card">
                <div class="card-body text-center bg-primary text-white"><h5>UCL</h5></div>
                <ul class="list-group list-group-flush" v-for="telefono in filtro('UCL')" :key="telefono.id">
                    <li 
                        class="list-group-item d-flex justify-content-between"
                        :class="telefono.estado === 'operativo'
                            ? 'list-group-item-success'
                            : telefono.estado === 'incompleto'
                                ?'list-group-item-warning'
                                : 'list-group-item-danger'"
                    >
                        {{ telefono.telefono }}
                        <div>
                            <router-link v-if="!store.userData" :to="`/${telefono.id}`">
                                <span role="button" class="material-symbols-outlined">
                                    info
                                </span>
                            </router-link>
                            <span role="button" v-if="store.userData" @click="buscar(telefono.id)">
                                <span id="edit" class="material-symbols-outlined">
                                    edit
                                </span>
                            </span>
                            <span role="button" v-if="store.userData" @click="borrar(telefono.id)">
                                <span id="delete" class="material-symbols-outlined">
                                    delete
                                </span>
                            </span>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="card-body text-center bg-primary text-white"><h5>PRODUCCIÓN</h5></div>
                <ul class="list-group list-group-flush" v-for="telefono in filtro('PRODUCCION')" :key="telefono.id">
                    <li 
                        class="list-group-item d-flex justify-content-between"
                        :class="telefono.estado === 'operativo'
                            ? 'list-group-item-success'
                            : telefono.estado === 'incompleto'
                                ?'list-group-item-warning'
                                : 'list-group-item-danger'"
                    >
                        {{ telefono.telefono }}
                        <div>
                            <router-link v-if="!store.userData" :to="`/${telefono.id}`">
                                <span class="material-symbols-outlined">
                                    info
                                </span>
                            </router-link>
                            <span role="button" v-if="store.userData" @click="buscar(telefono.id)">
                                <span id="edit" class="material-symbols-outlined">
                                    edit
                                </span>
                            </span>
                            <span role="button" v-if="store.userData" @click="borrar(telefono.id)">
                                <span id="delete" class="material-symbols-outlined">
                                    delete
                                </span>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="card-body text-center bg-primary text-white"><h5>ACARREO</h5></div>
                <ul class="list-group list-group-flush" v-for="telefono in filtro('ACARREO')" :key="telefono.id">
                    <li 
                        class="list-group-item d-flex justify-content-between"
                        :class="telefono.estado === 'operativo'
                            ? 'list-group-item-success'
                            : telefono.estado === 'incompleto'
                                ?'list-group-item-warning'
                                : 'list-group-item-danger'"
                    >
                        {{ telefono.telefono }}
                        <div>
                            <router-link v-if="!store.userData" :to="`/${telefono.id}`">
                                <span class="material-symbols-outlined">
                                    info
                                </span>
                            </router-link>
                            <span role="button" v-if="store.userData" @click="buscar(telefono.id)">
                                <span id="edit" class="material-symbols-outlined">
                                    edit
                                </span>
                            </span>
                            <span role="button" v-if="store.userData" @click="borrar(telefono.id)">
                                <span id="delete" class="material-symbols-outlined">
                                    delete
                                </span>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="card-body text-center bg-primary text-white"><h5>SUB NIVEL</h5></div>
                <ul class="list-group list-group-flush" v-for="telefono in filtro('SNV')" :key="telefono.id">
                    <li 
                        class="list-group-item d-flex justify-content-between"
                        :class="telefono.estado === 'operativo'
                            ? 'list-group-item-success'
                            : telefono.estado === 'incompleto'
                                ?'list-group-item-warning'
                                : 'list-group-item-danger'"
                    >
                        {{ telefono.telefono }}
                        <div>
                            <router-link v-if="!store.userData" :to="`/${telefono.id}`">
                                <span class="material-symbols-outlined">
                                    info
                                </span>
                            </router-link>
                            <span role="button" v-if="store.userData" @click="buscar(telefono.id)">
                                <span id="edit" class="material-symbols-outlined">
                                    edit
                                </span>
                            </span>
                            <span role="button" v-if="store.userData" @click="borrar(telefono.id)">
                                <span id="delete" class="material-symbols-outlined">
                                    delete
                                </span>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
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


const { telefonos } = storeToRefs(storeFono)

const filtro = (nivel) => telefonos.value.filter(telefono => telefono.nivel === nivel)
console.log(filtro)

onMounted(async () => {
    await storeFono.cargarTelefonos()
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
#edit:hover{
    color: gold;
}

#delete:hover{
    color: red;
}
</style>