import { HiKey } from "react-icons/hi2"
import { Link } from "react-router-dom"


const VerificationPage: React.FC = () => {


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