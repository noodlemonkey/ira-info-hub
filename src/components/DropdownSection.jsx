import { useState } from 'react';
import Section from './Section';
import InfoBox from './InfoBox';
import angledown from '../assets/angle-down.svg';
import angleup from '../assets/angle-up.svg';

const DropdownSection = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toRender = (
    <div className="flex flex-col gap-3 justify-center items-center w-full">
      {data.general.map((data, i) => (
        <InfoBox key={i + 'ny'} data={data} />
      ))}
      <Section
        title="More on NYSERDA Energy Savings Programs for Consumers:"
        array={data.nyserda}
        section="nyserda"
        isSubSection
      />
    </div>
  );

  return (
    <>
      <div
        className="flex flex-col justify-center items-center mt-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center">
          <h3 className="font-archivo-eb text-secondary-green text-lg">
            {title}
          </h3>
          <img className="h-4 w-4 ml-1" src={isOpen ? angleup : angledown} />
        </span>
        {!isOpen && (
          <p className="font-archivo-li text-secondary-green">
            Click to expand
          </p>
        )}
      </div>
      {isOpen && toRender}
    </>
  );
};

export default DropdownSection;
