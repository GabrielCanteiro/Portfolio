import supportPetsLogo from "../assets/supportpets-new-logo.png";
import rwInteractiveLogo from "../assets/RWI-logo-bright.png";
import stinkySocksLogo from "../assets/stinky-socks-logo.png";
import villaresMetals from "../assets/vs-metals-logo.png";

export const Companies = () => {
  return (
    <div className="border-y py-4 mb-5  ">
      <div className="grid w-full gap-10 sm:grid-cols-4 grid-cols-2 items-center overflow-x-auto">
        <img
          src={rwInteractiveLogo}
          alt="RW Interactive"
          className="w-[200px] grayscale "
        />
        <img
          src={stinkySocksLogo}
          alt="Stinky Socks Hockey"
          className="w-[200px] grayscale "
        />
        <img
          src={supportPetsLogo}
          alt="Support Pets"
          className="w-[200px] invert grayscale "
        />
        <img
          src={villaresMetals}
          alt="Support Pets"
          className="w-[200px] invert grayscale"
        />
      </div>
    </div>
  );
};
