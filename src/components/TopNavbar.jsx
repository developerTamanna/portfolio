import { FaGithub, FaLinkedin,FaPhone, FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const TopNavbar = () => {
  return (
    <div>
        {/* Floating Horizontal Navbar */}
        <div className="fixed top-0 left-0 w-full  z-20 p-4  flex justify-between items-center">
            <div className=" text-2xl font-bold">
                <a href="/" className="hover:text-blue-500 text-blue-400 transition-colors">MT .CODE</a>
            </div>
                <div className="flex gap-4 text-2xl text-blue-400">
                    <a className='hover:text-red-500 transition-colors text-[18px]' href="https://github.com/yourusername" target="_blank">< FaGithub /></a>
                    <a className='hover:text-red-500 transition-colors text-[18px]' href="https://linkedin.com/in/yourusername" target="_blank"><FaLinkedin /></a>
                    <a className='hover:text-red-500 transition-colors text-[18px]' href="https://twitter.com/yourusername" target="_blank"><FaTwitter /></a>
                    <a className='hover:text-red-500 transition-colors text-[18px]' href="https://facebook.com/yourusername" target="_blank"><FaFacebook /></a>
                    <a className='hover:text-red-500 transition-colors text-[18px]' href="https://instagram.com/yourusername" target="_blank"><FaInstagram /></a>
                    <a href="tel:+8801234567890" className="hover:text-red-500 transition-colors text-[18px]">
                        <FaPhone />
                    </a>
                    <a href="https://wa.me/8801234567890" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors text-[18px]">
                        <FaWhatsapp />
                    </a>
                </div>
        </div>
    </div>
  )
}

export default TopNavbar
