import {Donation} from '../interfaces/Donation'
// Mock Donations Data
export const donations: Donation[] = [
 {
   id: '1',
   user: {
    id: '1',
    name: "Alison Sosa",
    profileImage: 'https://static.vecteezy.com/system/resources/previews/004/899/680/non_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg',
   },
   amount: 50,
   message: 'I hope Whiskers finds a home soon!',
   timestamp: '2 days ago',
 },
 {
   id: '2',
   user: {
    id: '2',
    name: "David Clerc",
    profileImage: 'https://img.freepik.com/vector-gratis/joven-camisa-negra_1308-173618.jpg',
   },
   amount: 25,
   message: 'Sending love to Whiskers!',
   timestamp: '3 days ago',
 },
];