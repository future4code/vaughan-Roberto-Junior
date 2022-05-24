export type authenticationData = {
    id: string
 }
 
 export type user = {
    id: string,
    name: string,
    email: string,
    password: string
 }
 
 export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }
 
 export type post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    created_at: Date,
    author_id: string
 }

 export type SignupInputDTO = {
   name: string
   email: string
   password: string
}

export type userLogin = {
   password: string,
   email: string
}