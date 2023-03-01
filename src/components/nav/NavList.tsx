import NavItem from './NavItem';

type Props = {
  styles?: string;
};

const NavList = ({ styles }: Props) => (
  <ul className={`${styles}`}>
    <NavItem href="#home">Home</NavItem>
    <NavItem href="#about">About</NavItem>
    <NavItem href="#services">Services</NavItem>
    <NavItem href="#gallery">Gallery</NavItem>
    <NavItem href="#contact">Contact</NavItem>
  </ul>
);

export default NavList;
