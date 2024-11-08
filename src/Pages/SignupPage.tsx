import { useState } from "react";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

interface ApiRespopnse {
  token: string
}
interface SignupPageProps {
  email: string;
  password: string | number
  fullName: string;
}

const instance = axios.create({
  baseURL: "https://api.cashflow.rehx.name.ng/api/v1/auth/register"
});

const SignupPage: React.FC = () => {
  const [signupData, setSignupData] = useState<SignupPageProps>({
    email: "",
    password: "",
    fullName: "",
  });
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!mail || !password || !fullName) {
      throw new Error("Both fields are required")
    }
    try {
      const response: AxiosResponse<ApiRespopnse> = await instance.post("/", {
        mail,
        password,
        fullName
      });
      const token = response.token.data
      if (token) {
        localStorage.setItem("token", token);
      } else {

      }
    } catch (error) {

    }

  };


  //STYLING
  const signUpClass = "w-full py-20 flex items-center justify-center";
  const containerClass = "bg-[#dadad9] max-w-xl mx-4 md:m-auto rounded-md shadow-md px-4 py-2 text-black";
  const formClass = "flex flex-col gap-y-2 py-6";
  const inputClass = "w-full py-3 px-2 mb-2 outline-none";
  const regButClass = "bg-green-500 hover:bg-green-600 py-2 px-4 mb-2 mt-2 cursor-pointer text-white font-bold";
  const regGoogleClass = "bg-blue-500 hover:bg-blue-600 py-2 px-4 mx-auto cursor-pointer text-white font-bold rounded-md shadow-lg";


  return (
    <section className={signUpClass}>
      <div className="container mx-auto">
        <div className={containerClass}>
          <form onSubmit={submitForm} className={formClass}>
            <h2 className="text-2xl text-center font-bold mb-4">Register</h2>
            <input
              type="text"
              name="fullname"
              placeholder="Enter Fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={signupData.email}
              onChange={(e) => signupData.setEmail(e.target.value)}
              className={inputClass}
            />
            <input
              type="password"
              name=""
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
            />
            <button
              type="submit"
              className={regButClass}
            >
              Submit
            </button>
            <p className="text-center text-xs">Or</p>
            <button
              type="submit"
              className={regGoogleClass}
            >
              Continue With Google
            </button>
            <p className="text-xs text-center">
              Already have an account?{" "}
              <Link to={"/sign-in"} className="underline">
                Sign in
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
