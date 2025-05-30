export interface CommitteeMember {
    srNo: number;
    name: string;
    designation: string;
    position: string;
    mobileNumber?: string;
    email?: string;
    address?: string;
    category?: string;
}

export interface Committee {
    id: string;
    title: string;
    description: string;
    members: CommitteeMember[];
    contactPerson?: {
        name: string;
        designation: string;
        email: string;
    };
    objectives?: string[];
    rules?: string[];
    roles?: string[];
    responsibilities?: string[];
}

export interface CollegeCommittees {
    collegeId: string;
    collegeName: string;
    committees: Committee[];
}

export const CELLS_COMMITTEES_DATA: CollegeCommittees[] = [
    {
        collegeId: "vishwabharati-polytechnic-institute",
        collegeName: "Vishwabharati Polytechnic Institute",
        committees: [
            {
                id: "anti-ragging-committee",
                title: "Anti Ragging Committee",
                description: "Oversees anti-ragging policies and implementation.",
                members: [
                    { srNo: 1, name: "Mr. Shahaji P. Deshmukh", designation: "Principal", position: "Chairman", mobileNumber: "9561906555" },
                    { srNo: 2, name: "Ms. Manisha K. More", designation: "HoD, Computer Engineering", position: "Member", mobileNumber: "9764999089" },
                    { srNo: 3, name: "Ms. Ashwini B. Mule", designation: "I/C HoD, E & TC Engineering", position: "Member", mobileNumber: "7709459329" },
                    { srNo: 4, name: "Mr. Sanjay J. Deshmukh", designation: "I/C HoD, Electrical Engineering", position: "Member", mobileNumber: "9970974483" },
                    { srNo: 5, name: "Ms. Sukeshani S. Patil", designation: "Lecturer in Civil Engineering", position: "Member", mobileNumber: "8625820923" },
                    { srNo: 6, name: "Mr. Laxmikant D. Kulkarni", designation: "Office Superintendent", position: "Member", mobileNumber: "9881321000" },
                    { srNo: 7, name: "Ms. Ruprekha Bharsawde", designation: "Representative of Girls Students", position: "Member", mobileNumber: "8788249785" },
                    { srNo: 8, name: "Mr. Chandrashekhar R. Shinde", designation: "Representative of Boys Students", position: "Member", mobileNumber: "9011215805" },
                    { srNo: 9, name: "Dr. Sandeep S. Hambarde", designation: "HoD, Science & Humanity", position: "Member Secretary", mobileNumber: "9860735536" },
                ],
            },
            {
                id: "anti-sexual-harassment-cell",
                title: "Anti Sexual Harassment Cell",
                description: "Addresses complaints and grievances related to sexual harassment.",
                members: [
                    { srNo: 1, name: "Mr. Shahaji P. Deshmukh", designation: "Principal", position: "Chairman", mobileNumber: "9561906555" },
                    { srNo: 2, name: "Dr. Sandeep S. Hambarde", designation: "HoD, Science & Humanity", position: "Member", mobileNumber: "9860735536" },
                    { srNo: 3, name: "Mr. Vedant A. Unchadkar", designation: "Lecturer in Computer Engineering", position: "Member", mobileNumber: "7507848160" },
                    { srNo: 4, name: "Ms. Shubhangi D. Deshmukh", designation: "Lecturer in Electrical Engineering", position: "Member", mobileNumber: "9970207286" },
                    { srNo: 5, name: "Ms. Riya Kumawat", designation: "Representative of Girls Students", position: "Member", mobileNumber: "8087753364" },
                    { srNo: 6, name: "Ms. Sainath Kahalekar", designation: "Representative of Boys Students", position: "Member", mobileNumber: "8856886107" },
                    { srNo: 7, name: "Ms. Manisha K. More", designation: "HoD, Computer Engineering", position: "Member Secretary", mobileNumber: "9764999089" },
                ],
            },
            {
                id: "womens-guidance-cell",
                title: "Women's Guidance Cell",
                description: "Provides support and guidance to women students and staff.",
                members: [
                    { srNo: 1, name: "Ms. Manisha K. More", designation: "HoD, Computer Engineering", position: "Chairman", mobileNumber: "9764999089" },
                    { srNo: 2, name: "Mr. Shahaji P. Deshmukh", designation: "Principal", position: "Member", mobileNumber: "9561906555" },
                    { srNo: 3, name: "Ms. Amruta S. Deshmukh", designation: "Lecturer in Chemistry", position: "Member", mobileNumber: "8208686077" },
                    { srNo: 4, name: "Ms. Rupali G. Tuppekar", designation: "Lecturer in Civil Engineering", position: "Member", mobileNumber: "8308116491" },
                    { srNo: 5, name: "Ms. Arti R. Kadam", designation: "Representative of Girls Students", position: "Member", mobileNumber: "9021045528" },
                    { srNo: 6, name: "Ms. Ruprekha V. Bharsawde", designation: "Representative of Girls Students", position: "Member", mobileNumber: "8788249725" },
                    { srNo: 7, name: "Ms. Ashwini B. Mule", designation: "I/C HoD, E & TC Engineering", position: "Member Secretary", mobileNumber: "7709459329" },
                ],
            },
            {
                id: "sc-st-cell",
                title: "SC/ST Cell",
                description: "Ensures welfare of SC/ST students and staff.",
                members: [
                    { srNo: 1, name: "Mr. Shahaji P. Deshmukh", designation: "Principal", position: "Chairman", mobileNumber: "9561906555" },
                    { srNo: 2, name: "Ms. Komal M. Bhalerao", designation: "Lecturer in Chemistry", position: "Member", mobileNumber: "9604081350" },
                    { srNo: 3, name: "Mr. Bhimrao G. Shrungarputle", designation: "Lecturer in Electrical Engineering", position: "Member", mobileNumber: "9011962541" },
                    { srNo: 4, name: "Ms. Rajshri H. Kagde", designation: "Lecturer in Electrical Engineering", position: "Member", mobileNumber: "8669389239" },
                    { srNo: 5, name: "Mr. Omkar Gare", designation: "Lecturer in E & TC Engineering", position: "Member", mobileNumber: "7038513132" },
                    { srNo: 6, name: "Mr. Deelip D. Tate", designation: "Librarian", position: "Member", mobileNumber: "9970691711" },
                    { srNo: 7, name: "Ms. Sukeshani S. Patil", designation: "Lecturer in Civil Engineering", position: "Member Secretary", mobileNumber: "8625820923" },
                ],
            },
        ],
    },
    {
        collegeId: "school-of-management",
        collegeName: "School of Management",
        committees: [
            {
                id: "anti-ragging-committee-management",
                title: "Anti Ragging Committee",
                description: "With reference to Maharashtra Prohibition of Ragging Act 1999, UGC Regulation on Curbing Menace of Ragging in Higher Educational Institutions 2009 and AICTE notification no. F.No.37-3/Legal/AICTE/2009 dated 1st July 2009, Anti Ragging Committee has been constituted in the institute to prohibit, prevent and eliminate the scourge of ragging.",
                members: [
                    { srNo: 1, name: "Sadanand Shinde", designation: "", position: "CHAIRMAN", mobileNumber: "" },
                    { srNo: 2, name: "Pranav Suryawanshi", designation: "", position: "Secretory" },
                    { srNo: 3, name: "Yogesh Sarpate", designation: "", position: "Member", mobileNumber: "" },
                    { srNo: 4, name: "Pallavi Nalewad", designation: "", position: "Member", mobileNumber: "" },
                    { srNo: 5, name: "Ramesh Kawale", designation: "", position: "Member", mobileNumber: "" },
                    { srNo: 6, name: "Ranjana Patil", designation: "", position: "Member", mobileNumber: "" },
                    { srNo: 7, name: "Shradha pawar", designation: "", position: "Member", mobileNumber: "" },
                    { srNo: 8, name: "Kapil Pichewar", designation: "", position: "Member", mobileNumber: "" },

                ],
                contactPerson: {
                    // name: "Dr Syeda Rukhsana",
                    // designation: "Member Secretary (Anti-ragging committee) MPGI School of Engineering Nanded",
                    // email: "solerukhsana@gmail.com"
                }
            },
            {
                id: "sc-st-committee-management",
                title: "SC/ST Committee",
                description: "",
                members: [
                    { srNo: 1, name: "Sadanand Shinde", designation: "", position: "Chairman (I/C Dean)", mobileNumber: "" },
                    { srNo: 2, name: "Pranav Suryawanshi", designation: "", position: "Member", mobileNumber: "" },
                    { srNo: 3, name: "Yogesh Sarpate", designation: "", position: "Member", mobileNumber: "" },
                    { srNo: 4, name: "Pallavi Nalewad", designation: "", position: "Member", mobileNumber: "" },
                    { srNo: 5, name: "Ramesh Kawale", designation: "", position: "Member", mobileNumber: "" },

                ]
            },
            {
                id: "internal-complaint-committee-management",
                title: "Internal Complaint Committee(ICC)",
                description: "",
                members: [
                    { srNo: 1, name: "Sadanand shinde", designation: "", position: "Committee Head", mobileNumber: "", address: "" },
                    { srNo: 2, name: "Pranav Suryawanshi", designation: "", position: "Member", mobileNumber: "", address: "" },
                    { srNo: 3, name: "Yogesh Sarpate", designation: "", position: "Member", mobileNumber: "", address: "" },
                    { srNo: 4, name: "Pallavi Nalewad", designation: "", position: "Member", mobileNumber: "", address: "" },
                    { srNo: 5, name: "Ramesh Kawale", designation: "", position: "Member", mobileNumber: "", address: "" },
                    { srNo: 6, name: "Kapil Pichewar", designation: "", position: "Member", mobileNumber: "", address: "" },
                ],
                contactPerson: {
                    // name: "Ms. Manisha Telange -Tahade",
                    // designation: "Member/Secretary MPGI, School of Electrical Engineering Nanded",
                    // email: "helpdesk.mpgiwomenempowerment@gmail.com"
                }
            },
            {
                id: "discipline-committee-management",
                title: "Discipline Committee",
                description: "",
                members: [
                    { srNo: 1, name: "Sadanand Shinde", designation: "", position: "Chairman" },
                    { srNo: 2, name: "Yogesh sarpate", designation: "", position: "Secratory" },
                    { srNo: 3, name: "Pranav Suryawanshi", designation: "", position: "Member" },
                    { srNo: 4, name: "Pallavi Nalewad", designation: "", position: "Member" },
                    { srNo: 5, name: "Ramesh Kawale", designation: "", position: "Member" },
                    { srNo: 6, name: "Ranjana Patil", designation: "", position: "Member" },
                    { srNo: 7, name: "Shradha pawar", designation: "", position: "Member" },
                    { srNo: 8, name: "Kapil Pichewar", designation: "", position: "Member" },

                ]
            },
            {
                id: "faculty-grievance-redressal-cell-management",
                title: "Faculty Grievance Redressal Cell",
                description: "The AICTE Regulation F No 1-1-103/AICTE/GRC/REGULATION/2021 DATED MARCH 22,2021. AICTE regulates the formation if Grievance Redressal committee within institutions to handle such concern.",
                members: [
                    // { srNo: 1, name: "Dr.L M Waghmare", designation: "Principal", position: "Chairperson" },
                    // { srNo: 2, name: "Dr. Syeda Rukhsana", designation: "HOD FE", position: "Member Secretary" },
                    // { srNo: 3, name: "Mr Hashmi S.A.", designation: "HOD EE Engg", position: "Member" },
                    // { srNo: 4, name: "Sayyad Shafiq", designation: "HOD Mech Engg", position: "Member" },
                    // { srNo: 5, name: "Mr. P.J. Kinikar", designation: "Administrative Officer", position: "Member" },
                    // { srNo: 6, name: "Adv. Muradi S.Y.", designation: "Advocate", position: "Member" }
                ]
            },
            {
                id: "student-counselling-cell-management",
                title: "Student Counselling Cell",
                description: "AICTE (All India Council for Technical Education) mandates that AICTE-approved institutions establish a Student Counsellor Committee, which aims to provide counselling and support to students in their academic, personal, and career development.",
                members: [
                    // { srNo: 1, name: "Dr L M Waghmare", designation: "Principal", position: "Chair person", mobileNumber: "9822663185" },
                    // { srNo: 2, name: "B A Khansole", designation: "Assist. Prof.& head in CSE", position: "Member", mobileNumber: "9260459865", email: "bakhansole@gmail.com" },
                    // { srNo: 3, name: "Syed Asad Hashmi", designation: "Assist. Prof.& head in EEE", position: "Member", mobileNumber: "8605786100", email: "sasadhashmi@gmail.com" },
                    // { srNo: 4, name: "Sayyad Shafik R", designation: "Assist. Prof.& head in MECH", position: "Member", mobileNumber: "7798684777", email: "sayyashafiq@gmail.com" },
                    // { srNo: 5, name: "Dr.syeda Rukhsana Osman Ali", designation: "Assist. Prof.& head in FE", position: "Member", mobileNumber: "9371062777", email: "15rukhsana@gmail.com" },
                    // { srNo: 6, name: "Dr. Abdullah M K", designation: "Assist. Prof.& head in E&TC", position: "Member", mobileNumber: "9518903766", email: "abdulectc@gmail.com" },
                    // { srNo: 7, name: "P D Pople", designation: "Assist. Prof.& head in Civil", position: "Member", mobileNumber: "8208618714", email: "pdpople@gmail.com" }
                ],
                objectives: [
                    "To monitor the student's regularity & discipline.",
                    "To enable the parents to know about the performance & regularity of their wards.",
                    "Improvement of teacher-student relationship.",
                    "Giving an opportunity for students to learn to improve their emotional, behavioural, personal, interpersonal characteristics, to develop confidence, make better choices, and increase educational efficacy.",
                    "Helping students to explore and express feelings and ways of thinking about their present situation and work toward making a healthier and happier future."
                ],
                rules: [
                    "Formation of Mentorship in each department.",
                    "To get feedback from the student committee members/teachers of each subject and mentors of each class.",
                    "Procuring the list of students who have scored less than 8 marks in their internal tests from each department per subject by the individual teachers handling the respective subjects, so as to guide them properly through counselling.",
                    "Providing counselling for the final year students who are in dilemma to enable them to choose job or higher studies.",
                    "Providing special medical assistance to the students who are going through depression.",
                    "Conducting a monthly meeting with the parents of the students having shortage of attendance and internal marks below 08."
                ]
            },
            {
                id: "industry-liaison-committee-management",
                title: "Industry Liaison Committee",
                description: "This committee will serve as a bridge between academic institutions and the industrial sector.",
                members: [
                    // { srNo: 1, name: "Prakash Pople", designation: "TPO", position: "Committee Head" },
                    // { srNo: 2, name: "Mr. Hashmi S.A.", designation: "HOD EE", position: "Member" },
                    // { srNo: 3, name: "Mr. Millar Khandare", designation: "CEO 3Idea Company", position: "Member" },
                    // { srNo: 4, name: "Mr. Khansole B.A.", designation: "CSE & T&P Coordinator", position: "Member" },
                    // { srNo: 5, name: "Mr. Syed Shafiq", designation: "Mech T&P Coordinator", position: "Member" },
                    // { srNo: 6, name: "Mr. Lakhan Rathod", designation: "Civil T&P Coordinator", position: "Member" },
                    // { srNo: 7, name: "Dr. Abdullah kalim", designation: "EE T&P Coordinator", position: "Member" },
                    // { srNo: 8, name: "Mr. P.J. Kinikar", designation: "A.O.", position: "Member" }
                ]
            },
            {
                id: "library-committee-management",
                title: "Library Committee",
                description: "The library committee in a college advises on library matters, helps with policy-making, and acts as a communication channel between the library and its users, including faculty, staff, and students.",
                members: [
                    // { srNo: 1, name: "Dr L M Waghmare", designation: "Principal", position: "chairman" },
                    // { srNo: 2, name: "Mr Dilip Tate", designation: "Librarian", position: "SECRETARY" },
                    // { srNo: 3, name: "Dr. Syeda Rukhsana", designation: "Assistant Professor", position: "Member" },
                    // { srNo: 4, name: "Dr. Abdulla A.", designation: "Assistant Professor", position: "Member" },
                    // { srNo: 5, name: "Prof. B A Khansole", designation: "Assistant Professor", position: "Member" },
                    // { srNo: 6, name: "Prof. L V Rathod", designation: "Assistant Professor", position: "Member" },
                    // { srNo: 7, name: "Prof. S. Shinde", designation: "Assistant Professor", position: "Member" },
                    // { srNo: 8, name: "Prof. Sayyad Shfiq", designation: "Assistant Professor", position: "Member" },
                    // { srNo: 9, name: "Prof. Asad Hashmi", designation: "Assistant Professor", position: "Member" },
                    // { srNo: 10, name: "Mr. Pravin Kinikar", designation: "External Expert", position: "EXTERNAL EXPERT" },
                    // { srNo: 11, name: "Vishal V.Rathod", designation: "Student (2023-24 Batch)", position: "Student Member" },
                    // { srNo: 12, name: "Deshmukh Pranavi Panditrao", designation: "Student (2024-25 Batch)", position: "Student Member" }
                ],
                roles: [
                    "Facilitating Communicating with college community & obtaining feedback in library collection, scorners, infrastructure etc.",
                    "To provide a forum for discussion for library needs & expectations time in view of improved technology.",
                    "To advise library in policy matters concerning services, facilities & resources."
                ],
                responsibilities: [
                    "Advise & review library policies for resource, services & facilities.",
                    "Advise on innovation of services.",
                    "Discuss & evaluate budgetary issues for books, journals data base, media, e-resources etc."
                ]
            },
            {
                id: "remedial-coaching-cell-management",
                title: "Remedial Coaching Cell",
                description: "A Remedial coaching cell is an initiative within educational institutions aimed at supporting students who need additional assistance to meet academic standards. The cell will focus on enhancing students' understanding of subjects, improving their skills, and boosting overall academic performance.",
                members: [
                    // { srNo: 1, name: "Dr.L M Waghmare", designation: "Principal", position: "Chairperson" },
                    // { srNo: 2, name: "Dr. Syeda Rukhsana", designation: "HOD FE", position: "Member" },
                    // { srNo: 3, name: "Mr Hashmi S.A.", designation: "HOD EE Engg", position: "Member" },
                    // { srNo: 4, name: "Sayyad Shafiq", designation: "HOD Mech Engg", position: "Member" },
                    // { srNo: 5, name: "Dr. Abdulla Kalim", designation: "HOD ETC", position: "Member" },
                    // { srNo: 6, name: "Mr.Lakhan Rathor", designation: "Assist. Prof. Civil", position: "Member" },
                    // { srNo: 7, name: "Mr.B.A. Khansole", designation: "HOD CSE", position: "Member" }
                ]
            }
        ],
    },
    {
        collegeId: "school-of-engineering",
        collegeName: "School of Engineering",
        committees: [
            {
                id: "anti-ragging-committee-engineering",
                title: "Anti Ragging Committee",
                description: "With reference to Maharashtra Prohibition of Ragging Act 1999, UGC Regulation on Curbing Menace of Ragging in Higher Educational Institutions 2009 and AICTE notification no. F.No.37-3/Legal/AICTE/2009 dated 1st July 2009, Anti Ragging Committee has been constituted in the institute to prohibit, prevent and eliminate the scourge of ragging.",
                members: [
                    // { srNo: 1, name: "Dr L. M Waghmare", designation: "Principal MPGI", position: "CHAIRMAN", mobileNumber: "9822663185" },
                    // { srNo: 2, name: "Prof. Prakash Pople", designation: "T.P. O, MPGI", position: "Member" },
                    // { srNo: 3, name: "Dr Syeda Rukhsana", designation: "Assistant Professor", position: "Member Secretary", mobileNumber: "9371062777" },
                    // { srNo: 4, name: "Mr. Syed Asad Hashmi", designation: "Assistant Professor", position: "Member", mobileNumber: "8605786100" },
                    // { srNo: 5, name: "Syed Shafeek", designation: "Assistant Professor", position: "Member" },
                    // { srNo: 6, name: "Lakhan Rathod", designation: "Assistant Professor", position: "Member", mobileNumber: "7387685871" },
                    // { srNo: 7, name: "Dr Abdullah M. K", designation: "Assistant Professor", position: "Member", mobileNumber: "9518903766" },
                    // { srNo: 8, name: "Mrs. Manisha Telange Tahade", designation: "Assistant Professor", position: "Member", mobileNumber: "8390699111" },
                    // { srNo: 9, name: "Mrs. S B. More", designation: "Wardon (girls' hostel)", position: "Member", mobileNumber: "9021173485" },
                    // { srNo: 10, name: "Marwale Mahesh Marotrao", designation: "Student, Batch 2024-25", position: "Student representative" },
                    // { srNo: 11, name: "Rahudkar Pranali", designation: "Student, Batch 2024-25", position: "Girls' representative" },
                    // { srNo: 12, name: "Shaikh Hasib Masihuddin", designation: "Student, Batch 2024-25", position: "Student representative" },
                    // { srNo: 13, name: "Shubham Ganesh Myakal", designation: "Student, Batch 2023-24", position: "Student representative" },
                    // { srNo: 14, name: "Samrat Kajbe", designation: "Student, Batch 2023-24", position: "Student representative" },
                    // { srNo: 15, name: "Darshan Somala Rathod", designation: "Parent", position: "Parent representative" },
                    // { srNo: 16, name: "Tanveer Ahmed", designation: "Parent", position: "Parent representative" }
                ],
                contactPerson: {
                    name: "Dr Syeda Rukhsana",
                    designation: "Member Secretary (Anti-ragging committee) MPGI School of Engineering Nanded",
                    email: "solerukhsana@gmail.com"
                }
            },
            {
                id: "anti-ragging-squad-engineering",
                title: "Anti-Ragging Squad",
                description: "With reference to Maharashtra Prohibition of Ragging Act 1999, UGC Regulation on Curbing Menace of Ragging in Higher Educational Institution 2009 and AICTE notification dated 1st July 2009, an anti-ragging squad has been constituted.",
                members: [
                    // { srNo: 1, name: "Dr L. M Waghmare", designation: "Principal MPGI", position: "chair", mobileNumber: "9822663185" },
                    // { srNo: 2, name: "Dr Syeda Rukhsana", designation: "Assistant Professor", position: "Member", mobileNumber: "9371062777" },
                    // { srNo: 3, name: "Mr. Syed Asad Hashmi", designation: "Assistant Professor", position: "Member", mobileNumber: "8605786100" },
                    // { srNo: 4, name: "Prof. Lakhan Rathod", designation: "Assistant Professor", position: "Member", mobileNumber: "7387685871" },
                    // { srNo: 5, name: "Pratap Pawar", designation: "Member", position: "Member", mobileNumber: "7972971022" },
                    // { srNo: 6, name: "Chaya Jadhav", designation: "Member", position: "Member", mobileNumber: "9822666203" }
                ]
            },
            {
                id: "women-empowerment-committee-engineering",
                title: "Women Empowerment Committee",
                description: "The Internal committee has been reconstituted to deal with the Women (Girl student/faculty/staff) empowerment and the complaints of Sexual/Mental harassment in the MPGI School of Engineering Nanded.",
                members: [
                    // { srNo: 1, name: "Dr. L. M. Waghmare", designation: "Principal of MPGI SOEN", position: "Chair", mobileNumber: "9822663185", address: "MPGI, School of Engineering Nanded." },
                    // { srNo: 2, name: "Dr. Syeda Rukhsana", designation: "HOD of FY", position: "Member/Secretary", mobileNumber: "9371062777", address: "MPGI, First year department School of Engineering Nanded." },
                    // { srNo: 3, name: "Ms. Manisha Telange -Tahade", designation: "Assistant Professor", position: "Member/Secretary", mobileNumber: "8390699111", address: "MPGI, School of Electrical Engineering Nanded." },
                    // { srNo: 4, name: "Ms. Jyoti Sarode", designation: "Assistant Professor", position: "Member", mobileNumber: "9011033624", address: "MPGI, CSE department School of Engineering Nanded." },
                    // { srNo: 5, name: "Mrs. More S. B.", designation: "Hostel Warden", position: "Non-teaching Member", mobileNumber: "9021173485", address: "MPGI, Girls Hostel Nanded." },
                    // { srNo: 6, name: "Ms. Apeksha Moterao", designation: "B.tech EE", position: "Student Member", mobileNumber: "7798090930", address: "MPGI, Final year Electrical,School of Engineering Nanded." },
                    // { srNo: 7, name: "Adv. Muradi S. Y.", designation: "Advocate", position: "Legal Advisor", address: "Nanded" }
                ],
                contactPerson: {
                    name: "Ms. Manisha Telange -Tahade",
                    designation: "Member/Secretary MPGI, School of Electrical Engineering Nanded",
                    email: "helpdesk.mpgiwomenempowerment@gmail.com"
                }
            },
            {
                id: "governing-body-engineering",
                title: "Governing Body",
                description: "The governing body of the institution responsible for overall administration and policy making.",
                members: [
                    // { srNo: 1, name: "Dr. M.B.Kokare", designation: "Director, SGGSIE&T, Nanded", position: "Chairman" },
                    // { srNo: 2, name: "Mr. V. Venkat Chari", designation: "Nominee of Trust", position: "Member" },
                    // { srNo: 3, name: "Mr. Arvind Patil", designation: "Nominee of Trust", position: "Member" },
                    // { srNo: 4, name: "Mr.Kamaji Pawar", designation: "Nominee of Trust", position: "Member" },
                    // { srNo: 5, name: "Dr. Umesh Nagdeve", designation: "Director Technical Education Regional office Aurangabad, (M.S)", position: "Member" },
                    // { srNo: 6, name: "Dr.Kiwlekar.U.", designation: "Registrar DBATU", position: "Member" },
                    // { srNo: 7, name: "Dr. L.M.Waghmare", designation: "Principal MPGISOEN", position: "Member Secretary" },
                    // { srNo: 8, name: "Dr. Qazi F.Z.", designation: "Dean IQAC, Nominee by trust", position: "Member" },
                    // { srNo: 9, name: "Asst. Professor Mr. SADANAND SHINDE", designation: "Nominee of trust from Institute", position: "Member" },
                    // { srNo: 10, name: "Mr. Harshad Shah", designation: "Industrialist from the region nominated by trust", position: "Member" },
                    // { srNo: 11, name: "Dr. Gopal Rao Kadam", designation: "Educationist. Ex. Principal LBS college, Dharmabad", position: "Member" }
                ]
            },
            {
                id: "faculty-grievance-redressal-cell-engineering",
                title: "Faculty Grievance Redressal Cell",
                description: "The AICTE Regulation F No 1-1-103/AICTE/GRC/REGULATION/2021 DATED MARCH 22,2021. AICTE regulates the formation if Grievance Redressal committee within institutions to handle such concern.",
                members: [
                    // { srNo: 1, name: "Dr.L M Waghmare", designation: "Principal", position: "Chairperson" },
                    // { srNo: 2, name: "Dr. Syeda Rukhsana", designation: "HOD FE", position: "Member Secretary" },
                    // { srNo: 3, name: "Mr Hashmi S.A.", designation: "HOD EE Engg", position: "Member" },
                    // { srNo: 4, name: "Sayyad Shafiq", designation: "HOD Mech Engg", position: "Member" },
                    // { srNo: 5, name: "Mr. P.J. Kinikar", designation: "Administrative Officer", position: "Member" },
                    // { srNo: 6, name: "Adv. Muradi S.Y.", designation: "Advocate", position: "Member" }
                ]
            },
            {
                id: "student-counselling-cell-engineering",
                title: "Student Counselling Cell",
                description: "AICTE (All India Council for Technical Education) mandates that AICTE-approved institutions establish a Student Counsellor Committee, which aims to provide counselling and support to students in their academic, personal, and career development.",
                members: [
                    // { srNo: 1, name: "Dr L M Waghmare", designation: "Principal", position: "Chair person", mobileNumber: "9822663185" },
                    // { srNo: 2, name: "B A Khansole", designation: "Assist. Prof.& head in CSE", position: "Member", mobileNumber: "9260459865", email: "bakhansole@gmail.com" },
                    // { srNo: 3, name: "Syed Asad Hashmi", designation: "Assist. Prof.& head in EEE", position: "Member", mobileNumber: "8605786100", email: "sasadhashmi@gmail.com" },
                    // { srNo: 4, name: "Sayyad Shafik R", designation: "Assist. Prof.& head in MECH", position: "Member", mobileNumber: "7798684777", email: "sayyashafiq@gmail.com" },
                    // { srNo: 5, name: "Dr.syeda Rukhsana Osman Ali", designation: "Assist. Prof.& head in FE", position: "Member", mobileNumber: "9371062777", email: "15rukhsana@gmail.com" },
                    // { srNo: 6, name: "Dr. Abdullah M K", designation: "Assist. Prof.& head in E&TC", position: "Member", mobileNumber: "9518903766", email: "abdulectc@gmail.com" },
                    // { srNo: 7, name: "P D Pople", designation: "Assist. Prof.& head in Civil", position: "Member", mobileNumber: "8208618714", email: "pdpople@gmail.com" }
                ],
                objectives: [
                    "To monitor the student's regularity & discipline.",
                    "To enable the parents to know about the performance & regularity of their wards.",
                    "Improvement of teacher-student relationship.",
                    "Giving an opportunity for students to learn to improve their emotional, behavioural, personal, interpersonal characteristics, to develop confidence, make better choices, and increase educational efficacy.",
                    "Helping students to explore and express feelings and ways of thinking about their present situation and work toward making a healthier and happier future."
                ],
                rules: [
                    "Formation of Mentorship in each department.",
                    "To get feedback from the student committee members/teachers of each subject and mentors of each class.",
                    "Procuring the list of students who have scored less than 8 marks in their internal tests from each department per subject by the individual teachers handling the respective subjects, so as to guide them properly through counselling.",
                    "Providing counselling for the final year students who are in dilemma to enable them to choose job or higher studies.",
                    "Providing special medical assistance to the students who are going through depression.",
                    "Conducting a monthly meeting with the parents of the students having shortage of attendance and internal marks below 08."
                ]
            },
            {
                id: "industry-liaison-committee-engineering",
                title: "Industry Liaison Committee",
                description: "This committee will serve as a bridge between academic institutions and the industrial sector.",
                members: [
                    // { srNo: 1, name: "Prakash Pople", designation: "TPO", position: "Committee Head" },
                    // { srNo: 2, name: "Mr. Hashmi S.A.", designation: "HOD EE", position: "Member" },
                    // { srNo: 3, name: "Mr. Millar Khandare", designation: "CEO 3Idea Company", position: "Member" },
                    // { srNo: 4, name: "Mr. Khansole B.A.", designation: "CSE & T&P Coordinator", position: "Member" },
                    // { srNo: 5, name: "Mr. Syed Shafiq", designation: "Mech T&P Coordinator", position: "Member" },
                    // { srNo: 6, name: "Mr. Lakhan Rathod", designation: "Civil T&P Coordinator", position: "Member" },
                    // { srNo: 7, name: "Dr. Abdullah kalim", designation: "EE T&P Coordinator", position: "Member" },
                    // { srNo: 8, name: "Mr. P.J. Kinikar", designation: "A.O.", position: "Member" }
                ]
            },
            {
                id: "library-committee-engineering",
                title: "Library Committee",
                description: "The library committee in a college advises on library matters, helps with policy-making, and acts as a communication channel between the library and its users, including faculty, staff, and students.",
                members: [
                    // { srNo: 1, name: "Dr L M Waghmare", designation: "Principal", position: "chairman" },
                    // { srNo: 2, name: "Mr Dilip Tate", designation: "Librarian", position: "SECRETARY" },
                    // { srNo: 3, name: "Dr. Syeda Rukhsana", designation: "Assistant Professor", position: "Member" },
                    // { srNo: 4, name: "Dr. Abdulla A.", designation: "Assistant Professor", position: "Member" },
                    // { srNo: 5, name: "Prof. B A Khansole", designation: "Assistant Professor", position: "Member" },
                    // { srNo: 6, name: "Prof. L V Rathod", designation: "Assistant Professor", position: "Member" },
                    // { srNo: 7, name: "Prof. S. Shinde", designation: "Assistant Professor", position: "Member" },
                    // { srNo: 8, name: "Prof. Sayyad Shfiq", designation: "Assistant Professor", position: "Member" },
                    // { srNo: 9, name: "Prof. Asad Hashmi", designation: "Assistant Professor", position: "Member" },
                    // { srNo: 10, name: "Mr. Pravin Kinikar", designation: "External Expert", position: "EXTERNAL EXPERT" },
                    // { srNo: 11, name: "Vishal V.Rathod", designation: "Student (2023-24 Batch)", position: "Student Member" },
                    // { srNo: 12, name: "Deshmukh Pranavi Panditrao", designation: "Student (2024-25 Batch)", position: "Student Member" }
                ],
                roles: [
                    "Facilitating Communicating with college community & obtaining feedback in library collection, scorners, infrastructure etc.",
                    "To provide a forum for discussion for library needs & expectations time in view of improved technology.",
                    "To advise library in policy matters concerning services, facilities & resources."
                ],
                responsibilities: [
                    "Advise & review library policies for resource, services & facilities.",
                    "Advise on innovation of services.",
                    "Discuss & evaluate budgetary issues for books, journals data base, media, e-resources etc."
                ]
            },
            {
                id: "remedial-coaching-cell-engineering",
                title: "Remedial Coaching Cell",
                description: "A Remedial coaching cell is an initiative within educational institutions aimed at supporting students who need additional assistance to meet academic standards. The cell will focus on enhancing students' understanding of subjects, improving their skills, and boosting overall academic performance.",
                members: [
                    // { srNo: 1, name: "Dr.L M Waghmare", designation: "Principal", position: "Chairperson" },
                    // { srNo: 2, name: "Dr. Syeda Rukhsana", designation: "HOD FE", position: "Member" },
                    // { srNo: 3, name: "Mr Hashmi S.A.", designation: "HOD EE Engg", position: "Member" },
                    // { srNo: 4, name: "Sayyad Shafiq", designation: "HOD Mech Engg", position: "Member" },
                    // { srNo: 5, name: "Dr. Abdulla Kalim", designation: "HOD ETC", position: "Member" },
                    // { srNo: 6, name: "Mr.Lakhan Rathor", designation: "Assist. Prof. Civil", position: "Member" },
                    // { srNo: 7, name: "Mr.B.A. Khansole", designation: "HOD CSE", position: "Member" }
                ]
            }
        ],
    },
];

export const getCollegeCommittees = (collegeId: string) => {
    return CELLS_COMMITTEES_DATA.find(college => college.collegeId === collegeId);
};

export const getCommitteeDetails = (collegeId: string, committeeId: string) => {
    const college = getCollegeCommittees(collegeId);
    if (!college) return null;
    return college.committees.find(committee => committee.id === committeeId);
};