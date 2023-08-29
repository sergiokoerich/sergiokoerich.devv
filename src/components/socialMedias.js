import { SiInstagram, SiLinkedin,SiGithub } from "react-icons/si";

export default function SocialMedia() {
    return (
      <div className='flex flex-col fixed z-40 bottom-20 left-10 gap-4'>
        <a
            href="https://www.linkedin.com/in/sergiokoerich/"
            target="_blank"
            rel="noreferrer">                   
            
            <SiLinkedin className="text-Blue text-2xl md:text-4xl"/>
        </a>
        <a
            href="https://github.com/sergiokoerich"
            target="_blank"
            rel="noreferrer">         
            
            <SiGithub className="text-Blue text-2xl md:text-4xl"/>
        </a>
        <a
            href="https://www.instagram.com/sergiokoerichp/"
            target="_blank"
            rel="noreferrer">         
            
            <SiInstagram className="text-Blue text-2xl md:text-4xl "/>
        </a>
      </div>    
  );
}