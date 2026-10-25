import Link from "next/link";
import { Container } from "@/components/ui/container";
import { mapsUrl, site, whatsappUrl } from "@/config/site";

const title = "font-display text-xl font-extrabold";
const link = "underline decoration-washi/30 underline-offset-4 hover:decoration-washi";

export function Footer() {
  const { address, contact, hours, social } = site;
  return (
    <footer className="bg-sumi pt-20">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-3xl font-extrabold">{site.name}</p>
            <p className="mt-2 max-w-[28ch] text-washi/70">{site.tagline}. {site.description}</p>
          </div>

          <div>
            <h2 className={title}>Horários</h2>
            <ul className="mt-3 space-y-1 text-washi/80">
              {hours.map((h) => (
                <li key={h.days}>
                  {h.days}: {h.time}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={title}>Onde estamos</h2>
            <address className="mt-3 not-italic text-washi/80">
              {address.street}
              <br />
              {address.district}, {address.city} - {address.state}
              <br />
              CEP {address.zip}
            </address>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={`mt-3 inline-block ${link}`}>
              Como chegar
            </a>
          </div>

          <div>
            <h2 className={title}>Contato</h2>
            <ul className="mt-3 space-y-1 text-washi/80">
              <li>
                <a href={`tel:+${contact.whatsapp}`} className={link}>
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={link}>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className={link}>
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" className={link}>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <nav aria-label="Rodapé" className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-washi/15 pt-6 text-washi/80">
          <Link href="/cardapio">Cardápio</Link>
          <Link href="/sobre">A casa</Link>
          <Link href="/reservas">Reservas</Link>
        </nav>
      </Container>

      <div className="overflow-hidden px-4 sm:px-8">
        <p aria-hidden className="mt-6 font-display text-[22vw] font-extrabold leading-[0.8] text-shu">
          {site.name.toLowerCase()}
        </p>
        <p className="py-4 text-sm text-washi/60">
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}