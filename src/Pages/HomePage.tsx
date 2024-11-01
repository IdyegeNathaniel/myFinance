import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 px-6 mx-24-">
        <div className="container">
            <h2 className="text-xl md:text-5xl font-bold mb-4 text-gray-900">Welcome to MyFinance Your Own Personal Finance Tracker!</h2>
        
        <div className="flex gap-2">
            <Link to={"/sign-in"} className="bg-black text-white py-3 px-4 rounded-md shadow-lg">Sign In</Link>
            <Link to={"/sign-up"} className="bg-black text-white py-3 px-4 rounded-md shadow-lg">Register</Link>
        </div>
        </div>
    </section>
  )
}

export default HomePage