import { HiMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import Button from "./button";
import Logo from '../assets/Logo.gif'
import { Link } from 'react-router-dom';


const NavLinks = () => {
    return (
      <>
        <div className="font-custom font-semibold">
          <Link to="/">
            <Button text="Home" />
          </Link>
        </div>
        <div className="font-custom font-semibold">
          <Link to="/sobre">
            <Button text="Sobre" />
          </Link>
        </div>
        <div className="font-custom font-semibold">
          <Link to="/habilidades">
            <Button text="Habilidades" />
          </Link>
        </div>
        <div className="font-custom font-semibold">
          <Link to="/projetos">
            <Button text="Projetos" />
          </Link>
        </div>
        <div className="font-custom font-semibold">
          <Link to="/contatos">
            <Button text="Contatos" />
          </Link>
        </div>
      </>
    );
  };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className="
      bg-black flex-wrap mx-auto flex items-center justify-between py-2 z-40 
        px-10 lg:px-44 top-0 left-0 w-full fixed border-b-2 border-gray-900"
    >
      <img className="flex-none w-48" src={Logo} alt="Logo" />
      <nav className="w-1/3 flex justify-end items-center py-4">
        <div className="hidden gap-2 w-full items-center justify-end xl:flex">
          <NavLinks />         
        </div>
        <div className="xl:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <HiOutlineX className="h-8 w-8 text-Blue" />
            ) : (
              <HiMenu className="h-8 w-8 text-Blue" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full flex-col items-center gap-4 mt-4">
          <NavLinks />
        </div>
      )}
    </header>
  );
}