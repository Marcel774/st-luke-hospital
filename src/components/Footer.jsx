function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>St. Luke Hospital</h3>
          <p>
            Quality healthcare services for the Musanze
            community.
          </p>
        </div>

        <div>
          <p>
            Musanze District, Northern Province, Rwanda
          </p>
          <p>Phone: +250 788 000 000</p>
          <p>Email: info@stlukehospital.rw</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} St. Luke Hospital.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;