const Button = ({ text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="bg-secondary-green font-archivo-eb text-white p-3 border rounded-lg text-center"
    >
      {text}
    </a>
  );
};

export default Button;
