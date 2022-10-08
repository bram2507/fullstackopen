import headerCSS from "./header.module.css";
const Header = (props) => {
  return (
    <div className={headerCSS.content}>
      <h1>{props.course}</h1>;
    </div>
  );
};

export default Header;
