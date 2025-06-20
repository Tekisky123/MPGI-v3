import bus1 from "../assets/facilities/bus1.jpg";
import bus2 from "../assets/facilities/bus2.jpg";
import hostel1 from "../assets/facilities/hostel1.jpg";
import hostel2 from "../assets/facilities/hostel2.jpg";
import hostel3 from "../assets/facilities/hostel3.jpg";
import hostel4 from "../assets/facilities/hostel4.jpg";

export interface Facility {
  name: string;
  description?: string;
  points?: string[];
  tableData?: { label: string; value: string }[];
  path: string;
  images?: string[];
  aicteNaac?: { label: string; value: string }[];
  keyContacts?: {
    post: string;
    name: string;
    branch: string;
    email: string;
    mobile: string;
  }[];
  departmentalCoordinators?: {
    branch: string;
    name: string;
    email: string;
    mobile: string;
  }[];
}

export interface CollegeFacilityGroup {
  id: string;
  name: string;
  facilities: Facility[];
}

export const facilitiesData: CollegeFacilityGroup[] = [
  {
    id: "vishwabharati-polytechnic-institute",
    name: "Vishwabharti Polytechnic Institute",
    facilities: [
      {
        name: "Classrooms",
        description:
          "Well-equipped, spacious classrooms with modern teaching aids.",
        path: "/facilities/classrooms",
      },
      {
        name: "Girls and Boys Hostel",
        description:
          "Separate hostels for boys and girls with basic amenities and security.",
        points: [
          "Under CCTV Surveillance",
          "24 Hour's Security",
          "Free Wi-Fi",
          "Solar Water Heater",
          "RO Water",
          "24 Hour's Library",
          "Spacious Play Ground",
        ],
        images: [hostel1, hostel2, hostel3, hostel4],

        tableData: [
          { label: "Intake", value: "Boys Hostel = 75, Girls Hostel = 120" },
          { label: "Warden Boys Hostel", value: "Mr. D.M. Degloorkar" },
          { label: "Contact Boys Hostel", value: "+91 7721042972" },
          { label: "Warden Girls Hostel", value: "Miss. S.B. More" },
          { label: "Contact Girls Hostel", value: "+91 9021173485" },
        ],
        path: "/facilities/girls-boys-hostel",
      },

      {
        name: "Library",
        description:
          "Fully equipped library with books, journals, and digital resources.",
        path: "/facilities/library",
      },
      {
        name: "Indoor Sports",
        description:
          "Full-sized playgrounds, gymnasium, and indoor games room.",
        path: "/facilities/indoor-sports",
      },
      {
        name: "Outdoor Sports",
        description:
          "Full-sized playgrounds, gymnasium, and indoor games room.",
        path: "/facilities/outdoor-sports",
      },
      {
        name: "Bus Facilities",
        description: "",
      
       
        images: [bus1, bus2],
        path: "/facilities/bus-facilities",
      },
      {
        name: "WiFi Enable Campus",
        description:
          "Campus-wide high-speed internet access for students and staff.",
        path: "/facilities/wifi",
      },
      {
        name: "Cafeteria",
        description:
          "A spacious cafeteria offering a variety of meals and refreshments.",
        path: "/facilities/cafeteria",
      },
     
    ],
  },
  {
    id: "school-of-engineering",
    name: "School of Engineering",
    facilities: [
      {
        name: "Classrooms",
        description:
          "Smart classrooms with projectors, ACs, and interactive learning tools.",
        path: "/facilities/classrooms",
      },
      {
        name: "Girls and Boys Hostel",
        description:
          "Separate hostels for boys and girls with basic amenities and security.",
        points: [
          "Under CCTV Surveillance",
          "24 Hour's Security",
          "Free Wi-Fi",
          "Solar Water Heater",
          "RO Water",
          "24 Hour's Library",
          "Spacious Play Ground",
        ],
        images: [hostel1, hostel2, hostel3, hostel4],

        tableData: [
          { label: "Intake", value: "Boys Hostel = 75, Girls Hostel = 120" },
          { label: "Warden Boys Hostel", value: "Mr. D.M. Degloorkar" },
          { label: "Contact Boys Hostel", value: "+91 7721042972" },
          { label: "Warden Girls Hostel", value: "Miss. S.B. More" },
          { label: "Contact Girls Hostel", value: "+91 9021173485" },
        ],
        path: "/facilities/girls-boys-hostel",
      },

      {
        name: "Library",
        description:
          "A well-stocked library with digital resources and study spaces.",
        path: "/facilities/library",
      },
      {
        name: "Virtual Labs",
        description:
          "IIT Bombay Virtual Lab Nodal Center established at our institute in Feb 2025.",
        points: [
          "Enhanced safety and accessibility",
          "Interactive simulations and personalized learning paths",
          "Students can repeat experiments without limitations",
          "Data collection, analysis, and visualization tools",
          "Reduces cost and risks associated with physical labs",
        ],
        instituteInfo: [
          {
            label: "Institute",
            value:
              "Matoshri Pratishthan Group of Institutions School of Engineering, Nanded",
          },
          { label: "NCID", value: "447" },
          {
            label: "Address",
            value:
              "Jijau Nagar, Off Nanded-Latur Highway, Khupsarwadi, post Vishnupuri, Nanded Maharashtra 431606",
          },
          { label: "Institute Acronym", value: "MPGISOEN" },
          { label: "AISHE CODE", value: "C-7589" },
          { label: "Latitude", value: "19.0895" },
          { label: "Longitude", value: "77.2518" },
          {
            label: "Affiliated To",
            value: "Dr. Babasaheb Ambedkar Technological University, Lonere",
          },
        ],
        keyContacts: [
          {
            post: "Outreach Coordinator",
            name: "Mr Lakhan Rathod",
            branch: "Civil Engineering",
            email: "lakhan180689@gmail.com",
            mobile: "9763433187",
          },
          {
            post: "Nodal Coordinator",
            name: "Mr Azhar Ahmed",
            branch: "Electrical Engineering",
            email: "azhar.ahmed.eep@gmail.com",
            mobile: "9272579279",
          },
          {
            post: "Head of the Institute",
            name: "Dr L Waghmare",
            branch: "-",
            email: "lmwaghmare@yahoo.com",
            mobile: "9822663185",
          },
        ],
        departmentalCoordinators: [
          {
            branch: "Civil Engineering",
            name: "Ms Asna Fatima (1)",
            email: "asnafatima999@gmail.com",
            mobile: "9420871438",
          },
          {
            branch: "Mechanical Engineering",
            name: "Mr Chamkour Singh Gill (5)",
            email: "csgillsir@gmail.com",
            mobile: "9021823006",
          },
          {
            branch: "Basic Science and Humanities",
            name: "Dr Rukhsana Sayyad (16)",
            email: "15rukhsana@gmail.com",
            mobile: "9371062777",
          },
          {
            branch: "Electronics and Telecommunication Engineering",
            name: "Mr Ajij Shaikh (13)",
            email: "azizshaikh000456@gmail.com",
            mobile: "9112391234",
          },
          {
            branch: "Electrical Engineering",
            name: "Mrs Manisha Telange (6)",
            email: "mpgimanisha@gmail.com",
            mobile: "8390699111",
          },
          {
            branch: "Computer Science and Engineering",
            name: "Ms Jyoti Sarode (6)",
            email: "jyotisarode@gmail.com",
            mobile: "9011033624",
          },
        ],
        aicteNaac: [
          {
            label: "AICTE Approval Number",
            value: "1-6754941",
          },
          {
            label: "NAAC Accreditation",
            value: "B+",
          },
        ],
        path: "/facilities/virtual-labs",
      },
      {
        name: "Indoor Sports",
        description:
          "Full-sized playgrounds, gymnasium, and indoor games room.",
        path: "/facilities/indoor-sports",
      },
      {
        name: "Outdoor Sports",
        description:
          "Full-sized playgrounds, gymnasium, and indoor games room.",
        path: "/facilities/outdoor-sports",
      },

      {
        name: "Bus Facilities",
      
        images: [bus1, bus2],
        path: "/facilities/bus-facilities",
      },
      {
        name: "WiFi Enable Campus",
        description:
          "High-speed internet connectivity across classrooms, labs, and hostels.",
        path: "/facilities/wifi",
      },
      {
        name: "Cafeteria",
        description:
          "A spacious cafeteria offering a variety of meals and refreshments.",
        path: "/facilities/cafeteria",
      },
    
    ],
  },
  {
    id: "school-of-management",
    name: "School of Management",
    facilities: [
      {
        name: "Classrooms",
        description:
          "Spacious, air-conditioned classrooms with multimedia support.",
        path: "/facilities/classrooms",
      },
      {
        name: "Girls and Boys Hostel",
        description:
          "Separate hostels for boys and girls with basic amenities and security.",
        points: [
          "Under CCTV Surveillance",
          "24 Hour's Security",
          "Free Wi-Fi",
          "Solar Water Heater",
          "RO Water",
          "24 Hour's Library",
          "Spacious Play Ground",
        ],
        tableData: [
          { label: "Intake", value: "Boys Hostel = 75, Girls Hostel = 120" },
          { label: "Warden Boys Hostel", value: "Mr. D.M. Degloorkar" },
          { label: "Contact Boys Hostel", value: "+91 7721042972" },
          { label: "Warden Girls Hostel", value: "Miss. S.B. More" },
          { label: "Contact Girls Hostel", value: "+91 9021173485" },
        ],
        images: [hostel1, hostel2, hostel3, hostel4],
        path: "/facilities/girls-boys-hostel",
      },

      {
        name: "Library",
        description:
          "Library with management case studies, journals, and e-resources.",
        path: "/facilities/library",
      },
      {
        name: "Indoor Sports",
        description:
          "Full-sized playgrounds, gymnasium, and indoor games room.",
        path: "/facilities/indoor-sports",
      },
      {
        name: "Outdoor Sports",
        description:
          "Full-sized playgrounds, gymnasium, and indoor games room.",
        path: "/facilities/outdoor-sports",
      },
      {
        name: "Bus Facilities",
      
        images: [bus1, bus2],
        path: "/facilities/bus-facilities",
      },
      {
        name: "WiFi Enable Campus",
        description:
          "Campus-wide WiFi for seamless online learning and research.",
        path: "/facilities/wifi",
      },
      {
        name: "Cafeteria",
        description:
          "A spacious cafeteria offering a variety of meals and refreshments.",
        path: "/facilities/cafeteria",
      },
     
    ],
  },
];
