import SelectCountry from '../input/SelectCountry';
import NavMenuLogo from './NavMenuLogo';

function NavBar() {
  return (
    <nav className="navbar-container">
      <NavMenuLogo />
      <SelectCountry />
    </nav>
  );
}

export default NavBar;
