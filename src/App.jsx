import InfoBox from './components/InfoBox';

const dataArray = [
  {
    title: 'IRA Savings Calculator',
    description: `Rewiring America has published an IRA Savings Calculator that can
    get you started on figuring out what you may be eligible for.`,
    link: 'https://www.rewiringamerica.org/app/ira-calculator',
  },
  {
    title: 'Free Energy Audit',
    description:
      'New York State Energy Research and Development Authority (NYSERDA) provides you with a top-to-bottom look at where your home is wasting energy.',
    link: 'https://www.nyserda.ny.gov/All-Programs/Residential-Energy-Assessment-Programs',
  },
  {
    title: 'Free Energy Coaches',
    description: `New Yorkers for Clean Power has energy coaches that can help you answer your energy questions as well as answer questions you didn't know you had.`,
    link: 'https://nyforcleanpower.org/cleanenergycoaching/',
  },
  {
    title: 'Contact Your Regional Clean Energy Hub',
    description: `New York plans to establish 12 Regional Clean Energy Hubs that will act as focal points for educating and raising awareness among residents about clean energy. The aim is to encourage participation in the clean energy transition, particularly among people in underserved or disadvantaged communities.`,
    link: 'https://www.nyserda.ny.gov/All-Programs/Regional-Clean-Energy-Hubs',
  },
  {
    title: 'Learn About Heat Pumps',
    description: `Using NYSERDA's resources, learn about heating and cooling your home with heat pumps and find a qualified clean heat contractor.`,
    link: 'https://www.nyserda.ny.gov/All-Programs/Heat-Pump-Program',
  },
  {
    title: 'New Vehicle Tax Credit Eligibility',
    description:
      'Learn which newly purchased vehicles may be eligible for a tax credit of up to $7,500.',
    link: 'https://fueleconomy.gov/feg/tax2023.shtml',
  },
  {
    title: 'Used Vehicle Tax Credit Eligibility',
    description:
      'Learn which pre-owned vehicles purchased on or after January 1, 2023 are eligible for a federal income tax credit.',
    link: 'https://fueleconomy.gov/feg/taxused.shtml',
  },
];

const App = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-tertiary-green xl:bg-white">
      <div className="grid grid-rows-[auto_full] h-[calc(100dvh-10px)] w-[calc(100dvw-10px)] bg-white border rounded-lg border-tertiary-green p-3 divide-y-2 overflow-hidden xl:border-4 xl:w-[80%] xl:h-[90%] xl:p-5">
        <header className="flex flex-col justify-center items-center pb-3">
          <h1 className="font-archivo-eb text-primary-green text-2xl">
            IRA Info Hub
          </h1>
          <h2 className="font-archivo-li text-md text-secondary-green text-center">
            Here are some helpful links to guide New Yorkers through the ways in
            which the Inflation Reduction Act can benefit you.
          </h2>
        </header>
        <div className="no-scrollbar h-full flex flex-col gap-3 pt-3 overflow-auto">
          {dataArray.map((data) => (
            <InfoBox data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
