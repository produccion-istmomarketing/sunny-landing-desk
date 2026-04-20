import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MapPin,
  Wallet,
  Building2,
  Phone,
  Mail,
  CheckCircle2,
  Bed,
  Bath,
  Home,
  Ruler,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import heroHouse from "@/assets/hero-house.jpg";
import modelAurora from "@/assets/model-aurora.jpg";
import modelAuroraPlus from "@/assets/model-aurora-plus.jpg";
import modelVentura from "@/assets/model-ventura.jpg";
import projectAerial from "@/assets/project-aerial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Urbanización San Antonio — Tu casa propia en Bugaba, Chiriquí" },
      {
        name: "description",
        content:
          "Casas terminadas en La Concepción, Bugaba. Ubicación estratégica, precios accesibles y financiamiento con bancos aliados. Agenda tu visita hoy.",
      },
      { property: "og:title", content: "Urbanización San Antonio — Bugaba" },
      {
        property: "og:description",
        content:
          "Diseño moderno, entorno tranquilo y una comunidad pensada para vivir mejor en Bugaba, Chiriquí.",
      },
      { property: "og:image", content: heroHouse },
      { name: "twitter:image", content: heroHouse },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.link/ujz72v";

const features = [
  {
    icon: MapPin,
    title: "Ubicación estratégica",
    items: [
      "En La Concepción, Bugaba, Chiriquí",
      "A pocos minutos de la Vía Interamericana",
      "Cerca de comercios, servicios y accesos principales",
      "Vía directa al nuevo hospital de Bugaba",
    ],
  },
  {
    icon: Wallet,
    title: "Precio accesible",
    items: [
      "Casas nuevas con precios competitivos",
      "Cuotas pensadas para familias jóvenes",
      "Inversión segura en tu patrimonio familiar",
    ],
  },
  {
    icon: Building2,
    title: "Financiamiento",
    items: [
      "Financiamiento a través de bancos aliados",
      "Asesoría durante todo el proceso hipotecario",
      "Opciones que se adaptan a tu perfil económico",
    ],
  },
];

const models = [
  {
    name: "Modelo Aurora",
    image: modelAurora,
    open: "54.13 m²",
    closed: "7.92 m²",
    total: "62.05 m²",
    bedrooms: 3,
    baths: 1,
    features: [
      "Sala / comedor",
      "Muebles de cocina",
      "Garaje abierto",
      "Lavandería abierta",
      "Grama",
    ],
  },
  {
    name: "Aurora Plus",
    image: modelAuroraPlus,
    open: "54.13 m²",
    closed: "23.92 m²",
    total: "78.05 m²",
    bedrooms: 3,
    baths: 1,
    features: [
      "Sala / comedor",
      "Muebles de cocina",
      "Closet",
      "Lavandería semicerrada",
      "Espejo y muebles de baño",
    ],
  },
  {
    name: "Ventura",
    image: modelVentura,
    open: "62.79 m²",
    closed: "19.92 m²",
    total: "82.71 m²",
    bedrooms: 3,
    baths: 2,
    features: [
      "Sala / comedor",
      "Muebles de cocina",
      "Closet",
      "Lavandería incorporada",
      "2 baños (habitación principal)",
    ],
  },
];

const faqs = [
  {
    q: "¿Dónde está ubicada la Urbanización San Antonio?",
    a: "La Urbanización San Antonio está ubicada en La Concepción, distrito de Bugaba, provincia de Chiriquí, a solo 2–3 minutos de la Vía Interamericana, cerca del área comercial de Bugaba y junto al nuevo Hospital Dr. José Félix Espinosa Barroso.",
  },
  {
    q: "¿Las casas están terminadas o en construcción?",
    a: "Las casas están terminadas y listas para entrega, dependiendo de la disponibilidad por fase. Puedes visitar el proyecto y conocer las viviendas antes de tomar tu decisión.",
  },
  {
    q: "¿Cuántas habitaciones y baños tienen las casas?",
    a: "Los modelos cuentan con 3 habitaciones, 1 o 2 baños según el modelo, sala/comedor, cocina, área de lavandería, garaje (abierto o techado) y área de grama.",
  },
  {
    q: "¿Trabajan con bancos para el financiamiento?",
    a: "Sí. Contamos con alianzas con bancos, incluyendo Banco Nacional, y te acompañamos durante todo el proceso de gestión hipotecaria, desde la precalificación hasta la aprobación del crédito.",
  },
  {
    q: "¿Hay fácil acceso al transporte y comercios?",
    a: "Sí. Gracias a su acceso directo desde la Interamericana, tienes fácil movilidad hacia Bugaba, David y zonas cercanas, además de supermercados, centros comerciales, farmacias y servicios esenciales a pocos minutos.",
  },
];

function Index() {
  const [form, setForm] = useState({
    name: "",
    model: "Aurora",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Por favor completa los campos requeridos");
      return;
    }
    toast.success("¡Gracias! Te contactaremos pronto.");
    setForm({ name: "", model: "Aurora", email: "", phone: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" richColors />

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-primary to-[var(--primary-glow)] text-primary-foreground">
              <Home className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-wide">San Antonio</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Residencial
              </div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#proyecto" className="text-foreground/80 transition hover:text-primary">Proyecto</a>
            <a href="#modelos" className="text-foreground/80 transition hover:text-primary">Modelos</a>
            <a href="#beneficios" className="text-foreground/80 transition hover:text-primary">Beneficios</a>
            <a href="#faq" className="text-foreground/80 transition hover:text-primary">FAQ</a>
            <a href="#agenda" className="text-foreground/80 transition hover:text-primary">Contacto</a>
          </nav>
          <Button asChild size="sm" className="bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-primary/90">
            <a href="#agenda">Cotiza tu nuevo hogar</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate min-h-[100vh] overflow-hidden pt-16">
        <img
          src={heroHouse}
          alt="Casa modelo Urbanización San Antonio en Bugaba"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        <div className="absolute inset-0 -z-10 [background:var(--gradient-hero)]" />

        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 sm:px-6">
          <div className="max-w-2xl py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Tu casa propia sí es posible
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Tu <span className="bg-gradient-to-r from-primary to-[var(--primary-glow)] bg-clip-text text-transparent">casa</span> propia sí es posible
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/80 sm:text-xl">
              San Antonio es el espacio donde tu familia empieza una nueva etapa. Diseño moderno, entorno tranquilo y una comunidad pensada para vivir mejor.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-primary/90">
                <a href={WHATSAPP} target="_blank" rel="noreferrer">
                  Agenda tu visita <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#modelos">Ver modelos</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project intro */}
      <section id="proyecto" className="border-y border-border/60 bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Urbanización San Antonio, Bugaba
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
              El hogar ideal para tu familia
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Descubre nuestros modelos de viviendas terminadas en la Urbanización San Antonio. Ubicación estratégica, espacios funcionales y el hogar que tu familia merece.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#agenda">Solicitar información</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#modelos">Ver modelos disponibles</a>
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
            <img
              src={projectAerial}
              alt="Vista aérea Urbanización San Antonio"
              loading="lazy"
              width={1600}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why San Antonio / features */}
      <section id="beneficios" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              ¿Por qué San Antonio?
            </p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Ubicación, precio y financiamiento a tu favor
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Casas terminadas, proceso claro y acompañamiento en cada paso.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <Card
                key={f.title}
                className="group relative overflow-hidden border-border/60 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <CardContent className="p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[var(--primary-glow)] text-primary-foreground shadow-[var(--shadow-soft)]">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{f.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {f.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#agenda">Cotiza con nosotros</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-1 h-4 w-4" /> Habla con un vendedor
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Models */}
      <section id="modelos" className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Encuentra tu próximo hogar
            </p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Conoce nuestros modelos de casas
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Descubre las opciones disponibles y elige el hogar ideal para tu familia.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {models.map((m) => (
              <Card
                key={m.name}
                className="group overflow-hidden border-border/60 pt-0 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow">
                    {m.total}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold">{m.name}</h3>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-muted-foreground">
                    <div className="rounded-lg bg-secondary p-2">
                      <Bed className="mx-auto h-4 w-4 text-primary" />
                      <div className="mt-1 font-semibold text-foreground">{m.bedrooms} hab.</div>
                    </div>
                    <div className="rounded-lg bg-secondary p-2">
                      <Bath className="mx-auto h-4 w-4 text-primary" />
                      <div className="mt-1 font-semibold text-foreground">{m.baths} baño{m.baths > 1 ? "s" : ""}</div>
                    </div>
                    <div className="rounded-lg bg-secondary p-2">
                      <Ruler className="mx-auto h-4 w-4 text-primary" />
                      <div className="mt-1 font-semibold text-foreground">{m.total}</div>
                    </div>
                  </div>
                  <div className="mt-5 space-y-1 text-sm text-muted-foreground">
                    <div className="flex justify-between"><span>Área abierta</span><span className="font-medium text-foreground">{m.open}</span></div>
                    <div className="flex justify-between"><span>Área cerrada</span><span className="font-medium text-foreground">{m.closed}</span></div>
                  </div>
                  <ul className="mt-5 space-y-2 text-sm">
                    {m.features.map((feat) => (
                      <li key={feat} className="flex gap-2 text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href="#agenda">Solicitar información</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="agenda" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Queremos atenderte
            </p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Agenda una cita hoy</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Déjanos tus datos y un asesor se pondrá en contacto contigo para resolver todas tus dudas y mostrarte el proyecto.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Ubicación</div>
                  <div className="text-sm text-muted-foreground">La Concepción, Bugaba, Chiriquí</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">WhatsApp</div>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-primary">
                    Habla con un vendedor
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Email</div>
                  <div className="text-sm text-muted-foreground">info@sanantoniobugaba.com</div>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-border/60 shadow-[var(--shadow-card)]">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre y apellido *</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Escribe tu nombre completo"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Modelo de interés</Label>
                  <Select value={form.model} onValueChange={(v) => setForm({ ...form, model: v })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Aurora">Aurora</SelectItem>
                      <SelectItem value="Aurora Plus">Aurora Plus</SelectItem>
                      <SelectItem value="Ventura">Ventura</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ejemplo@correo.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Número de teléfono</Label>
                  <Input
                    id="phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Ej. 6000-0000"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-primary/90">
                  Enviar solicitud
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Preguntas frecuentes
            </p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Urbanización San Antonio
            </h2>
          </div>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
                <AccordionTrigger className="text-left text-base font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-background py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-[var(--primary-glow)] text-primary-foreground">
              <Home className="h-4 w-4" />
            </div>
            <span className="font-semibold text-foreground">San Antonio Residencial</span>
          </div>
          <p>© {new Date().getFullYear()} Urbanización San Antonio, Bugaba. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp floating */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.65_0.18_150)] text-white shadow-[var(--shadow-soft)] transition hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
