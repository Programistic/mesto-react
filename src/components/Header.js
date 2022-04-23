import headerLogo from '../images/logo-white.svg';
import '../pages/index.css';

function Header() {
  return (
    <div className="header">
      <img className="logo" src={headerLogo} alt="Логотип Mesto"></img>
    </div>
  );
}

export default Header;
