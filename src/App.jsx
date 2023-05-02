import InfoBox from './components/InfoBox';

const App = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-[calc(100dvh-10px)] w-[calc(100dvw-10px)] border-4 rounded-lg border-tertiary-green p-3">
        <header className="flex flex-col justify-center items-center">
          <h1 className="font-archivo-eb text-primary-green text-2xl">
            IRA Hub
          </h1>
          <h2 className="font-archivo-li text-md text-secondary-green text-center">
            Here are some helpful links to guide you through the ways in which
            the Inflation Reduction Act can benefit you.
          </h2>
        </header>

        <InfoBox />
      </div>
    </div>
  );
};

export default App;
