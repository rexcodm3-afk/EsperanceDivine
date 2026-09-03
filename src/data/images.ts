// Curated stock photography used as placeholder imagery for this demo.
// NOTE: the school has not yet supplied official photographs — replace these
// Unsplash URLs with real campus photos as soon as they are available.

function unsplash(id: string, w: number) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
}

export const img = {
  heroClassroom: unsplash("1567057419565-4349c49d8a04", 1600),
  aboutClassroom: unsplash("1509062522246-3755977927d7", 1200),
  earlyYears: unsplash("1588075592446-265fd1e6e76f", 1000),
  primaryCycle: unsplash("1522661067900-ab829854a57f", 1000),
  bilingual: unsplash("1503676260728-1c00da094a0b", 1000),
  learning: unsplash("1560785496-3c9d27877182", 1000),
  activities: unsplash("1587654780291-39c9404d746b", 1000),
  community: unsplash("1503676382389-4809596d5290", 1000),
  personalGrowth: unsplash("1544776193-352d25ca82cd", 1000),
  library: unsplash("1427504494785-3a9ca7044f45", 1000),
  libraryShelves: unsplash("1524995997946-a1c2e315a42f", 1000),
  emptyClassroom: unsplash("1580582932707-520aed937b7b", 1000),
  books: unsplash("1497633762265-9d179a990aa6", 1000),
} as const;

export const gallery = [
  { src: img.heroClassroom, w: 1200, alt: "Élèves réunis en salle de classe à Espérance Divine" },
  { src: img.earlyYears, w: 1000, alt: "Jeunes enfants assis en cercle pendant une activité d'éveil" },
  { src: img.primaryCycle, w: 1000, alt: "Élève écrivant au tableau pendant un cours" },
  { src: img.personalGrowth, w: 1000, alt: "Enseignante accompagnant une élève dans son travail" },
  { src: img.community, w: 1000, alt: "Élève se rendant à l'école avec ses livres" },
  { src: img.libraryShelves, w: 1000, alt: "Étagères de livres dans un espace de lecture" },
  { src: img.activities, w: 1000, alt: "Blocs de construction colorés utilisés en activité" },
  { src: img.bilingual, w: 1000, alt: "Livres et matériel pédagogique sur un bureau de classe" },
] as const;
