import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <img src="/assets/logo/logoblanc.svg" alt="Logo" className="logoc" />

        <p className="h">Venez visiter mes réseaux !</p>
        <a>
          <a>
            <img
              src="/assets/icone/instagramblanc.svg"
              alt="Instagram"
              className="img"
            />
          </a>
          <a>
            <img
              src="/assets/icone/linkedinblanc.svg"
              alt="LinkedIn"
              className="img"
            />
          </a>
          <img
            src="/assets/icone/githubblanc.svg"
            alt="GitHub"
            className="img"
          />
        </a>

        <p>
          <span className="h">Contactez-moi !</span> <br></br>
        </p>
        <a>
          <span>celialandais.pro@icloud.com</span>{" "}
        </a>

        <p className="phone">+590 690 23 34 73</p>
        <br></br>
        <div className="barre"></div>
        <p className="credit">© Célia Landais 2025 - Tous droits réservés.</p>
      </div>
    </footer>
  );
}
