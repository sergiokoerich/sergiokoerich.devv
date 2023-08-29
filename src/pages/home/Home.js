import Eu from '../../assets/IMG_5156.jpg'
import Curriculo from '../../download/curriculo.pdf'
import { HiMail, HiPhone } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

export default function Home(){
    return(
        <div className='h-screen bg-gray-950'>
          <div className='slide-top animate-slide-top px-10 lg:px-52 flex md:flex-row flex-col justify-center items-center text-center md:text-start md:justify-around md:py-40 py-32'>
            <img className="md:h-80 md:w-80 h-44 w-44 rounded-full  shadow-[0_0_30px_theme('colors.Blue')]" src={Eu} alt="Minha foto" />
            <div>
                <h3 className='mb-5  sm:font-normal text-lg sm:text-left sm:mt-0 mt-6 text-center sm:text-3xl text-Blue'>Bem-vindo(a)</h3>
                <h1 className=' font-bold md:text-5xl text-2xl md:text-start text-center text-white mb-7'>Sérgio Koerich</h1>
                <div>
                    <li className='text-white list-none flex gap-2 items-center text-lg'><HiMail className='text-Blue'/>skoerichp@gmail.com</li>
                    <li className='text-white list-none flex gap-2 items-center text-lg'><HiPhone className='text-Blue'/>+55 (48) 99839-9894</li>
                    <li className='text-white list-none flex gap-2 items-center text-lg'><MdLocationOn className='text-Blue'/>Florianópolis, SC - Brasil</li>
                </div>
                <a
                    href={Curriculo}
                    download="curriculo"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button 
                        className="mt-5  font-bold shadow-[0_0_10px_theme('colors.Blue')] 
                                hover:shadow-[0_0_20px_theme('colors.Blue')] text-white bg-gray-900
                                hover:bg-Blue  hover:text-gray-600 py-2 px-4 rounded-lg 
                                transition duration-300 ease-in-out">
                        Download Currículo
                    </button>
                </a>
            </div>
          </div>
        </div>
        
    )
};