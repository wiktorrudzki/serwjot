type Props = {
  href: string;
  children: string;
};

const FooterLink = ({ href, children }: Props) => (
  <li>
    <a href={href}>{children.toUpperCase()}</a>
  </li>
);

export default FooterLink;
