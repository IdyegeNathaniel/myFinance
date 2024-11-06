import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ApiRespopnse {
  token: string;
}
interface SigninPageProps {
  name: string;
  password: string;
}

const instance = axios.create({
  baseURL: "https://api.cashflow.rehx.name.ng"
});

const SigninPage: React.FC<SigninPageProps> = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string | number>("");
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !password) {
      setError("Both Fields are required");
      return;
    }
    try {
      const response: AxiosResponse<ApiRespopnse> = await instance.post("/sign-in", {
        name,
        password,
      });
      const token = response.data.token;

      if (token) {
        localStorage.setItem('token', token);
      } else {
        setError("Invalid Log in response from server")
      }
    } catch (error) {
      setError("Login failed, try again");
    }
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
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className={signInputClass}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className={signInputClass}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className={signButton}>
              Sign In
            </button>
            <p className="text-center text-xs">Or</p>
            <button type="submit" className={googleButton}>
              Continue With Google
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
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
