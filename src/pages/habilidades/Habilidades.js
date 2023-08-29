import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs, SiNodedotjs, SiPython, SiMysql, SiGithub, SiGit } from "react-icons/si";
import ProgressBar from '../../components/progressBar';
import React, { useEffect } from "react";

export default function Habilidades() {
  useEffect(() => {
    let tabs = document.querySelectorAll(".tab");
    let indicator = document.querySelector(".indicator");
    let panels = document.querySelectorAll(".tab-panel");

    indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
    indicator.style.left =
      tabs[0].getBoundingClientRect().left -
      tabs[0].parentElement.getBoundingClientRect().left +
      "px";

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        let tabTarget = tab.getAttribute("aria-controls");

        indicator.style.width = tab.getBoundingClientRect().width + "px";
        indicator.style.left =
          tab.getBoundingClientRect().left -
          tab.parentElement.getBoundingClientRect().left +
          "px";

        panels.forEach((panel) => {
          let panelId = panel.getAttribute("id");
          if (tabTarget === panelId) {
            panel.classList.remove("invisible", "opacity-0");
            panel.classList.add("visible", "opacity-100");
          } else {
            panel.classList.add("invisible", "opacity-0");
          }
        });
      });
    });
  }, []);

  return (
    <div className="h-screen bg-gray-950">
      <div className="slide-top animate-slide-top px-10 lg:px-52 py-36">
        <div className="max-w-3xl mx-auto px-8 sm:px-0 ">
          <div className="sm:w-7/12 sm:mx-auto">
            <div
              role="tablist"
              aria-label="tabs"
              className="relative sm:w-max mx-auto h-12 grid grid-cols-3 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition"
            >
              <div className="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-gray-950 shadow-[0_0_5px_theme('colors.Blue')]"></div>
              <button
                role="tab"
                aria-selected="true"
                aria-controls="panel-1"
                id="tab-1"
                tabIndex="0"
                className="relative block h-10 px-6 tab rounded-full sm:mb-0 mb-2"
              >
                <span className="text-Blue">Front-End</span>
              </button>
              <button
                role="tab"
                aria-selected="false"
                aria-controls="panel-2"
                id="tab-2"
                tabIndex="-1"
                className="relative block h-10 px-6 tab rounded-full sm:mb-0 mb-2"
              >
                <span className="text-Blue">Back-End</span>
              </button>
              <button
                role="tab"
                aria-selected="false"
                aria-controls="panel-3"
                id="tab-3"
                tabIndex="-1"
                className="relative block h-10 px-6 tab rounded-full mb-0 "
              >
                <span className="text-Blue">Outros</span>
              </button>
            </div>
            <div className="mt-6 relative rounded-3xl bg-gray-950 shadow-[0_0_20px_theme('colors.Blue')]">
              <div
                role="tabpanel"
                id="panel-1"
                className="tab-panel p-6 transition duration-300"
              >
                <h2 className="text-xl font-semibold text-center text-Blue">
                  Front-End
                </h2>
                <ul className="mt-4 w-full md:max-w-3xl mx-auto text-center text-Blue">
                  <li className="flex items-center justify-between md:flex gap-4 font-bold mb-2">
                    <div className="flex items-center gap-4">
                      <FaHtml5 />
                      HTML
                    </div>
                    <div className="flex-1">
                      <ProgressBar percent={100} />
                    </div>
                  </li>
                  <li className="flex items-center justify-between md:flex gap-4 font-bold mb-2">
                    <div className="flex items-center gap-4">
                      <FaCss3Alt />
                      CSS
                    </div>
                    <div className="flex-1">
                      <ProgressBar percent={100} />
                    </div>
                  </li>
                  <li className="flex items-center justify-between md:flex gap-4 font-bold mb-2">
                    <div className="flex items-center gap-4">
                      <FaJsSquare />
                      JAVASCRIPT
                    </div>
                    <div className="flex-1">
                      <ProgressBar percent={90} />
                    </div>
                  </li>
                  <li className="flex items-center justify-between md:flex gap-4 font-bold mb-2">
                    <div className="flex items-center gap-4">
                      <FaReact />
                      REACT
                    </div>
                    <div className="flex-1">
                      <ProgressBar percent={85} />
                    </div>
                  </li>
                  <li className="flex items-center justify-between md:flex gap-4 font-bold mb-2">
                    <div className="flex items-center gap-4">
                      <BiLogoTailwindCss />
                      TAILWIND
                    </div>
                    <div className="flex-1">
                      <ProgressBar percent={85} />
                    </div>
                  </li>
                  <li className="flex items-center justify-between md:flex gap-4 font-bold mb-2">
                    <div className="flex items-center gap-4">
                      <BiLogoTypescript />
                      TYPESCRIPT
                    </div>
                    <div className="flex-1">
                      <ProgressBar percent={50} />
                    </div>
                  </li>
                </ul>
              </div>
              <div
                role="tabpanel"
                id="panel-2"
                className="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300 w-full"
              >
                <h2 className="text-xl font-semibold text-center text-Blue">
                  Back-End
                </h2>
                <ul className="mt-4 w-full md:max-w-3xl mx-auto text-center text-Blue">
                  <li className="flex items-center justify-between md:flex gap-4 font-bold mb-2">
                    <div className="flex items-center gap-4">
                      <SiNextdotjs />
                      NEXT
                    </div>
                    <div className="flex-1">
                      <ProgressBar percent={50} />
                    </div>
                  </li>
                  <li className="flex items-center justify-between md:flex gap-4 font-bold mb-2">
                    <div className="flex items-center gap-4">
                      <SiNodedotjs />
                      NODE
                    </div>
                    <div className="flex-1">
                      <ProgressBar percent={60} />
                    </div>
                  </li>
                  <li className="flex items-center justify-between md:flex gap-4 font-bold mb-2">
                    <div className="flex items-center gap-4">
                      <SiPython />
                      PYTHON
                    </div>
                    <div className="flex-1">
                      <ProgressBar percent={70} />
                    </div>
                  </li>
                  <li className="flex items-center justify-between md:flex gap-4 font-bold mb-2">
                    <div className="flex items-center gap-4">
                      <SiMysql />
                      MYSQL
                    </div>
                    <div className="flex-1">
                      <ProgressBar percent={70} />
                    </div>
                  </li>
                </ul>
              </div>
              <div
                role="tabpanel"
                id="panel-3"
                className="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300 w-full"
              >
                <h2 className="text-xl font-semibold text-center text-Blue">
                  Outros
                </h2>
                <ul className="mt-4 w-full md:max-w-3xl mx-auto text-center text-Blue">
                  <li className="flex items-center justify-between md:flex gap-4 font-bold mb-2">
                    <div className="flex items-center gap-4">
                      <SiGithub />
                      GITHUB
                    </div>
                    <div className="flex-1">
                      <ProgressBar percent={90} />
                    </div>
                  </li>
                  <li className="flex items-center justify-between md:flex gap-4 font-bold mb-2">
                    <div className="flex items-center gap-4">
                      <SiGit />
                      GIT
                    </div>
                    <div className="flex-1">
                      <ProgressBar percent={90} />
                    </div>
                  </li>  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
