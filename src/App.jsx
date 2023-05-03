import InfoBox from './components/InfoBox';
import guideData from './guide-data';

const App = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-tertiary-green xl:bg-offwhite">
      <div className="grid grid-rows-[auto_full] h-[calc(100dvh-10px)] w-[calc(100dvw-10px)] bg-offwhite border rounded-lg border-tertiary-green p-3 overflow-hidden xl:border-4 xl:w-[80%] xl:h-[90%] xl:p-5">
        <header className="flex flex-col justify-center items-center pb-3">
          <h1 className="font-archivo-eb text-primary-green text-2xl">
            IRA Info Hub
          </h1>
          <h2 className="font-archivo-li text-md text-secondary-green text-center">
            Here are some helpful links to guide New Yorkers through the ways in
            which the Inflation Reduction Act can benefit you.
          </h2>
        </header>
        <div className="scroll h-full flex flex-col items-center gap-3 pt-3 overflow-auto xl:gap-4">
          {guideData.map((data, i) => (
            <InfoBox key={i + 'guides'} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
