import supportPetsLogo from "../assets/supportpets-new-logo.png";
import rwInteractiveLogo from "../assets/RWI-logo-bright.png";
import stinkySocksLogo from "../assets/stinky-socks-logo.png";
import villaresMetals from "../assets/vs-metals-logo.png";

export const Companies = () => {
  return (
    <div className="border-y py-4 grid place-content-center mb-5 overflow-x-hidden">
      <div className="grid w-full gap-20 grid-cols-4 items-center overflow-auto">
        <img
          src={rwInteractiveLogo}
          alt="RW Interactive"
          className="max-w-[200px] grayscale "
        />
        <img
          src={stinkySocksLogo}
          alt="Stinky Socks Hockey"
          className="max-w-[200px] grayscale "
        />
        <img
          src={supportPetsLogo}
          alt="Support Pets"
          className="max-w-[200px] invert grayscale "
        />
        <img
          src={villaresMetals}
          alt="Support Pets"
          className="max-w-[200px] invert grayscale"
        />
      </div>
    </div>
  );
};
