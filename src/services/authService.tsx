import axios, { AxiosResponse } from "axios";

export interface LoginCredentials {
    email: string;
    password: string;
}

const loginEndpoint = import.meta.env.VITE_LOGIN_ENDPOINT;

export interface SignupData {
    fullName: string;
    email: string;
    password: string;
}

const signUpEndPoint = import.meta.env.VITE_SIGNUP_ENDPOINT;

interface AuthResponse {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
    };
}

export const authService = {
    login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
        const res: AxiosResponse<AuthResponse> = await axios.post(loginEndpoint, credentials);
        return res.data;
    },
    signup: async (userData: SignupData): Promise<AuthResponse> => {
        const res: AxiosResponse<AuthResponse> = await axios.post(signUpEndPoint, userData);
        return res.data;
    },
    verification: async (verifyToken: VerificationToken): Promise<AuthResponse> => {
        const res: AxiosResponse<AuthResponse> = await axios.post()
    }
}