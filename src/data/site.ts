export const site = {
  name: "Chico Despachante",
  segment: "Despachante de Trânsito",
  city: "Teixeira de Freitas",
  state: "BA",
  address: "Av. Mar. Castelo Branco, 78, Centro",
  phoneLabel: "(73) 98822-7000",
  whatsapp: "https://wa.me/73988227000",
  instagramHandle: "@despachantechico",
  instagram: "https://www.instagram.com/despachantechico/",
  years: "45+",
  yearsSentence: "Presteza e agilidade no atendimento há mais de quatro décadas.",
  tagline: "Há mais de 45 anos atendendo com Presteza e Agilidade.",
  mapsEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=-39.7511%2C-17.5415%2C-39.7351%2C-17.5295&layer=mapnik&marker=-17.5355%2C-39.7431",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Av.+Mar.+Castelo+Branco%2C+78%2C+Centro%2C+Teixeira+de+Freitas+-+BA",
} as const;

export function waLink(message: string): string {
  return `${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Contato", href: "#contato" },
] as const;

export interface Service {
  id: string;
  index: string;
  title: string;
  callout?: string;
  description: string;
  icon: "car" | "transfer" | "license" | "taxi" | "pcd" | "document";
  cta: string;
}

export const services: Service[] = [
  {
    id: "emplacamento-0km",
    index: "01",
    title: "Emplacamento 0 km",
    callout: "Comprou um carro novo?",
    description:
      "Conte com a nossa equipe para cuidar do emplacamento e da documentação necessária do seu veículo novo.",
    icon: "car",
    cta: "Quero emplacar",
  },
  {
    id: "transferencia",
    index: "02",
    title: "Transferência de veículos",
    callout: "Sua transferência sem surpresas.",
    description:
      "Auxílio completo no processo de transferência do veículo, para que a documentação fique regularizada com tranquilidade.",
    icon: "transfer",
    cta: "Falar sobre transferência",
  },
  {
    id: "licenciamento",
    index: "03",
    title: "Licenciamento",
    callout: "Regularidade em dia.",
    description:
      "Facilitamos o processo de regularização e documentação do seu veículo, do início ao fim.",
    icon: "license",
    cta: "Resolver licenciamento",
  },
  {
    id: "isencao-taxi",
    index: "04",
    title: "Isenção para Táxi",
    callout: "Para quem roda todo dia.",
    description:
      "Atendimento relacionado aos processos de isenção para veículos destinados ao serviço de táxi.",
    icon: "taxi",
    cta: "Falar sobre isenção",
  },
  {
    id: "isencao-pcd",
    index: "05",
    title: "Isenção para PCD",
    callout: "Orientação no processo.",
    description:
      "Orientação relacionada aos processos de isenção para PCD, com atendimento próximo e claro.",
    icon: "pcd",
    cta: "Falar sobre PCD",
  },
];

export const steps = [
  {
    number: "01",
    title: "Entre em contato",
    description: "Fale com a nossa equipe pelo WhatsApp ou venha até o nosso atendimento.",
  },
  {
    number: "02",
    title: "Explique o que precisa",
    description: "Conte o seu caso: emplacamento, transferência, licenciamento ou outro serviço.",
  },
  {
    number: "03",
    title: "Receba as orientações",
    description: "Indicamos o caminho e a documentação necessária para o seu processo.",
  },
  {
    number: "04",
    title: "Resolva sua documentação",
    description: "Cuidamos do andamento com presteza e agilidade até o encaminhamento.",
  },
] as const;


