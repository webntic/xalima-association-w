import { Shield, Database, Eye, Lock, UserCheck, Cookie } from '@phosphor-icons/react'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="text-primary" size={40} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Politique de Confidentialité
          </h1>
        </div>
        
        <div className="space-y-8 text-foreground/80">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
            <p className="text-foreground font-semibold mb-2">
              Protection de vos données personnelles
            </p>
            <p>
              L'association Xalima s'engage à protéger la vie privée de ses utilisateurs et à 
              assurer la sécurité de leurs données personnelles. Cette politique explique comment 
              nous collectons, utilisons et protégeons vos informations.
            </p>
          </div>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="text-primary" size={24} />
              <h2 className="text-2xl font-semibold text-foreground">
                1. Données collectées
              </h2>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  1.1. Données fournies directement par l'utilisateur
                </h3>
                <p className="mb-2">Lorsque vous utilisez nos formulaires, nous collectons :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse postale (formulaire volontaire)</li>
                  <li>Compétences et expériences (formulaire volontaire)</li>
                  <li>Message ou demande (formulaire de contact)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  1.2. Données collectées automatiquement
                </h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Adresse IP</li>
                  <li>Type de navigateur et version</li>
                  <li>Pages visitées et durée de visite</li>
                  <li>Date et heure de connexion</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-primary" size={24} />
              <h2 className="text-2xl font-semibold text-foreground">
                2. Utilisation des données
              </h2>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border space-y-3">
              <p>Vos données personnelles sont utilisées uniquement pour :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <span className="font-semibold text-foreground">Répondre à vos demandes</span> via 
                  le formulaire de contact
                </li>
                <li>
                  <span className="font-semibold text-foreground">Gérer les inscriptions</span> de 
                  volontaires et assurer le suivi
                </li>
                <li>
                  <span className="font-semibold text-foreground">Traiter les dons</span> et émettre 
                  des reçus fiscaux si applicable
                </li>
                <li>
                  <span className="font-semibold text-foreground">Envoyer des informations</span> sur 
                  nos activités et projets (avec votre consentement)
                </li>
                <li>
                  <span className="font-semibold text-foreground">Améliorer notre site</span> en 
                  analysant les statistiques de visite
                </li>
                <li>
                  <span className="font-semibold text-foreground">Respecter nos obligations légales</span> et 
                  réglementaires
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-primary" size={24} />
              <h2 className="text-2xl font-semibold text-foreground">
                3. Conservation des données
              </h2>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border space-y-3">
              <p>
                Les données personnelles sont conservées pendant la durée nécessaire aux finalités 
                pour lesquelles elles sont collectées :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><span className="font-semibold text-foreground">Formulaires de contact :</span> 1 an après le dernier échange</li>
                <li><span className="font-semibold text-foreground">Inscriptions volontaires :</span> pendant la durée de l'engagement + 1 an</li>
                <li><span className="font-semibold text-foreground">Données de dons :</span> 10 ans (obligation légale comptable)</li>
                <li><span className="font-semibold text-foreground">Données de navigation :</span> 13 mois maximum</li>
              </ul>
              <p className="mt-3">
                Au-delà de ces délais, vos données sont supprimées ou anonymisées.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="text-primary" size={24} />
              <h2 className="text-2xl font-semibold text-foreground">
                4. Vos droits
              </h2>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border space-y-4">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi 
                Informatique et Libertés, vous disposez des droits suivants :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Droit d'accès</p>
                  <p className="text-sm">Obtenir une copie de vos données personnelles</p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Droit de rectification</p>
                  <p className="text-sm">Corriger des données inexactes ou incomplètes</p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Droit à l'effacement</p>
                  <p className="text-sm">Demander la suppression de vos données</p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Droit d'opposition</p>
                  <p className="text-sm">Vous opposer au traitement de vos données</p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Droit à la portabilité</p>
                  <p className="text-sm">Recevoir vos données dans un format exploitable</p>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Droit de limitation</p>
                  <p className="text-sm">Limiter le traitement de vos données</p>
                </div>
              </div>
              
              <div className="bg-primary/10 border border-primary/20 rounded p-4 mt-4">
                <p className="font-semibold text-foreground mb-2">
                  Pour exercer vos droits :
                </p>
                <p>
                  Envoyez un email à <a href="mailto:contact@xalima.org" className="text-primary hover:underline font-semibold">contact@xalima.org</a> en 
                  précisant votre demande et en joignant une copie d'une pièce d'identité.
                </p>
                <p className="mt-2 text-sm">
                  Nous nous engageons à répondre dans un délai maximum d'un mois.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-primary" size={24} />
              <h2 className="text-2xl font-semibold text-foreground">
                5. Sécurité des données
              </h2>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border space-y-3">
              <p>
                L'association Xalima met en œuvre toutes les mesures techniques et organisationnelles 
                appropriées pour protéger vos données personnelles contre :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>L'accès non autorisé</li>
                <li>La divulgation accidentelle</li>
                <li>La modification non autorisée</li>
                <li>La perte ou la destruction</li>
              </ul>
              <p className="mt-3">
                Nos mesures de sécurité incluent notamment le chiffrement des données sensibles, 
                l'utilisation de connexions sécurisées (HTTPS), et des accès restreints aux données.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="text-primary" size={24} />
              <h2 className="text-2xl font-semibold text-foreground">
                6. Partage des données
              </h2>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border space-y-3">
              <p className="font-semibold text-foreground">
                Vos données ne sont jamais vendues à des tiers.
              </p>
              <p>
                Nous pouvons partager vos données uniquement dans les cas suivants :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  <span className="font-semibold text-foreground">Prestataires de services :</span> pour 
                  le traitement des paiements (Stripe, PayPal, Orange Money, Wave) dans le strict cadre 
                  de leur mission
                </li>
                <li>
                  <span className="font-semibold text-foreground">Obligations légales :</span> si la loi 
                  nous y oblige (autorités judiciaires, administration fiscale)
                </li>
                <li>
                  <span className="font-semibold text-foreground">Partenaires ONG :</span> uniquement 
                  avec votre consentement explicite pour des projets communs
                </li>
              </ul>
              <p className="mt-3">
                Tous nos partenaires s'engagent à respecter la confidentialité de vos données et à 
                les protéger conformément au RGPD.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="text-primary" size={24} />
              <h2 className="text-2xl font-semibold text-foreground">
                7. Cookies et technologies similaires
              </h2>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border space-y-3">
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de navigation :
              </p>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Cookies essentiels</h3>
                <p className="text-sm">
                  Nécessaires au fonctionnement du site (navigation, sécurité). Ils ne peuvent pas 
                  être désactivés.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Cookies analytiques</h3>
                <p className="text-sm">
                  Nous permettent de comprendre comment vous utilisez le site pour l'améliorer. 
                  Vous pouvez les refuser.
                </p>
              </div>
              
              <p className="mt-3">
                Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de 
                votre navigateur.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-primary" size={24} />
              <h2 className="text-2xl font-semibold text-foreground">
                8. Mineurs
              </h2>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <p>
                Notre site n'est pas destiné aux personnes de moins de 16 ans. Nous ne collectons 
                pas sciemment de données personnelles auprès de mineurs. Si vous êtes parent ou 
                tuteur et que vous découvrez que votre enfant nous a fourni des données personnelles, 
                veuillez nous contacter pour que nous puissions supprimer ces informations.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="text-primary" size={24} />
              <h2 className="text-2xl font-semibold text-foreground">
                9. Modifications de la politique
              </h2>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout 
                moment. Toute modification sera publiée sur cette page avec une date de mise à jour. 
                Nous vous encourageons à consulter régulièrement cette page pour rester informé de 
                la manière dont nous protégeons vos données.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="text-primary" size={24} />
              <h2 className="text-2xl font-semibold text-foreground">
                10. Contact et réclamations
              </h2>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border space-y-3">
              <p>
                Pour toute question concernant cette politique de confidentialité ou le traitement 
                de vos données personnelles :
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold text-foreground">Association Xalima</p>
                <p>Email : <a href="mailto:contact@xalima.org" className="text-primary hover:underline">contact@xalima.org</a></p>
                <p>Téléphone : <a href="tel:+33659553966" className="text-primary hover:underline">+33 6 59 55 39 66</a></p>
              </div>
              <p className="mt-4">
                Vous avez également le droit de déposer une réclamation auprès de la Commission 
                Nationale de l'Informatique et des Libertés (CNIL) :
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-semibold text-foreground">CNIL</p>
                <p>3 Place de Fontenoy - TSA 80715</p>
                <p>75334 PARIS CEDEX 07</p>
                <p>
                  Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    www.cnil.fr
                  </a>
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <p className="font-semibold text-foreground mb-2">
                Engagement de Xalima
              </p>
              <p>
                L'association Xalima s'engage à traiter vos données avec le plus grand respect de 
                votre vie privée et conformément aux réglementations en vigueur. La confiance que 
                vous nous accordez est précieuse et nous mettons tout en œuvre pour la préserver.
              </p>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
