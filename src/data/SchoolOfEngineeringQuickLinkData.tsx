import nptelAcknowledgmentLetter from "../assets/images/nptelAcknowledgmentLetter.png";
import AlumniPage from "../pages/AlumniPage";
import Placement from "../pages/schoolOfEngineering/SchoolOfEngineeringPlacement";
import PrincipelLaxmanEngineer from "../assets/principalImages/PrincipelLaxmanEngineer.jpg"

export interface ProfileData {
  id: string;
  name: string;
  title: string;
  image: string;
  content: string;
}

export interface SectionContent {
  title: string;
  content: string | JSX.Element;
  tableData?: any;
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
  { label: "Principal", id: "principal" },
  { label: "Placements", id: "placements" },
  { label: "Achievements", id: "achievements" },
  { label: "NIRF", id: "nirf" },
  { label: "Mandatory Disclosure", id: "mandatory-disclosure" },
  { label: "IQAC", id: "iqac" },
  { label: "Innovation & Incubation Centre", id: "innovationIncubation" },
  { label: "SWAYAM-NPTEL", id: "swayam-nptel" },
  { label: "Vision & Mission", id: "vision-mission" },
];

export const profiles: ProfileData[] = [
  {
    id: "principal",
    name: "Prof. Laxman M Waghmare",
    title: "Principal",
    image: PrincipelLaxmanEngineer,
    content: `

 
`,
  },
];

export const departments: Department[] = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    shortName: "CSE",
    description:
      "The CSE department focuses on cutting-edge technologies including AI, Machine Learning, Cybersecurity, and IoT with state-of-the-art computing facilities.",
    image: "https://aitsrajampet.ac.in/images/artificial-intelligence.jpg ",
    establishedYear: 2009,
    hod: "Dr. Rajesh Kumar",
    highlights: [
      "AI/ML Research Center",
      "Industry-aligned curriculum",
      "100% placement record",
      "Hackathons and coding competitions",
      "Cisco Networking Academy",
    ],
    labs: [
      "Artificial Intelligence Lab",
      "Cybersecurity Lab",
      "IoT Development Center",
      "High Performance Computing Lab",
      "Data Science Lab",
    ],
  },
  {
    id: "mech",
    name: "Mechanical Engineering",
    shortName: "ME",
    description:
      "The ME department provides comprehensive training in design, thermal, and production engineering with advanced CAD/CAM and robotics facilities.",
    image: "https://www.cepathanapuram.ac.in/assets/images/mephoto5.jpg ",
    establishedYear: 2009,
    hod: "Dr. Vikram Joshi",
    highlights: [
      "Industry 4.0 ready curriculum",
      "Automation and Robotics focus",
      "SAE Collegiate Club",
      "Additive Manufacturing Center",
      "Collaboration with Siemens",
    ],
    labs: [
      "CAD/CAM Center",
      "Robotics and Automation Lab",
      "Thermal Engineering Lab",
      "Fluid Mechanics Lab",
      "Material Testing Lab",
    ],
  },
  {
    id: "eee",
    name: "Electrical Engineering",
    shortName: "EEE",
    description:
      "The EEE department specializes in power systems, renewable energy, and smart grid technologies with modern electrical labs and industry partnerships.",
    image:
      "https://webfiles.amrita.edu/2019/12/Teywkhaq-about-electrical-and-electronics.jpg ",
    establishedYear: 2011,
    hod: "Prof. Anjali Deshmukh",
    highlights: [
      "Smart Grid Technology Center",
      "Renewable Energy Research",
      "PLC and SCADA Training",
      "Power Electronics Lab",
      "Industry collaboration with Siemens",
    ],
    labs: [
      "Power Systems Lab",
      "Electrical Machines Lab",
      "Control Systems Lab",
      "Renewable Energy Lab",
      "Measurement and Instrumentation Lab",
    ],
  },
];

export const placementData: SectionContent = {
  title: "Placement Highlights",
  content: <Placement />,
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
const iqacCommitteeData = [
  {
    post: "Chairperson (Head of the Institution)",
    member: "Dr. L.M. Waghmare, Principal, MPGISOEN",
  },
  { post: "Senior Administrative Officers", member: "Mr. P.J. Kinikar" },
  {
    post: "Teacher Coordinators",
    member:
      "1. Mr. B.A. Khansole, 2. Mr. Hashmi S.A, 3. Dr. Syeda Rukhsana, 4. Mr. Syed Shafiq R., 5. Mr. Rathod L.V., 6. Dr. Abdullah M.K, 7. Mr. Sadanand Shinde",
  },
  {
    post: "Member from the Management",
    member:
      "Hon. Mr. Venkat V. Chari (Secretary of MPGIN), Hon. Mr. Arvind S. Patil (Managing Director MPGIN)",
  },
  {
    post: "Nominees from Alumni",
    member: "1. Mr. Pravin Jadhav, 2. Mr. Mayur Chavan",
  },
  {
    post: "Nominees from Student Council Member",
    member:
      "1. Mr. Vedant A.U., 2. Mr. Jeevan Rathod, 3. Mr. Aditya Bhagat, 4. Mr. Nikhil Paikrao",
  },
  {
    post: "Nominees from Employers Industrialists/stakeholders (External members)",
    member:
      "1. Dr. A.B. Gonde, Dean (Academics), SGGS IE&TN, Nanded, 2. Mr. Millar Khandare (CEO 3idea Company), 3. Mr. Tayyab Aalam (Parent representative)",
  },
  {
    post: "Coordinator/Head of the IQAC",
    member: "Mr. S. Asad Hashmi (HOD, EED, MPGISEN)",
  },
];

export const iqacData = {
  title: "Internal Quality Assurance Cell (IQAC)",
  content: `
# SCHOOL OF ENGINEERING
AN INTEGRATED CAMPUS
(Approved by AICTE, New Delhi & SRTMU Nanded)
Vishwabharati Campus, Jijau Nagar at Khupsarwadi, Nanded-Latur Highway, Nanded - 431606 (MS).
Ph. (02462)297007, 297008, 901118446
ISO 9001-2008 Certified, NAAC B+ Grade

## IQAC – Vision
To ensure quality culture as the prime concern for the Higher Education Institutions through institutionalizing and internalizing all the initiatives taken with internal and external support.

## Objective
The primary aim of IQAC is:
- To develop a system for conscious, consistent and catalytic action to improve the academic and administrative performance of the institution.
- To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.

## Strategies
IQAC shall evolve mechanisms and procedures for:
a) Ensuring timely, efficient and progressive performance of academic, administrative and financial tasks;
b) Relevant and quality academic/research programmes;
c) Equitable access to and affordability of academic programmes for various sections of society;
d) Optimization and integration of modern methods of teaching and learning;
e) The credibility of assessment and evaluation process;
f) Ensuring the adequacy, maintenance and proper allocation of support structure and services;
g) Sharing of research findings and networking with other institutions in India and abroad.

## Functions
Some of the functions expected of the IQAC are:
a) Development and application of quality benchmarks/parameters for various academic and administrative activities of the institution;
b) Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process;
c) Collection and analysis of feedback from all stakeholders on quality-related institutional processes;
d) Dissemination of information on various quality parameters to all stakeholders;
e) Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles;
f) Documentation of the various programmes/activities leading to quality improvement;
g) Acting as a nodal agency of the Institution for coordinating quality-related activities, including adoption and dissemination of best practices;
h) Development and maintenance of institutional database through MIS for the purpose of maintaining/enhancing the institutional quality;
i) Periodical conduct of Academic and Administrative Audit and its follow-up;
j) Preparation and submission of the Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC.

## Benefits
IQAC will facilitate/contribute to:
a) Ensure clarity and focus in institutional functioning towards quality enhancement;
b) Ensure internalization of the quality culture;
c) Ensure enhancement and coordination among various activities of the institution and institutionalize all good practices;
d) Provide a sound basis for decision-making to improve institutional functioning;
e) Act as a dynamic system for quality changes in HEIs;
f) Build an organized methodology of documentation and internal communication.

## Composition of Internal Quality Assurance Cell (IQAC)
The institution has established an Internal Quality Assurance Cell (IQAC) on 25.08.2016. The institutional policy with regard to quality assurance is to develop and maintain the quality sustenance activities organized in the institute and maintaining the quality in overall development of the institute.

## Revised IQAC Committee
`,
  tableData: iqacCommitteeData,
};

export const innovationIncubation = {
  title: "Innovation & Incubation Centre",
  content: `

The Innovation & Incubation Centre aims to foster creativity, entrepreneurship, and technological advancement by supporting innovative ideas and nurturing startups within the institution.
  `,
  tableData: [
    {
      srNo: 1,
      name: "Mr. Shaikh Ajij Amirsab",
      designation: "Assistant Professor",
      role: "Lab In-charge",
    },
    {
      srNo: 2,
      name: "Mr. P.D. Pople",
      designation: "I.P.O & HoD (Civil)",
      role: "Faculty Coordinator",
    },
    {
      srNo: 3,
      name: "Mr. A.M. Shirse",
      designation: "Assistant Professor",
      role: "Faculty Coordinator",
    },
    {
      srNo: 4,
      name: "Mr. Devrao Bokare",
      designation: "Student",
      role: "Technical Team Leader",
    },
    {
      srNo: 5,
      name: "Mr. Amol Jadhav",
      designation: "Student",
      role: "Project Guide",
    },
    {
      srNo: 6,
      name: "Mr. Ajinkya Kadam",
      designation: "Student",
      role: "Technical Expert",
    },
    {
      srNo: 7,
      name: "Mr. Vaishnav Panchal",
      designation: "Student",
      role: "Student Coordinator",
    },
    {
      srNo: 8,
      name: "Mr. Pranav Birhade",
      designation: "Student",
      role: "Student Coordinator",
    },
    {
      srNo: 9,
      name: "Mr. Aakash Maske",
      designation: "Student",
      role: "Students Coordinator",
    },
    {
      srNo: 10,
      name: "Mr. Sanket Rathod",
      designation: "Student",
      role: "Students Coordinator",
    },
    {
      srNo: 11,
      name: "Mr. Praful Jadhav",
      designation: "Student",
      role: "Students Coordinator",
    },
  ],
};

export const swayamNptelData = {
  title: "NPTEL (National Programme on Technology Enhanced Learning)",
  content: `
## School Of Engineering
(Matoshri Pratishthan Group Of Institution)

College Id: 6841

## SPOC Profile
- SPOC Name: SYED ATEEQ BASHIRMIYA
- SPOC Email: syedateeq.mpgi@gmail.com
- SPOC Designation: ASSISTANT PROFESSOR
- SPOC Department: COMPUTER ENGINEERING
- SPOC Mobile Number: 9665937588

## NPTEL ACKNOWLEDGEMENT LETTER
![NPTEL Acknowledgment Letter](${nptelAcknowledgmentLetter})

## NPTEL TOTAL REGISTRATIONS 2024-25
`,
  tableData: [
    {
      srNo: 1,
      departmentName: "Civil Engineering",
      noOfRegistrations: 56,
      totalRegistrations: 263,
    },
    {
      srNo: 2,
      departmentName: "Computer Science & Engineering",
      noOfRegistrations: 125,
      totalRegistrations: 263,
    },
    {
      srNo: 3,
      departmentName: "Electrical Engineering",
      noOfRegistrations: 59,
      totalRegistrations: 263,
    },
    {
      srNo: 4,
      departmentName: "Electronics & Tele-Communication Engineering",
      noOfRegistrations: 3,
      totalRegistrations: 263,
    },
    {
      srNo: 5,
      departmentName: "Mechanical Engineering",
      noOfRegistrations: 6,
      totalRegistrations: 263,
    },
    {
      srNo: 6,
      departmentName: "AIML & AIDS",
      noOfRegistrations: 12,
      totalRegistrations: 263,
    },
    {
      srNo: 7,
      departmentName: "First Year",
      noOfRegistrations: 2,
      totalRegistrations: 263,
    },
  ],
};

export const visionMissionData = {
  title: "Vision & Mission",
  content: `
  

  
`,
};
