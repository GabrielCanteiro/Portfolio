import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import resume from "../assets/gabriel-cv-en.pdf";

export const Header = () => {
  return (
    <div className="py-4 mb-10 border-b flex sm:flex-row flex-col justify-between " >
       <h1 className="text-white text-3xl font-bebas_neue pb-2 sm:pb-0 text-center sm:text-left">
        {"<GCC />"}
      </h1> 
      <div className="sm:mx-0 mx-auto">
        <ul className="flex text-white items-center text-3xl">
          <a href="https://github.com/GabrielCanteiro" target="blank">
            <li className="mr-6">
              <AiFillGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/gabrielcanteiro/" target="blank">
            <li className="mr-6">
              <AiFillLinkedin />
            </li>
          </a>
          <a href="https://www.instagram.com/gabrielcanteiro/" target="blank">
            <li className="mr-6">
              <AiOutlineInstagram />
            </li>
          </a>
          <a href="mailto:gabrielcanteiropt@gmail.com" target="blank">
            <li className="mr-6">
              <FiMail />
            </li>
          </a>
          <a href={resume} download target="blank">
            <button className="flex text-lg border p-1 rounded items-center">
              Resume
              <BsDownload className="ml-3" />
            </button>
          </a>
        </ul>
      </div>
    </div>
  );
};
