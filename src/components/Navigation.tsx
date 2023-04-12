import variable from "../styles/variables.module.scss";

export default function Navigation() {
  return (
    <div className={variable.navigation}>
      <div className="image"></div>
      <p className="logo">Eye Care Le Optic</p>
      <div className="section-list">
        <p className="list">Eye Care Services</p>
        <p className="list">Patient Center</p>
        <p className="list">About Us</p>
        <p className="list">(+63)-999-999-9999</p>
      </div>
    </div>
  );
}
