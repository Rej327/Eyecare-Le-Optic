import variable from "@/styles/variables.module.scss";

export default function Services() {
  return (
    <div className={variable.serviceBg}>
      <div className={variable.serviceSection}>
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className={variable.head}
        >
          Our Services
        </p>
      </div>
    </div>
  );
}
