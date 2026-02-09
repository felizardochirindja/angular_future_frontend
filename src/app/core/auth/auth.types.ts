export interface SignUpPayload {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

export interface SignUpResponse {
    message: string;
    status: string;
    data: {
        id: string;
        first_name: string;
        last_name: string;
        email: string;
    };
}
