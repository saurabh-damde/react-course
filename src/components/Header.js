import keyConceptsImage from "../assets/images/key-concepts.png";

const Header = () => {
  return (
    <header>
      <img src={keyConceptsImage} alt="Medal Badge with a Star" />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
};

export default Header;
