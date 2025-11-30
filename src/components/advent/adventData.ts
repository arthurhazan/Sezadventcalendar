
export interface AdventDay {
  id: number;
  day: number;
  message: string;
  imageUrl: string;
}

// Helper function to generate the path. 
// Users should place images in the /public/cards/ folder.
// Example: /public/cards/card_1.jpg
const getCardImage = (day: number) => `/cards/card_${day}.jpg`;

export const adventData: AdventDay[] = [
  { id: 1, day: 1, message: "Sez inspecte les décorations !", imageUrl: getCardImage(1) },
  { id: 2, day: 2, message: "Attention au sapin, Sez arrive.", imageUrl: getCardImage(2) },
  { id: 3, day: 3, message: "Une sieste bien méritée.", imageUrl: getCardImage(3) },
  { id: 4, day: 4, message: "Sez rêve de croquettes.", imageUrl: getCardImage(4) },
  { id: 5, day: 5, message: "Qui a mangé le chocolat ?", imageUrl: getCardImage(5) },
  { id: 6, day: 6, message: "Caché dans les cadeaux.", imageUrl: getCardImage(6) },
  { id: 7, day: 7, message: "Le roi de la maison.", imageUrl: getCardImage(7) },
  { id: 8, day: 8, message: "Il neige dehors !", imageUrl: getCardImage(8) },
  { id: 9, day: 9, message: "Sez attend le Père Noël.", imageUrl: getCardImage(9) },
  { id: 10, day: 10, message: "Pas touche aux guirlandes !", imageUrl: getCardImage(10) },
  { id: 11, day: 11, message: "Un petit miaulement festif.", imageUrl: getCardImage(11) },
  { id: 12, day: 12, message: "La boule de Noël, c'est un jouet ?", imageUrl: getCardImage(12) },
  { id: 13, day: 13, message: "Sez prépare sa liste.", imageUrl: getCardImage(13) },
  { id: 14, day: 14, message: "Dodo près de la cheminée.", imageUrl: getCardImage(14) },
  { id: 15, day: 15, message: "Chut, il dort.", imageUrl: getCardImage(15) },
  { id: 16, day: 16, message: "Prêt pour le réveillon.", imageUrl: getCardImage(16) },
  { id: 17, day: 17, message: "Le bonnet lui va si bien.", imageUrl: getCardImage(17) },
  { id: 18, day: 18, message: "Encore une sieste ?", imageUrl: getCardImage(18) },
  { id: 19, day: 19, message: "Sez sous le gui.", imageUrl: getCardImage(19) },
  { id: 20, day: 20, message: "J-4 avant les cadeaux !", imageUrl: getCardImage(20) },
  { id: 21, day: 21, message: "Il fait froid dehors.", imageUrl: getCardImage(21) },
  { id: 22, day: 22, message: "Sez aime les lumières.", imageUrl: getCardImage(22) },
  { id: 23, day: 23, message: "Tout est calme...", imageUrl: getCardImage(23) },
  { id: 24, day: 24, message: "Joyeux Noël avec Sez !", imageUrl: getCardImage(24) },
];
