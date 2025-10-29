import "../styles/Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero fond">
      <div className="containerr">
        <div className="flex">
          <img src="/assets/logo/logofin.svg" alt="Logo" className="logoh" />
          <h1 className="title">hello</h1>
        </div>

        <div className="flex1">
          <img src="/assets/img/celia.png" alt="Photo" className="photomoi" />
          <div className="flex2">
            <p className="pp1">
              Je suis <br></br>
              <span className="pp2">Célia</span>
            </p>
            <p className="pp1">
              Bienvenue sur mon <br></br>
              <span className="pp3">PORTFOLIO</span>
            </p>
          </div>
        </div>
        <p className="aboutme">
          Actuellement étudiante en <span className="funfont">BUT MMI</span>,
          j'ai toujours été passionnée pour le{" "}
          <span className="funfont">Développement Web</span> et par la suite,
          par l'
          <span className="funfont">UX/UI Design</span> et le{" "}
          <span className="funfont">graphisme</span>. <br></br>
          <br></br>J'adore en apprendre plus dans ces domaines et c'est pourquoi
          je n'hésite pas à m'
          <span className="funfont">auto-former</span> pour pouvoir explorer les
          nombreuses possibilités qui me sont offertes. <br></br>
          <br></br>Ma formation m'a permis de trouver ces{" "}
          <span className="funfont">nouvelles passions</span>, ce qui me permet
          d'encore plus m'amuser tout en produisant des créations que j'adore et
          qui, j'espère, vous plairont tout autant !
        </p>

        <h2 className="h2">Mes compétences</h2>
        <div className="tout">
          <div className="titre">
            <h3 className="h3">Développement</h3>
            <div className="group">
              <div className="duo">
                <div className="icone">
                  <img
                    src="/assets/icone/comp/b/htmlB.svg"
                    className="iconeimg"
                  />
                  <p className="p">HTML</p>
                </div>
                <div className="icone">
                  <img
                    src="/assets/icone/comp/b/javascriptB.svg"
                    className="iconeimg"
                  />
                  <p className="p">JavaScript</p>
                </div>
              </div>
              <div className="duo">
                <div className="icone">
                  <img
                    src="/assets/icone/comp/b/cssB.svg"
                    className="iconeimg"
                  />
                  <p className="p">CSS</p>
                </div>
                <div className="icone">
                  <img
                    src="/assets/icone/comp/b/figmaB.svg"
                    className="iconeimg"
                  />
                  <p className="p">Figma</p>
                </div>
              </div>
            </div>
          </div>
          <div className="titre">
            <h3 className="h3">Graphisme</h3>
            <div className="group">
              <div className="duo">
                <div className="icone">
                  <img
                    src="/assets/icone/comp/b/photoshopB.svg"
                    className="iconeimg"
                  />
                  <p className="p">Photoshop</p>
                </div>
                <div className="icone">
                  <img
                    src="/assets/icone/comp/b/illustratorB.svg"
                    className="iconeimg"
                  />
                  <p className="p">Illustrator</p>
                </div>
              </div>
              <div className="duo">
                <div className="icone">
                  <img
                    src="/assets/icone/comp/b/cameraB.svg"
                    className="iconeimg"
                  />
                  <p className="p">Photographie</p>
                </div>
                <div className="icone">
                  <img
                    src="/assets/icone/comp/b/premiereB.svg"
                    className="iconeimg"
                  />
                  <p className="p">Premiere Pro</p>
                </div>
              </div>
            </div>
          </div>

          <div className="titre">
            <h3 className="h3">En apprentissage</h3>
            <div className="group">
              <div className="duo">
                <div className="icone">
                  <img
                    src="/assets/icone/comp/b/after-effectB.svg"
                    className="iconeimg"
                  />
                  <p className="p">After Effect</p>
                </div>
                <div className="icone">
                  <img
                    src="/assets/icone/comp/b/phpB.svg"
                    className="iconeimg"
                  />
                  <p className="p">PHP</p>
                </div>
              </div>
              <div className="duo">
                <div className="icone">
                  <img
                    src="/assets/icone/comp/b/pythonB.svg"
                    className="iconeimg"
                  />
                  <p className="p">Python</p>
                </div>
                <div className="icone">
                  <img
                    src="/assets/icone/comp/b/reactB.svg"
                    className="iconeimg"
                  />
                  <p className="p">React</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="h2">Mes projets</h2>
        <div className="projet">
          <div className="imgr">
            <img
              src="/assets/img/HiskaApercu.png"
              alt="img"
              className="imgr2"
            />
          </div>
          <div className="fichel">
            <h3
              style={{
                fontSize: "3vh",
              }}
            >
              🍫 HISKA — Une aventure chocolatée et créative
            </h3>{" "}
            <p
              className=""
              style={{
                fontSize: "2.6vh",
                fontFamily:
                  "Satoshi, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
                margin: "-2vh 0 0 0",
              }}
            >
              2025
            </p>{" "}
            <h3
              className=""
              style={{
                fontFamily: "la-bohemienne, cursive, sans-serif",
                fontSize: "5vh",
                lineHeight: "30px",
              }}
            >
              Production audiovisuelle & création visuelle
            </h3>{" "}
            <p
              style={{
                fontSize: "2.5vh",
                lineHeight: "30px",
              }}
            >
              HISKA est une publicité fictive de chocolat que j’ai imaginée et
              réalisée de A à Z, depuis la création de la marque jusqu’au
              montage final. J’ai conçu toute la charte graphique et assuré le
              montage vidéo, un défi passionnant qui m’a permis de transformer
              des images statiques en une animation vivante et expressive. Ce
              projet m’a réellement révélée à la production vidéo, un domaine
              qui me passionne aujourd’hui autant que le développement.
            </p>{" "}
            <Link to="/work-in-progress" className="vphiska">
              {" "}
              Voir plus
            </Link>
          </div>
        </div>
        <div className="projet2">
          <div className="ficher">
            <h3
              style={{
                fontSize: "3vh",
              }}
            >
              🎨 YayouYaya — Ma direction artistique personnelle
            </h3>{" "}
            <p
              className=""
              style={{
                fontSize: "2.6vh",
                fontFamily:
                  "Satoshi, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
                margin: "-2vh 0 0 0",
              }}
            >
              2025
            </p>{" "}
            <h3
              style={{
                fontFamily: "la-bohemienne, cursive, sans-serif",
                fontSize: "5vh",
                lineHeight: "30px",
              }}
            >
              Identité visuelle & design graphique
            </h3>{" "}
            <p
              style={{
                fontSize: "2.5vh",
                lineHeight: "30px",
              }}
            >
              Ce projet est ma première direction artistique complète, une
              recherche autour de mon univers personnel. J’ai imaginé mon logo,
              mes typographies, mes couleurs fétiches (rose, jaune, violet) et
              une charte graphique qui reflète la douceur, la féminité et la
              rondeur que j’aime. Créer ce projet m’a permis de m’affirmer
              visuellement, de découvrir une vraie passion pour l’identité de
              marque et d’apprendre à façonner mon style, ma patte, mon univers.
            </p>{" "}
            <Link to="/work-in-progress" className="vpda">
              {" "}
              Voir plus
            </Link>
          </div>
          <div className="imgl">
            <img src="/assets/img/DApercu.png" alt="img" className="imgl2" />
          </div>
        </div>
      </div>
    </section>
  );
}
