import Header from './components/Header';
import Section from './components/Section';
import InfoBox from './components/InfoBox';
import guideData from './guide-data';
import nyResources from './ny-resources';
import referenceData from './reference-data';

const App = () => {
  return (
    <div className="h-[100dvh] w-screen flex justify-center items-center bg-tertiary-green xl:bg-offwhite">
      <div className="grid grid-rows-[auto_full] h-[calc(100dvh-10px)] w-[calc(100dvw-10px)] bg-offwhite border rounded-lg border-tertiary-green p-3 overflow-hidden xl:border-4 xl:w-[80%] xl:h-[90%] xl:p-5">
        <Header />
        <div className="scroll h-full flex flex-col items-center text-center gap-3 pt-3 overflow-auto z-50 xl:gap-4">
          <Section
            title="Get Started:"
            array={guideData}
            section="guides"
            isSubSection={false}
          />
          <hr className="w-[80%] mt-6 border-t border-solid border-quaternary-green" />
          <Section
            title="New York Resources:"
            array={nyResources.general}
            section="ny"
            isSubSection={false}
          />
          <Section
            title="More on NYSERDA Energy Savings Programs for Consumers:"
            array={nyResources.nyserda}
            section="nyserda"
            isSubSection
          />
          <hr className="w-[80%] mt-6 border-t border-solid border-quaternary-green" />
          <Section
            title="Further Reference:"
            array={referenceData}
            section="references"
            isSubSection={false}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
