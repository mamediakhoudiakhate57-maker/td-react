function Experiences() {
  return (
    <div className="experiences">
      <h2>Expériences</h2>

      <div>
        <h3>AGRI-MANAGER : projet de groupe en langage C</h3>
        <p>
          Application console de gestion de la distribution agricole,
          avec stockage des données dans des fichiers binaires.
        </p>
        <ul>
          <li>Cheffe de projet d'une équipe de six personnes</li>
          <li>Responsable du module Architecture et Utilisateurs</li>
          <li>Intégration du code de toute l'équipe</li>
        </ul>
      </div>

      <div>
        <h3>Gestion des Colis : application web en JavaScript</h3>
        <p>
          Application de suivi de colis avec historique des statuts.
        </p>
        <ul>
          <li>Sauvegarde des données dans le navigateur avec localStorage</li>
          <li>Affichage des colis dans un tableau avec DataTables</li>
          <li>Validation des statuts dans l'ordre : Enregistré, Pris en charge, En transit, Arrivé à destination, Livré</li>
        </ul>
      </div>
    </div>
  );
}

export default Experiences;