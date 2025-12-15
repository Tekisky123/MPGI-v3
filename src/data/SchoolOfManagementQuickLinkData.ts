import managementPrincipal from "../assets/principalImages/DeanSadanand R. Shinde School of Management.png";
//import civilHodEngineering from "../assets/hodImages/P. D. Pople Civil Engineering.png";

export interface ProfileData {
  id: string;
  name: string;
  title: string;
  image: string;
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
  sequence:number;
}

export const navItems = [
  { label: "Home", id: "home" },
  { label: "Vision & Mission", id: "vision-mission" },
  { label: "Dean", id: "dean" },
  { label: "Placements", id: "placements" },
  // { label: "Achievements", id: "achievements" },
  // { label: "NIRF", id: "nirf" },
  // { label: "Mandatory Disclosure", id: "mandatory-disclosure" },
  { label: "IQAC", id: "iqac" },
];

export const profiles: ProfileData[] = [
  {
    id: "dean",
    name: "Sadanand R. Shinde",
    title: "Dean",
    image: managementPrincipal,
    content: `

The new economic policy—globalization, privatization, and liberalization—has widened the horizon of business. The information technology revolution has transformed this planet into a global village. Hi-tech systems and the supersonic speed of communication have introduced new cross-cultural interactions in the global business scenario. This has also increased the demand for a strong ethical value foundation in a harmonic form. It is the responsibility of the School of Management to develop holistic leadership with a global vision and a mission of excellence. The School of Management at Matoshri Pratishthan’s Group of Institutes is fully committed to this task.

*— Sadanand R. Shinde*
`,
  },
];

export const placementData = {
  title: "Placements",
  content: `

## About MBA Program:
The Master of Business Administration (MBA) is a two-year postgraduate program focused on management and business administration. It is a highly sought-after professional course that opens doors to diverse placement opportunities upon completion. With intense competition among students aiming for the highest salary packages, our Placement Cell plays a crucial role in helping students secure the best possible opportunities.

### Role of Placement Cell:
The Placement Cell conducts various activities to ensure students understand their strengths and work on areas of improvement:
- Students can practice group discussions, personal interviews, and bridge skill gaps.
- Provides detailed information about companies visiting for campus placements, giving students better insight before interviews.
- Conducts workshops to enhance communication, negotiation, and corporate readiness skills.

## Placement Statistics (2022-2023):
- Highest Package: ₹18 LPA (Amazon)
- Average Package: ₹6.5 LPA
- Placement Percentage: 95%
- 120+ Recruiting Companies

## Top Recruiters:
- Deloitte  
- ICICI Bank  
- HDFC Bank  
- TCS  
- Wipro  
- Kotak Mahindra Bank  
- Reliance Retail  
- Accenture  
- Infosys  
- Godrej  
- Axis Bank  
- HDFC  
- Byjus Private Ltd.  
- Just Dial  
- ICICI  
- Birla Sun Life  
- Hyundai  
- HCL  
- AU Small Finance Bank Ltd.  
- Denave India Private Ltd.  
- India Mart  

## Career Development Initiatives:
- Corporate Readiness Program  
- Leadership Development Workshops  
- Industry Certification Courses  
- Business Analytics Bootcamp  
- Alumni Mentorship Program  

## Recent Placements:
✓ 10 students placed in Big 4 firms  
✓ 25 students in Fortune 500 companies  
✓ 15 internships converted into PPOs  
✓ 30+ international internship opportunities

We offer continuous support through our dedicated **Career Development Office**, which organizes:
- Mock GD/PI sessions  
- Resume building workshops  
- Personality development classes  
- Company-specific training programs  

*— School of Management, MPGI*
`,
};
export const achievementData = {
  title: "Institutional Achievements",
  content: `


`,
};

export const mandatoryDisclosureData = {
  title: "Mandatory Disclosure",
  content: `


`,
};

export const nirfData = {
  title: "NIRF",
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
# School of Management
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

### Revised IQAC Committee
`,
  tableData: iqacCommitteeData,
};

export const visionMissionData = {
  title: "Vision & Mission",
  content: `


## Vision:
"Shaping future leaders with knowledge, innovation, and ethical business practices to create a lasting impact on society."

Our vision is twofold: to earn a reputation on the global stage as a pioneer in management education, and to cultivate a generation of leaders whose actions are rooted in ethics, driven by innovation, and guided by a desire to bring meaningful change to the world.

## Mission:


“Educating students for career success, we make every decision to support the career and personal development of our learners. Our curriculum, teaching, and services demonstrate that we value the diverse profiles of our learners.”


*— Management Team, MPGI*
`,
};

export const homeData = {
  title: "Welcome to School of Management",
  content: `

## About Us
The School of Management at Matoshri Pratishthan Group of Institutions (MPGI), Nanded, is a leading business school established in 2010. It offers industry-aligned programs that build leadership, strategic thinking, and entrepreneurial skills among students.

### Key Highlights:
- Approved by: AICTE, New Delhi & Affiliated to SRTMUN, Nanded
- NAAC Accreditation: B+ Grade
- Courses Offered: MBA (Dual Specialization), BBA
- Faculty: 30+ with academic and industry backgrounds
- Annual Intake: 180+ students
- Placement Support: Strong ties with 100+ companies

## Infrastructure
Our business school provides:
- Smart Classrooms with audio-visual tech
- Case Study & Group Discussion Halls
- Digital Library with access to journals & e-resources
- Seminar Hall & Conference Facilities
- Dedicated Career Development Cell
- Wi-Fi Enabled Campus

`,
  highlights: [
    "MBA & BBA Programs | Dual Specializations",
    "30+ Experienced Faculty | 100+ Recruiters",
    "Modern Teaching Aids | Digital Library",
    "Dedicated Career Cell | Personality Development",
    "NAAC B+ Accredited | AICTE Approved",
  ],
};
