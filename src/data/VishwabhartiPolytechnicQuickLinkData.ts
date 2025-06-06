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
  { label: "Achievements", id: "achievements" },
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

At Vishwabharti Polytechnic Institute, our guiding principles define who we are and what we stand for.

## Vision:
"To emerge as a center of excellence in technical education by nurturing innovation, research, and ethical values to produce globally competent professionals."

## Mission:
- M1: To provide quality technical education through innovative teaching-learning methods.
- M2: To foster research culture and industry collaboration.
- M3: To develop entrepreneurial skills and employability.
- M4: To promote ethical values and social responsibility.
- M5: To create state-of-the-art infrastructure for holistic development.

## Core Values:
- Excellence in Education
- Innovation and Creativity
- Integrity and Ethics
- Social Responsibility
- Continuous Improvement

## Quality Policy:
"Committed to provide quality technical education through competent faculty, modern infrastructure, and industry interaction to develop skilled professionals meeting global standards."

Every policy and program aligns with these foundational values.

*— Management, Vishwabharti Polytechnic Institute*
`,
};

export const homeData = {
  title: "Welcome to Vishwabharati Polytechnic Institute",
  content: `

## About Us
Vishwabharati Polytechnic Institute, a part of MPGI, Nanded, was founded in 2008 with a vision to provide skill-based technical education. It offers AICTE-approved diploma programs focused on hands-on training and employability.

### Key Highlights:
Approved by: 
- AICTE New Delhi & Affiliated to MSBTE Mumbai
Courses Offered: 
- Diploma in Civil, Mechanical, Electrical, Computer, E&TC
- Faculty: 50+ qualified instructors
- Student Strength: 800+
- Industry Training: Regular industrial visits & internships

## Infrastructure
Our polytechnic campus includes:
- Department-wise Workshops & Labs
- Drawing & AutoCAD Labs
- Central Computer Lab
- Library with 10,000+ volumes
- Hostel & Bus Facility
- 1 Gbps Wi-Fi Campus

`,
  highlights: [
    "800+ Students | 50+ Faculty | 5 Diploma Streams",
    "Industry-Linked Curriculum | Practical Training Focus",
    "AutoCAD & Software Labs | Modern Workshops",
    "AICTE Approved | MSBTE Curriculum",
    "Library | Hostel | Wi-Fi Campus",
  ],
};
