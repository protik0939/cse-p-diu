import { FaFacebookSquare, FaLinkedin, FaRegAddressCard } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

const ContactUs = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full space-y-2 py-16">
            <FaRegAddressCard className="text-[150px]"/>
            <h1 className="text-2xl font-bold my-4">Contact me</h1>
            <Link target="_blank" to='https://www.linkedin.com/in/protik0939/'><div className="flex items-center justify-center space-x-2"><FaLinkedin /><h1>protik0939</h1></div></Link>
            <Link target="_blank" to='https://www.facebook.com/protik0939/'><div className="flex items-center justify-center space-x-2"><FaFacebookSquare /><h1>protik0939</h1></div></Link>
            <Link target="_blank" to='mailto:protik0939@gmail.com'><div className="flex items-center justify-center space-x-2"><IoIosMail /><h1>protik0939@gmail.com</h1></div></Link>
            <Link target="_blank" to='tel:+8801721846361'><div className="flex items-center justify-center space-x-2"><IoCall /><h1>+8801721846361</h1></div></Link>
            <div className="sm:mb-[60px]" />
            </div>
    );
};

export default ContactUs;