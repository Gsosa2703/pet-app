import {Media} from '../Media'
import {AnimalHistory} from './History'
import {Donation} from './Donation'
import {Shelter} from '../Shelter'
export interface Owner {
  id : string;
  name : string;
  profileImage : string;
}
export interface Animal {
  id: string;
  images: Media[]; // Array of image URLs for the carousel
  description: string; // Description of the pet
  name: string; // Pet's name
  breed: string; // Pet's breed
  age: string; // Pet's age
  history: AnimalHistory;
  donations: Donation[];
  shelter: Shelter; // Shelter information if the pet is from a shelter
}