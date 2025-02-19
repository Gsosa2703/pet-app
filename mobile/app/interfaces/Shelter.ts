import { Animal } from "./Animal/Animal";
import { Donation } from "./Animal/Donation"; 

export interface OverviewShelter {
 mission: string;
 founded: string;
 rescuedCount: number;
 shelterCount: number;
 goals: string[];   
}

export interface Shelter {
  id: string;
  profileImage: string;
  name: string;
  location?: string;
  description?: string;
  rating?: number;
  reviews?: number;
  images?: string[];
  animals: Animal[];
  website: string;
  donations: Donation[];
  overview: OverviewShelter
}