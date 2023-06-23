import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import resume from '../assets/gabriel-cv-en.pdf'


export const Header = () => {
  
  return (
    <div className="py-4 mb-10 border-b ">
      {/* <h1 className="text-white text-3xl font-bebas_neue">
        {"<Gabriel Canteiro />"}
      </h1> */}
<div className="">
<ul className="flex text-white items-center text-3xl">
        <li className="mr-6">
          <AiFillGithub />
        </li>
        <li className="mr-6">
          <AiFillLinkedin />
        </li>
        <li className="mr-6">
          <AiOutlineInstagram />
        </li>
        <li className="mr-6">
          <FiMail />
        </li>
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
