import React, { useState } from 'react';
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import FirstPortfolio from '../assets/FirstPortfolio.png';
import FocusTimer from '../assets/FocusTimer.png'
import ListaTarefas from '../assets/ListaTarefas.png'
import Ndi from '../assets/Ndi.png'

export default function CustomCarousel() {
  const slides = [
    {
      imgUrl: Ndi,
      label: "Primeiro freelancer",
      content: "Site para um cliente, todo em React, Tailwind, Next.Js e ultilizei a plataforma da AWS.",
      link: "https://www.ndiproductora.com/",
    },
    { 
      imgUrl: FirstPortfolio,
      label: "Meu primeiro Portfolio",
      content: "Meu primeiro portfolio, usando apenas Html, CSS e Js.",
      link: "https://sergiokoerich-dev.vercel.app/",
    },
    {
      imgUrl: FocusTimer,
      label: "Focus Timer",
      content: "Neste projeto usei Html, CSS e pratiquei muito meu JS.",
      link: "https://focustimer-sergiokoerich.vercel.app/",
    },
    {
      imgUrl: ListaTarefas,
      label: "Lista de Tarefas",
      content: "Projeto de uma lista de tarefas, ultilizando PHP e MySQL.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7080313967834767360/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative">
      <div className="max-w-[1000px] max-h-[500px] relative rounded-lg">
        <a href={slides[currentIndex].link} target="_blank" rel="noopener noreferrer">
          <img
            src={slides[currentIndex].imgUrl}
            className="block w-full max-h-[380px] rounded-md shadow-[0_0_20px_theme('colors.Blue')]"
            alt="Slide"
          />
        </a>
        <div className="absolute inset-x-[15%] bottom-1 max-[767px]:fixed max-[767px]:py-0 mt-10 md:mt-0 py-5 text-center text-white md:block">
          <h5 className="text-xl">{slides[currentIndex].label}</h5>
          <p>{slides[currentIndex].content}</p>
        </div>
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={prevSlide}
      >
        <AiFillCaretLeft className='text-2xl text-Blue'/>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={nextSlide}
      >
        <AiFillCaretRight className='text-2xl text-Blue'/>
      </button>
    </div>
  );
}
