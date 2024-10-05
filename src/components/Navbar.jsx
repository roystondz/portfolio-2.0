import logo from "../assets/logo-no-background.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 mb-20">
        <div className="flex items-center flex-shrink-0">
            <img className="mx-2" width={25} height={30} src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-center gap-4 m-8 text-2xl">
            <FaLinkedin/>
            <FaGithub/>
            <FaTwitter/>
            <FaInstagram/>
        </div>
    </nav>
  )
}

export default Navbar
