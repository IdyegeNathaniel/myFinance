import { Link } from "react-router-dom"

const SigninPage = () => {
  return (
    <section className="w-full flex items-center justify-center py-20">
      <div className="container mx-auto">
        <div className="bg-[#dadad9] max-w-xl mx-4 md:m-auto rounded-md shadow-md px-4 py-2 text-black">
  
          <form action="" className="flex flex-col gap-y-2 py-6">
          <h2 className="text-2xl text-center font-bold mb-4">Login</h2>
            <input type="text" name="name" placeholder="Enter Name" className="w-full py-3 px-2 mb-2 outline-none" />
            <input type="password" name="" placeholder="Enter Password" className="w-full py-3 px-2 mb-4 outline-none"/>
            <button type="submit" className="bg-green-500 hover:bg-green-600 py-2 px-4 mb-2 cursor-pointer text-white font-bold">Sign In</button>
            <p className="text-center text-xs">Or</p>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 mx-auto py-2 px-4 cursor-pointer text-white font-bold rounded-md shadow-lg">Continue With Google</button>
            <p className="text-xs text-center">Don't have an account? <Link to={"/sign-up"} className="underline">Sign Up</Link> </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SigninPage