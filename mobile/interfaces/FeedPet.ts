
export interface FeedPet {
  id: string;
  images: string[]; // Array of image URLs for the carousel
  posterImage: string; // Profile picture of the person/shelter posting
  posterName: string; // Name of the poster
  description: string; // Description of the pet
  name: string; // Pet's name
  breed: string; // Pet's breed
  age: string; // Pet's age
}