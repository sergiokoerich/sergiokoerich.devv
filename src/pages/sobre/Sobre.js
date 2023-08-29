import Eu from '../../assets/IMG_5156.jpg'

export default function Sobre(){
    return(
        <div className='h-screen bg-gray-950'>
          <div className='gap-5 slide-top animate-slide-top px-8 md:px-52 flex flex-col justify-center items-center md:flex-row md:justify-around md:py-44 py-32  '>
            <img className="md:h-80 md:w-80 h-28 w-28 rounded-full  shadow-[0_0_30px_theme('colors.Blue')]" src={Eu} alt="Minha foto" />
            <div className='mt-2 w-1/2 '>
                <h3 className='mb-2 font-normal text-3xl text-center text-Blue'>Sobre mim</h3>
                <h1 className='font-bold md:text-sm text-xs text-white md:mb-7 mb-0 text-center justify-center md:w-auto '>
                            Jovem estudante de programação, atualmente
                            trabalhando como freelancer com experiência em React,
                            Next.js, Tailwind CSS, bancos de dados e Node.js. Ansioso
                            para aplicar habilidades e conhecimentos adquiridos,
                            buscando expandir experiência e fazer uma contribuição
                            positiva em um ambiente profissional desafiador. Com uma
                            mentalidade de aprendizado constante, estou determinado
                            a se destacar e crescer como desenvolvedor.</h1>
               
                
            </div>
          </div>
        </div>
        
    )
};