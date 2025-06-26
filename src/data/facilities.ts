import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
  libraryData?: {
    totalTitles: {
      label: string;
      engineering: string;
      mba: string;
      bookBank: string;
      donation: string;
      total: string;
    }[];
    journals: {
      printed: string;
      eJournals: string;
      nationalInternational: string;
      departmentWise: {
        department: string;
        national: string;
        international: string;
        total: string;
      }[];
    };
    newspapers: string[];
    additionalBooks: string[];
    currentYearBudget: string;
    readingRoomCapacity: string;
    facilities: string[];
    staffDetails: {
      name: string;
      designation: string;
      qualification: string;
      experience: string;
      duties: string[];
    }[];
  };
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
        libraryData: {
          totalTitles: [
            {
              label: "Engineering",
              titles: "2,294",
              books: "15,400",
            },
            {
              label: "MBA",
              titles: "1,506",
              books: "2,303",
            },
            {
              label: "Book Bank",
              titles: "406",
              books: "2,356",
            },
            {
              label: "Donation",
              titles: "567",
              books: "636",
            },
            {
              label: "Total",
              titles: "4,773",
              books: "20,695",
            },
          ],
          journals: {
            printed: "13",
            eJournals: "Yes (DELNET Subscription)",
            nationalInternational: "National & International Journals",
            departmentWise: [
              {
                department: "Applied Sci.",
                national: "0",
                international: "1",
                total: "1",
              },
              {
                department: "Civil",
                national: "2",
                international: "0",
                total: "2",
              },
              {
                department: "Computer",
                national: "3",
                international: "2",
                total: "5",
              },
              {
                department: "Electrical",
                national: "2",
                international: "1",
                total: "3",
              },
              {
                department: "Mechanical",
                national: "0",
                international: "1",
                total: "1",
              },
              {
                department: "MBA",
                national: "1",
                international: "0",
                total: "1",
              },
            ],
          },
          newspapers: [
            "Indian Express",
            "The Hindu",
            "Sakal",
            "Loksatta",
            "Lokmat",
            "Godatir",
          ],
          additionalBooks: [
            "Competitive Exams",
            "GATE/GRE/TOEFL/CAT",
            "Literature: Novels & Autobiography",
            "General Knowledge",
          ],
          currentYearBudget: "Yet to prepare",
          readingRoomCapacity: "100 + 50",
          facilities: [
            "Computing facilities: 10 terminals",
            "List of legal software purchased: Yes",
            "Maintenance: 07",
            "Reprographic facilities: Yes",
            "Inter-Library Loan Service: Yes",
            "Library Insurance policy: Yes (Worth of Rs. 91,00,000.00/-)",
            "Internet facility: Yes",
            "Library automation: Yes (Koha Software)",
            "Digital Library: Yes",
            "E-Resource Membership: Yes (DELNET)",
            "CD/DVD Collection: 864 (Books & Magazine)",
            "Downloads: Yes",
            "Printing: Yes",
            "Reading list/Bibliography Compilation: Yes (Displayed self list)",
            "Information deployment and notification: Yes (through Notice-board)",
            "User orientation and awareness: Yes",
            "Institutional Repository: Yes (Video lectures, Photographs, old university question papers (Softcopy), journal articles in digital form)",
          ],
          staffDetails: [
            {
              name: "Mr. Tate Dilip",
              designation: "Librarian",
              qualification: "B.A., M.LIS",
              experience: "12.6 Yrs",
              duties: [
                "General administration in library",
                "Budgeting",
                "Books, Periodical, Video tapes selection and acquisition",
                "Placing purchase order",
                "Planning of library development",
                "Supervision of library staff Data feeding of library books",
                "OPAC, entries of books",
                "Supervision and maintenance of digital library",
                "Library Automation",
                "Journal subscription & pass the bills of books, journals, news papers",
                "Institutional repositories like Scan question papers, daily news articles and maintain softcopy also forward to the management",
              ],
            },
            {
              name: "Mr. Pawde Manik Marotrao",
              designation: "Library-Assistant",
              qualification: "B.A., M.LIS",
              experience: "5.5 Yrs",
              duties: [
                "Issue-receive books manually as well as online for B.E. Engg., SE girls, TE boys, PG students & staff",
                "Indexing of daily issue receive book cards, shelving & maintaining daily transaction record",
                "Assist to Librarian in his work and responsible for all the matters concerned with the library",
              ],
            },
            {
              name: "Mr. Sajeed Shaikh",
              designation: "Library Assistant",
              qualification: "B.A., M.LIS, M.Phil., Ph.D (Reg.)",
              experience: "7+ Yrs",
              duties: [
                "In-charge of Night Library from 4.30pm to 11.00pm and maintain the respective record",
                "Daily reporting to Librarian",
                "Assist to Librarian in his work and responsible for all the matters concerned with the library",
              ],
            },
            {
              name: "Mr. Jigale Bhagwan",
              designation: "Library Attendant",
              qualification: "S.S.C.",
              experience: "",
              duties: [
                "Cleaning both library halls, digital library daily upto 10.30 am",
                "Stamp & display newspapers on newspaper stand",
                "Taking attendance of newspapers",
                "Indexing, shelving, pasting book pockets & book slips, news articles",
                "Assist librarian as would be directed by him",
              ],
            },
          ],
        },
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
