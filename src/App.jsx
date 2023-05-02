import InfoBox from './components/InfoBox';

const dataArray = [
  {
    title: 'IRA Savings Calculator',
    description: `Rewiring America's app to estimate what benefits you may be eligible to
  receive.`,
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
    description: `12 Regional Clean Energy Hubs to serve as centers of outreach, awareness, and education and help foster residents' participation, especially those in underserved or otherwise disadvantaged communities, in New York's clean energy transition.`,
    link: 'https://www.nyserda.ny.gov/All-Programs/Regional-Clean-Energy-Hubs',
  },
  {
    title: '',
    description: '',
    link: '',
  },
];

const App = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-tertiary-green">
      <div className="h-[calc(100dvh-10px)] w-[calc(100dvw-10px)] bg-white border rounded-lg border-tertiary-green p-3 divide-y-2 overflow-hidden">
        <header className="flex flex-col justify-center items-center pb-3">
          <h1 className="font-archivo-eb text-primary-green text-2xl">
            IRA Hub
          </h1>
          <h2 className="font-archivo-li text-md text-secondary-green text-center">
            Here are some helpful links to guide you through the ways in which
            the Inflation Reduction Act can benefit New Yorkers.
          </h2>
        </header>
        <div className="no-scrollbar h-full flex flex-col gap-3 pt-3 overflow-y-auto">
          {dataArray.map((data) => (
            <InfoBox data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
