import InfoBox from './InfoBox';

const Section = ({ title, array, section, isSubSection, headerStyle }) => {
  let headerToRender = !title ? null : isSubSection ? (
    <h4 className="font-archivo text-secondary-green pt-6 text-lg">{title}</h4>
  ) : (
    <h3 className="font-archivo-eb text-secondary-green text-lg">{title}</h3>
  );
  return (
    <>
      {headerToRender}
      {array.map((data, i) => (
        <InfoBox key={i + section} data={data} />
      ))}
    </>
  );
};

export default Section;
