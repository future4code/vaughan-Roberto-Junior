export type recipe = {
    id: string
    Nome: string
    Email: string
    Tipo: string
 }
 
 export type user = {
    id: string
    name: string
    email: string
    password: string
    recipes?: recipe[]
 }