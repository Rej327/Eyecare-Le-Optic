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
            <a href="#">Eye Care Services</a>
          </li>
          <li>
            <a href="#">Our Doctor</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">(+63)-999-999-9999</a>
          </li>
        </ul>
      </label>
    </div>
  );
}
