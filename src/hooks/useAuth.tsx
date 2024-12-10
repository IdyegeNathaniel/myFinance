import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authService } from '../services/authService'; 8

export const useLogin = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: authService.login,
        onSuccess: (data) => {
            // toast.success(data)
            localStorage.setItem('token', data.token);
            navigate('/VerificationPage');
        },
        onError: (error: any) => {
            if (error.status === 401) {
                toast.error(error.message);
            } else {
                toast.error(error?.message || "An error occurred try again");
            }
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
        onError: (error: any) => {
            toast.error(error?.respose?.message);
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