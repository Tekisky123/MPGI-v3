import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';
// @ts-ignore
import loaDoc from '../assets/pdf/AICTE LOA_merged.pdf';

const Accordion = ({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4 bg-white shadow-sm">
      <button 
        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-bold text-mpgin-darkBlue text-left">{title}</h3>
        {isOpen ? <ChevronUp className="text-gray-500 flex-shrink-0 ml-2" /> : <ChevronDown className="text-gray-500 flex-shrink-0 ml-2" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 border-t border-gray-200">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SimpleTable = ({ headers, data }: { headers: string[], data: React.ReactNode[][] }) => (
  <div className="overflow-x-auto my-4 rounded-lg border border-gray-200 shadow-sm">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-[#e0f2fe]">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="px-4 py-3 text-left text-xs font-bold text-mpgin-darkBlue uppercase tracking-wider whitespace-nowrap">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-blue-50 transition-colors'}>
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-3 text-sm text-gray-700">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const LoaContent = () => {
  return (
    <div className="w-full">
      {/* Title & Download CTA */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 bg-blue-50 p-6 rounded-lg border border-blue-100">
        <div>
          <h2 className="text-3xl font-extrabold text-mpgin-darkBlue">Letter of Approval (LOA & EOA)</h2>
          <p className="text-gray-600 mt-2">All India Council for Technical Education (AICTE)</p>
        </div>
        <a 
          href={loaDoc} 
          download="AICTE_LOA_merged.pdf"
          className="flex items-center gap-2 bg-mpgin-darkBlue hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md"
        >
          <Download size={20} />
          Download Full LOA Document
        </a>
      </div>

      <Accordion title="1. 2009 Letter of Approval (Initial Campus)" defaultOpen={true}>
        <div className="text-gray-700 space-y-4">
          <p><span className="font-bold">F.No.: </span>MS(New-Int)/2009/02 | <span className="font-bold">Date: </span>June 15, 2009</p>
          <p>
            As per the Regulations notified by the Council vide F. No. 37-3/Legal/2004 dated 14th September 2006 and norms, standards, procedures and conditions prescribed by the Council from time to time... I am directed to convey the approval of the Council for the Development of a New Integrated Campus with Multi-Discipline in the name and style of <strong>Matoshri Pratisihthan's Group of Institutions</strong>, Jijau Nagar, Off Nanded Latur Highway, Khupsarwadi, Post Vishnupuri, Nanded-431 606 for the academic year 2009-10.
          </p>

          <h4 className="font-bold text-gray-800 mt-6 mb-2">Approved Intake (2009-10)</h4>
          <SimpleTable 
            headers={["S.No.", "Name of the Faculty/School", "Entry Level Qualification", "Approved Intake"]}
            data={[
              ["1", "Faculty of Engineering (Civil, ECE, CSE, Mechanical)", "10+2", "4 x 60 = 240"],
              ["2", "Faculty of Management (MBA)", "Graduation", "60"]
            ]}
          />

          <h4 className="font-bold text-gray-800 mt-6 mb-2">Key Conditions</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>The management shall provide adequate funds for development of land, building, and infrastructural facilities.</li>
            <li>Admissions shall be made only after adequate infrastructure and all other facilities are provided.</li>
            <li>Accounts of the Institution shall be audited annually by a certified Chartered Accountant.</li>
            <li>The institution shall maintain a web-site providing the prescribed information in the form of mandatory disclosure.</li>
            <li>The Institute shall take appropriate measures for prevention of ragging in any form.</li>
          </ul>
        </div>
      </Accordion>

      <Accordion title="2. 2025-26 Extension of Approval (EoA) - Corrigendum">
        <div className="text-gray-700 space-y-4">
          <p><span className="font-bold">F.No.: </span>Western/1-44643178778/2025/EOA/Corrigendum-1 | <span className="font-bold">Date: </span>30-Jun-2025</p>
          <p>
            In terms of the provisions under the All India Council for Technical Education (Grant of Approvals for Technical Education), Powers delegated in AICTE ACT 1987... I am directed to convey the approval to:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Permanent ID: </strong>1-6754941</li>
            <li><strong>Institution Name: </strong>Matoshri Pratishthan's Group of Institution School of Engineering and School of Management</li>
            <li><strong>Institution Type: </strong>Private-Self Financing</li>
          </ul>

          <h4 className="font-bold text-gray-800 mt-6 mb-2">Approved Intake (2025-26)</h4>
          <SimpleTable 
            headers={["Program", "Course", "Affiliating Body", "Approved Intake"]}
            data={[
              ["UNDER GRADUATE", "Artificial Intelligence (AI) and Data Science", "Dr. BATU, Lonere", "30"],
              ["UNDER GRADUATE", "Civil Engineering", "Dr. BATU, Lonere", "60"],
              ["UNDER GRADUATE", "Computer Science & Engineering", "Dr. BATU, Lonere", "60"],
              ["UNDER GRADUATE", "Computer Science (AI and Machine Learning)", "Dr. BATU, Lonere", "30"],
              ["UNDER GRADUATE", "Electrical Engineering", "Dr. BATU, Lonere", "60"],
              ["UNDER GRADUATE", "Electronics & Telecommunication Engg", "Dr. BATU, Lonere", "30"],
              ["UNDER GRADUATE", "Mechanical & Automation Engineering", "Dr. BATU, Lonere", "30"],
              ["POST GRADUATE", "MBA", "Swami Ramanand Teerth Marathwada Univ", "120"]
            ]}
          />

          <h4 className="font-bold text-gray-800 mt-6 mb-2">Important Instructions</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Institutions must disclose the mandatory information at a prominent location on its website.</li>
            <li>All AICTE institutions are highly encouraged to get NBA/NAAC accreditation and participate in NIRF ranking.</li>
            <li>Internship is mandatory for all admitted students.</li>
            <li>AICTE Approved Institutes are encouraged to utilize SWAYAM PLUS Courses up-to 40%.</li>
            <li>Institutes are encouraged to use flagship schemes like Parakh, Pragati, Smart India Hackathon, etc.</li>
          </ul>
        </div>
      </Accordion>
    </div>
  );
};

export default LoaContent;
