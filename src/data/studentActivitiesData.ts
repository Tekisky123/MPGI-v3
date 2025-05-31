// studentActivitiesData.ts
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
    id: "vishwabharati-polytechnic-institute",
    name: "Vishwabharti Polytechnic Institute",
    activities: [
      {
        name: "CESA",
        description:
          "Computer Engineering Student Association organizes technical events and workshops.",
        path: "/activities/cesa",
      },
      {
        name: "CUC",
        description:
          "Cultural Unity Club promotes cultural diversity and organizes cultural events.",
        path: "/activities/cuc",
      },
      {
        name: "ETA",
        description:
          "Electronics and Telecommunication Association hosts technical seminars and competitions.",
        path: "/activities/eta",
      },
      {
        name: "CSI/IEI",
        description:
          "Computer Society of India and Institution of Engineers India joint chapter activities.",
        path: "/activities/csi",
      },
      {
        name: "MESA",
        description:
          "Mechanical Engineering Student Association organizes technical workshops and industrial visits.",
        path: "/activities/mesa",
      },
      {
        name: "ITSA",
        description:
          "Information Technology Student Association focuses on coding competitions and hackathons.",
        path: "/activities/itsa",
      },
      {
        name: "CAST Activity",
        description:
          "College Annual Sports Tournament organizes inter-department sports competitions.",
        path: "/activities/cast-activity",
      },
      {
        name: "Open Source",
        description:
          "Open Source Community promotes contribution to open-source projects.",
        path: "/activities/open-source",
      },
      {
        name: "English Language Club",
        description:
          "Enhances English communication skills through debates, elocution, and workshops.",
        path: "/activities/english-language-club",
      },
      {
        name: "Indoor Sports Achievements",
        description:
          "Celebrates achievements in indoor sports like chess, table tennis, and carrom.",
        path: "/activities/indoor",
      },
      {
        name: "Outdoor Sports Achievements",
        description:
          "Recognizes achievements in outdoor sports like cricket, football, and athletics.",
        path: "/activities/outdoor",
      },
      {
        name: "Aarohan",
        description:
          "Annual technical festival showcasing innovations and projects.",
        path: "/activities/aarohan",
      },
      {
        name: "Jhankaar",
        description:
          "Annual cultural festival featuring music, dance, and drama performances.",
        path: "/activities/jhankaar",
      },
    ],
  },
  {
    id: "school-of-engineering",
    name: "School of Engineering",
    activities: [
      {
        name: "CESA",
        description:
          "Computer Engineering Student Association organizes technical events and workshops.",
        path: "/activities/cesa",
      },
      {
        name: "CUC",
        description:
          "Cultural Unity Club promotes cultural diversity and organizes cultural events.",
        path: "/activities/cuc",
      },
      {
        name: "ETA",
        description:
          "Electronics and Telecommunication Association hosts technical seminars and competitions.",
        path: "/activities/eta",
      },
      {
        name: "CSI/IEI",
        description:
          "Computer Society of India and Institution of Engineers India joint chapter activities.",
        path: "/activities/csi",
      },
      {
        name: "MESA",
        description:
          "Mechanical Engineering Student Association organizes technical workshops and industrial visits.",
        path: "/activities/mesa",
      },
      {
        name: "ITSA",
        description:
          "Information Technology Student Association focuses on coding competitions and hackathons.",
        path: "/activities/itsa",
      },
      {
        name: "CAST Activity",
        description:
          "College Annual Sports Tournament organizes inter-department sports competitions.",
        path: "/activities/cast-activity",
      },
      {
        name: "Open Source",
        description:
          "Open Source Community promotes contribution to open-source projects.",
        path: "/activities/open-source",
      },
      {
        name: "English Language Club",
        description:
          "Enhances English communication skills through debates, elocution, and workshops.",
        path: "/activities/english-language-club",
      },
      {
        name: "Indoor Sports Achievements",
        description:
          "Celebrates achievements in indoor sports like chess, table tennis, and carrom.",
        path: "/activities/indoor",
      },
      {
        name: "Outdoor Sports Achievements",
        description:
          "Recognizes achievements in outdoor sports like cricket, football, and athletics.",
        path: "/activities/outdoor",
      },
      {
        name: "Aarohan",
        description:
          "Annual technical festival showcasing innovations and projects.",
        path: "/activities/aarohan",
      },
      {
        name: "Jhankaar",
        description:
          "Annual cultural festival featuring music, dance, and drama performances.",
        path: "/activities/jhankaar",
      },
    ],
  },
  {
    id: "school-of-management",
    name: "School of Management",
    activities: [
      {
        name: "CUC",
        description:
          "Cultural Unity Club promotes cultural diversity and organizes cultural events.",
        path: "/activities/cuc",
      },
      {
        name: "CSI/IEI",
        description:
          "Computer Society of India and Institution of Engineers India joint chapter activities.",
        path: "/activities/csi",
      },
      {
        name: "CAST Activity",
        description:
          "College Annual Sports Tournament organizes inter-department sports competitions.",
        path: "/activities/cast-activity",
      },
      {
        name: "English Language Club",
        description:
          "Enhances English communication skills through debates, elocution, and workshops.",
        path: "/activities/english-language-club",
      },
      {
        name: "Indoor Sports Achievements",
        description:
          "Celebrates achievements in indoor sports like chess, table tennis, and carrom.",
        path: "/activities/indoor",
      },
      {
        name: "Outdoor Sports Achievements",
        description:
          "Recognizes achievements in outdoor sports like cricket, football, and athletics.",
        path: "/activities/outdoor",
      },
      {
        name: "Aarohan",
        description:
          "Annual technical festival showcasing innovations and projects.",
        path: "/activities/aarohan",
      },
      {
        name: "Jhankaar",
        description:
          "Annual cultural festival featuring music, dance, and drama performances.",
        path: "/activities/jhankaar",
      },
    ],
  },
];
