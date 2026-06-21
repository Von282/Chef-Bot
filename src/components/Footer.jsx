import "./Footer.css";

function Footer() {
  let currYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div
          className="headline-sm"
          style={{ fontWeight: "bold", color: "var(--primary)" }}
        >
          Chef Bot-Ardee
        </div>
        <div className="footer-links">
          <a className="footer-link body-md" href="#">
            Terms
          </a>
          <a className="footer-link body-md" href="#">
            Privacy
          </a>
          <a className="footer-link body-md" href="#">
            Sustainability
          </a>
          <a className="footer-link body-md" href="#">
            Support
          </a>
        </div>
        <p className="label-sm">
          © {currYear} Chef Bot-Ardee. Nourishing your health with precision.
        </p>
      </footer>
    </>
  );
}

export default Footer;
