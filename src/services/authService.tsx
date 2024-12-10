import axios, { AxiosResponse } from "axios";

const loginEndpoint = import.meta.env.VITE_LOGIN_ENDPOINT;

const signUpEndPoint = import.meta.env.VITE_SIGNUP_ENDPOINT;

const verificationEndPoint = import.meta.env.VITE_VERIFY_ENDPOINT

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface SignupData {
    fullName: string;
    email: string;
    password: string;
}

export interface VerificationData {
    message: string;
}

interface AuthResponse {
    success: boolean;
    data: null | {
        token?: string;
        user?: any;
    };
    message: string;

    // token: string;
    // user: {
    //     id: string;
    //     name: string;
    //     email: string;
    // };
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
    verification: async (verifyToken: VerificationData): Promise<AuthResponse> => {

        try {
            const res: AxiosResponse<AuthResponse> = await axios.post<AuthResponse>(
                verificationEndPoint, verifyToken);
            return res.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(
                    error.response?.data?.message ||
                    'Email verification failed'
                );
            }
            throw error;
        }
    }
}