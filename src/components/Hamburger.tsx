import Link from "next/link";
import hamburger from "../styles/HamburgerMenu.module.scss";

export default function Hamburger() {
  return (
    <div className={hamburger.body}>
      <label className={hamburger.label}>
        <input type="checkbox" />
        <span className={hamburger.menu}>
          <span className={hamburger.hamburger}></span>
        </span>
        <ul>
          <li>
            <Link href="/" id="style-2" data-replace="Home">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/Our-Doctor" id="style-2" data-replace="Our Doctor">
              <span>Our Doctor</span>
            </Link>
          </li>
          <li>
            <Link href="/AboutUs" id="style-2" data-replace="About Us">
              <span>About Us</span>
            </Link>
          </li>
          <li>
            <a href="#" id="style-2" data-replace="(+63)-999-999-9999">
              <span>(+63)-917-583-604</span>
            </a>
          </li>
        </ul>
      </label>
    </div>
  );
}
