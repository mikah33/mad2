export const businessInfo = {
  name: "Mikah's Auto Detailing",
  legalName: "Mikah's Auto Detailing LLC",
  description: 'Professional mobile auto detailing services in Columbia SC',
  phone: '(803) 667-8731',
  email: 'mikahsautodetailing@gmail.com',
  address: {
    street: '',
    city: 'Columbia',
    state: 'SC',
    zip: '29072',
    country: 'US'
  },
  hours: [
    'Monday-Friday: 8:00 AM - 6:00 PM',
    'Saturday: 9:00 AM - 5:00 PM',
    'Sunday: Closed'
  ],
  socialMedia: {
    facebook: 'https://www.facebook.com/mikahsautodetailing',
    instagram: 'https://www.instagram.com/mikahsautodetailing',
    twitter: 'https://twitter.com/mikahsdetailing',
    youtube: 'https://youtube.com/@mikahsautodetailing'
  },
  priceRange: '$$',
  established: '2020',
  serviceArea: {
    primary: ['Columbia', 'Lexington', 'Irmo', 'Cayce'],
    radius: 25, // miles from primary location
    states: ['South Carolina']
  },
  certifications: [
    'IDA Certified Detailer',
    'Ceramic Pro Installer',
    'Licensed and Insured'
  ],
  specialties: [
    'Mobile Detailing',
    'Ceramic Coating',
    'Paint Correction',
    'Interior Restoration'
  ]
};

export type BusinessInfo = typeof businessInfo;
