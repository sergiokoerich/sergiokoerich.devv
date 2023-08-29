import Eu from '../../assets/IMG_5156.jpg'
import { HiMail, HiPhone } from "react-icons/hi";
import { SiInstagram, SiLinkedin,SiGithub } from "react-icons/si";


export default function Home(){
    return(
        <div className='h-screen bg-gray-950'>
          <div className='slide-top animate-slide-top px-10 lg:px-52 flex md:flex-row flex-col justify-center items-center text-center md:text-start md:justify-around md:py-44 py-32'>
            <img className="md:h-80 md:w-80 h-44 w-44 rounded-full  shadow-[0_0_30px_theme('colors.Blue')]" src={Eu} alt="Minha foto" />
            <div className='mt-10 md:mt-0'>
                <h3 className='mb-5 sm:font-normal text-lg sm:mt-0 mt-6 text-center sm:text-3xl text-Blue'>Contatos</h3>
                <div>
                    <li className='text-white list-none flex gap-2 items-center text-lg'><HiMail className='text-Blue'/>skoerichp@gmail.com</li>
                    <li className='text-white list-none flex gap-2 items-center text-lg'><HiPhone className='text-Blue'/>+55 (48) 99839-9894</li>
                </div>
                <div>
                    <div className='flex flex-row gap-4 mt-6 justify-center'>
                        <a
                            href="https://www.linkedin.com/in/sergiokoerich/"
                            target="_blank"
                            rel="noreferrer">                   
                            
                            <SiLinkedin className="text-Blue md:text-4xl"/>
                        </a>
                        <a
                            href="https://github.com/sergiokoerich"
                            target="_blank"
                            rel="noreferrer">         
                            
                            <SiGithub className="text-Blue md:text-4xl"/>
                        </a>
                        <a
                            href="https://www.instagram.com/sergiokoerichp/"
                            target="_blank"
                            rel="noreferrer">         
                            
                            <SiInstagram className="text-Blue md:text-4xl "/>
                        </a>
                    </div>    
                </div>
                
            </div>
          </div>
        </div>
        
    )
};