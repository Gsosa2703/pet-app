import {Media} from './Media'

export interface Shelter {
  id: string;
  profileImage: string;
  name: string;
  location?: string;
  description?: string;
  rating?: number;
  reviews?: number;
  images?: string[];
}
export interface Owner {
  id : string;
  name : string;
  profileImage : string;
}
export interface FeedPet {
  id: string;
  images: Media[]; // Array of image URLs for the carousel
  description: string; // Description of the pet
  name: string; // Pet's name
  breed: string; // Pet's breed
  age: string; // Pet's age
  shelter?: Shelter; // Shelter information if the pet is from a shelter
  owner?: Owner; // Owner information if the pet is from an owner
}