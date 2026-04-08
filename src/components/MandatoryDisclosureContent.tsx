import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';
// @ts-ignore
import mandatoryDoc from '../assets/pdf/manditory_Disclosure_mpgi_25-26.docx';

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

const MandatoryDisclosureContent = () => {
  return (
    <div className="w-full">
      {/* Title & Download CTA */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 bg-blue-50 p-6 rounded-lg border border-blue-100">
        <div>
          <h2 className="text-3xl font-extrabold text-mpgin-darkBlue">Mandatory Disclosure</h2>
          <p className="text-gray-600 mt-2">Information as prescribed by AICTE and Regulatory Bodies (2025-26)</p>
        </div>
        <a 
          href={mandatoryDoc} 
          download="Mandatory_Disclosure_MPGI_25_26"
          className="flex items-center gap-2 bg-mpgin-darkBlue hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md"
        >
          <Download size={20} />
          Download Full Document
        </a>
      </div>

      <Accordion title="1. Institution Details" defaultOpen={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h4 className="font-bold text-mpgin-darkBlue mb-2">Institution Name & Address</h4>
            <p>Matoshri Pratishthan’s Group of Institutions</p>
            <p>School of Engineering & School of Management</p>
            <p>At Khupsarwadi Tal & Dist: Nanded - 431606 (Maharashtra State)</p>
            <p className="mt-2 font-medium">Contact:</p>
            <p>Phone: (02462) 227007</p>
            <p>Fax: 02462-227008</p>
            <p>Email: matoshripratishtha2012@gmail.com</p>
            <p>Website: www.mpgin.ac.in</p>
          </div>
          <div>
            <h4 className="font-bold text-mpgin-darkBlue mb-2">Trust Details</h4>
            <p>MATOSHRI PRATISHTHAN Nanded.</p>
            
            <h4 className="font-bold text-mpgin-darkBlue mt-6 mb-2">Principal</h4>
            <p>Dr. L.M. Waghmare</p>
            <p>Address: MATOSHRI PRATISHTHAN KHUSARWADI NANDED</p>
          </div>
          <div className="md:col-span-2 mt-4 pt-4 border-t border-gray-100">
             <h4 className="font-bold text-mpgin-darkBlue mb-2">Affiliating Universities</h4>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Dr. BABASAHEB AMBEDKAR MARATHWADA UNIVERISTY</p>
                  <p className="text-sm">Nagsenvan, University Campus, Maqbara Road, AURANGABAD – 431004 (MS)</p>
                  <p className="text-sm">Phone: (0240) 240 3111 to 240 3192</p>
                </div>
                <div>
                  <p className="font-medium">Dr. BABASAHEB AMBEDKAR TECHNOLOGICAL UNIVERISTY</p>
                  <p className="text-sm">Vidyavihar, Lonere Dist. Raigad 402103 (MS)</p>
                  <p className="text-sm">Phone: (02140) 275142</p>
                </div>
             </div>
          </div>
        </div>
      </Accordion>

      <Accordion title="2. Governance & Committees">
        <h4 className="font-bold text-gray-800 mt-4 mb-2">Members of the Board</h4>
        <SimpleTable 
          headers={["Sr. No.", "Name of the Trustees", "Designation"]}
          data={[
            ["1", "Mrs. Jayshree Kamaji Pawar", "President"],
            ["2", "Mrs. Alka Rajeshwar Satilikar", "Vice President"],
            ["3", "Mr. Vynkatchari Bharmachary Vregalam", "Secretary"],
            ["4", "Mrs. Vimal Sirsath", "Joint Secretary"],
            ["5", "Mr. Kamaji Pawar", "Member"],
            ["6", "Mr. Arvind Patil", "Member"],
            ["7", "Mr. Satish Shinde", "Treasurer"],
            ["8", "Mr. Ankush More", "Member"],
            ["9", "Mrs. Pawar Manisa Devidas", "Member"],
            ["10", "Mrs. Tammalwad Sunita Ganpatrao", "Member"],
            ["11", "Mr. Pawar Shradha Kamaji", "Member"],
            ["12", "Mr. Pawar Girijabai Gangadharrao", "Member"],
            ["13", "Mr. Pathak Shashikant Dasrao", "Member"],
          ]}
        />
        
        <h4 className="font-bold text-gray-800 mt-8 mb-2">Academic Advisory Committee</h4>
        <SimpleTable 
          headers={["Sr. No.", "Name of the Members", "Designation"]}
          data={[
            ["1", "Dr. L. M. Waghmare", "Chairman"],
            ["2", "Dr Qazi F Z", "Member"],
            ["3", "Mr. B.A. Khansole", "Member"],
            ["4", "Mr .Asad Hashmi", "Member"],
            ["5", "Mr. Rathod L.V", "Member"],
            ["6", "Mr. Shafik R", "Member"],
            ["7", "Dr. Abdullah M.K", "Member"],
            ["8", "Dr. Syeda Rukhsana", "Member"],
          ]}
        />
        
        <div className="mt-6 space-y-4 text-gray-700">
           <div><span className="font-bold">Frequency of Board Meetings:</span> Quarterly and Weekly</div>
           <div><span className="font-bold">Governance Procedures:</span> Meetings are conducted by the Principal with all HODs every Monday. HODs convey meeting minutes to staff members. There is continuous sharing of ideas enabling staff and students to work on new activities. A Student Council exists per university statutes.</div>
        </div>
      </Accordion>

      <Accordion title="3. Grievance Mechanisms & Key Committees">
        <h4 className="font-bold text-gray-800 mt-4 mb-2">Anti Ragging Committee</h4>
        <SimpleTable 
          headers={["Sr. No.", "Name of Faculty", "Designation", "Department"]}
          data={[
            ["1", "Dr. L.M. Waghmare", "Committee Head", "Principal"],
            ["2", "Mr Hashmi S.A.", "Member", "Electrical HOD"],
            ["3", "Mr.Khansole.B.A.", "Member", "CSE HOD"],
            ["4", "Mr.Lakhan Rathod", "Member", "Civil HOD"],
            ["5", "Dr. Syeda Rukhsana", "Member", "First Year"],
            ["6", "Mr. P.J. Kinikar", "Member", "A.O."],
            ["7", "Adv. Muradi S.V", "Member", "Advocate"]
          ]}
        />

        <h4 className="font-bold text-gray-800 mt-8 mb-2">Grievance Redressal Committee</h4>
        <SimpleTable 
          headers={["Sr. No.", "Name of Faculty", "Designation", "Position"]}
          data={[
            ["1", "Dr. L.M. Waghmare", "Principal", "Chairperson"],
            ["2", "Mr Hashmi S.A.", "HOD EE Engg", "Member"],
            ["3", "Dr. Syeda Rukhsana", "First Year", "Member"],
            ["4", "Mr. P.J. Kinikar", "Administrative Officer", "Member"],
            ["5", "Adv. Muradi S.Y.", "Advocate", "Member"]
          ]}
        />

        <h4 className="font-bold text-gray-800 mt-8 mb-2">Internal Complaint Committee (ICC)</h4>
        <SimpleTable 
          headers={["Sr. No.", "Name of Members", "Designation"]}
          data={[
            ["1", "Dr. L M Waghmare", "Committee Head Chairman"],
            ["2", "Dr. Syeda Rukhsana", "Member"],
            ["3", "Mrs. Manisha Telange", "Member"],
            ["4", "Mrs. Madhura Chavan", "Member"],
            ["5", "Mr. Hashmi S.A.", "Member"],
            ["6", "Mr Sayyad Shafiq", "Member"],
            ["7", "Mr P.J. Kinikar", "Member"]
          ]}
        />

        <h4 className="font-bold text-gray-800 mt-8 mb-2">SC/ST Committee</h4>
        <SimpleTable 
          headers={["Sr. No.", "Name", "Designation"]}
          data={[
            ["1", "Dr. L.M. Waghmare", "Chairman"],
            ["2", "Mr. B.A. Khansole", "Member"],
            ["3", "Mr S.A. Hashmi", "Member"],
            ["4", "Mr Sayyad Shafiq", "Member"],
            ["5", "Dr. Sayyad Rukhsana", "Member"]
          ]}
        />
      </Accordion>

      <Accordion title="4. Programmes & Intake">
        <h4 className="font-bold text-gray-800 mt-4 mb-2">Approved Programmes</h4>
        <SimpleTable 
          headers={["Name of the Course", "No of seats", "Duration"]}
          data={[
            ["Civil Engineering", "60", "4 years degree"],
            ["Computer Science & Engg.", "60", "4 years degree"],
            ["Electronics & Telecomm. Engg.", "30", "4 years degree"],
            ["Mechanical & Automation Engineering", "30", "4 years degree"],
            ["Artificial Intelligence & Data Science", "30", "4 Years Degree"],
            ["Computer Sci. & Engg. (AIML)", "30", "4 Years Degree"],
            ["Electrical Engg", "60", "4 Years Degree"],
            ["MBA", "120", "2 Years PG"],
          ]}
        />
      </Accordion>

      <Accordion title="5. Admissions & Fees">
        <p className="text-gray-700 mb-4"><span className="font-bold">Tuition Fees:</span> Rs. 64,000 (As Fixed by the Shikshan Shulk Samiti, MS)</p>
        
        <h4 className="font-bold text-gray-800 mt-6 mb-2">Admission Summary (2025-26)</h4>
        <SimpleTable 
          headers={["Category", "Students Admitted"]}
          data={[
            ["SC", "167"],
            ["OBC", "131"],
            ["VJNT", "138"],
            ["SBC", "8"],
            ["ST", "2"],
            ["Open", "313"],
          ]}
        />
        
        <h4 className="font-bold text-gray-800 mt-6 mb-2">Management Quota</h4>
        <SimpleTable 
          headers={["Academic Year", "No. of Applications", "Admitted"]}
          data={[
            ["2025-26", "70", "19"]
          ]}
        />
      </Accordion>
      
      <Accordion title="6. Infrastructure & Facilities">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 mb-6">
            <div><span className="font-bold">Class Rooms:</span> 46 (Size 66 sqm. each)</div>
            <div><span className="font-bold">Tutorial Rooms:</span> 11 (Size 33 sqm.)</div>
            <div><span className="font-bold">Laboratories:</span> 60 (Size 66 sqm.)</div>
            <div><span className="font-bold">Central Exam / Online Exam Facility:</span> 100 Capacity, 1Gbps</div>
         </div>
         <p className="mb-4 text-gray-600">The institute possesses exhaustive laboratories for all departments including advanced setup like Image archiving systems, Lapping Machine, Digital comm trainers, AutoCad structural suites, Concrete Tech testers, Geotechnical direct shear machinery, High voltage breakdown testers, Switch gear protectors, High performance networking labs, and advanced thermodynamic setups reflecting a massive array of investments for quality education.</p>
      </Accordion>

      <Accordion title="7. Institutional Best Practices">
         <div className="space-y-6 text-gray-700">
            <div>
              <h4 className="font-bold text-mpgin-darkBlue text-xl mb-2">Best Practice 1: Soft Skills and Personality Development Program</h4>
              <p className="mb-2"><span className="font-semibold">Objective:</span> Enhance employability of the student and prepare him/her to face competitive environments via training in intrapersonal/communication skills.</p>
              <p>Programs such as Rubicon’s “Connect with Work” supported by Barclays trains students via corporate trainers on topics like Organizational Structure, Public Speaking, Email Etiquette, and Group Discussions.</p>
              <p className="mt-2"><span className="font-semibold">Evidence of Success:</span> Enhanced student confidence, improved performance in On Campus and Off Campus placements.</p>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h4 className="font-bold text-mpgin-darkBlue text-xl mb-2">Best Practice 2: Teacher Guardian Scheme</h4>
              <p className="mb-2"><span className="font-semibold">Objective:</span> Improvement of teacher-student relationship, counseling students for problems, providing confidence, and guiding correct career paths.</p>
              <p>Batches of 15 to 20 students are allotted to a mentor. The mentor meets them once a fortnight, addressing habits, study planning, examination preparations and maintaining strict confidences on exigencies.</p>
              <p className="mt-2"><span className="font-semibold">Evidence of Success:</span> Improved student attendance, academic performance, disciplined behaviors and zero ragging strictly nurtured under the system.</p>
            </div>
         </div>
      </Accordion>
    </div>
  );
};

export default MandatoryDisclosureContent;
