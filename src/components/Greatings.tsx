import photo from "../assets/avatar.png";

export const Greatings = () => {
  return (
    <div className="grid grid-cols-3 text-white w-full mb-10">
      <div className="col-span-3 sm:col-span-2">
        <h5 className="text-2xl">Hello, I'm Gabriel🫡</h5>
        <h1 className="font-bebas_neue font-extrabold text-8xl mx-auto tracking-wider">
          FRONT END
          <br />
          DEVELOPER
        </h1>
      </div>
      <div className="hidden sm:block sm:col-span-1">
        <img
          src={photo}
          alt="Gabriel Canteiro Cruz"
          className="h-64 border rounded-full mx-auto"
        />
      </div>
    </div>
  );
};
