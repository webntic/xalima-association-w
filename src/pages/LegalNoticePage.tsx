import { Building, Envelope, Phone, Globe } from '@phosphor-icons/react'
import SEO from '@/components/SEO'

export default function LegalNoticePage() {
  return (
    <>
      <SEO
        title="Mentions Légales | Xalima"
        description="Mentions légales de l'association Xalima. Informations sur l'éditeur du site, le directeur de publication et l'hébergement."
        noindex={true}
      />
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Mentions Légales
          </h1>
        
        <div className="space-y-8 text-foreground/80">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Éditeur du site
            </h2>
            <div className="space-y-3 bg-card p-6 rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <Building className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-semibold text-foreground">Association Xalima</p>
                  <p>Association à but non lucratif</p>
                  <p>Numéro RNA : W751232874</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Globe className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-semibold text-foreground">Siège social</p>
                  <p>28 Rue De L'amiral Hamelin</p>
                  <p>75016 Paris, France</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Envelope className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p>contact@xalima.org</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-semibold text-foreground">Téléphone</p>
                  <p>06 59 55 39 66</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Directeur de la publication
            </h2>
            <div className="bg-card p-6 rounded-lg border border-border">
              <p className="font-semibold text-foreground">Papa Diouldé FEDHIOR</p>
              <p className="text-sm mt-2">Président de l'association Xalima</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Hébergement du site
            </h2>
            <div className="bg-card p-6 rounded-lg border border-border">
              <p className="font-semibold text-foreground mb-2">LWS</p>
              <p>10 Rue de Penthièvre</p>
              <p>75008 Paris</p>
              <p>France</p>
              <p className="mt-2">
                <a href="https://lws.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://lws.fr
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Propriété intellectuelle
            </h2>
            <div className="bg-card p-6 rounded-lg border border-border space-y-3">
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.) 
                est la propriété exclusive de l'association Xalima, sauf mention contraire.
              </p>
              <p>
                Toute reproduction, distribution, modification, adaptation, retransmission ou 
                publication de ces différents éléments est strictement interdite sans l'accord 
                écrit préalable de l'association Xalima.
              </p>
              <p>
                Les marques et logos présents sur le site sont déposés par l'association Xalima 
                ou éventuellement par l'une de ses partenaires. Toute reproduction totale ou 
                partielle de ces marques ou logos sans autorisation est interdite.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Responsabilité
            </h2>
            <div className="bg-card p-6 rounded-lg border border-border space-y-3">
              <p>
                Les informations diffusées sur le site sont présentées à titre informatif et peuvent 
                comporter des inexactitudes techniques ou des erreurs typographiques.
              </p>
              <p>
                L'association Xalima se réserve le droit de corriger le contenu de ce site à tout 
                moment et sans préavis.
              </p>
              <p>
                L'association Xalima ne saurait être tenue responsable des dommages directs ou 
                indirects qui pourraient résulter de l'accès au site ou de l'utilisation de celui-ci.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Liens hypertextes
            </h2>
            <div className="bg-card p-6 rounded-lg border border-border space-y-3">
              <p>
                Le site peut contenir des liens vers d'autres sites web. L'association Xalima 
                n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à 
                leur contenu.
              </p>
              <p>
                La création de liens hypertextes vers le site xalima.org est autorisée sous réserve 
                que ces liens ne contreviennent pas aux intérêts de l'association et qu'ils 
                garantissent la possibilité pour l'utilisateur d'identifier l'origine du contenu.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Droit applicable
            </h2>
            <div className="bg-card p-6 rounded-lg border border-border">
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige 
                et à défaut d'accord amiable, le litige sera porté devant les tribunaux français 
                conformément aux règles de compétence en vigueur.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Crédits
            </h2>
            <div className="bg-card p-6 rounded-lg border border-border space-y-2">
              <p><span className="font-semibold text-foreground">Conception et réalisation :</span> Association Xalima</p>
              <p><span className="font-semibold text-foreground">Photographies :</span> Images libres de droit et photographies de l'association</p>
              <p><span className="font-semibold text-foreground">Icônes :</span> Phosphor Icons</p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
