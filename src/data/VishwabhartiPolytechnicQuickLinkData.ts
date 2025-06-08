import polyPrincipal from "../assets/principalImages/Prof. Shahaji Deshmukh Vishwabharati polytechnic.jpg";

export interface ProfileData {
  id: string;
  name: string;
  title: string;
  image: string;
  education: string;
  content: string;
}

export interface FacultyMember {
  _id: string;
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  dateOfJoining: string;
  photo: string | null;
  department: string;
}

export const navItems = [
  { label: "Home", id: "home" },
  { label: "Vision & Mission", id: "vision-mission" },
  { label: "Principal", id: "principal" },
  { label: "Placements", id: "placements" },
  // { label: "Achievements", id: "achievements" },
  { label: "NIRF", id: "nirf" },
  { label: "Mandatory Disclosure", id: "mandatory-disclosure" },
  { label: "IQAC", id: "iqac" },
  { label: "SWAYAM-NPTEL", id: "swayam-nptel" },
];

export const profiles: ProfileData[] = [
  {
    id: "principal",
    name: "Prof. Shahaji Deshmukh",
    title: "Principal",
    image: polyPrincipal,
    education: "PhD. (Pursuing) - Mechanical Engineering",
    content: `

It gives me immense pleasure to extend a warm welcome to all students, parents, and visitors exploring our vibrant institution. At *Vishwabharti Polytechnic Institute*, we are committed to shaping the future of young minds through technical education that blends knowledge, skill, and character.

Our polytechnic college stands as a beacon of excellence, offering industry-relevant diploma programs designed to meet the evolving needs of the modern world. With a team of dedicated faculty, state-of-the-art infrastructure, and a student-centered approach, we nurture innovation, creativity, and critical thinking among our learners.

## Our Vision:
To become a leading institute in producing skilled and ethical professionals who contribute meaningfully to society and global development.

## Key Highlights:
- NAAC 'A' Grade Accredited Institution
- 15+ Diploma Programs with industry-aligned curriculum
- 95% placement record over last 5 years
- ₹15 crores annual research funding
- 50+ industry collaborations

## Infrastructure:
- 25+ advanced laboratories
- 10,000+ sq.ft. central library
- Incubation center for student startups
- Sports complex and hostel facilities

We believe in holistic development — not just academic excellence but also personality building, leadership qualities, and ethical values. Our graduates are known for their professionalism, adaptability, and hands-on skills in real-world scenarios.

*— Prof. Shahaji Deshmukh*
`,
  },
];

export const placementData = {
  title: "Placement Highlights",
  content: `


`,
};

export const achievementData = {
  title: "Institutional Achievements",
  content: `


`,
};

export const nirfData = {
  title: "NIRF Ranking",
  content: `


`,
};

export const mandatoryDisclosureData = {
  title: "Mandatory Disclosure",
  content: `


`,
};

export const iqacData = {
  title: "Internal Quality Assurance Cell (IQAC)",
  content: `


`,
};

export const swayamNptelData = {
  title: "SWAYAM-NPTEL Initiatives",
  content: `


`,
};

export const visionMissionData = {
  title: "Vision & Mission",
  content: `

At Vishwabharti Polytechnic Institute, our mission and vision serve as the foundation for academic excellence and societal contribution.

## Vision:
“It will be a national level institute imparting value-based technical education catering to the need of stakeholders, with fully developed professionalism among the students with a feeling of patriotism.”

## Mission:
“To become a top-class role model institute imparting excellent need-based technical education with continuous strive for center of excellence in all programmes under conducive environment beneficial for the society of nation.”

`,
};

export const homeData = {
  title: "Welcome to Vishwabharati Polytechnic Institute",
  content: `

## About Us
The Vishwabharati Polytechnic Institute (MPVPI) at Matoshri Pratishthan Group of Institutions (MPGI), Nanded, is a premier polytechnic institute established in 2009 to provide an ideal environment for technical education and to give "technical wings to the brain."

MPVPI is a vibrant and innovative centre for education focused on developing a cadre of socially responsive managers, technocrats, entrepreneurs, and professionals. The institute is approved by the All India Council for Technical Education (AICTE), New Delhi, and affiliated to the Maharashtra State Board of Technical Education (MSBTE), Mumbai.

MPVPI takes pride in its thriving alumni community of over 1000 MPVPIians who are making significant contributions worldwide through industry and academia.

### Key Highlights:
- Recognized by AICTE, New Delhi and Directorate of Technical Education (DTE)
- Affiliated to Maharashtra State Board of Technical Education (MSBTE), Mumbai
- ISO 9001:2008 Certified Institution
- 25-acre Clean and Green Campus
- Independent Buildings for Each Institute
- State-of-the-Art Laboratories with the Latest Equipment
- Digital Classrooms with Virtual Laboratory Integration
- NPTEL Nodal Centre
- Virtual Laboratory in Collaboration with IIT Mumbai
- MoUs with Renowned Industries and Academic Institutions
- Advanced Language Lab to Enhance Communication Skills
- Active Training and Placement Cell
- Regular Industrial Visits, Parent Meets, and Alumni Meets
- Young, Dynamic, Qualified, and Experienced Faculty and Staff
- Expert Lecture Series and Seminars on Emerging Technologies
- Internal Quality Assurance Cell (IQAC)
- Central Library with 18,000+ Reference and Text Books, and E-Journals
- Personality Development and Career Guidance Cell
- Fully Equipped Air-Conditioned Auditorium (700+ Seating Capacity)
- Broadband Internet and Wi-Fi Enabled Campus
- Separate Hostel Facilities for Boys and Girls
- First Aid, Canteen, and Transportation Facilities
- Playground for Outdoor Sports and Indoor Game Facilities

`,
  highlights: [
    "AICTE & DTE Recognized | MSBTE Affiliated",
    "ISO 9001:2008 Certified | NPTEL Nodal Centre",
    "25 Acre Campus | Green & Wi-Fi Enabled",
    "1000+ Proud Alumni | Strong Industry Connections",
    "700+ Capacity AC Auditorium | Digital & Virtual Classrooms",
    "State-of-the-Art Labs | IIT Mumbai Collaboration",
    "Separate Hostel | Transport | Career Guidance Cell",
  ],
};
