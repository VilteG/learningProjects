export interface User {
    firstName: string,
        lastName: string,
        age?: number,
        adress?: {
            street: string,
            city: string
        },        
        isActive?:boolean,       
        registered?:any
}