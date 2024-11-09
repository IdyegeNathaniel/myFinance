import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ApiRespopnse {
  token: string;
}
interface SigninPageProps {
  email: string;
  password: string;
}

const loginEndpoint = import.meta.env.VITE_LOGIN_ENDPOINT;

const SigninPage: React.FC = () => {
  const [formData, setFormData] = useState<SigninPageProps>({
    email: "",
    password: "",
  });

  // const [error, setError] = useState<string | null>(null);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post<ApiRespopnse>(loginEndpoint, formData);
      console.log('Login successful:', response.data);
      sessionStorage.setItem('token', response.data.token);
    } catch (error) {
      console.log('Error logging in:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  //STYLING
  const signInClass = "w-full flex items-center justify-center py-20";
  const signInContainerClass = "bg-[#dadad9] max-w-xl mx-4 md:m-auto rounded-md shadow-md px-4 py-2 text-black";
  const formClass = "flex flex-col gap-y-2 py-6";
  const googleButton = "bg-blue-500 hover:bg-blue-600 mx-auto py-2 px-4 cursor-pointer text-white font-bold rounded-md shadow-lg";
  const signButton = "bg-green-500 hover:bg-green-600 py-2 px-4 mb-2 mt-2 cursor-pointer text-white font-bold";
  const signInputClass = "w-full py-3 px-2 mb-2 outline-none";

  return (
    <section className={signInClass}>
      <div className="container mx-auto">
        <div className={signInContainerClass}>
          <form onSubmit={submitForm} className={formClass}>
            <h2 className="text-2xl text-center font-bold mb-4">Login</h2>

            {/* {error && <p style={{ color: 'red', textAlign: "center" }}>{error}</p>} */}
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className={signInputClass}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className={signInputClass}
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className={signButton}>
              Sign In
            </button>
            <p className="text-center text-xs">Or</p>
            <button type="submit" className={googleButton}>
              Continue With Google
            </button>
            <p className="text-xs text-center">
              Don't have an account?{" "}
              <Link to={"/sign-up"} className="underline">
                Sign Up
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SigninPage;
