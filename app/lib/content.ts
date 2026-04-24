export type Locale = "en" | "es";

export const LOCALES: Locale[] = ["en", "es"];

export type Principle = { title: string; body: string };
export type MetaRow = { label: string; value: string };

export type Content = {
  hero: {
    eyebrow: string;
    titleLead: string;
    titleEnd: string;
    subtitle: string;
    links: { linkedin: string; github: string; email: string };
  };
  sections: {
    about: string;
    focus: string;
    how: string;
    other: string;
  };
  about: { paragraphs: string[] };
  focus: {
    inProgress: string;
    tagline: string;
    paragraphs: string[];
    meta: MetaRow[];
  };
  principles: Principle[];
  other: { paragraphs: string[]; tracevaultAfter: string };
  footer: {
    headline: string;
    sub: string;
    signature: string;
    emailLabel: string;
    elsewhere: string;
  };
  toggle: { aria: string };
};

export const content: Record<Locale, Content> = {
  en: {
    hero: {
      eyebrow: "Brian Cabrera, founder & builder",
      titleLead: "Founder building",
      titleEnd: ".",
      subtitle:
        "I sit somewhere between product, engineering and business. Most of what I build ends up living in the gaps between those three.",
      links: { linkedin: "LinkedIn", github: "GitHub", email: "Email" },
    },
    sections: {
      about: "About",
      focus: "Current focus",
      how: "How I think",
      other: "Other output",
    },
    about: {
      paragraphs: [
        "I started in code. It was the first language I had to think problems in, and it still shapes how I start most days.",
        "Product and business weren't a pivot. They just kept pulling me in. The questions I found interesting were almost always sitting one level above the code.",
        "What I care about now is building things that actually work. Not in a demo. In everyday use, a few months in, when nobody is watching anymore.",
      ],
    },
    focus: {
      inProgress: "pre-launch · may 2026",
      tagline: "A biometric identity layer for physical commerce.",
      paragraphs: [
        "Biolink takes most of my time right now. It didn't start from a deck. It came out of things I kept seeing go wrong in physical environments, where identity and payments are still held together with tape.",
        "The idea is narrow. Make identity at the point of interaction simple and reliable, so that everything built on top of it (payments, access, continuity) can stop working around it.",
      ],
      meta: [
        { label: "Category", value: "Biometric identity, physical commerce" },
        { label: "Role", value: "Founder" },
        { label: "Stage", value: "Pre-launch" },
        { label: "Launch", value: "May 2026" },
      ],
    },
    principles: [
      {
        title: "Start from something real.",
        body: "If I can't name who is actually annoyed by the problem, I probably shouldn't be building it.",
      },
      {
        title: "Product before narrative.",
        body: "Telling a good story is easy. I'd rather have a thing that works and describe it badly.",
      },
      {
        title: "Plain systems over clever ones.",
        body: "If something needs to sound complicated to make sense, it usually isn't finished yet.",
      },
      {
        title: "Ship more than you explain.",
        body: "Ideas are the easy part. I care about what is still there a few weeks into real use.",
      },
    ],
    other: {
      paragraphs: [
        "Outside of Biolink, I sometimes build small tools for problems I keep running into at work, or just around the house. Nothing ambitious. Usually a short, specific thing that fixes a friction I got tired of.",
        "If it ends up being useful to someone else, I publish it.",
      ],
      tracevaultAfter: " is one of them.",
    },
    footer: {
      headline: "Happy to talk, short and direct.",
      sub: "Skip the meeting theater. Tell me what you're actually working on.",
      signature: "Quietly, from Uruguay.",
      emailLabel: "Email",
      elsewhere: "Elsewhere",
    },
    toggle: { aria: "Switch language" },
  },

  es: {
    hero: {
      eyebrow: "Brian Cabrera, founder y builder",
      titleLead: "Founder construyendo",
      titleEnd: ".",
      subtitle:
        "Me muevo entre producto, ingeniería y negocio. La mayoría de lo que hago termina viviendo justo en el medio de esos tres mundos.",
      links: { linkedin: "LinkedIn", github: "GitHub", email: "Email" },
    },
    sections: {
      about: "Sobre mí",
      focus: "Foco actual",
      how: "Cómo pienso",
      other: "Otras cosas",
    },
    about: {
      paragraphs: [
        "Empecé escribiendo código. Ese fue el primer idioma que tuve para pensar problemas, y sigue siendo por donde arranco casi todos los días.",
        "Producto y negocio no fueron un pivot. Simplemente me fueron atrayendo. Las preguntas que me importaban casi siempre estaban un nivel por encima del código.",
        "Lo que me importa hoy es construir cosas que funcionen de verdad. No en una demo. En el uso cotidiano, unos meses después, cuando ya nadie está mirando.",
      ],
    },
    focus: {
      inProgress: "pre-launch · mayo 2026",
      tagline: "Una capa de identidad biométrica para el comercio físico.",
      paragraphs: [
        "Biolink se lleva la mayor parte de mi tiempo hoy. No salió de un deck. Salió de cosas que fui viendo romperse en entornos físicos, donde identidad y pagos todavía se sostienen con cinta adhesiva.",
        "La idea es simple. Que la identidad en el punto de interacción sea lo suficientemente simple y confiable como para que todo lo que viene arriba (pagos, accesos, continuidad) pueda dejar de esquivarla.",
      ],
      meta: [
        { label: "Categoría", value: "Identidad biométrica, comercio físico" },
        { label: "Rol", value: "Founder" },
        { label: "Etapa", value: "Pre-launch" },
        { label: "Lanzamiento", value: "Mayo 2026" },
      ],
    },
    principles: [
      {
        title: "Empezar por algo real.",
        body: "Si no puedo decir a quién le molesta el problema, probablemente no debería estar construyéndolo.",
      },
      {
        title: "Producto antes que narrativa.",
        body: "Contar una buena historia es fácil. Prefiero tener algo que funcione y explicarlo mal.",
      },
      {
        title: "Sistemas claros antes que ingeniosos.",
        body: "Si algo necesita sonar complicado para tener sentido, normalmente no está terminado.",
      },
      {
        title: "Entregar más que explicar.",
        body: "Las ideas son la parte fácil. Me importa lo que sigue ahí unas semanas después de estar en uso real.",
      },
    ],
    other: {
      paragraphs: [
        "Fuera de Biolink, a veces construyo herramientas pequeñas para problemas con los que me cruzo seguido, en el trabajo o en el día a día. Nada ambicioso. Casi siempre algo corto y específico que resuelve una fricción que ya me cansó.",
        "Si le sirve a alguien más, la publico.",
      ],
      tracevaultAfter: " es una de ellas.",
    },
    footer: {
      headline: "Abierto a una conversación corta y directa.",
      sub: "Nada de teatro de reuniones. Contame en qué estás trabajando.",
      signature: "Desde Uruguay, con calma.",
      emailLabel: "Email",
      elsewhere: "En otros lados",
    },
    toggle: { aria: "Cambiar idioma" },
  },
};

export const contact = {
  linkedin: "https://www.linkedin.com/in/brian-cabrera/",
  github: "https://github.com/briancabrera",
  email: "brian@biolink.uy",
  biolink: "https://biolink.uy",
  tracevault: "https://tracevault.briancabrera.com",
};
