import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface SignupPageProps {
  fullName: string;
  email: string;
  password: string | number
}

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState<SignupPageProps>({
    fullName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await axios.post("https://api.cashflow.rehx.name.ng/api/v1/auth/signup", formData);
      console.log("Signup successful:", response.data);
      // You can redirect the user, show a success message, etc.
    } catch (err) {
      setError("Failed to sign up. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
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
            <input
              type="text"
              name="fullname"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className={inputClass}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              required
            />
            <input
              type="password"
              name=""
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className={inputClass}
            />
            <button
              type="submit"
              className={regButClass}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting...." : "Submuit"}
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
