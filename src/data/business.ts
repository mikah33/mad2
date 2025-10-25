export const businessInfo = {
  name: "Mikah's Auto Detailing",
  legalName: "Mikah's Auto Detailing LLC",
  description: 'Professional mobile auto detailing services in Arizona',
  phone: '(555) 123-4567',
  email: 'info@mikahsautodetailing.com',
  address: {
    street: '123 Main Street',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85001',
    country: 'US'
  },
  hours: [
    'Monday-Friday: 8:00 AM - 6:00 PM',
    'Saturday: 9:00 AM - 5:00 PM',
    'Sunday: Closed'
  ],
  socialMedia: {
    facebook: 'https://facebook.com/mikahsautodetailing',
    instagram: 'https://instagram.com/mikahsautodetailing',
    twitter: 'https://twitter.com/mikahsdetailing',
    youtube: 'https://youtube.com/@mikahsautodetailing'
  },
  priceRange: '$$',
  established: '2020',
  serviceArea: {
    primary: ['Phoenix', 'Scottsdale', 'Tempe', 'Mesa'],
    radius: 25, // miles from primary location
    states: ['Arizona']
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
