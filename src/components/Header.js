import headerLogo from '../images/logo-white.svg';

function Header() {

  return (
    <div className="header">
      <img className="logo" src={headerLogo} alt="Логотип Mesto"/>
    </div>
  );
}

export default Header;
