const Button = ({ text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="max-w-[80%] bg-secondary-green font-archivo-eb text-offwhite p-3 border rounded-lg text-center"
    >
      {text}
    </a>
  );
};

export default Button;
