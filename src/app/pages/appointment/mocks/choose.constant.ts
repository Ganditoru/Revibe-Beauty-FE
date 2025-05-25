import { Service } from '../model/service.model';

export const serviceTypes: Service[] = [
  {
    name: 'Hairdressing',
    employees: [
      {
        name: 'Ana Popescu',
        picture:
          'https://thesalonbusiness.com/wp-content/uploads/2020/03/hairdresser-profile-picture.png',
        title: 'Hairstylist',
        subServicesPerformed: [
          { name: "Women's Haircut", duration: 45 },
          { name: "Men's Haircut", duration: 30 },
          { name: 'Balayage / Highlights', duration: 180 },
        ],
      },
      {
        name: 'Ioana Ionescu',
        picture:
          'https://i.pinimg.com/236x/9c/99/fc/9c99fc5af3ebd4d5bbead6452bb7c368.jpg',
        title: 'Hairstylist',
        subServicesPerformed: [
          { name: 'Full Hair Color', duration: 120 },
          { name: 'Blow-Dry & Style', duration: 40 },
          { name: 'Balayage / Highlights', duration: 180 },
        ],
      },
      {
        name: 'Maria Georgescu',
        picture:
          'https://i.pinimg.com/236x/55/99/e9/5599e99b60ffb6e71cc1a367254e6ed5.jpg',
        title: 'Color Specialist',
        subServicesPerformed: [
          { name: "Women's Haircut", duration: 45 },
          { name: 'Blow-Dry & Style', duration: 40 },
          { name: 'Balayage / Highlights', duration: 180 },
        ],
      },
      {
        name: 'Elena Dumitrescu',
        title: 'Stylist',
        subServicesPerformed: [
          { name: "Women's Haircut", duration: 45 },
          { name: "Men's Haircut", duration: 30 },
          { name: 'Full Hair Color', duration: 120 },
          { name: 'Blow-Dry & Style', duration: 40 },
          { name: 'Balayage / Highlights', duration: 180 },
        ],
      },
      {
        name: 'Roxana Stan',
        title: 'Stylist',
        subServicesPerformed: [
          { name: "Women's Haircut", duration: 45 },
          { name: "Men's Haircut", duration: 30 },
          { name: 'Blow-Dry & Style', duration: 40 },
          { name: 'Balayage / Highlights', duration: 180 },
        ],
      },
    ],
  },
  {
    name: 'Barbering',
    employees: [
      {
        name: 'Andrei Marin',
        picture:
          'https://thesalonbusiness.com/wp-content/uploads/2020/03/male-hair-stylist-picture.png',
        title: 'Master Barber',
        subServicesPerformed: [
          { name: 'Classic Beard Trim', duration: 20 },
          { name: 'Buzz Cut', duration: 25 },
        ],
      },
      {
        name: 'Mihai Popa',
        picture: 'https://i.mdel.net/i/db/2022/12/1834562/1834562-500w.jpg',
        title: 'Beard Specialist',
        subServicesPerformed: [
          { name: 'Classic Beard Trim', duration: 20 },
          { name: 'Hot Towel Shave', duration: 30 },
          { name: 'Skin Fade Haircut', duration: 35 },
        ],
      },
      {
        name: 'Alexandru Radu',
        picture:
          'https://assets.cdn.filesafe.space/EIVgYCbLJ8XnLXPpU8nH/media/6759e5a03c5cd51913b216c8.jpeg',
        title: 'Fade Expert',
        subServicesPerformed: [
          { name: 'Hot Towel Shave', duration: 30 },
          { name: 'Skin Fade Haircut', duration: 35 },
          { name: 'Buzz Cut', duration: 25 },
        ],
      },
      {
        name: 'Cosmin Stoica',
        picture:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROhu1YQD_H_LdbWxG2eN-0wFjQ4DJyaLAgEbTiQ7lVvswMRBmQafPdexTtaVZNpiw-334&usqp=CAU',
        title: 'Clipper Artist',
        subServicesPerformed: [
          { name: 'Classic Beard Trim', duration: 20 },
          { name: 'Hot Towel Shave', duration: 30 },
          { name: 'Skin Fade Haircut', duration: 35 },
          { name: 'Buzz Cut', duration: 25 },
        ],
      },
    ],
  },
  {
    name: 'Nail Services',
    employees: [
      {
        name: 'Elena Manea',
        picture:
          'https://foxandjanesalon.com/wp-content/uploads/2024/09/Website-1200-x-1200.png',
        title: 'Gel Specialist',
        subServicesPerformed: [
          { name: 'Classic Manicure', duration: 45 },
          { name: 'Gel Polish Manicure', duration: 60 },
          { name: 'Spa Pedicure', duration: 60 },
          { name: 'Acrylic Full Set', duration: 90 },
          { name: 'Nail Art Accent', duration: 30 },
        ],
      },
      {
        name: 'Mihaela Tudor',
        picture:
          'https://lakewoodranchhairsalon.com/gallery/Eli%20Barber/Profile/Profile2.jpg',
        title: 'Nail Art Designer',
        subServicesPerformed: [
          { name: 'Classic Manicure', duration: 45 },
          { name: 'Gel Polish Manicure', duration: 60 },
          { name: 'Spa Pedicure', duration: 60 },
          { name: 'Acrylic Full Set', duration: 90 },
          { name: 'Nail Art Accent', duration: 30 },
        ],
      },
    ],
  },
];

export const defaultProfilePicture =
  'https://img.freepik.com/premium-vector/profile-beautiful-girl-with-curls-hair-scissors-stylist-symbol-beauty-salon-hairdresser_261524-900.jpg';
