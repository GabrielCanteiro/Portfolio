import { Header } from "./components/Header";
import "tailwindcss/tailwind.css";
import { Greatings } from "./components/Greatings";
import { Companies } from "./components/Companies";
import Projects from "./components/Projects/Projects";
import { About } from "./components/About";
import { Experience } from "./components/Experience";

function App() {
  return (
    <div className="bg-[#191919] h-full">
      <div className="max-w-7xl mx-auto border-b-zinc-400 text-white p-4">
        
        <Header/>
        <Greatings/>
        <Companies/>
        <Projects/>
        <About/>
        <Experience/>

      </div>
    </div>
  );
}

export default App;
