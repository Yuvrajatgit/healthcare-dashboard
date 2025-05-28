import "../styles/Button.css";

const Button = ({
  icon,
  imgSrc,
  bgColor = "#ffffff",
  width = "3rem",
  height = "3rem",
}) => {
  return (
    <button
      className="icon-button"
      style={{
        backgroundColor: bgColor,
        width: width,
        height: height,
      }}
    >
      {icon ? icon : <img src={imgSrc} alt="icon" className="icon-img" />}
    </button>
  );
};

export default Button;
