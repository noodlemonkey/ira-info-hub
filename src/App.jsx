import InfoBox from './components/InfoBox';
import guideData from './guide-data';
import referenceData from './reference-data';

const App = () => {
  return (
    <div className="h-[100dvh] w-screen flex justify-center items-center bg-tertiary-green xl:bg-offwhite">
      <div className="grid grid-rows-[auto_full] h-[calc(100dvh-10px)] w-[calc(100dvw-10px)] bg-offwhite border rounded-lg border-tertiary-green p-3 overflow-hidden xl:border-4 xl:w-[80%] xl:h-[90%] xl:p-5">
        <header className="flex flex-col justify-center items-center pb-3">
          <h1 className="font-archivo-eb text-primary-green text-2xl">
            IRA Info Hub
          </h1>
          <h2 className="font-archivo-li text-md text-secondary-green text-center md:text-lg">
            Here are some helpful links to guide New Yorkers through the ways in
            which the Inflation Reduction Act can benefit you.
          </h2>
          <hr className="w-[80%] mt-2 border-t border-solid border-quaternary-green" />
        </header>
        <div className="scroll h-full flex flex-col items-center gap-3 pt-3 overflow-auto xl:gap-4">
          <h3 className="font-archivo-eb text-secondary-green text-lg">
            Get Started:
          </h3>
          {guideData.map((data, i) => (
            <InfoBox key={i + 'guides'} data={data} />
          ))}
          <hr className="w-[80%] mt-6 border-t border-solid border-quaternary-green" />
          <h3 className="font-archivo-eb text-secondary-green pt-6 text-lg">
            Further Reference:
          </h3>
          {referenceData.map((data, i) => (
            <InfoBox key={i + 'references'} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
