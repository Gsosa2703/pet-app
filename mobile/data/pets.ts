import { Animal } from '../interfaces/Animal/Animal';
import {donations} from './donations'
import {history} from './history'

export const pets: Animal[] = [
 {
   id: '1',
   images: [
    {
      type: "image",
      uri:  'https://i0.wp.com/puppis.blog/wp-content/uploads/2022/03/etapas-desarrollo-perros-cachorros-min.jpg?resize=768%2C604&ssl=1',
    },
    {
      type: "image",
      uri:  'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVycm98ZW58MHx8MHx8fDA%3D',
    },
    {
      type: "image",
      uri:  'https://images.ctfassets.net/denf86kkcx7r/6ud6myHXqZvLY2o8sNf8nm/48a07b218d355a0cb805f6275ba42cbf/ojosperro-78?fm=webp&w=913',
    },
    {
      type: "image",
      uri:  'https://plus.unsplash.com/premium_photo-1722859221349-26353eae4744?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVycm98ZW58MHx8MHx8fDA%3D',
    }
   ],
   shelter : {
     id: "1",
     name: 'Shelter A',
     profileImage: 'https://www.shutterstock.com/image-vector/animal-shelter-logo-safe-pet-600nw-1889566699.jpg',

   },
   description: 'Adorable kitten looking for a loving home!',
   name: 'Whiskers',
   breed: 'Siamese Cat',
   age: '2 years',
   donations,
   history

 },
 {
   id: '2',
   images: [
    {
      type: "image",
      uri:  'https://i0.wp.com/puppis.blog/wp-content/uploads/2022/03/etapas-desarrollo-perros-cachorros-min.jpg?resize=768%2C604&ssl=1',
    },
    {
      type: "image",
      uri:  'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVycm98ZW58MHx8MHx8fDA%3D',
    },
    {
      type: "image",
      uri:  'https://images.ctfassets.net/denf86kkcx7r/6ud6myHXqZvLY2o8sNf8nm/48a07b218d355a0cb805f6275ba42cbf/ojosperro-78?fm=webp&w=913',
    },
    {
      type: "image",
      uri:  'https://plus.unsplash.com/premium_photo-1722859221349-26353eae4744?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVycm98ZW58MHx8MHx8fDA%3D',
    }
   ],
   owner: {
     id: "1",
     name: 'John Doe',
     profileImage: 'https://img.freepik.com/vector-gratis/joven-camisa-negra_1308-173618.jpg',
   },
   description: 'This playful pup is ready to join your family.',
   name: 'Buddy',
   breed: 'Golden Retriever',
   age: '6 months',
   donations,
   history
 },
 {
   id: '3',
   images: [
    {
      type: "image",
      uri:  'https://i0.wp.com/puppis.blog/wp-content/uploads/2022/03/etapas-desarrollo-perros-cachorros-min.jpg?resize=768%2C604&ssl=1',
    },
    {
      type: "image",
      uri:  'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVycm98ZW58MHx8MHx8fDA%3D',
    },
    {
      type: "image",
      uri:  'https://images.ctfassets.net/denf86kkcx7r/6ud6myHXqZvLY2o8sNf8nm/48a07b218d355a0cb805f6275ba42cbf/ojosperro-78?fm=webp&w=913',
    },
    {
      type: "image",
      uri:  'https://plus.unsplash.com/premium_photo-1722859221349-26353eae4744?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVycm98ZW58MHx8MHx8fDA%3D',
    }
   ],
   owner: {
     id: "2",
     name: 'Maria Jose',
     profileImage: 'https://static.vecteezy.com/system/resources/previews/004/899/680/non_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg',
   },
   description: 'This playful pup is ready to join your family.',
   name: 'Buddy',
   breed: 'Golden Retriever',
   age: '6 months',
   donations,
   history
 },
];