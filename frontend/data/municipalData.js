export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Municipal Leadership', href: '/mayor-council' },
  { label: 'Departments', href: '/departments' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Municipal Services', href: '/services' },
      { label: 'Refuse Collection Schedule', href: '/services/refuse-collection' },
      { label: 'Report Issue', href: '/report-issue' }
    ]
  },
  { label: 'Community', href: '/community' },
  { label: 'Projects', href: '/projects' },
  { label: 'Notices', href: '/notices' },
  { label: 'Documents', href: '/documents' },
  { label: 'Tenders', href: '/tenders' },
  { label: 'Quotations', href: '/quotations' },
  { label: 'Careers', href: '/careers' },
  { label: 'Citizen Portal', href: '/citizen-portal' },
  { label: 'Report Issue', href: '/report-issue' },
  { label: 'Contact', href: '/contact' }
];

export const heroSlides = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
  'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
  'https://images.unsplash.com/photo-1521790797524-b2497295b8a0',
  'https://images.unsplash.com/photo-1509395176047-4a66953fd231'
];

export const issues = [
  { type: 'Water Leaks', title: 'Burst pipe in Ezibeleni', lat: -31.9, lng: 26.87, status: 'Open', date: '2026-03-10', severity: 'blue' },
  { type: 'Potholes', title: 'Pothole on Komani Main Road', lat: -31.896, lng: 26.872, status: 'Under Investigation', date: '2026-03-08', severity: 'orange' },
  { type: 'Electricity Outages', title: 'Substation outage - Mlungisi', lat: -31.91, lng: 26.89, status: 'Critical', date: '2026-03-11', severity: 'yellow' },
  { type: 'Illegal Dumping', title: 'Illegal dumping near Tarkastad', lat: -32.008, lng: 26.26, status: 'Resolved', date: '2026-03-04', severity: 'green' }
];
