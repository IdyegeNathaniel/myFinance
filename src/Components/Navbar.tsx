import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav className="bg-green-500 w-full h-20 border-b border-b-gray-500 flex justify-center items-center">
            <div className="">
                <img src={Logo} alt="Logo-img" className="w-auto h-20" />
            </div>
    </nav>
  )
}

export default Navbar