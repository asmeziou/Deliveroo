import logo from "../assets/logo.png";
const Header = ({ restaurant }) => {
  return (
    <header>
      <div className="bloc-header-1">
        <div className="wrapper">{logo && <img src={logo} alt="logo" />}</div>
      </div>
      <div className="bloc-header-2 wrapper">
        <div>
          <h2>{restaurant.name}</h2>
          <p className="description">{restaurant.description}</p>
        </div>
        {restaurant.picture && (
          <img src={restaurant.picture} alt="header image" />
        )}
      </div>
    </header>
  );
};
export default Header;
