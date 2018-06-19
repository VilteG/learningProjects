export interface User {
    firstName: string,
        lastName: string,
        age?: number,
        adress?: {
            street: string,
            city: string
        },
        image?:string,
        isActive?:boolean
}