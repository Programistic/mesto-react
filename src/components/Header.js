import headerLogo from '../images/logo-white.svg';
import '../index.css';

function Header() {
  return (
    <div className="header">
      <img className="logo" src={headerLogo} alt="Логотип Mesto"/>
    </div>
  );
}

export default Header;
