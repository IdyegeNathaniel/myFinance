import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useEffect } from "react";
import { HiKey } from "react-icons/hi2"
import { Link, useSearchParams } from "react-router-dom"
import { toast } from "react-toastify";

interface VerifyResponse {
    message: string;
    verified?: boolean;
}
interface ApiError {
    message: string;
    code?: string;
}

const verificationEndPoint = import.meta.env.VITE_VERIFY_ENDPOINT

const verifyEmail = async (token: string): Promise<VerifyResponse> => {
    if (!token) throw new Error('Verification token is required');
    const { data } = await axios.post<VerifyResponse>(verificationEndPoint, { token });
    return data;
};

const VerificationPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');


    const { data, isError, error } = useQuery({
        queryKey: ["emailVerification", token],
        queryFn: () => verifyEmail(token as string),
        enabled: !!token,
        retry: false,
        staleTime: Infinity,
    });

    useEffect(() => {
        if (isError) {
            const errorMessage = (error as AxiosError<ApiError>).response?.data?.message
                || 'Verification failed. Please try again.';
            toast.error(errorMessage)
        }

        if (data?.verified) {
            toast.success('Email verified successfully. You can now close this page.')
        }
    }, [isError, data?.verified, error]);

    return (
        <section className='w-full flex justify-center items-center py-20'>
            <div className="bg-[#dadad9] h-[240px] max-w-xl mx-4 md:m-auto rounded-md shadow-md px-4 py-2 text-black flex flex-col items-center justify-center">
                <HiKey className="text-5xl text-green-600 mb-4" />
                <h2 className='font-semibold text-xl text-center mb-5'>Confirm Your Email</h2>
                <p className="text-sm text-center">Email Successfully Verified. Click Below To Continue</p>
                <Link to={"/sign-in"} className="text-white bg-green-500 hover:bg-green-600 rounded-md px-3 py-2 mt-4">Continue</Link>
            </div>
        </section>
    )
}

export default VerificationPage