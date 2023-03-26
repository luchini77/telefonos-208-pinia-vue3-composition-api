import { defineStore } from 'pinia'
import router from '../router'
import { useUserStore } from './auth'


export const useFonoStore = defineStore('fono', {
    state: () => ({
        telefonos: [],
        telefono: [],
        telefonosFiltrados: [],

    }),

    getters: {

    },

    actions: {
        async cargarTelefonos(){
            try {
                const res = await fetch('https://telefonos-208-67525-default-rtdb.firebaseio.com/telefonos.json')
                const dataDB = await res.json()
    
                const arrayTelefonos = []
                
                for(let id in dataDB){
                    arrayTelefonos.push(dataDB[id])
                }
    
                this.telefonos = arrayTelefonos
    
                router.push("/admin")
    
            } catch (error) {
                console.log(error)
            }
        },

        async getTelefono(telefono){
            try {
                const res = await fetch(`https://telefonos-208-67525-default-rtdb.firebaseio.com/telefonos/${telefono.id}.json`, {
                    method:'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(telefono)
                })
                const dataDB = await res.json()

                router.push("/")

            } catch (error) {
                console.log(error)
            }
        },

        async deleteTelefono(id){
            try {
                await fetch(`https://telefonos-208-67525-default-rtdb.firebaseio.com/telefonos/${id}.json`, {
                    method: 'DELETE'
                })
                this.telefonos = this.telefonos.filter(item => item.id !== id)

                router.push("/admin")
            } catch (error) {
                console.log(error)
            }
        },

        async buscarTelefono(id){

            const store = useUserStore()

            try {
                const res = await fetch(`https://telefonos-208-67525-default-rtdb.firebaseio.com/telefonos/${id}.json`)
                const dataDB = await res.json()

                this.telefono = dataDB

                
                //router.push(`/actualizar/${id}`)
                

            } catch (error) {
                console.log(error)
            }
        },

        async updateTelefono(telefono){
            try {
                const res = await fetch(`https://telefonos-208-67525-default-rtdb.firebaseio.com/telefonos/${telefono.id}.json`, {
                    method: 'PATCH',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(telefono)
                })

                const dataDB = await res.json()
                // console.log(await res.json())
                router.push("/admin")

            } catch (error) {
                console.log(error)
            }
        },

        filtrarNivel(nivel){
            const filtro = this.telefonos.filter(telefono => {
                return telefono.nivel.includes(nivel)
            })
            this.telefonosFiltrados = filtro
        }

    }

})