import { JSX } from "react";
import undertakingStudent from "../assets/pdf/UNDERTAKING FOR STUDENT.pdf";
import undertakingParents from "../assets/pdf/UNDERTAKING FOR PARENTS.pdf";
import antiRaggingAffidavit from "../assets/pdf/Anti-ragging declaration of students.doc 2020-21.pdf";

// Tab Navigation Items
export const admissionNavItems = [
  { name: "Courses", path: "/courses" },
  { name: "Fee Structure", path: "/fee-structure" },
  { name: "Student Information", path: "/student-information" },
  { name: "Undertaking", path: "/undertaking" },
  { name: "Information Brochure 2024-25", path: "/information-brochure" },
  {
    name: "SBI Collect",
    path: "https://www.onlinesbi.sbi/sbicollect/",
    external: true,
  },
  {
    name: "VidyaLaxmi Portal",
    path: "https://www.vidyalakshmi.co.in/",
    external: true,
  },
];

export const UNDERSTANDING_DOCUMENTS = [
  {
    title: "UNDERTAKING FOR STUDENT",
    filePath: undertakingStudent,
  },
  {
    title: "UNDERTAKING FOR PARENTS",
    filePath: undertakingParents,
  },
  {
    title: "AFFIDAVIT BY THE STUDENT ON ANTI-RAGGING",
    filePath: antiRaggingAffidavit,
  },
];

// Information Brochure PDF
export const INFORMATION_BROCHURE_PDF = "";

// Course Tables
const POLYTECHNIC_COURSES_TABLE = (
  <table className="min-w-full border-collapse text-sm">
    <thead>
      <tr className="bg-gray-100">
        <th className="border px-4 py-2">Sr. No.</th>
        <th className="border px-4 py-2">Course Offered</th>
        <th className="border px-4 py-2">Intake</th>
        <th className="border px-4 py-2">DTE Code</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-4 py-2">1</td>
        <td className="border px-4 py-2">Diploma In Computer Engineering</td>
        <td className="border px-4 py-2">90</td>
        <td className="border px-4 py-2">219424510</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">2</td>
        <td className="border px-4 py-2">Diploma In Information Technology</td>
        <td className="border px-4 py-2">60</td>
        <td className="border px-4 py-2">219424610</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">3</td>
        <td className="border px-4 py-2">Diploma In Electrical Engineering</td>
        <td className="border px-4 py-2">90</td>
        <td className="border px-4 py-2">219429310</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">4</td>
        <td className="border px-4 py-2">Diploma In E & TC Engineering</td>
        <td className="border px-4 py-2">30</td>
        <td className="border px-4 py-2">219437210</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">5</td>
        <td className="border px-4 py-2">Diploma In Civil Engineering</td>
        <td className="border px-4 py-2">30</td>
        <td className="border px-4 py-2">219419110</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">6</td>
        <td className="border px-4 py-2">Diploma In Mechanical Engineering</td>
        <td className="border px-4 py-2">30</td>
        <td className="border px-4 py-2">219461210</td>
      </tr>
    </tbody>
  </table>
);

const SCHOOL_OF_ENGINEERING_BTECH_TABLE = (
  <table className="min-w-full border-collapse text-sm">
    <thead>
      <tr className="bg-gray-100">
        <th className="border px-4 py-2">Sr. No.</th>
        <th className="border px-4 py-2">Course Offered</th>
        <th className="border px-4 py-2">Intake</th>
        <th className="border px-4 py-2">DTE Code</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-4 py-2">1</td>
        <td className="border px-4 py-2">Civil Engineering</td>
        <td className="border px-4 py-2">60</td>
        <td className="border px-4 py-2">211619110</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">2</td>
        <td className="border px-4 py-2">Computer Science & Eng.</td>
        <td className="border px-4 py-2">60</td>
        <td className="border px-4 py-2">211624210</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">3</td>
        <td className="border px-4 py-2">Electrical Engineering</td>
        <td className="border px-4 py-2">60</td>
        <td className="border px-4 py-2">211629310</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">4</td>
        <td className="border px-4 py-2">Mechanical Engineering</td>
        <td className="border px-4 py-2">60</td>
        <td className="border px-4 py-2">211661210</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">5</td>
        <td className="border px-4 py-2">
          Electronics and Telecommunication Engineering
        </td>
        <td className="border px-4 py-2">60</td>
        <td className="border px-4 py-2">211629510</td>
      </tr>
    </tbody>
  </table>
);

const SCHOOL_OF_MANAGEMENT_TABLE = (
  <table className="min-w-full border-collapse text-sm">
    <thead>
      <tr className="bg-gray-100">
        <th className="border px-4 py-2">Sr. No.</th>
        <th className="border px-4 py-2">Program</th>
        <th className="border px-4 py-2">Intake</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-4 py-2">1</td>
        <td className="border px-4 py-2">Marketing Management</td>
        <td className="border px-4 py-2">120</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">2</td>
        <td className="border px-4 py-2">Financial Management</td>
        <td className="border px-4 py-2">120</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">3</td>
        <td className="border px-4 py-2">Human Resource Management</td>
        <td className="border px-4 py-2">120</td>
      </tr>
    </tbody>
  </table>
);

// Fee Structures
const SCHOOL_OF_ENGINEERING_FEES = (
  <div className="space-y-8">
    {/* <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
      <h3 className="text-xl font-bold text-mpgin-darkBlue mb-4">
        B.TECH (U.G.) 2024-25
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1">Sr. No.</th>
              <th className="border px-2 py-1">Types of Fees</th>
              <th className="border px-2 py-1">OPEN / INSTITUTE LEVEL</th>
              <th className="border px-2 py-1">OBC</th>
              <th className="border px-2 py-1">EBC/EWS</th>
              <th className="border px-2 py-1">NT/DT/VJ/SBC</th>
              <th className="border px-2 py-1">SC/ST</th>
              <th className="border px-2 py-1">TFWS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">1</td>
              <td className="border px-2 py-1">Tuition Fees</td>
              <td>97346</td>
              <td>48673</td>
              <td>48673</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">2</td>
              <td className="border px-2 py-1">Development Fees</td>
              <td>12654</td>
              <td>12654</td>
              <td>12654</td>
              <td>12654</td>
              <td>0</td>
              <td>12654</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">3</td>
              <td className="border px-2 py-1">Other Charges</td>
              <td>350</td>
              <td>350</td>
              <td>350</td>
              <td>350</td>
              <td>350</td>
              <td>350</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">4</td>
              <td className="border px-2 py-1">Advance Fees (Refundable)</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>1000</td>
              <td>0</td>
            </tr>
            <tr className="font-semibold bg-gray-50">
              <td colSpan={2} className="border px-2 py-1">
                Total Rs
              </td>
              <td>110350</td>
              <td>61677</td>
              <td>61677</td>
              <td>13004</td>
              <td>1350</td>
              <td>13004</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-red-600 italic">
        * If online Scholarship EBC/EWS/Minority is not filled/Accepted, student
        will have to pay Total College fees i.e. Rs 110350/-
      </p>
    </div>

    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
      <h3 className="text-xl font-bold text-mpgin-darkBlue mb-4">
        Direct Second Year 2024-25
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1">Sr. No.</th>
              <th className="border px-2 py-1">Types of Fees</th>
              <th className="border px-2 py-1">OPEN</th>
              <th className="border px-2 py-1">OBC</th>
              <th className="border px-2 py-1">SC/ST</th>
              <th className="border px-2 py-1">NT/DT/VJ/SBC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">1</td>
              <td className="border px-2 py-1">Tuition Fees</td>
              <td>88930</td>
              <td>44465</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">2</td>
              <td className="border px-2 py-1">Development Fees</td>
              <td>9070</td>
              <td>9070</td>
              <td>0</td>
              <td>9070</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">3</td>
              <td className="border px-2 py-1">Other Charges</td>
              <td>350</td>
              <td>350</td>
              <td>350</td>
              <td>350</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">4</td>
              <td className="border px-2 py-1">Advance Fees</td>
              <td>0</td>
              <td>0</td>
              <td>1000</td>
              <td>0</td>
            </tr>
            <tr className="font-semibold bg-gray-50">
              <td colSpan={2} className="border px-2 py-1">
                Total Rs
              </td>
              <td>98350</td>
              <td>53885</td>
              <td>1350</td>
              <td>9420</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> */}
  </div>
);

const POLYTECHNIC_FEES = (
  <div className="space-y-8">
    {/* <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
      <h3 className="text-xl font-bold text-mpgin-darkBlue mb-4">
        Diploma Courses 2024-25
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1">Sr. No.</th>
              <th className="border px-2 py-1">Types of Fees</th>
              <th className="border px-2 py-1">OPEN</th>
              <th className="border px-2 py-1">OBC</th>
              <th className="border px-2 py-1">SC/ST</th>
              <th className="border px-2 py-1">NT/DT/VJ/SBC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">1</td>
              <td className="border px-2 py-1">Tuition Fees</td>
              <td>34346</td>
              <td>34346</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">2</td>
              <td className="border px-2 py-1">Development Fees</td>
              <td>3435</td>
              <td>3435</td>
              <td>0</td>
              <td>3435</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">3</td>
              <td className="border px-2 py-1">T.F. & D.F.</td>
              <td>37781</td>
              <td>37781</td>
              <td>0</td>
              <td>37781</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">4</td>
              <td className="border px-2 py-1">
                MSBTE COB, Enrollment & Exam Fees (I/III SEM.)
              </td>
              <td>1150</td>
              <td>1150</td>
              <td>1150</td>
              <td>1150</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">5</td>
              <td className="border px-2 py-1">Student Insurance Fees</td>
              <td>454</td>
              <td>454</td>
              <td>454</td>
              <td>454</td>
            </tr>
            <tr className="font-semibold bg-gray-50">
              <td colSpan={2} className="border px-2 py-1">
                Total Rs
              </td>
              <td>39346</td>
              <td>39346</td>
              <td>1604</td>
              <td>40850</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
      <h3 className="text-xl font-bold text-mpgin-darkBlue mb-4">
        Direct Second Year 2024-25
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1">Sr. No.</th>
              <th className="border px-2 py-1">Types of Fees</th>
              <th className="border px-2 py-1">OPEN</th>
              <th className="border px-2 py-1">OBC</th>
              <th className="border px-2 py-1">SC/ST</th>
              <th className="border px-2 py-1">NT/DT/VJ/SBC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">1</td>
              <td className="border px-2 py-1">Tuition Fees</td>
              <td>34346</td>
              <td>34346</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">2</td>
              <td className="border px-2 py-1">Development Fees</td>
              <td>3435</td>
              <td>3435</td>
              <td>0</td>
              <td>3435</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">3</td>
              <td className="border px-2 py-1">T.F. & D.F.</td>
              <td>37781</td>
              <td>37781</td>
              <td>0</td>
              <td>37781</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">4</td>
              <td className="border px-2 py-1">
                MSBTE COB, Enrollment & Exam Fees (I/III SEM.)
              </td>
              <td>1350</td>
              <td>1350</td>
              <td>1350</td>
              <td>1350</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">5</td>
              <td className="border px-2 py-1">Student Insurance Fees</td>
              <td>234</td>
              <td>234</td>
              <td>234</td>
              <td>234</td>
            </tr>
            <tr className="font-semibold bg-gray-50">
              <td colSpan={2} className="border px-2 py-1">
                Total Rs
              </td>
              <td>39364</td>
              <td>39364</td>
              <td>1584</td>
              <td>40866</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> */}
  </div>
);

const MANAGEMENT_FEES = (
  <div className="space-y-8">
    {/* <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
      <h3 className="text-xl font-bold text-mpgin-darkBlue mb-4">
        M.TECH (P.G.) 2024-25
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1">Sr. No.</th>
              <th className="border px-2 py-1">Types of Fees</th>
              <th className="border px-2 py-1">OPEN/OBC/SC/ST/NT/SBC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">1</td>
              <td className="border px-2 py-1">Tuition Fees</td>
              <td>67400</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">2</td>
              <td className="border px-2 py-1">Development Fees</td>
              <td>9100</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">3</td>
              <td className="border px-2 py-1">Other Charges</td>
              <td>350</td>
            </tr>
            <tr className="font-semibold bg-gray-50">
              <td colSpan={2} className="border px-2 py-1">
                Total Rs
              </td>
              <td>76850</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
      <h3 className="text-xl font-bold text-mpgin-darkBlue mb-4">
        Management Programs 2024-25
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1">Sr. No.</th>
              <th className="border px-2 py-1">Types of Fees</th>
              <th className="border px-2 py-1">OPEN/OBC/SC/ST/NT/SBC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">1</td>
              <td className="border px-2 py-1">Tuition Fees</td>
              <td>67400</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">2</td>
              <td className="border px-2 py-1">Development Fees</td>
              <td>9100</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">3</td>
              <td className="border px-2 py-1">Other Charges</td>
              <td>350</td>
            </tr>
            <tr className="font-semibold bg-gray-50">
              <td colSpan={2} className="border px-2 py-1">
                Total Rs
              </td>
              <td>76850</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> */}
  </div>
);

// Eligibility & Documents
export const UG_ELIGIBILITY =
  "As per the norms of Govt. of Maharashtra (CET Cell) and Directorate of Technical Education, Maharashtra State.";

export interface CollegeAdmissionData {
  id: string;
  btechIntakeTable: JSX.Element;
  eligibility: string;
  documents: JSX.Element;
  enquiryFormLink: string;
  feeStructure: JSX.Element;
}

export const schoolOfEngineeringAdmission: CollegeAdmissionData = {
  id: "school-of-engineering",
  btechIntakeTable: SCHOOL_OF_ENGINEERING_BTECH_TABLE,
  eligibility: UG_ELIGIBILITY,
  documents: (
    <ul className="list-disc pl-5 space-y-1 text-gray-700">
      <li>Receipt cum Acknowledgement score card</li>
      <li>SSC Marksheet</li>
      <li>HSC Marksheet / Diploma Final Year Marksheet</li>
      <li>Leaving Certificate (TC)</li>
      <li>Caste Certificate (for category students)</li>
      <li>Caste validity Certificate (for category students)</li>
      <li>Non Creamy Layer Certificate (for category students)</li>
      <li>Gap Certificate (if any)</li>
      <li>Migration Certificate (if any)</li>
      <li>Certificate of Physically Handicapped (if any)</li>
      <li>Certificate of Domicile & Nationality</li>
      <li>Equivalence Certificate for OMS Students</li>
    </ul>
  ),
  enquiryFormLink: "https://forms.gle/W4JzkHc3y9gZzZwb8",
  feeStructure: SCHOOL_OF_ENGINEERING_FEES,
};

export const vishwabharatiPolytechnicAdmission: CollegeAdmissionData = {
  id: "vishwabharati-polytechnic-institute",
  btechIntakeTable: POLYTECHNIC_COURSES_TABLE,
  eligibility: "Pass in SSC (10th standard).",
  documents: (
    <ul className="list-disc pl-5 space-y-1 text-gray-700">
      <li>SSC Marksheet</li>
      <li>Leaving Certificate</li>
      <li>Caste Certificate (if applicable)</li>
      <li>Domicile Certificate</li>
    </ul>
  ),
  enquiryFormLink: "https://forms.gle/SewAYbZpQB6c4Fdd6",
  feeStructure: POLYTECHNIC_FEES,
};

export const schoolOfManagementAdmission: CollegeAdmissionData = {
  id: "school-of-management",
  btechIntakeTable: SCHOOL_OF_MANAGEMENT_TABLE,
  eligibility: `The basic criteria for MBA Admission Eligibility are that the candidates need to complete their Bachelor's Degree in any stream with at least 50% in aggregate (45% for reserve category) from any UGC/ AIU (Association of Indian Universities) recognized University. MAH-MBA/ MMS/ CAT Examination Score card. Other Entrance Exams score card Like MAT, ATMA as per Gov. Notifications.`,
  documents: (
    <ul className="list-disc pl-5 space-y-1 text-gray-700">
      <li>SSC & HSC Marksheets</li>
      <li>Graduation Marksheet (for PG programs)</li>
      <li>Transfer Certificate</li>
      <li>Gap Certificate (if applicable)</li>
      <li>Caste Certificate (if applicable)</li>
      <li>Domicile Certificate</li>
    </ul>
  ),
  enquiryFormLink: "https://forms.gle/FKdKBgZ2D3pe2VRP9",
  feeStructure: MANAGEMENT_FEES,
};

export const collegeAdmissionDataMap: Record<string, CollegeAdmissionData> = {
  "school-of-engineering": schoolOfEngineeringAdmission,
  "school-of-management": schoolOfManagementAdmission,
  "vishwabharati-polytechnic-institute": vishwabharatiPolytechnicAdmission,
};
