<template>
    <div>
        <h1 class="py-2">Telefono:</h1>
        <div class="mb-3">
            <input class="form-control" type="text" placeholder="Ingrese Nivel" v-model="telefono.nivel">
        </div>
        <div class="mb-3">
            <input class="form-control" type="text" placeholder="Ingrese Ubicación" v-model="telefono.ubicacion">
        </div>
        <div class="mb-3">
            <input class="form-control" type="text" placeholder="Ingrese Telefono" v-model="telefono.telefono">
        </div>
        <div class="mb-3">
            <input class="form-control" type="text" placeholder="Ingrese #Telefonico" v-model="telefono.numero_telefono">
        </div>
        <div class="mb-3">
            <select class="form-select" aria-label="Default select example" v-model="telefono.estado">
                <option disabled value>Estado del Telefono</option>
                <option value="operativo">Operativo</option>
                <option value="incompleto">Incompleto</option>
                <option value="sin nada">Sin Nada</option>
            </select>
        </div>
        <div class="mb-3">
            <textarea class="form-control" rows="3" placeholder="Mas Información" v-model="telefono.info"></textarea>
        </div>
        <div>
            <button
                type="submit"
                class="my-3 btn btn-primary w-100" 

            >
                Procesar Información
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
    telefono: Object
})

// const bloquear = computed(() => {
//     return telefono.telefono.value.nivel.trim() === "" ||
//     telefono.value.ubicacion.trim() === "" ||
//     telefono.value.telefono.trim() === "" ||
//     telefono.value.numero_telefono.trim() === ""
//      ? true 
//      : false
// })

</script>