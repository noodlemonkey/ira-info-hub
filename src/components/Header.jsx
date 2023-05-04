const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center pb-3">
      <h1 className="font-archivo-eb text-primary-green text-2xl">
        IRA Info Hub
      </h1>
      <h2 className="font-archivo-li text-md text-secondary-green text-center md:text-lg">
        Here are some helpful links to guide you through the ways in which the
        Inflation Reduction Act can benefit you.
      </h2>
      <hr className="w-[80%] mt-2 border-t border-solid border-quaternary-green" />
    </header>
  );
};

export default Header;
