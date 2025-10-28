export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <a href="#portfolio">
          <img
            src="/src/assets/logo/logoblanc.svg"
            alt="Logo"
            style={{ width: "55px" }}
          />
        </a>
        <nav style={styles.nav}>
          <div style={styles.gauche}>
            <a href="#projets" style={styles.link1}>
              Projets
            </a>
            <a href="#competences" style={styles.link1}>
              Compétences
            </a>
          </div>
          <div style={styles.droite}>
            <a href="#GitHub" style={styles.link}>
              <img
                src="/src/assets/icone/github.svg"
                alt="GitHub"
                style={{ width: "32px" }}
              />
            </a>
            <a href="#LinkedIn" style={styles.link}>
              <img
                src="/src/assets/icone/linkedin.svg"
                alt="LinkedIn"
                style={{ width: "32px" }}
              />
            </a>
            <a href="#Instagram" style={styles.link}>
              <img
                src="/src/assets/icone/instagram.svg"
                alt="Instagram"
                style={{ width: "32px" }}
              />
            </a>
            <a href="#Contact" style={styles.link}>
              <img
                src="/src/assets/icone/phone.svg"
                alt="Contact"
                style={{ width: "32px" }}
              />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    padding: "20px 0",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  container: {
    width: "80vw",
    borderRadius: "60px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
  },
  droite: {
    display: "flex",
    marginRight: "2vw",
    justifyContent: "space-between",
    width: "15vw",
    position: "relative",
    bottom: "-3px",
  },
  gauche: {
    display: "flex",
    justifyContent: "space-between",
    width: "17vw",
    marginLeft: "2vw",
    alignItems: "center",
  },
  nav: {
    display: "flex",
    background: "#ffffffff",
    borderRadius: "60px",
    padding: "5px 20px",
    width: "70vw",
    justifyContent: "space-between",
    gap: "30px",
  },
  link1: {
    color: "#000000ff",
    fontFamily: "satoshi, sans-serif",
    textDecoration: "none",
    fontSize: "20px",
    transition: "color 0.3s",
  },
  link: {
    color: "#000000ff",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s",
  },
};
