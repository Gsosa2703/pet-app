export interface AnimalHistory {
    rescueStory: string;
    likes: string[];
    dislikes: string[];
    health: {
      isVaccinated: boolean;
      hasIllness: string | null;
      isCastrated: boolean;
    };
    compatibility: {
      withDogs: boolean;
      withCats: boolean;
      withKids: boolean;
    };
    adoptionNotes: string;
}