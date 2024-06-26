import { useEffect, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { Button } from "./button";

export function HeaderScrolled() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 570) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="headerScrolled"
      className={`bg-neutral-900 ${
        isScrolled
          ? "fixed top-0 left-0 w-full z-50 mt-14"
          : "block w-full z-50 "
      }`}
    >
      <div className="relative container mx-auto flex items-center gap-4 justify-between px-4 lg:px-0 py-2 font-normal text-base text-white">
        <div
          className="text-white flex gap-1 items-center cursor-pointer sm:hidden"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          Arquitetura
          <div className="sm:hidden">
            <ChevronDownIcon className={!menuIsOpen ? "" : "hidden"} />
            <ChevronUpIcon className={menuIsOpen ? "" : "hidden"} />
          </div>
        </div>
        <div className="hidden sm:flex lg:text-lg lg:gap-6 justify-between w-full px-4">
          <a
            className="text-white flex gap-1 items-center cursor-pointer"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            Arquitetura
          </a>
          <a href="#desempenho" className="hover:text-gray-400">
            Desempenho
          </a>
          <a href="#ray-tracing" className="hover:text-gray-400">
            Ray Tracing
          </a>
          <a href="#dlss-3" className="hover:text-gray-400">
            DLSS 3
          </a>
          <a href="#reflex" className="hover:text-gray-400">
            Reflex
          </a>
          <div>...</div>
        </div>
        <Button size="small">Comprar</Button>
      </div>
      {menuIsOpen && (
        <div className="bg-neutral-800 text-white p-4 absolute top-full left-0 w-full">
          <nav className="flex flex-col space-y-2 font-normal">
            <a
              href="#arquitetura"
              className="hover:text-gray-400 w-fit py-1"
              onClick={() => {
                setMenuIsOpen(!menuIsOpen);
              }}
            >
              Arquitetura
            </a>
            <a
              href="#desempenho"
              className="hover:text-gray-400 w-fit py-1"
              onClick={() => {
                setMenuIsOpen(!menuIsOpen);
              }}
            >
              Desempenho
            </a>
            <a
              href="#ray-tracing"
              className="hover:text-gray-400 w-fit py-1"
              onClick={() => {
                setMenuIsOpen(!menuIsOpen);
              }}
            >
              Ray Tracing
            </a>
            <a
              href="#dlss-3"
              className="hover:text-gray-400 w-fit py-1"
              onClick={() => {
                setMenuIsOpen(!menuIsOpen);
              }}
            >
              DLSS 3
            </a>
            <a
              href="#reflex"
              className="hover:text-gray-400 w-fit py-1"
              onClick={() => {
                setMenuIsOpen(!menuIsOpen);
              }}
            >
              Reflex
            </a>
            <a
              href="#criacao"
              className="hover:text-gray-400 w-fit py-1"
              onClick={() => {
                setMenuIsOpen(!menuIsOpen);
              }}
            >
              Criação
            </a>
            <a
              href="#especificacoes"
              className="hover:text-gray-400 w-fit py-1"
              onClick={() => {
                setMenuIsOpen(!menuIsOpen);
              }}
            >
              Especificações
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
