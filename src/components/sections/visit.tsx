import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { addressLine, mapsUrl, site, whatsappUrl } from "@/config/site";

export function Visit() {
  return (
    <section className="bg-shu py-24 text-sumi md:py-32" aria-labelledby="visita-titulo">
      <Container>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 id="visita-titulo" className="font-display text-[clamp(2.25rem,5.5vw,5rem)] font-extrabold leading-[0.95]">
              Venha para o balcão.
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/reservas" variant="dark">
                Reservar uma mesa
              </ButtonLink>
              <ButtonLink href={whatsappUrl()} variant="outline" external>
                Chamar no WhatsApp
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-extrabold">Horários</h3>
              <ul className="mt-3 space-y-1">
                {site.hours.map((h) => (
                  <li key={h.days}>
                    <span className="font-semibold">{h.days}</span>
                    <br />
                    {h.time}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl font-extrabold">Endereço</h3>
              <p className="mt-3">{addressLine}</p>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold underline underline-offset-4">
                Como chegar
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}