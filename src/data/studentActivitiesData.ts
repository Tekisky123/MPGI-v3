export interface Activity {
  name: string;
  description?: string;
  points?: string[];
  tableData?: { label: string; value: string }[];
  path: string;
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

export interface CollegeActivityGroup {
  id: string;
  name: string;
  activities: Activity[];
}

export const studentActivitiesData: CollegeActivityGroup[] = [
  {
    id: "school-of-engineering",
    name: "School of Engineering",
    activities: [],
  },
  {
    id: "school-of-management",
    name: "School of Management",
    activities: [],
  },
  {
    id: "vishwabharati-polytechnic-institute",
    name: "Vishwabharati Polytechnic Institute",
    activities: [],
  },
];

export const facultyActivitiesData: CollegeActivityGroup[] = [
  {
    id: "school-of-engineering",
    name: "School of Engineering",
    activities: [
      {
        name: "Departmental Activities",
        description: "Programs/Events organized by the Faculty",
        tableData: [
          { label: "Sr. No.", value: "01" },
          {
            label: "Title of the program",
            value:
              "One day workshop on Recent Advances in Industrial IOT: the future of Manufacturing",
          },
          {
            label: "Name of the expert",
            value: "Dr. Sagar Tambe, Professor, MIT ADT, University Pune",
          },
          { label: "Date/duration", value: "9th Nov. 2024" },

          { label: "Sr. No.", value: "02" },
          {
            label: "Title of the program",
            value:
              "One day faculty development Program on Research Methodology, Research Proposals and Publications",
          },
          {
            label: "Name of the expert",
            value: "Dr. M. B. Kokare, Director, SGGS IET, Nanded",
          },
          { label: "Date/duration", value: "19th Nov. 2024" },

          { label: "Sr. No.", value: "03" },
          {
            label: "Title of the program",
            value:
              "One day Student Development Program on Various online Courses through SWAYAM portal: Objectives, Process of Registration, Evaluation Process and NEP requirement",
          },
          {
            label: "Name of the expert",
            value:
              "Dr. Nitin Darkunde, Department of Mathematics, SRTMU, Nanded",
          },
          { label: "Date/duration", value: "23rd Nov. 2024" },

          { label: "Sr. No.", value: "04" },
          { label: "Title of the program", value: "Palak Melawa" },
          { label: "Name of the expert", value: "-" },
          { label: "Date/duration", value: "07th Dec. 2024" },

          { label: "Sr. No.", value: "05" },
          { label: "Title of the program", value: "Alumni Meet -2025" },
          { label: "Name of the expert", value: "-" },
          { label: "Date/duration", value: "4th January 2025" },

          { label: "Sr. No.", value: "06" },
          { label: "Title of the program", value: "Mind Management" },
          {
            label: "Name of the expert",
            value:
              "Swami Turyananda Sarawati, President Chinmaya Mission, Kadappa, Chinmaya Mission Nandedya",
          },
          { label: "Date/duration", value: "9th March 2025" },

          { label: "Sr. No.", value: "07" },
          {
            label: "Title of the program",
            value: "One day workshop on Accreditation Process (NAAC)",
          },
          {
            label: "Name of the expert",
            value:
              "Dr. Rohidas Nitonde, Professor and Vice Principal, Shivaji Science, ART and Commerce College, Parbhani",
          },
          { label: "Date/duration", value: "8th April 2025" },

          { label: "Sr. No.", value: "08" },
          {
            label: "Title of the program",
            value: "Technical Education Awareness Program – 2025",
          },
          {
            label: "Name of the expert",
            value:
              "Hon. Kamaji Pawar, Dr. L. M. Waghmare, Dr. Sahaji Deshmukh and P. D. Popale",
          },
          { label: "Date/duration", value: "12th April 2025" },

          { label: "Sr. No.", value: "09" },
          {
            label: "Title of the program",
            value: "One day workshop on Universal Human Values for students",
          },
          {
            label: "Name of the expert",
            value:
              "Dr. Raju Namdevrao Panchan, Associate Professor, JSPM’s Rajashri Shahu College of Engineering, Tathwade, Pune",
          },
          { label: "Date/duration", value: "23rd May 2025" },

          { label: "Sr. No.", value: "10" },
          {
            label: "Title of the program",
            value: "Expert talk on “Patents and Innovation”",
          },
          {
            label: "Name of the expert",
            value: "Amol Mahamini from Kyndryl, IBM, Bengaluru, Karnataka",
          },
          { label: "Date/duration", value: "06th June 2025" },
        ],
        path: "/activities/departmental-activities",
      },
      {
        name: "Faculty Participation",
        description:
          "Participation of faculty in various technical activities/Program outside campus.",
        tableData: [
          { label: "Sr. No.", value: "01" },
          { label: "Title of the program", value: "One day workshop on IKS" },
          { label: "Date/duration", value: "13/09/2024" },
          {
            label: "Organization",
            value: "Pratibha Niketan Mahavidyalaya, Nanded",
          },
          { label: "Faculty", value: "Dr. Syeda Rukhsana, Samrat V. Kamble" },

          { label: "Sr. No.", value: "02" },
          {
            label: "Title of the program",
            value:
              "International Conference on Rural Development, Sustainable Empowerment in Agriculture",
          },
          { label: "Date/duration", value: "27/02/2025 – 28/02/2025" },
          { label: "Organization", value: "N.E.S Science College Nanded" },
          {
            label: "Faculty",
            value:
              "Dr. Syeda Rukhsana, Samrat V. Kamble, Pratap B. Pawar, Madhura Chavan",
          },

          { label: "Sr. No.", value: "03" },
          {
            label: "Title of the program",
            value:
              "International Conference on Matrix Analysis and Mathematical Modeling",
          },
          { label: "Date/duration", value: "29/11/2024 – 01/12/2024" },
          { label: "Organization", value: "NIT Jalandhar, Punjab" },
          { label: "Faculty", value: "Samrat V. Kamble" },

          { label: "Sr. No.", value: "04" },
          {
            label: "Title of the program",
            value: "One day workshop on “Raw Material”",
          },
          { label: "Date/duration", value: "11/04/2025" },
          {
            label: "Organization",
            value: "Joint Director office, DBATU, Sambhaji Nagar",
          },
          { label: "Faculty", value: "Deepak L. Rathod" },

          { label: "Sr. No.", value: "05" },
          {
            label: "Title of the program",
            value:
              "One day workshop on “Ensuring Quality a deep drive into Accreditation and Ranking”",
          },
          { label: "Date/duration", value: "09/04/2025" },
          {
            label: "Organization",
            value: "SGGS Institute of Engineering and Technology, Nanded",
          },
          {
            label: "Faculty",
            value:
              "Hasmi Asad, P. D. Popale, Shaikh Ajij Amir, A. M. Shirse, Jyoti Sarode, Prabhawati Waghmare",
          },
        ],
        path: "/activitiesdepartmental-activities",
      },
    ],
  },
  {
    id: "school-of-management",
    name: "School of Management",
    activities: [
      {
        name: "Departmental Activities",
        description: "Activities organized by various departments.",
        tableData: [],
        path: "/activities/departmental-activities",
      },
      {
        name: "Faculty Participation",
        description:
          "Participation of faculty in various technical activities/Program outside campus.",
        tableData: [],
        path: "/activitiesdepartmental-activities",
      },
    ],
  },
  {
    id: "vishwabharati-polytechnic-institute",
    name: "Vishwabharati Polytechnic Institute",
    activities: [
      {
        name: "Departmental Activities",
        description: "Activities organized by various departments.",
        tableData: [],
        path: "/activities/departmental-activities",
      },
      {
        name: "Faculty Participation",
        description:
          "Participation of faculty in various technical activities/Program outside campus.",
        tableData: [],
        path: "/activitiesdepartmental-activities",
      },
    ],
  },
];
