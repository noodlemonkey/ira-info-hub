import { useState } from 'react';
import Section from './Section';
import InfoBox from './InfoBox';
import angledown from '../assets/angle-down.svg';
import angleup from '../assets/angle-up.svg';

const DropdownSection = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toRender = (
    <div className="flex flex-col gap-3 justify-center items-center w-full">
      {props.children}
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
            {props.title}
          </h3>
          <img className="h-4 w-4 ml-1" src={isOpen ? angleup : angledown} />
        </span>
        {!isOpen && (
          <p className="font-archivo-li text-secondary-green text-md md:text-lg">
            Click to expand
          </p>
        )}
      </div>
      {isOpen && toRender}
    </>
  );
};

export default DropdownSection;
