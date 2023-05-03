import Button from './Button';

const InfoBox = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center border-2 border-quaternary-green rounded-md p-3 gap-1 xl:gap-3 xl:w-[90%] xl:p-5">
      <Button text={data.title} link={data.link} />
      <p className="font-archivo text-primary-green xl:text-lg">
        {data.description}
      </p>
    </div>
  );
};

export default InfoBox;
