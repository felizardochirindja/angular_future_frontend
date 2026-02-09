export interface User {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    avatar?: string;
    role?: {
        id?: number;
        name: "admin" | "user";
        description?: string;
        permissions?: {
            id?: number;
            name:string;
            description?: string;
        }[]
    }
}
