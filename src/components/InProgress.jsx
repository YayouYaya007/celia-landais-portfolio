import "/src/styles/InProgress.css";

export default function InProgress() {
  return (
    <div className="fond wiptout">
      <h2 className="wiph2">Work in progress</h2>
      <p className="wipp">
        Le site est actuellement en cours de mise à jour — rendez-vous le 1er
        octobre pour découvrir la nouvelle version ! En attendant, vous pouvez
        découvrir mes projets et réalisations en téléchargeant mon book.
      </p>
      <p className="wippetit">
        Pour ceux qui ne connaissent pas, un “book” est un dossier qui rassemble
        mes projets, créations et expériences professionnelles — une sorte de
        portfolio à feuilleter.
      </p>
      <a
        href="/assets/doc/Lookbook.pdf"
        download="Book_Celia_Landais.pdf"
        className="wipbook"
      >
        Télécharger mon Book
      </a>
    </div>
  );
}
