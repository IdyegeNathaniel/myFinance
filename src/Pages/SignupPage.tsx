import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useauth";
import { SignupData } from "../services/authService"


const SignupPage: React.FC = () => {
  const [userData, setUserData] = useState<SignupData>({
    fullName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const signupMutation = useSignup();
  const navigate = useNavigate();


  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signupMutation.mutate(userData);

    navigate("/sign-in")
  };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
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
            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
            {success && <p style={{ color: "green", textAlign: "center" }}>{success}</p>}
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              value={userData.fullName}
              onChange={handleChange}
              className={inputClass}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={userData.email}
              onChange={handleChange}
              className={inputClass}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={userData.password}
              onChange={handleChange}
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
