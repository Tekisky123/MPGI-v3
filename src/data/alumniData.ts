// School Of Management Images
import AKASH from "../assets/Alumini/management/AKASH GAIKWAD.png";
import BALAJI from "../assets/Alumini/management/BALAJI CHAVHAN.png";
import SWAPNIL from "../assets/Alumini/management/SWAPNIL SADASHIV KONKE.png";
import SURAJ from "../assets/Alumini/management/SURAJ SANTOSH DASARVAR.png";
import MANMATH from "../assets/Alumini/management/MANMATH D WAKODE.png";
import AKASHPETKAR from "../assets/Alumini/management/AKASH PETKAR.png";
import PUNAM from "../assets/Alumini/management/PUNAM S. BHALEKAR.png";
import ATUL from "../assets/Alumini/management/ATUL RAJENDRA TOKE.png";
import SAQIB from "../assets/Alumini/management/SAQIB AZHAR.png";
import VITTHAL from "../assets/Alumini/management/VITTHAL PALLEWAD.png";
import DHIRAJ from "../assets/Alumini/management/DHIRAJ PANDHARI BHOYAR.png";
import DAYANAND from "../assets/Alumini/management/DAYANAND N. DHUNDE.png";
import KUNAL from "../assets/Alumini/management/KUNAL KULKARNI.png";
import SANJAY from "../assets/Alumini/management/SANJAY ANITA BHARAT .png";
import RAJESH from "../assets/Alumini/management/RAJESH PATIL.png";
import SANDIP from "../assets/Alumini/management/SANDIP BODAGE.png";
import YUVRAJ from "../assets/Alumini/management/YUVRAJ ARUN.png";
import RATNAKANT from "../assets/Alumini/management/Ratnakant Vaidya.png";
import MAHESH from "../assets/Alumini/management/Mahesh Gawande.png"
import HARSHAL from "../assets/Alumini/management/HARSHAL AUTE.png";
import AKASHSHESHRAO from "../assets/Alumini/management/Akash Sheshrao.png";

// school Of engineering Images
import nikhilBorlepawar from "../assets/Alumini/engineering/Nikhil Borlepawar.png";
import pankajChakrawar from "../assets/Alumini/engineering/Pankaj Chakrawar.png";
import apoorvaBahiwal from "../assets/Alumini/engineering/Apoorva Bahiwa.png";
import mohammedJafarUmer from "../assets/Alumini/engineering/Mohammed Jafar Umer.png";
import jatinPithadiya from "../assets/Alumini/engineering/Jatin Pithadiya.png";
import mayurChavan from "../assets/Alumini/engineering/Mayur Chavan.png";
import omkarDeshmukh from "../assets/Alumini/engineering/Omkar Deshmukh.png";
import vaibhavGhanekar from "../assets/Alumini/engineering/Vaibhav Ghanekar.png";
import rohitHumbe from "../assets/Alumini/engineering/Rohit Humbe.png";
import gauravNaik from "../assets/Alumini/engineering/Gaurav Naik.png";
import SambhajiWadje from "../assets/Alumini/engineering/Sambhaji Wadje.png";
import SiddiquiSayemFazlekarim from "../assets/Alumini/engineering/Siddiqui Sayem Fazlekarim.png";
import ManoharTanajiJadhav from "../assets/Alumini/engineering/Manohar Tanaji Jadhav.png";
import WankhedeBalajiBhanudas from "../assets/Alumini/engineering/Wankhede Balaji Bhanudas.png";
import BansodeVaibhavMaloji from "../assets/Alumini/engineering/Bansode Vaibhav Maloji.png";
import VibhuteSatishAshokrao from "../assets/Alumini/engineering/Vibhute Satish Ashokrao.png";
import RushikeshDattaraoPatange from "../assets/Alumini/engineering/Rushikesh Dattarao Patange.png";
import DeshmukhBhargavPrashant from "../assets/Alumini/engineering/Deshmukh Bhargav Prashant.png";
import PoojaBalajiPawade from "../assets/Alumini/engineering/Pooja Balaji Pawade.png";
import PratikshaPrabhakarraoKadam from "../assets/Alumini/engineering/Pratiksha Prabhakarrao Kadam.png";
import PathanJamirSamad from "../assets/Alumini/engineering/Pathan Jamir Samad.png";
import PawarAmolPanditrao from "../assets/Alumini/engineering/Pawar Amol Panditrao.png";
import AvinashRameshIngole from "../assets/Alumini/engineering/Avinash Ramesh Ingole.png";
import SupriyaRajkumarBashetwar from "../assets/Alumini/engineering/Supriya Rajkumar Bashetwar.png";
import GajananAnandRaoShinde from "../assets/Alumini/engineering/Gajanan Anand Rao Shinde.png";
import KomalPrakashYerawar from "../assets/Alumini/engineering/Komal Prakash Yerawar.png";
import PoojaTryambakSuryawanshi from "../assets/Alumini/engineering/Pooja Tryambak Suryawanshi.png";

export interface AlumniData {
  id: string;
  name: string;
  profile: string;
  selectedIn: string;
  package: string;
  image: string;
  content: string;
}

export const navItems = [
  { label: "School of Management Alumni's", id: "management" },
  { label: "Engineering Alumni", id: "engineering" },
  { label: "Polytechnic Alumni", id: "polytechnic" },
  { label: "Alumni Register", id: "register" },
  { label: "Alumni Speak", id: "speak" },
];

export const managementAlumni: AlumniData[] = [
  {
    id: "2",
    name: "AKASH GAIKWAD",
    profile: "",
    selectedIn: "THE TRIBE PVT. LTD., PUNE",
    package: "₹11 LPA",
    image: AKASH,
    content: "AKASH GAIKWAD is working at THE TRIBE PVT. LTD., PUNE...",
  },
  {
    id: "3",
    name: "BALAJI CHAVHAN",
    profile: "",
    selectedIn: "IDFC FIRST BANK, ANAND NAGAR, NANDED",
    package: "₹2.6 LPA",
    image: BALAJI,
    content:
      "BALAJI CHAVHAN is working at IDFC FIRST BANK, ANAND NAGAR, NANDED...",
  },
  {
    id: "4",
    name: "SWAPNIL SADASHIV KONKE",
    profile: "",
    selectedIn: "SUNDARAM FINANCE LTD, NANDED",
    package: "₹2.6 LPA",
    image: SWAPNIL,
    content:
      "SWAPNIL SADASHIV KONKE is working at SUNDARAM FINANCE LTD, NANDED...",
  },
  {
    id: "5",
    name: "SURAJ SANTOSH DASARVAR",
    profile: "Business Development Associate",
    selectedIn: "BYJU'S THE LEARNING APP, NANDED",
    package: "₹10 LPA",
    image: SURAJ,
    content:
      "SURAJ SANTOSH DASARVAR is working at BYJU'S THE LEARNING APP, NANDED...",
  },
  {
    id: "6",
    name: "MANMATH D WAKODE",
    profile: "Business Professional",
    selectedIn: "RELIANCE PVT. LTD, NANDED",
    package: "₹3.5 LPA",
    image: MANMATH,
    content: "MANMATH D WAKODE is working at RELIANCE PVT. LTD, NANDED...",
  },
  {
    id: "7",
    name: "AKASH PETKAR",
    profile: "Branch Manager",
    selectedIn: "GD GOENKA HEALTHCARE ACADEMY, NANDED",
    package: "₹11 LPA",
    image: AKASHPETKAR,
    content:
      "AKASH PETKAR is working at GD GOENKA HEALTHCARE ACADEMY, NANDED...",
  },
  {
    id: "8",
    name: "PUNAM S. BHALEKAR",
    profile: "Gram Panchayat Adhikari",
    selectedIn: "PIKULE, TQ- DODAMARG, DIST- SINDHUDURG",
    package: "₹2.4 LPA",
    image: PUNAM,
    content:
      "PUNAM S. BHALEKAR is working at PIKULE, TQ- DODAMARG, DIST- SINDHUDURG...",
  },
  {
    id: "9",
    name: "ATUL RAJENDRA TOKE",
    profile: "Business Development Manager",
    selectedIn: "ASPEN PUMPS GROUP (MNC COMPANY), PUNE",
    package: "₹11 LPA",
    image: ATUL,
    content:
      "ATUL RAJENDRA TOKE is working at ASPEN PUMPS GROUP (MNC COMPANY), PUNE...",
  },
  {
    id: "10",
    name: "SAQIB AZHAR",
    profile: "Sales & Marketing Manager",
    selectedIn: "BEVERAGES & ICE CANDY’S",
    package: "₹18 LPA",
    image: SAQIB,
    content: "SAQIB AZHAR is working at BEVERAGES & ICE CANDY’S...",
  },
  {
    id: "11",
    name: "VITTHAL PALLEWAD",
    profile: "Credit Manager",
    selectedIn: "AADHAR HOUSING FIN LTD, NANDED",
    package: "₹12.5 LPA",
    image: VITTHAL,
    content: "VITTHAL PALLEWAD is working at AADHAR HOUSING FIN LTD, NANDED...",
  },
  {
    id: "12",
    name: "DHIRAJ PANDHARI BHOYAR",
    profile: "Quality Executive",
    selectedIn: "SYNGENTA PVT LTD, JALNA",
    package: "₹4.5 LPA",
    image: DHIRAJ,
    content: "DHIRAJ PANDHARI BHOYAR is working at SYNGENTA PVT LTD, JALNA...",
  },
  {
    id: "13",
    name: "DAYANAND N. DHUNDE",
    profile: "Founder",
    selectedIn: "GROWTH X MEDIA, NANDED",
    package: "Not specified",
    image: DAYANAND,
    content: "DAYANAND N. DHUNDE is the founder of GROWTH X MEDIA, NANDED...",
  },
  {
    id: "14",
    name: "KUNAL KULKARNI",
    profile: "Engineer",
    selectedIn: "FABTECH PROJECTS & ENGINEERS LTD, PUNE",
    package: "₹2.4 LPA",
    image: KUNAL,
    content:
      "KUNAL KULKARNI is working at FABTECH PROJECTS & ENGINEERS LTD, PUNE...",
  },
  {
    id: "15",
    name: "SANJAY ANITA BHARAT KHILLARE",
    profile: "Branch Manager",
    selectedIn: "ST. CO. OP. BANK, LATUR",
    package: "₹8.5 LPA",
    image: SANJAY,
    content:
      "SANJAY ANITA BHARAT KHILLARE is working at ST. CO. OP. BANK, LATUR...",
  },
  {
    id: "16",
    name: "RAJESH PATIL",
    profile: "Claim Associate",
    selectedIn: "TECH MAHINDRA, HYDERABAD",
    package: "₹3.3 LPA",
    image: RAJESH,
    content: "RAJESH PATIL is working at TECH MAHINDRA, HYDERABAD...",
  },
  {
    id: "17",
    name: "SANDIP BODAGE",
    profile: "Financial Analyst",
    selectedIn: "GENPACT LOGISTIC COMPANY, PUNE",
    package: "₹5.2 LPA",
    image: SANDIP,
    content: "SANDIP BODAGE is working at GENPACT LOGISTIC COMPANY, PUNE...",
  },
  {
    id: "18",
    name: "YUVRAJ ARUN CHAVHAN",
    profile: "Sales Executive",
    selectedIn: "AU SMALL FINANCE BANK, HADAPSAR, PUNE",
    package: "₹2.3 LPA",
    image: YUVRAJ,
    content:
      "YUVRAJ ARUN CHAVHAN is working at AU SMALL FINANCE BANK, HADAPSAR, PUNE...",
  },
  {
    id: "19",
    name: "RATNAKANT VAIDYA",
    profile: "Senior Relationship Manager",
    selectedIn: "PIRAMAL CAPITAL HOUSING FINANCE",
    package: "₹5.8 LPA",
    image: RATNAKANT,
    content:
      "RATNAKANT VAIDYA is working at PIRAMAL CAPITAL HOUSING FINANCE...",
  },
  {
    id: "20",
    name: "MAHESH GAWANDE",
    profile: "Assistant Manager - Sales",
    selectedIn: "THE SUPREME INDUSTRIES LIMITED, MUMBAI",
    package: "₹7.5 LPA",
    image: MAHESH,
    content:
      "MAHESH GAWANDE is working at THE SUPREME INDUSTRIES LIMITED, MUMBAI...",
  },
  {
    id: "21",
    name: "HARSHAL AUTE",
    profile: "Assistant Manager",
    selectedIn: "TATA CAPITAL LTD",
    package: "₹4.5 LPA",
    image: HARSHAL,
    content: "HARSHAL AUTE is working at TATA CAPITAL LTD...",
  },
  {
    id: "22",
    name: "AKASH SHESHRAO HANUMANTE",
    profile: "Branch Operation Officer",
    selectedIn: "AYE FINANCE LTD, NANDED",
    package: "₹4.5 LPA",
    image: AKASHSHESHRAO,
    content:
      "AKASH SHESHRAO HANUMANTE is working at AYE FINANCE LTD, NANDED...",
  },
];

export const engineeringAlumni: AlumniData[] = [
  {
    id: "1",
    name: "Nikhil Borlepawar",
    profile: "Engineer",
    selectedIn: "RAKBAK Ras Al Khaimah, UAE",
    package: "₹36 LPA",
    image: nikhilBorlepawar,
    content: "",
  },
  {
    id: "2",
    name: "Pankaj Chakrawar",
    profile: "Team Lead",
    selectedIn: "FIS Global",
    package: "₹18 LPA",
    image: pankajChakrawar,
    content: "",
  },
  {
    id: "3",
    name: "Apoorva Bahiwal",
    profile: "Engineer",
    selectedIn: "Cognizant, Pune",
    package: "₹18 LPA",
    image: apoorvaBahiwal,
    content: "",
  },
  {
    id: "4",
    name: "Mohammed Jafar Umer",
    profile: "Engineer",
    selectedIn: "Mirafra Technologies, Bangalore",
    package: "₹18 LPA",
    image: mohammedJafarUmer,
    content: "",
  },
  {
    id: "5",
    name: "Jatin Pithadiya",
    profile: "Technology Analyst",
    selectedIn: "Infosys",
    package: "₹18 LPA",
    image: jatinPithadiya,
    content: "",
  },
  {
    id: "6",
    name: "Mayur Chavan",
    profile: "Engineer (Gold Medalist 2013-14)",
    selectedIn: "Atos Syntel Organisation",
    package: "₹16 LPA",
    image: mayurChavan,
    content: "",
  },
  {
    id: "7",
    name: "Omkar Deshmukh",
    profile: "iOS App Developer",
    selectedIn: "GS Lab, Pune",
    package: "₹14 LPA",
    image: omkarDeshmukh,
    content: "",
  },
  {
    id: "8",
    name: "Avdhut Ingale",
    profile: "Engineer",
    selectedIn: "COLLINS AEROSPACE, BANGALORE",
    package: "₹5.25 LPA",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "9",
    name: "Shivpooja Mustare",
    profile: "Engineer",
    selectedIn: "FAURECIA PVT.LTD., PUNE",
    package: "₹5.50 LPA",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "10",
    name: "Mr. Ghorband Vishnukant Namdev",
    profile: "Engineer",
    selectedIn: "HELLA INDIA PVT.LTD, PUNE",
    package: "₹5 LPA",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "11",
    name: "Mr. Sayem Siddiqui",
    profile: "Engineer",
    selectedIn: "HELLA INDIA AUTOMOTIVE PVT.LTD.",
    package: "₹5 LPA",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "12",
    name: "Chitalkar Pooja Vilasrao",
    profile: "Engineer",
    selectedIn: "HCL TECHNOLOGIES LTD., BANGALORE",
    package: "₹5 LPA",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "13",
    name: "Anjali Bhosale",
    profile: "Engineer",
    selectedIn: "HCL TECHNOLOGIES LTD., NOIDA",
    package: "₹5 LPA",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "14",
    name: "Gajanan Shinde",
    profile: "Engineer",
    selectedIn: "LEAR INDIA ENGINEERING LLP, PUNE",
    package: "₹5 LPA",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "15",
    name: "Mr. Bhargav Prashant Deshmukh",
    profile: "Engineer",
    selectedIn: "HINDUJA TECH ENGINEERING MOBILITY, PUNE",
    package: "₹4.50 LPA",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "16",
    name: "Pooja Suryawanshi",
    profile: "Engineer",
    selectedIn: "MAGNA ELECTRONICS INDIA, PUNE",
    package: "₹4.50 LPA",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "17",
    name: "Mr. Namdev Hiraman Jivant",
    profile: "Engineer",
    selectedIn: "MOBASE ELECTRONICS INDIA PVT LTD, HYDERABAD",
    package: "₹4.20 LPA",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "18",
    name: "Akash Kailash Jadhav",
    profile: "Engineer",
    selectedIn: "CAPGEMINI TECHNOLOGY SERVICES INDIA LTD., NOIDA",
    package: "₹4.10 LPA",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "19",
    name: "Komal P. Yerawar",
    profile: "Engineer",
    selectedIn: "MIRAFRA SOFTWARE TECHNOLOGY PVT.LTD., HYDERABAD",
    package: "₹4 LPA",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "20",
    name: "Mr. Rushikesh Dattarao Patange",
    profile: "Engineer",
    selectedIn: "VISTEON TECHNICAL AND SERVICES CENTRE PVT.LTD., BANGALORE",
    package: "₹3.5 LPA",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "21",
    name: "Mr. Shivchrana Shivajirao Maikapure",
    profile: "Engineer",
    selectedIn: "TRINITY ADVANCED SOFTWARE PVT.LTD.",
    package: "₹3.21 LPA",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "22",
    name: "Mr. Pawar Amol Pandit",
    profile: "Engineer",
    selectedIn: "KERNEX MICROSYSTEM (INDIA) LTD., HYD",
    package: "₹3 LPA",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "23",
    name: "Satish Ashokrao Vibhute",
    profile: "Engineer",
    selectedIn: "APTIVA COMPONENTS INDIA PVT.LTD., Bangalore",
    package: "₹3 LPA",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "24",
    name: "Pooja Pawade",
    profile: "Engineer",
    selectedIn: "MIRAFRA SOFTWARE TECHNOLOGY PVT.LTD., BANGALORE",
    package: "₹3 LPA",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "25",
    name: "Mr. Shailesh Pralhadrao Manaspurikar",
    profile: "Engineer",
    selectedIn: "L&T TECHNOLOGY SERVICES LTD., MYSORE",
    package: "₹3 LPA",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "26",
    name: "Bhushan Deshpande",
    profile: "Engineer",
    selectedIn: "EXALEAP SEMICONDUCTOR PVT.LTD., BANGALORE",
    package: "₹2.40 LPA",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "27",
    name: "Vaibhav Ghanekar",
    profile: "Engineer",
    selectedIn: "Cognizant, Pune",
    package: "₹12 LPA",
    image: vaibhavGhanekar,
    content: "",
  },
  {
    id: "28",
    name: "Rohit Humbe",
    profile: "Engineer",
    selectedIn: "Cognizant, Pune",
    package: "₹12 LPA",
    image: rohitHumbe,
    content: "",
  },
  {
    id: "29",
    name: "Gaurav Naik",
    profile: "Sr Implementation Engineer",
    selectedIn: "Enthralltech Pvt Ltd, Pune",
    package: "₹12 LPA",
    image: gauravNaik,
    content: "",
  },
  {
    id: "30",
    name: "Sambhaji Wadje",
    profile: "EEE - 2021",
    selectedIn: "YASH Technologies",
    package: "",
    image: SambhajiWadje,
    content: "",
  },
  {
    id: "31",
    name: "Siddiqui Sayem Fazlekarim",
    profile: "EE - 2021",
    selectedIn: "Hella India",
    package: "",
    image: SiddiquiSayemFazlekarim,
    content: "",
  },
  {
    id: "32",
    name: "Manohar Tanaji Jadhav",
    profile: "EE - 2021",
    selectedIn: "Tata",
    package: "",
    image: ManoharTanajiJadhav,
    content: "",
  },
  {
    id: "33",
    name: "Wankhede Balaji Bhanudas",
    profile: "EE - 2021",
    selectedIn: "Spark Minda Technologies",
    package: "",
    image: WankhedeBalajiBhanudas,
    content: "",
  },
  {
    id: "34",
    name: "Namdev Hiwant",
    profile: "EE - 2021",
    selectedIn: "Seoyon Electronics R&D",
    package: "",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "35",
    name: "Ghorband Vishnukant Namdev",
    profile: "EE - 2021",
    selectedIn: "Hella India",
    package: "",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "36",
    name: "Bansode Vaibhav Maloji",
    profile: "EE - 2021",
    selectedIn: "U-Shin India",
    package: "",
    image: BansodeVaibhavMaloji,
    content: "",
  },
  {
    id: "37",
    name: "Vibhute Satish Ashokrao",
    profile: "EE - 2021",
    selectedIn: "Mando",
    package: "",
    image: VibhuteSatishAshokrao,
    content: "",
  },
  {
    id: "38",
    name: "Rushikesh Dattarao Patange",
    profile: "EEE - 2020",
    selectedIn: "Visteon Corporation",
    package: "",
    image: RushikeshDattaraoPatange,
    content: "",
  },
  {
    id: "39",
    name: "Deshmukh Bhargav Prashant",
    profile: "ETC - 2020",
    selectedIn: "Hinduja Tech",
    package: "",
    image: DeshmukhBhargavPrashant,
    content: "",
  },
  {
    id: "40",
    name: "Pooja Balaji Pawade",
    profile: "ECE - 2020",
    selectedIn: "Mirafra",
    package: "",
    image: PoojaBalajiPawade,
    content: "",
  },
  {
    id: "41",
    name: "Pratiksha Prabhakarrao Kadam",
    profile: "EE - 2020",
    selectedIn: "ZF India",
    package: "",
    image: PratikshaPrabhakarraoKadam,
    content: "",
  },
  {
    id: "42",
    name: "Pathan Jamir Samad",
    profile: "EEE - 2020",
    selectedIn: "Zentree Labs",
    package: "",
    image: PathanJamirSamad,
    content: "",
  },
  {
    id: "43",
    name: "Pawar Amol Panditrao",
    profile: "ETC - 2020",
    selectedIn: "Kernex Microsystems",
    package: "",
    image: PawarAmolPanditrao,
    content: "",
  },
  {
    id: "44",
    name: "Avinash Ramesh Ingole",
    profile: "EE - 2020",
    selectedIn: "GNS Engineering India Pvt. Ltd",
    package: "",
    image: AvinashRameshIngole,
    content: "",
  },
  {
    id: "45",
    name: "Supriya Rajkumar Bashetwar",
    profile: "ETC - 2019",
    selectedIn: "ZPE Systems",
    package: "",
    image: SupriyaRajkumarBashetwar,
    content: "",
  },
  {
    id: "46",
    name: "Gajanan Anand Rao Shinde",
    profile: "ETC - 2019",
    selectedIn: "LEAR Corp",
    package: "",
    image: GajananAnandRaoShinde,
    content: "",
  },
  {
    id: "47",
    name: "Komal Prakash Yerawar",
    profile: "EE - 2021",
    selectedIn: "Mirafra Software Technology Pvt. Ltd.",
    package: "",
    image: KomalPrakashYerawar,
    content: "",
  },
  {
    id: "48",
    name: "Pooja Tryambak Suryawanshi",
    profile: "ETC - 2019",
    selectedIn: "Magna Electronics",
    package: "",
    image: PoojaTryambakSuryawanshi,
    content: "",
  },
  {
    id: "49",
    name: "Pooja Vilasrao Chitalkar",
    profile: "ECE - 2018",
    selectedIn: "HCL Technologies",
    package: "",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "50",
    name: "Kiran Khandu Harne",
    profile: "EE - 2017",
    selectedIn: "Capgemini",
    package: "",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
  {
    id: "51",
    name: "Anjali Dattatray Bhosale",
    profile: "ECE - 2017",
    selectedIn: "HCL Technologies",
    package: "",
    image:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
    content: "",
  },
];

export const polytechnicAlumni: AlumniData[] = [
  //   {
  //     id: "1",
  //     name: "Alice Johnson",
  //     profile: "Electrical Engineer",
  //     selectedIn: "General Electric",
  //     package: "$100,000",
  //     image: "path/to/image3.jpg",
  //     content: "Alice Johnson is an electrical engineer at General Electric...",
  //   },
  // Add more alumni data as needed
];
