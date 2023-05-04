import InfoBox from './InfoBox';

const Section = ({ title, array, section, isSubSection }) => {
  return (
    <>
      {isSubSection ? (
        <h4 className="font-archivo text-secondary-green pt-6 text-lg">
          {title}
        </h4>
      ) : (
        <h3 className="font-archivo-eb text-secondary-green text-lg">
          {title}
        </h3>
      )}
      {array.map((data, i) => (
        <InfoBox key={i + section} data={data} />
      ))}
    </>
  );
};

export default Section;
