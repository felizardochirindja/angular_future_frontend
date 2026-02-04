export interface User {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    avatar?: string;
    role: {
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
