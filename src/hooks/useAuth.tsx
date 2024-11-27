import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authService, LoginCredentials, SignupData } from '../services/authservice';
import { toast } from 'react-toastify';

export const useLogin = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: authService.login,
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
            toast(!responsemessage);
            navigate('/dashboard');
        },
        onError: (error) => {
            console.error('Login error:', error);
            toast(error.message);
        },
    });
};

export const useSignup = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: authService.signup,
        onSuccess: () => {
            navigate('/sign-in');
        },
        onError: (error) => {
            toast.error(error.message);
            console.error('Signup error:', error);
        },
    });
};