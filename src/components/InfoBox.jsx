import Button from './Button';

const InfoBox = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center border-2 border-tertiary-green rounded-md p-3">
      <Button text={data.title} link={data.link} />
      <p className="font-archivo text-primary-green">{data.description}</p>
    </div>
  );
};

export default InfoBox;
