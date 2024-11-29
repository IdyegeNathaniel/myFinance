import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authService } from '../services/authService';

export const useLogin = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: authService.login,
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
            navigate('/VerificationPage');
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

export const useVerification = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: authService.verification,
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
            setTimeout(() => navigate("/dashboard"), 3000);
        },

    });
}