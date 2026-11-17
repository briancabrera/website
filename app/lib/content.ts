export type Locale = "en" | "es";

export const LOCALES: Locale[] = ["en", "es"];

export type Principle = { title: string; body: string };
export type Project = {
  title: string;
  tag: string;
  body: string;
  href: string;
};

export type Content = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    links: { linkedin: string; github: string; email: string };
  };
  sections: {
    about: string;
    projects: string;
    how: string;
  };
  about: { paragraphs: string[] };
  projects: Project[];
  principles: Principle[];
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
      eyebrow: "Brian Cabrera.",
      title: "Software Engineer & Product Builder.",
      subtitle:
        "I move between engineering, product and business. I build infrastructure that scales, but the questions I care about most always sit one level above the code: in the business model and in the user's problem.",
      links: { linkedin: "LinkedIn", github: "GitHub", email: "Email" },
    },
    sections: {
      about: "About",
      projects: "Projects",
      how: "How I think",
    },
    about: {
      paragraphs: [
        "I started in code. It was the first language I had to think problems in, and it still shapes how I start most days.",
        "Product and business weren't a pivot. They just kept pulling me in. The questions I found interesting were almost always sitting one level above the code.",
        "What I care about now is building things that actually work. Not in a demo. In everyday use, a few months in, when nobody is watching anymore.",
      ],
    },
    projects: [
      {
        title: "BioLink (Case Study)",
        tag: "Paused · Biometric Infrastructure",
        body: "I designed and built the backend architecture for a loyalty and payments network running on facial biometrics. Zero-trust, AWS Rekognition and ACID transactions. The project was paused with production code finished, because it ran out of financial runway. I documented the architecture and the business pivot here.",
        href: "https://biolink.briancabrera.com",
      },
      {
        title: "TraceVault",
        tag: "Open Source · B2B Tool",
        body: "Away from complex infrastructure, I build tools for real friction. TraceVault is an audit logging library for Node.js and PostgreSQL, built so B2B startups can pass compliance certifications (SOC2) without overloading their primary database.",
        href: "https://tracevault.briancabrera.com",
      },
    ],
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
      eyebrow: "Brian Cabrera.",
      title: "Software Engineer & Product Builder.",
      subtitle:
        "Me muevo entre la ingeniería, el producto y el negocio. Construyo infraestructuras que escalan, pero las preguntas que más me importan siempre están un nivel por encima del código: en el modelo de negocio y en el problema del usuario.",
      links: { linkedin: "LinkedIn", github: "GitHub", email: "Email" },
    },
    sections: {
      about: "Sobre mí",
      projects: "Proyectos",
      how: "Cómo pienso",
    },
    about: {
      paragraphs: [
        "Empecé escribiendo código. Ese fue el primer idioma que tuve para pensar problemas, y sigue siendo por donde arranco casi todos los días.",
        "Producto y negocio no fueron un pivot. Simplemente me fueron atrayendo. Las preguntas que me importaban casi siempre estaban un nivel por encima del código.",
        "Lo que me importa hoy es construir cosas que funcionen de verdad. No en una demo. En el uso cotidiano, unos meses después, cuando ya nadie está mirando.",
      ],
    },
    projects: [
      {
        title: "BioLink (Caso de Estudio)",
        tag: "Pausado · Infraestructura Biométrica",
        body: "Diseñé y construí la arquitectura backend para una red de fidelización y pagos con biometría facial. Zero-trust, AWS Rekognition y transacciones ACID. El proyecto se pausó con el código de producción terminado por falta de runway financiero. Documenté la arquitectura y el pivoteo del negocio acá.",
        href: "https://biolink.briancabrera.com",
      },
      {
        title: "TraceVault",
        tag: "Open Source · B2B Tool",
        body: "Fuera de infraestructuras complejas, construyo herramientas para fricciones reales. TraceVault es una librería de auditoría para Node.js y PostgreSQL diseñada para que las startups B2B puedan pasar certificaciones de compliance (SOC2) sin sobrecargar su base de datos principal.",
        href: "https://tracevault.briancabrera.com",
      },
    ],
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
  linkedin: "https://www.linkedin.com/in/cabrerabrian/",
  github: "https://github.com/briancabrera",
  email: "contact@briancabrera.com",
};
