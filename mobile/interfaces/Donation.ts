import {User} from './User'



export interface Donation {
  id: string;
  user: User;
  amount: number;
  message: string; // Pet's breed
  timestamp: string; // Pet's age

}
