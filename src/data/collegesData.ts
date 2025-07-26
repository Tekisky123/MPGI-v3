import eceHod from "../assets/hodImages/Dr. Abdullah M.K.Department of Electronics & Telecommunication Engineering.jpeg";
import eeeHod from "../assets/hodImages/S. Asad HashmiElectrical Engineering.png";
import polyEceHod from "../assets/hodImages/Ms. Mule A.B. Head of Department - Electronics & Telecommunication Engineering.png";
import mechHod from "../assets/hodImages/Sayyad Shafik R Mechanical Engineering.png";
import cseHod from "../assets/hodImages/Mr B.A Khansole Computer Science & Engineering.png";
import managementDean from "../assets/principalImages/DeanSadanand R. Shinde School of Management.png";
import civilHodEngineering from "../assets/hodImages/P. D. Pople Civil Engineering.png";
import polyComputerHod from "../assets/hodImages/Mrs MORE M.K.png";
import polyCivilHod from "../assets/hodImages/Ms. Goud P.O Hod.jpg";
import mechanicalHodPoly from "../assets/principalImages/Prof. Shahaji Deshmukh Vishwabharati polytechnic.jpg";
import mrDeshmukhSJElectricalHod from "../assets/hodImages/Mr. DeshmukhpolyElectricalHod.png";
import rukhsanaHodBasicSciencesAndHumanities from "../assets/hodImages/Dr. Syeda RukhsanaBasicScience.png";
import sandeepHambardeHod from "../assets/hodImages/Dr. Sandeep S.Poly BasicScienceHOD.jpg";

export interface Department {
  id: string;
  name: string;
  description: string;
  about: string;
  image: string;
  courses: string[];
  facilities: string[];
  facultyCount: number;
  gallery: string[];
  labs: {
    srNo: number;
    labName: string;
    area: string;
    incharge: string;
    majorEquipment?: string;
    majorEquipmentDetails?: {
      name: string;
      details: string;
      quantity: number;
      totalCost: string;
    }[];
  };
  hod: {
    name: string;
    designation: string;
    message: string;
    profileImage: string;
  };
  vision: string;
  mission: string;
}

export interface College {
  id: string;
  name: string;
  description: string;
  image: string;
  departments: Department[];
  cardImage: string;
}

export const colleges: College[] = [
  {
    id: "vishwabharati-polytechnic-institute",
    name: "Vishwabharti Polytechnic Institute",
    description: "Premier polytechnic institute offering technical education",
    image: "https://www.sandipfoundation.org/images/sp.jpg",
    cardImage: "https://www.sandipfoundation.org/images/sp.jpg",
    departments: [
      {
        id: "mechanical",
        name: "Mechanical Engineering",
        description:
          "Hands-on diploma program specializing in automobile, CNC technology, and mechatronics.",
        image: "https://www.cepathanapuram.ac.in/assets/images/mephoto5.jpg",
        courses: [
          "Diploma in Mechanical Engineering",
          "CNC Technology",
          "Mechatronics Fundamentals",
        ],
        about: `The Department of Mechanical Engineering at Vishwabharti Polytechnic Institute is a cornerstone of our technical education offerings, known for its strong foundation in engineering principles and hands-on practical training. Our goal is to develop competent, innovative, and ethical mechanical engineers ready to meet the challenges of modern industry.

We offer a comprehensive Diploma in Mechanical Engineering, designed to equip students with in-depth knowledge of core subjects such as thermodynamics, manufacturing technology, fluid mechanics, machine design, and CAD/CAM. Our curriculum is regularly updated to keep pace with technological advancements and industry demands`,

        facilities: [
          "2000+ sq.ft Automotive Workshop",
          "CAD/CAM Lab with 50+ workstations",
          "Industry 4.0 Training Center",
          "6-month compulsory industry internship",
        ],
        facultyCount: 15,
        gallery: ["/images/mech-1.jpg", "/images/mech-2.jpg"],
        labs: [
          {
            srNo: 1,
            labName: "Theory of Machines Lab",
            area: "800 Sq. ft",
            incharge: "Sayyad Shafik",
            majorEquipment:
              "Rope brake dynamometer, four bar chain mechanism, Crank slider mechanism, Synchromesh gear box, differential gear box, brake liner test rig, Industrial gear box, watts mechanism",
          },
          {
            srNo: 2,
            labName: "Engineering Metallurgy Material Science",
            area: "820 Sq. ft.",
            incharge: "C. S. Gill",
            majorEquipment: "",
          },
          {
            srNo: 3,
            labName: "Basic Mechanical Engineering Lab",
            area: "800 Sq. ft.",
            incharge: "Sagar Patil",
            majorEquipment:
              "Models, Charts & cut sections of various mechanical equipment",
          },
          {
            srNo: 4,
            labName: "Manufacturing & Machining Workshop",
            area: "2000 Sq. ft.",
            incharge: "Shaikh Burhan",
            majorEquipment:
              "Lathe Machine, Milling Machine, Grinding Machine, Slotting Machine, Welding machine, Carpentry, Sheet Metal",
          },
          {
            srNo: 5,
            labName: "Heat Transfer Lab",
            area: "900 Sq. ft",
            incharge: "C. S. Gill",
            majorEquipment:
              "Stefan Boltzman's Apparatus, Conduction through composite wall, convection of Test Pipe, Pin fin apparatus, Parallel & counter flow heat exchanger, Domestic refrigeration test rig, VCC/Vapor compression test rig, Air conditioning test rig",
          },
          {
            srNo: 6,
            labName: "Engineering Graphics Lab",
            area: "1500 Sq. ft.",
            incharge: "Sagar Patil",
            majorEquipment:
              "Drawing tables (Adjustable), Height Adjustable Stools, Models, Charts",
          },
          {
            srNo: 7,
            labName: "Mechatronics Lab",
            area: "800 Sq. ft.",
            incharge: "Shirse Ankush",
            majorEquipment:
              "Study of different switches and relays, Vane pump test rig, Flow measurement trainer, Gear pump test rig, PLC Programming trainer kit",
          },
          {
            srNo: 8,
            labName: "CAD CAM Lab",
            area: "900 Sq.ft",
            incharge: "Sayyad Shafik",
            majorEquipment:
              "Auto CAD 2024, UG NX 6, CATIA V5-6, Master CAM X9, ANSYS 2024 R2, Latest Configuration Desktops 20 Nos., MATLAB, Creo -11",
          },
          {
            srNo: 9,
            labName: "Mechanical Measurement and Metallurgy Lab",
            area: "800 Sq. ft.",
            incharge: "Sagar Patil",
            majorEquipment:
              "Profile projector, Auto collimator, Tool Maker Microscope, Vernier Caliper Micrometer, Slip gauges, Optical Flat",
          },
          {
            srNo: 10,
            labName: "Steam and Gas Turbine Lab",
            area: "800 Sq. ft.",
            incharge: "C. S. Gill",
            majorEquipment: "", // Not specified
          },
          {
            srNo: 11,
            labName: "Fluid Mechanics Lab",
            area: "1000 Sq.ft.",
            incharge: "Sagar Patil",
            majorEquipment:
              "Verification of Bernoulli’s Theorem, Venturi Orifice Calibration Setup, Losses in Pipes",
          },
          {
            srNo: 12,
            labName: "Automobile Engineering Lab",
            area: "800 Sq. ft.",
            incharge: "Sagar Patil",
            majorEquipment:
              "Cut Section model of SKODA petrol and Diesel Engine, Cut section model of diesel engine, carburetor, Synchromesh gear box, Hydraulic and Mechanical brake, Vehicle lighting system, Fuel supply system, Differential gear box, Gear box, Suspension system, Steering system, Ignition system etc.",
          },
          {
            srNo: 13,
            labName: "Manufacturing Engineering Lab",
            area: "", // Area not specified in list
            incharge: "-", // Incharge not mentioned
            majorEquipment:
              "Lathe Machine, Milling Machine, Drilling Machine, Shaping Machine, sand casting, flame/plasma cutting, and basic sheet metal operations like shearing, blanking, and drawing",
          },
        ],

        hod: {
          name: "Prof. Shahaji Deshmukh",
          designation: "Head of Department - Mechanical Engineering",
          message: `It gives me immense pleasure to extend a warm welcome to all students, parents, and visitors exploring our vibrant institution. At Vishwabharti Polytechnic Institute, we are committed to shaping the future of young minds thro
          ugh technical education that blends knowledge, skill, and character.

Our polytechnic college stands as a beacon of excellence, offering industry-relevant diploma programs designed to meet the evolving needs of the modern world. With a team of dedicated faculty, state-of-the-art infrastructure, and a student-centered approach, we nurture innovation, creativity, and critical thinking among our learners.



We believe in holistic development — not just academic excellence but also personality building, leadership qualities, and ethical values. Our graduates are known for their professionalism, adaptability, and hands-on skills in real-world scenarios.
`,
          profileImage: mechanicalHodPoly,
        },
        vision:
          "To be a leading polytechnic institute recognized for producing skilled, innovative, and ethical professionals who contribute meaningfully to societal progress and global development.",
        mission: `To deliver industry-relevant technical education that integrates knowledge, practical skills, and strong moral values.

To foster a learning environment that encourages innovation, creativity, and critical thinking.

To equip students with the competencies needed to excel in their careers and adapt to evolving technological landscapes.`,
      },
      {
        id: "civil",
        name: "Civil Engineering",
        description:
          "Comprehensive program in civil engineering and construction technology",
        image: "https://i.ytimg.com/vi/b87BLzfNal4/maxresdefault.jpg ",
        courses: [
          "Diploma in Civil Engg",
          "Advanced Construction Tech",
          "Surveying Techniques",
        ],
        about: `Civil engineering is a core discipline of engineering that focuses on the design,
construction, and maintenance of the physical and naturally built environment.
From roads and bridges to buildings, dams, airports, and water treatment systems,
civil engineers play a vital role in shaping the infrastructure that supports modern
life. As one of the oldest and broadest fields of engineering, civil engineering
integrates science, technology, and mathematics to solve real-world challenges.
It encompasses various specialties including structural engineering,
transportation engineering, geotechnical engineering, water resources, and
environmental engineering.
Civil engineers ensure that infrastructure projects are safe, sustainable, and
efficient. Whether developing smart cities or restoring historic structures, they
contribute significantly to economic growth, public safety, and environmental
stewardship.`,
        facilities: [
          "Fully-equipped Material Testing Lab",
          "BIM Software Training Center",
          "On-site internship with construction firms",
          "Modern Surveying Equipment",
        ],
        facultyCount: 12,
        gallery: ["/images/civil-1.jpg", "/images/civil-2.jpg"],
        labs: [
          {
            srNo: 1,
            labName: "Strength of Materials Lab",
            area: "",
            incharge: "Ms. Pooja Goud",
          },
          {
            srNo: 2,
            labName: "Geo-tech Lab",
            area: "",
            incharge: "Ms. Sukeshani Patil",
          },
          {
            srNo: 3,
            labName: "Environmental Engineering Lab",
            area: "",
            incharge: "Ms. Sukeshani Patil",
          },
          {
            srNo: 4,
            labName: "Engineering Mechanics Lab",
            area: "",
            incharge: "Mr. Ram Rathod",
          },
          {
            srNo: 5,
            labName: "Hydraulics Lab",
            area: "",
            incharge: "Ms. Pooja Goud",
          },
          {
            srNo: 6,
            labName: "Concrete Technology Lab",
            area: "",
            incharge: "Ms. Rupali Tuppekar",
          },
          {
            srNo: 7,
            labName: "Surveying Lab",
            area: "",
            incharge: "Ms. Rupali Tuppekar",
          },
        ],
        hod: {
          name: "Ms. Goud P.O",
          designation: "Head of Department - Civil Engineering",
          message: `Welcome to the Department of Civil Engineering.
It gives me great pleasure to lead a department that stands at the forefront of
shaping the infrastructure and future of our society. Civil engineering is more
than just building structures; it is about designing resilient communities, creating
sustainable environments, and solving some of the most critical challenges facing
our world today.
Department of Civil Engineering is one of the established departments in the
institute. It was started in the year 2009. The Department offers diploma in “Civil
Engineering” with intake capacity of 30. We have a team of qualified,
experienced & dedicated teaching faculty. Department is supported by equally
dedicated qualified laboratory staff. The Department has built an excellent
reputation for its diploma students in terms of placements. We offer a curriculum
that blends theoretical knowledge with practical application, supported by wellequipped laboratories, industry collaboration, and experienced faculty.
I invite you to explore our programs, visit our campus, and join us in building a
better tomorrow through civil engineering.
“Civil engineering is the art of directing the great sources of power in nature for
the use and convenience of man.”`,
          profileImage: polyCivilHod,
        },
        vision: `The Civil Engineering Department imparts quality education to up bring technical
manpower in the field of civil engineering with the capabilities to take challenges
of upcoming technologies.`,
        mission: `1. To impart quality education to the students in order to serve society and the
nation by providing solutions to the challenges in the field of civil engineering,
globally.
2. To provide students and faculty members with opportunities to innovate and
disseminate knowledge.`,
      },
      {
        id: "electrical",
        name: "Electrical Engineering",
        description:
          "Industry-aligned electrical engineering program focused on automation and energy systems.",
        image:
          "https://webfiles.amrita.edu/2019/12/Teywkhaq-about-electrical-and-electronics.jpg",
        courses: [
          "Diploma in Electrical Engineering",
          "PLC and Automation",
          "Solar Power Systems",
        ],
        about: `Electrical Engineering is a branch of engineering that studies about the production and uses of Electric power, its generation and distribution and the control of machines. The field first became an identifiable occupation in the late nineteenth century after commercialization of the electric telegraph and electrical power supply. It now covers a range of subtopics including power system, Power electronics, control systems, signal processing and Electrical Machines. All major companies of public and private sector such as Electricity Boards, Large Scale Industries, Manufacturing Plants, Power Corporations, Hydro-Electricity sector are continuously in need of Electrical Engineers for their projects. The main objective of this course is to groom the students in such a way so that they can act as supervisors in the above mentioned industries. A good industry exposure is provided by placement of students in different companies during vacations.`,

        facilities: [
          "Smart Grid Simulation Lab",
          "Solar Panel Installation Workshop",
          "IoT Integration Training",
          "Industrial Automation Center",
        ],
        facultyCount: 10,
        gallery: ["/images/electrical-1.jpg", "/images/electrical-2.jpg"],
        labs: [
          {
            srNo: 1,
            labName: "DC Machine & Transformer Lab",
            incharge: "Mr. Deshmukh S.J.",
            area: "",
            majorEquipmentDetails: [
              {
                name: "TRANSFORMER",
                details: "1KVA, 50HZ 230/115V",
                quantity: 2,
                totalCost: "18500/-",
              },
              {
                name: "SINGLE PHASE AUTOTRANSFORMER",
                details:
                  "0-270V 10 AMP I/P 240V AC PORTABLE CLOSED TYPE SINGLE PHASE AIR COOLED",
                quantity: 2,
                totalCost: "11000/-",
              },
              {
                name: "THREE PHASE AUTOTRANSFORMER",
                details:
                  "O/P 0-470V AC, 10AMP, I/P 0-415V AC PORTABLE CLOSED TYPE, 3 PH, AIR COOLED",
                quantity: 1,
                totalCost: "15000/-",
              },
              {
                name: "WATTMETER",
                details: "0-300V, 5/10AMP, 625W 1PH",
                quantity: 2,
                totalCost: "3500/-",
              },
              {
                name: "LOAD BANK RESISTIVE",
                details: "5KW/20AMP, 1PH",
                quantity: 1,
                totalCost: "22000/-",
              },
              {
                name: "LOAD BANK LAMP",
                details: "0-12/3KW/1PH",
                quantity: 1,
                totalCost: "14500/-",
              },
              {
                name: "LOAD BANK INDUCTIVE",
                details: "5KW/20AMP/1 PH",
                quantity: 1,
                totalCost: "22000/-",
              },
              {
                name: "LOAD BANK CAPACITIVE",
                details: "5KW/20AMP/1 PH",
                quantity: 1,
                totalCost: "21000/-",
              },
              {
                name: "DIGITAL MULTIMETER",
                details: "MECO MODEL 801 AUTO",
                quantity: 1,
                totalCost: "2450/-",
              },
              {
                name: "3PH TRANSFORMER",
                details: "440/230V, 3KVA, AIR COOLED, COPPER WOUND",
                quantity: 1,
                totalCost: "22000/-",
              },
              {
                name: "CUT VIEW SECTION OF DC SHUNT MOTOR",
                details: "",
                quantity: 1,
                totalCost: "9500/-",
              },
              {
                name: "CUT VIEW SECTION OF INDUCTION MOTOR",
                details: "",
                quantity: 1,
                totalCost: "9500/-",
              },
              {
                name: "DC SHUNT MOTOR",
                details: "ARWA MAKE",
                quantity: 1,
                totalCost: "43000/-",
              },
              {
                name: "DC SERIES MOTOR",
                details: "ARWA MAKE",
                quantity: 1,
                totalCost: "43000/-",
              },
              {
                name: "DC SHUNT MOTOR #DC SHUNT GENERATOR",
                details: "",
                quantity: 1,
                totalCost: "45000/-",
              },
              {
                name: "2 POINT STARTER",
                details: "FOR DC SERIES MOTOR",
                quantity: 1,
                totalCost: "2700/-",
              },
              {
                name: "3 POINT STARTER",
                details: "FOR DC SHUNT MOTOR",
                quantity: 1,
                totalCost: "2700/-",
              },
              {
                name: "1 PH TRANSFORMER",
                details: "",
                quantity: 1,
                totalCost: "6200/-",
              },
              {
                name: "3 PH TRANSFORMER",
                details: "",
                quantity: 1,
                totalCost: "17500/-",
              },
              {
                name: "VARIAC/DIMMERS",
                details: "",
                quantity: 1,
                totalCost: "3300/-",
              },
              {
                name: "PORTABLE WATTMETER",
                details: "ME MAKE",
                quantity: 10,
                totalCost: "29000/-",
              },
              {
                name: "PORTABLE AMMETER",
                details: "ME MAKE",
                quantity: 15,
                totalCost: "27000/-",
              },
              {
                name: "PORTABLE VOLTMETER",
                details: "ME MAKE",
                quantity: 5,
                totalCost: "9000/-",
              },
              {
                name: "RHEOSTATS",
                details: "",
                quantity: 20,
                totalCost: "45000/-",
              },
              {
                name: "TRUE RMS METER",
                details: "",
                quantity: 2,
                totalCost: "9600/-",
              },
              {
                name: "CAPACITIVE LOAD BANK",
                details: "3PH 415V/10A",
                quantity: 1,
                totalCost: "14500/-",
              },
              {
                name: "INDUCTIVE LOAD BANK",
                details: "3 PH 415V/10A",
                quantity: 1,
                totalCost: "29500/-",
              },
              {
                name: "DC SERIES MOTOR#DC SHUNT GENERATOR",
                details: "",
                quantity: 1,
                totalCost: "45000/-",
              },
            ],
          },
          {
            srNo: 2,
            labName: "Basic Electrical Lab",
            incharge: "Mr. Deshmukh S.J.",
            area: "",
            majorEquipmentDetails: [
              {
                name: "KIRCHHOFFS LAW TRAINER KIT",
                details: "",
                quantity: 1,
                totalCost: "3500/-",
              },
              {
                name: "CAPACITOR CHARGING DISCHARGING KIT",
                details: "",
                quantity: 1,
                totalCost: "3500/-",
              },
              {
                name: "LED ACID BATTERY",
                details: "12V, 120AH",
                quantity: 1,
                totalCost: "12500/-",
              },
              {
                name: "BATTERY CHARGER",
                details:
                  "CAPABLE OF CHARGING TWO WHEELER & FOUR WHEELER BATTERY, 6 BATTERIES AT A TIME",
                quantity: 1,
                totalCost: "27000/-",
              },
              {
                name: "THERMOMETER",
                details: "",
                quantity: 1,
                totalCost: "180/-",
              },
              {
                name: "DIGITAL STOP WATCH",
                details: "",
                quantity: 1,
                totalCost: "1800/-",
              },
              {
                name: "ELECTROSTATIC CAPACITOR",
                details: "60UF, 230V 50HZ",
                quantity: 1,
                totalCost: "500/-",
              },
              {
                name: "CRO DUAL CHANNEL",
                details: "20MHZ",
                quantity: 1,
                totalCost: "22000/-",
              },
              {
                name: "ELECTRICAL ENGG CHART",
                details: "",
                quantity: 1,
                totalCost: "3500/-",
              },
              {
                name: "SINGLE PHASE ENERGY METER (ELECTROSTATIC TYPE)",
                details: "230V, 5-10AMP",
                quantity: 7,
                totalCost: "900/-",
              },
              {
                name: "SINGLE PHASE ENERGY METER (INDUCTION TYPE)",
                details: "230V, 5-10AMP",
                quantity: 1,
                totalCost: "600/-",
              },
              {
                name: "DIGITAL DUAL POWER SUPPLY",
                details: "30-0-30V, 2 AMP",
                quantity: 1,
                totalCost: "9500/-",
              },
              {
                name: "DIGITAL MULTIMETER",
                details: "MAKE CE",
                quantity: 1,
                totalCost: "2450/-",
              },
              {
                name: "WATTEMETER",
                details: "0-300V, 5/10AMP, 625W 1PH",
                quantity: 1,
                totalCost: "3500/-",
              },
              {
                name: "KCL/KVL KIT",
                details: "",
                quantity: 1,
                totalCost: "4200/-",
              },
              {
                name: "OSCILLOSCOPE",
                details: "20 MHZ, MAKE APLAB, MODEL 3305S",
                quantity: 2,
                totalCost: "22200/-",
              },
              {
                name: "FUNCTION GENERATOR",
                details: "1 MHZ, APLAB MODEL MSG1M",
                quantity: 1,
                totalCost: "7870/-",
              },
              {
                name: "DUAL POWER SUPPLY",
                details: "0-30V 2AMP",
                quantity: 1,
                totalCost: "35100/-",
              },
              {
                name: "WIRING SET UP",
                details: "",
                quantity: 1,
                totalCost: "6000/-",
              },
              {
                name: "DIGITAL MULTIMETER",
                details: "MAKE MECO MODEL 603",
                quantity: 2,
                totalCost: "3600/-",
              },
              {
                name: "MODEL OF THERMAL POWER PLANT",
                details: "",
                quantity: 1,
                totalCost: "18200/-",
              },
              {
                name: "MODEL OF DIESEL POWER PLANT",
                details: "",
                quantity: 1,
                totalCost: "18200/-",
              },
              {
                name: "MODEL OF NUCLEAR POWER PLANT",
                details: "",
                quantity: 1,
                totalCost: "15800/-",
              },
              {
                name: "STANDARD WIRE GAUGE",
                details: "",
                quantity: 1,
                totalCost: "100/-",
              },
            ],
          },
          {
            srNo: 3,
            labName: "Measurement Lab",
            incharge: "Miss. Kagde R.H.",
            area: "",
            majorEquipmentDetails: [
              {
                name: "SUPERPOSITION THEOREM KIT",
                quantity: 1,
                totalCost: "3500/-",
              },
              {
                name: "THEVENINS THEOREM KIT",
                quantity: 1,
                totalCost: "3500/-",
              },
              { name: "NORTONS THEOREM KIT", quantity: 1, totalCost: "3500/-" },
              {
                name: "MAXIMUM POWER TRANSFER KIT",
                quantity: 1,
                totalCost: "3500/-",
              },
              {
                name: "PERFORMANCE OF RLC SERIES CIRCUIT",
                quantity: 1,
                totalCost: "8000/-",
              },
              {
                name: "RHEOSTAT: 5 OHM 20AMP",
                quantity: 1,
                totalCost: "12500/-",
              },
              {
                name: "RHEOSTAT: 20 OHM 10AMP",
                quantity: 1,
                totalCost: "6500/-",
              },
              {
                name: "RHEOSTAT: 110 OHM 2.8AMP",
                quantity: 1,
                totalCost: "3500/-",
              },
              {
                name: "RHEOSTAT: 1KOHM, 1AMP",
                quantity: 1,
                totalCost: "5500/-",
              },
              {
                name: "RHEOSTAT: 600 OHM, 1.2AMP",
                quantity: 1,
                totalCost: "3500/-",
              },
              {
                name: "RHEOSTAT: 750 OHM, 1.2AMP",
                quantity: 1,
                totalCost: "3500/-",
              },
              {
                name: "RHEOSTAT: 40 OHM, 5AMP",
                quantity: 1,
                totalCost: "3500/-",
              },
              {
                name: "SQUARE AMMETER 0-20AMP",
                quantity: 2,
                totalCost: "1000/-",
              },
              {
                name: "SQUARE VOLT METER 0-500V",
                quantity: 2,
                totalCost: "1000/-",
              },
              {
                name: "WATTEMETER 1PH 5/10, 600W 500V",
                quantity: 1,
                totalCost: "3500/-",
              },
              {
                name: "GALVANOMETER 30-0-30: MINIPORTABLE",
                quantity: 1,
                totalCost: "900/-",
              },
              {
                name: "TYPE WITH CENTRE ZERO",
                quantity: 1,
                totalCost: "1800/-",
              },
              { name: "DIGITAL CLAMP METER", quantity: 1, totalCost: "1450/-" },
              {
                name: "LOAD BANK LAMP, 0-12AMP 3KW 1PH",
                quantity: 1,
                totalCost: "22000/-",
              },
              {
                name: "LOAD BANK RESISTIVE 1PH, 5KW 20AMP",
                quantity: 1,
                totalCost: "47000/-",
              },
              {
                name: "LOAD BANK RESISTIVE 3PH 5KW 20AMP",
                quantity: 1,
                totalCost: "22000/-",
              },
              {
                name: "LOAD BANK INDUCTIVE 1PH 5KW 20AMP",
                quantity: 1,
                totalCost: "2100/-",
              },
              {
                name: "LOAD BANK CAPACITIVE 1PH 5KW 20AMP",
                quantity: 1,
                totalCost: "21000/-",
              },
              { name: "DIGITAL MULTIMETER", quantity: 3, totalCost: "1000/-" },
              {
                name: "PORTABLE WATTMETER ME MAKE 5/10AMP 0-150-300-600V",
                quantity: 4,
                totalCost: "10000/-",
              },
              {
                name: "PORTABLE WATTMETER ME MAKE 1/2AMP 0-150-300-600V",
                quantity: 3,
                totalCost: "7500/-",
              },
              {
                name: "PORTABLE VOLTMETER ME MAKE 0-150-300V DC",
                quantity: 4,
                totalCost: "6000/-",
              },
              {
                name: "PORTABLE VOLTMETER ME MAKE 0-150-300V AC",
                quantity: 4,
                totalCost: "6000/-",
              },
              {
                name: "PORTABLE VOLTMETER ME MAKE 0-300-600V AC",
                quantity: 4,
                totalCost: "6000/-",
              },
              { name: "CT 25/5AMP", quantity: 1, totalCost: "1700/-" },
              { name: "PT 400/100V", quantity: 1, totalCost: "3300/-" },
              {
                name: "PHASE SEQUENCE INDICATOR",
                quantity: 1,
                totalCost: "1450/-",
              },
              { name: "TRUE RMS METER", quantity: 1, totalCost: "4500/-" },
              {
                name: "MODEL OF MOVING IRON TYPE ANALOG METER V & A",
                quantity: 2,
                totalCost: "6200/-",
              },
              {
                name: "MODEL OF COIL TYPE ANALOG METER V & A",
                quantity: 2,
                totalCost: "6200/-",
              },
              {
                name: "ANALOG MEGGER WACO MAKE",
                quantity: 1,
                totalCost: "5500/-",
              },
              {
                name: "ANALOG EARTH TESTER WITH KIT WACO MAKE",
                quantity: 1,
                totalCost: "6200/-",
              },
              {
                name: "STUDY OF LAMP SET: a) SODIUM LAMP, b) METAL HALIDE LAMP",
                quantity: 2,
                totalCost: "8300/-",
              },
              {
                name: "WIRING SET UP (SET OF 2)",
                quantity: 1,
                totalCost: "6000/-",
              },
              {
                name: "ELECTRICAL WIRING SHOW CASE",
                quantity: 1,
                totalCost: "8000/-",
              },
              {
                name: "ELECTRODYNAMIC PORTABLE WATTMETER",
                quantity: 4,
                totalCost: "11300/-",
              },
              {
                name: "DIGITAL AC DC CLAMP METER",
                quantity: 2,
                totalCost: "9000/-",
              },
            ],
          },
          {
            srNo: 4,
            labName: "AC Machine Lab",
            incharge: "Mr. Shingarputale B.G.",
            area: "",
            majorEquipmentDetails: [
              {
                name: "SQUIRREL CAGE INDUCTION MOTOR (3 HP/415V/1500RPM) WITH LOADING ARRANGEMENT WITH PANEL BOARD",
                quantity: 1,
                totalCost: "32000/-",
              },
              {
                name: "SLIP RING INDUCTION MOTOR ARWA MAKE (3HP/230V/1500RPM) WITH LOADING ARRANGEMENT CONTROL PANEL",
                quantity: 1,
                totalCost: "45500/-",
              },
              {
                name: "STARTER FOR INDUCTION MOTOR: DOL STARTER, ROTOR RESISTANCE, DC SHUNT, STAR DELTA STARTER",
                quantity: 1,
                totalCost: "16300/-",
              },
              {
                name: "DC SHUNT MOTOR # AC ALTERNATOR ARWA MAKE (3HP/230V/1500RPM), COUPLED TO 1.8KVA 415V/3PH/1500RPM/50HZ, WITH AC ALTERNATOR CONTROL PANEL FOR MOTOR ALTERNATOR SET",
                quantity: 1,
                totalCost: "55500/-",
              },
              {
                name: "SYNCHRONOUS MOTOR ARWA MAKE (3HP/3PH/440V) WITH LOADING ARRANGEMENT AND SYNCHRONOUS MOTOR EXCITATION PANEL",
                quantity: 1,
                totalCost: "50000/-",
              },
              {
                name: "CAPACITOR START INDUCTION MOTOR ARWA MAKE (1HP/230V/1500RPM) WITH LOADING ARRANGEMENT CONTROL PANEL FOR MOTOR",
                quantity: 1,
                totalCost: "27500/-",
              },
              {
                name: "SQUIRREL CAGE INDUCTION MOTOR COUPLED WITH DC SHUNT GENERATOR WITH CONTROL PANEL",
                quantity: 1,
                totalCost: "62000/-",
              },
              {
                name: "3 PHASE SYNCHRONOUS MOTOR COUPLED TO DC SHUNT GENERATOR SET WITH CONTROL PANEL",
                quantity: 1,
                totalCost: "66000/-",
              },
              {
                name: "SLIP RING INDUCTION MOTOR COUPLED WITH DC SHUNT GENERATOR WITH CONTROL PANEL",
                quantity: 1,
                totalCost: "66500/-",
              },
              {
                name: "STROBOSCOPIC 0-1000RPM",
                quantity: 1,
                totalCost: "10500/-",
              },
            ],
          },
          {
            srNo: 5,
            labName: "Switchgear & Protection Lab",
            incharge: "Miss. Deshmukh S.D.",
            area: "",
            majorEquipmentDetails: [
              {
                name: "MODELS OF ACB",
                quantity: 1,
                totalCost: "20000/-",
              },
              {
                name: "MODELS OF MCB",
                quantity: 1,
                totalCost: "3300/-",
              },
              {
                name: "MODELS OF MCCB",
                quantity: 1,
                totalCost: "3300/-",
              },
              {
                name: "MODELS OF ELCB",
                quantity: 1,
                totalCost: "3300/-",
              },
              {
                name: "MODELS OF RCCB",
                quantity: 1,
                totalCost: "3300/-",
              },
              {
                name: "OTHER TYPE OF RELAY",
                quantity: 1,
                totalCost: "5300/-",
              },
            ],
          },
          {
            srNo: 6,
            labName: "Electrical Circuit & Network Lab",
            incharge: "Mr. Deshmukh S.J.",
            area: "",
            majorEquipmentDetails: [
              { name: "RLC SERIES CIRCUIT", quantity: 1, totalCost: "1800/-" },
              {
                name: "RLC PARALLEL CIRCUIT",
                quantity: 1,
                totalCost: "1800/-",
              },
              {
                name: "LOAD BANK 1 PH 230V/10AMP",
                quantity: 1,
                totalCost: "9500/-",
              },
              {
                name: "LOAD BANK 3 PH 415V/10AMP",
                quantity: 1,
                totalCost: "14500/-",
              },
              { name: "VARIAC 1 PH 10AMP", quantity: 1, totalCost: "3000/-" },
              { name: "RHEOSTAT", quantity: 8, totalCost: "18200/-" },
              { name: "DECADE BOX R,L,C", quantity: 3, totalCost: "9800/-" },
              {
                name: "DIGITAL LCR METER MAKE WACO MODEL 24",
                quantity: 1,
                totalCost: "6000/-",
              },
              {
                name: "PORTABLE AMMETERS ME MAKE 5-10AMP AC",
                quantity: 4,
                totalCost: "6000/-",
              },
              {
                name: "PORTABLE WATTMETER MAKE 5-10AMP DC",
                quantity: 4,
                totalCost: "6000/-",
              },
              {
                name: "PORTABLE VOLTMETER ME MAKE 0-150-300V DC",
                quantity: 4,
                totalCost: "6000/-",
              },
              {
                name: "PORTABLE VOLTMETER ME MAKE 0-150-300V AC",
                quantity: 4,
                totalCost: "6000/-",
              },
              {
                name: "PORTABLE VOLTMETERS ME MAKE 0-300-600V DC",
                quantity: 4,
                totalCost: "6000/-",
              },
              {
                name: "R-L-C SERIES CIRCUIT KIT",
                quantity: 1,
                totalCost: "3250/-",
              },
              { name: "R-L-C PARALLEL KIT", quantity: 1, totalCost: "3250/-" },
              {
                name: "DIGITAL MULTIMETER MECO MODEL 603",
                quantity: 1,
                totalCost: "1800/-",
              },
              {
                name: "PORTABLE AMMETER ME MAKE 05 AMP",
                quantity: 2,
                totalCost: "3600/-",
              },
            ],
          },
          {
            srNo: 7,
            labName: "Testing & Maintenance Electrical Equipment",
            incharge: "Mr. Shingarputale B.G.",
            area: "",
            majorEquipmentDetails: [
              {
                name: "CAPACITIVE START INDUCTION MOTOR ARWA MAKE:- 230V/1HP WITH LOADING PANEL ARRANGEMENT & CONTROL PANEL",
                quantity: 1,
                totalCost: "27500/-",
              },
              {
                name: "PARALLEL OPERATION OF TRANSFORMER:- 415V/415V 2KVA TAPPING ON BOTH SIDE AT 0% 50% 86.6% 100%",
                quantity: 1,
                totalCost: "45000/-",
              },
              {
                name: "PARALLEL OPERATION OF ALTERNATOR:- DC SHUNT MOTOR 3 HP COUPLED TO 1 KVA ALTERNATOR (2 NO) WITH BASE PLATE & COUPLING ARWA MAKE CONTROL PANEL FOR AND ALTERNATOR SET",
                quantity: 1,
                totalCost: "101500/-",
              },
              {
                name: "DC SERIES MOTOR ARWA MAKE 3 HP 415V 1500RPM WITH BRAKE AND PULLEY ARRANGEMENT CONTROL PANEL FOR MOTOR",
                quantity: 1,
                totalCost: "43000/-",
              },
              {
                name: "SQUIRREL CAGE INDUCTION MOTOR ARWA MAKE 3PH 415V WITH BRAKE AND PULLEY ARRANGEMENT CONTROL PANEL FOR MOTOR",
                quantity: 1,
                totalCost: "32000/-",
              },
              { name: "ELECTRIC MIXER", quantity: 1, totalCost: "1600/-" },
              { name: "ELECTRIC IRON", quantity: 1, totalCost: "500/-" },
              { name: "ELECTRIC HEATER", quantity: 1, totalCost: "400/-" },
            ],
          },
          {
            srNo: 8,
            labName: "Basic Electronics",
            incharge: "Miss. Deshmukh S.D.",
            area: "",
            majorEquipmentDetails: [
              { name: "ZENER DIODE KIT", quantity: 2, totalCost: "4800/-" },
              {
                name: "HWR AND FWR WITH AND WITHOUT FILTER",
                quantity: 2,
                totalCost: "4800/-",
              },
              {
                name: "I/P & O/P CHARACTERISTICS OF TRANSISTOR IN CE MODE KIT",
                quantity: 2,
                totalCost: "4800/-",
              },
              {
                name: "FET CHARACTERISTICS KIT",
                quantity: 2,
                totalCost: "4800/-",
              },
              {
                name: "UJT CHARACTERISTICS KIT",
                quantity: 2,
                totalCost: "4800/-",
              },
              {
                name: "ZENER DIODE AS SHUNT VOLTAGE REGULATOR KIT",
                quantity: 2,
                totalCost: "4800/-",
              },
              {
                name: "FREQUENCY RESPONSE OF SINGLE STAGE RC COUPLE AMP",
                quantity: 2,
                totalCost: "4800/-",
              },
              {
                name: "LC & RC OSCILLATOR CIRCUIT KIT",
                quantity: 2,
                totalCost: "5700/-",
              },
              { name: "GP4 PATCH CORDS", quantity: 40, totalCost: "4000/-" },
              {
                name: "OSCILLOSCOPE 20 MHZ: MAKE:- AP LAB MODEL:-3305S",
                quantity: 3,
                totalCost: "70650/-",
              },
              {
                name: "FUNCTION GENERATOR 1 MHZ: MAKE AP LAB MODEL :MSG1M",
                quantity: 1,
                totalCost: "7870/-",
              },
              {
                name: "DUAL POWER SUPPLY 0-30V /2 AMP",
                quantity: 1,
                totalCost: "12700/-",
              },
              {
                name: "DIGITAL MULTIMETER: MAKE:MECO MODEL:603",
                quantity: 1,
                totalCost: "1800/-",
              },
            ],
          },
          {
            srNo: 9,
            labName: "Instrumentation Lab",
            incharge: "Miss. Kagde R.H.",
            area: "",
            majorEquipmentDetails: [
              {
                name: "Measure Output Voltage And Displacement In LVDT",
                quantity: 1,
                totalCost: "30000/-",
              },
              {
                name: "Measure Output Voltage And Force In Strain Gauge",
                quantity: 2,
                totalCost: "26800/-",
              },
              {
                name: "Verify The Relation Between The Output Voltage And Temperature By Using A RTD (PT 100) And Thermocouple",
                quantity: 3,
                totalCost: "32600/-",
              },
              {
                name: "Capacitive Type Level Measurement Trainer",
                quantity: 4,
                totalCost: "28000/-",
              },
              {
                name: "Flow Transducer Trainer Using Rotameter, Orifice & Venturi",
                quantity: 5,
                totalCost: "44200/-",
              },
              {
                name: "Pressure Transducer Trainer Using Bourdon Tube, Bellow & Diaphragm",
                quantity: 6,
                totalCost: "44200/-",
              },
              {
                name: "Measure Angular Velocity Using Inductive Proximity Pickup",
                quantity: 7,
                totalCost: "28000/-",
              },
              {
                name: "Verify The Function Of Op-Amp As Inverting / Non Inverting Amplifier",
                quantity: 8,
                totalCost: "3200/-",
              },
              {
                name: "Verify The Function Of Op-Amp As Adder / Subtractor",
                quantity: 9,
                totalCost: "3200/-",
              },
              {
                name: "Verify The Function Of Op-Amp As Comparator / Schmitt Trigger",
                quantity: 10,
                totalCost: "3200/-",
              },
              {
                name: "Characteristics Of LDR",
                quantity: 11,
                totalCost: "3200/-",
              },
              {
                name: "Characteristics Of Photo Diode",
                quantity: 12,
                totalCost: "3200/-",
              },
              {
                name: "Characteristics Of Photo Transistor",
                quantity: 13,
                totalCost: "3200/-",
              },
              { name: "CT 25 / 5 A", quantity: 14, totalCost: "5800/-" },
              { name: "Analog Tachometer", quantity: 15, totalCost: "14000/-" },
              { name: "Digital Lux meter", quantity: 16, totalCost: "3000/-" },
            ],
          },
          {
            srNo: 10,
            labName: "Power Electronics Lab",
            incharge: "Mr. Shingarputale B.G.",
            area: "",
            majorEquipmentDetails: [
              {
                name: "SCR Half wave, Full wave, Bridge half wave controlled rectifier/ converter with resistive and inductive load",
                quantity: 1,
                totalCost: "7500",
              },
              {
                name: "SCR Series Inverter",
                quantity: 1,
                totalCost: "6900",
              },
              {
                name: "Jone's Chopper",
                quantity: 1,
                totalCost: "5500",
              },
              {
                name: "Automatic Battery charger with 12v battery",
                quantity: 1,
                totalCost: "9900",
              },
            ],
          },
        ],
        hod: {
          name: "Mr. Deshmukh S.J.",
          designation: "Head of Department - Electrical Engineering",
          message: `The Electrical Engineering course, being constantly growing due to the success of its diploma as highly skilled and professional engineering technologists. We pride in having the well qualified faculty and well groomed multi-dimensional students driven by self motivation and quest to continuously improve and aspiring for higher studies at top universities around the Maharashtra & India .At present, the department offers an undergraduate Diploma (Electrical Engineering). The Electrical Engineering programs are designed to reflect the diverse needs of our students. industry, and the society with academic rigor. We strive to nurture graduates who are ready to accept the changing needs of the society and industry.

Since future is of smart energy management system, the Electrical Engineering Department will continue to fulfill its aim to contribute to the society. I invite you to explore our department web-pages and discover the ample opportunities of academic excellence at our department as a first choice in electrical engineering education.

I believe career opportunities in Electrical Engineering are endless as Diploma Engineer Trainee can work anywhere in government agencies, Power industries, Government PSU, R&D Units, IT industries, Electricity Boards/Utility companies and startup to big tech firms.

On behalf of the Electrical Engineering department, I welcome our new and current students and visitors, an wish them a bright future a-head.`,
          profileImage: mrDeshmukhSJElectricalHod,
        },
        vision:
          "Creation of academic excellence in the field of Electronics & Telecommunication Engineering through value based universal education system to produce proficient professionals for the welfare of mankind around the globe.",
        mission: `1. To provide quality education in the field of Electronics Engineering.
2. To conduct practical training as per industry needs to enhance academic standard of the students.
3. To empower each & every student by providing them all round personality development with latest emerging technology through expert lectures.
4. To provide electronics engineers to the society for effective contribution towards societal developments with the sense of discipline and dedication.`,
      },
      {
        id: "computer",
        name: "Computer Engineering",
        description:
          "Future-focused program covering embedded systems, web technologies, and cloud computing.",
        image: "https://grdedu.in/wp-content/uploads/2023/05/cse.png",
        courses: [
          "Diploma in Computer Engineering",
          "Web Development",
          "Embedded Systems",
        ],
        about: `The Department of Computer Engineering was established in 2009 with an initial intake of 60 students. Its primary objective was to launch a diploma program in Computer Engineering to develop skilled and professional manpower for the IT industry. Additionally, the college aimed to provide educational opportunities to talented youth from the rural areas of Nanded, Maharashtra. In 2023, the department expanded its intake by 30 seats and also introduced a new Information Technology (IT) department. Computer engineers play a vital role in nation-building by developing innovative technologies, strengthening cybersecurity, automating industries, enhancing digital infrastructure, and contributing to sectors such as healthcare, education, defence, and governance.`,

        facilities: [
          "Cisco Networking Academy Lab",
          "Mobile App Development Center",
          "Cloud Computing Infrastructure",
          "Annual Hackathon Competition",
        ],
        facultyCount: 9,
        gallery: ["/images/computer-1.jpg", "/images/computer-2.jpg"],
        labs: [
          {
            srNo: 1,
            labName: "Programming Lab",
            area: "",
            incharge: "Mr.Surnar A.B",
          },
          {
            srNo: 2,
            labName: "Data Base Lab",
            area: "",
            incharge: "Mr.Unchadkar V.A",
          },
          {
            srNo: 3,
            labName: "Hardware & Networking Lab",
            area: "",
            incharge: "Mrs. Pawar A.K",
          },
          {
            srNo: 4,
            labName: "Operating System And Linux Lab",
            area: "",
            incharge: "Mrs. Dawkore R.A",
          },
          {
            srNo: 5,
            labName: "Web Application Lab",
            area: "",
            incharge: "Ms. Kapale A.B",
          },
          {
            srNo: 6,
            labName: "Project Lab",
            area: "",
            incharge: "Project Lab",
          },
        ],
        hod: {
          name: "Mrs MORE M.K.",
          designation: "Head of Department - Computer Engineering",
          message: `It is a privilege to introduce the Department of Computer Engineering at Matoshri Pratishthan’s Vishwabharti Polytechnic Institute, Nanded.
Our department is dedicated to delivering quality technical education that prepares diploma students to confidently step into the software industry and other technical sectors. We aim to provide industry-sponsored internships and project opportunities to enhance students’ professional readiness and career prospects.
As diploma holders, many of you will go on to become software developers or IT professionals. Therefore, it's essential to build strong technical as well as interpersonal skills. Opportunities will come your way, but success lies in your ability to recognize and seize them. To achieve your goals, set a clear vision and work consistently and sincerely in the right direction.
Our department is here to support and guide you in acquiring not only knowledge but also the ethical values necessary for a long and meaningful professional journey. In today’s fast-changing and competitive environment, staying updated with emerging technologies is crucial. As students of Computer Engineering, programming should become a regular habit—your thoughts should naturally transform into code written in modern programming languages.
Lastly, remember that professional success is not just about skills, but also about integrity and strong moral values.
I warmly welcome you all and wish you a bright, fulfilling, and successful career ahead.`,
          profileImage: polyComputerHod,
        },
        vision: `“Computer Engineering Department striving for excellence in providing scientific and technical education, to develop intellectual, innovative and quality computer engineers and prepare them to face challenges of modern society.”`,
        mission: `“To contribute Institute in providing high quality, affordable and accessible computer science education programmers. To benchmark with the best global standards of quality education in computer science. To engage & motivate students through stimulating & collaborative experiences for computer related solutions. To enhance the commitment of faculty, staff, and students to the centrality of diversity, social justice, and democratic citizenship.”`,
      },
      {
        id: "it",
        name: "Information Technology",
        description:
          "Future-focused program covering embedded systems, web technologies, and cloud computing.",
        image: "https://grdedu.in/wp-content/uploads/2023/05/cse.png",
        courses: [
          "Diploma in Information Technology",
          "Web Development",
          "Embedded Systems",
        ],
        about: `The Department of Information Technology was established in 2009 with an initial intake of 60 students. Its primary objective was to launch a diploma program in Computer Engineering to develop skilled and professional manpower for the IT industry. Additionally, the college aimed to provide educational opportunities to talented youth from the rural areas of Nanded, Maharashtra. In 2023, the department expanded its intake by 30 seats and also introduced a new Information Technology (IT) department. Computer engineers play a vital role in nation-building by developing innovative technologies, strengthening cybersecurity, automating industries, enhancing digital infrastructure, and contributing to sectors such as healthcare, education, defence, and governance.`,
        facilities: [
          "Cisco Networking Academy Lab",
          "Mobile App Development Center",
          "Cloud Computing Infrastructure",
          "Annual Hackathon Competition",
        ],
        facultyCount: 9,
        gallery: ["/images/computer-1.jpg", "/images/computer-2.jpg"],
        labs: [
          {
            srNo: 1,
            labName: "Programming Lab",
            area: "",
            incharge: "Mr. Surnar A.B",
          },
          {
            srNo: 2,
            labName: "Database Lab",
            area: "",
            incharge: "Mr. Unchadkar V.A",
          },
          {
            srNo: 3,
            labName: "Hardware & Networking Lab",
            area: "",
            incharge: "Mrs. Pawar A.K",
          },
          {
            srNo: 4,
            labName: "Operating System & Linux Lab",
            area: "",
            incharge: "Mrs. Dawkore R.A",
          },
          {
            srNo: 5,
            labName: "Web Application Lab",
            area: "",
            incharge: "Ms. Kapale A.B",
          },
          {
            srNo: 6,
            labName: "Project Lab",
            area: "",
            incharge: "Project Lab",
          },
        ],
        hod: {
          name: "Mrs. More M.K.",
          designation: "Head of Department - Information Technology",
          message: `It is a privilege to introduce the Department of Information Technology at Matoshri Pratishthan’s Vishwabharti Polytechnic Institute, Nanded.

Our department is dedicated to delivering quality technical education that prepares diploma students to confidently step into the software industry and other technical sectors. We aim to provide industry-sponsored internships and project opportunities to enhance students’ professional readiness and career prospects.

As diploma holders, many of you will go on to become software developers or IT professionals. Therefore, it's essential to build strong technical as well as interpersonal skills. Opportunities will come your way, but success lies in your ability to recognize and seize them. To achieve your goals, set a clear vision and work consistently and sincerely in the right direction.

Our department is here to support and guide you in acquiring not only knowledge but also the ethical values necessary for a long and meaningful professional journey. In today’s fast-changing and competitive environment, staying updated with emerging technologies is crucial. As students of Information Technology, programming should become a regular habit—your thoughts should naturally transform into code written in modern programming languages.

Lastly, remember that professional success is not just about skills, but also about integrity and strong moral values.

I warmly welcome you all and wish you a bright, fulfilling, and successful career ahead.`,
          profileImage: polyComputerHod,
        },
        vision: `“Information Technology Department striving for excellence in providing scientific and technical education, to develop intellectual, innovative and quality IT professionals and prepare them to face challenges of the digital world.”`,
        mission: `“To contribute to the institute by providing high quality, affordable, and accessible IT education programs. 
- To benchmark with the best global standards of quality education in information technology. 
- To engage and motivate students through stimulating and collaborative learning experiences. 
- To enhance the commitment of faculty, staff, and students to diversity, social responsibility, and ethical citizenship.”`,
      },
      {
        id: "ece",
        name: "Electronics and Telecommunication",
        description:
          "Program specializing in communication systems, embedded systems, and IoT.",
        image:
          "https://georgetelegraphblog.wordpress.com/wp-content/uploads/2021/01/electronics-and-communication.jpg?w=584 ",
        about: `MPGI Integrated Campus is one of the premier technical institutions of the Region. The department of Electronics and Tele Communication, MPGI Integrated Campus, was established in the year 2023 with an intake of 30 students. It is among the finest in the college having qualified faculty and well equipped laboratories. The department has always strived to inculcate the very best in the students so that they can face the challenges offered by the industry. The department offers B.Tech degree course in Electronics and Tele Communication Engineering. The preeminence of the department can be understood by the ever increasing demands of its fresh graduate. Close interaction with the industry has led to the evolution of a teaching system, which produces diligent and erudite engineers. The young engineers have excelled both in higher education and in industry.`,
        courses: [
          "Diploma in Electronics and Telecommunication",
          "Wireless Communication",
          "IoT Applications",
        ],
        facilities: [
          "RF & Microwave Lab",
          "Digital Signal Processing Lab",
          "IoT Prototyping Lab",
          "Industry-Aligned Certification Courses",
        ],
        facultyCount: 10,
        gallery: ["/images/ece-1.jpg", "/images/ece-2.jpg"],
        labs: [
          {
            srNo: 1,
            labName: "Basic electronics lab",
            area: "",
            incharge: "Mr. Gare O.S.",
          },
          {
            srNo: 2,
            labName: "Digital and Microprocessor lab",
            area: "",
            incharge: "Mr. Gare O.S.",
          },
          {
            srNo: 3,
            labName: "Communication lab",
            area: "",
            incharge: "Ms. Mule A.B.",
          },
          {
            srNo: 4,
            labName: "Power electronic lab",
            area: "",
            incharge: "Ms. Mule A.B.",
          },
          {
            srNo: 5,
            labName: "Control system lab",
            area: "",
            incharge: "Ms. Mule A.B.",
          },
        ],
        hod: {
          name: "Ms. Mule A.B.",
          designation:
            "Head of Department - Electronics & Telecommunication Engineering",
          message: `Department of Electronics and Telecommunication Engineering is one of the established departments in the institute. It was started in the year 2023. The Department offers diploma in “Electronics and Telecommunication Engineering” with intake capacity of 30.We have a team of qualified, experienced & dedicated teaching faculty. Department is supported by equally dedicated qualified laboratory staff. The Department has built an excellent reputation for its diploma students in terms of placements. The curriculum offers a balance of theoretical knowledge and practical experience, enabling you to design, develop, and test electronic systems used in fields like telecommunications, aerospace, and healthcare. With robust industry partnerships, research-oriented labs, and a focus on innovation, MPVPI stands out as one of the leading institutes for Electronics and Telecommunication Engineering in Maharashtra.
                    “Technology can become the “wings” that will allow the educational world to fly farther and faster than ever before – if we allow it”`,
          profileImage: polyEceHod,
        },
        vision:
          "Creation of academic excellence in the field of Electronics & Telecommunication Engineering through value based universal education system to produce proficient professionals for the welfare of mankind around the globe.",
        mission: `1. To provide quality education in the field of Electronics Engineering.
2. To conduct practical training as per industry needs to enhance academic standard of the students.
3. To empower each & every student by providing them all round personality development with latest emerging technology through expert lectures.
4. To provide electronics engineers to the society for effective contribution towards societal developments with the sense of discipline and dedication.`,
      },
      {
        id: "bsh",
        name: "Basic Sciences and Humanities (FE)",
        description:
          "Foundation department focusing on engineering fundamentals, mathematics, physics, chemistry, and communication skills.",
        image: "https://www.lpu.in/academics/images/department/physics.jpg",
        about: `The Department of Basic Sciences and Humanities (BSH) serves as the foundational pillar of the institution, laying the academic groundwork for first-year engineering students. Our department integrates core subjects like Physics, Chemistry, Mathematics, Environmental Studies, and Communication Skills to build a strong base in scientific understanding, analytical ability, and human values.

We are committed to holistic student development through an interdisciplinary approach that combines theoretical knowledge with practical application. Our team of experienced and dedicated faculty members ensures an engaging learning environment with innovative pedagogy, digital classrooms, modern labs, and continuous mentoring. 

At BSH, we aim to instill curiosity, ethical reasoning, critical thinking, and lifelong learning habits that not only prepare students for advanced engineering disciplines but also equip them to contribute meaningfully to society.`,

        courses: [
          "Engineering Mathematics I & II",
          "Engineering Physics & Lab",
          "Engineering Chemistry & Lab",
          "Environmental Studies",
          "Communication Skills & Soft Skills",
        ],
        facilities: [
          "Engineering Physics Lab",
          "Engineering Chemistry Lab",
          "Language and Communication Lab",
          "Digital Learning Smart Classrooms",
        ],
        facultyCount: 15,
        gallery: ["/images/bsh-1.jpg", "/images/bsh-2.jpg"],
        labs: [
          {
            srNo: 1,
            labName: "Physics Lab",
            area: "",
            incharge: "Miss. Dipika Maroti Dhage",
          },
        ],
        hod: {
          name: "Dr Sandeep S Hambarde",
          designation: "Head of Department - Basic Sciences and Humanities",
          message: `It gives me immense pleasure to welcome you to the Department of Science and Humanities, a foundation pillar of our esteemed institution. Our department plays a crucial role in shaping the academic journey of students by providing a strong grounding in fundamental sciences and essential human values.

We offer a blend of disciplines—Physics, Chemistry, Mathematics, Communication Skills, and Environmental Studies—that support and complement the core engineering and professional programs. Our highly qualified and dedicated faculty strive to instill scientific temper, analytical thinking, and ethical responsibility among students, preparing them for both academic and life challenges.

Our teaching-learning process is enriched with innovative pedagogy, interactive sessions, and co-curricular activities designed to develop holistic and socially responsible individuals. We also place great emphasis on interdisciplinary collaboration, research exposure, and continuous improvement.

We believe in nurturing curiosity, encouraging inquiry, and building a strong academic foundation that contributes meaningfully to society. I invite you to explore the opportunities our department offers and join us in this journey of knowledge and growth.`,
          profileImage: sandeepHambardeHod,
        },
        vision:
          "To establish a strong academic foundation that cultivates critical thinking, scientific inquiry, and effective communication among engineering students, fostering lifelong learning and responsible global citizenship.",

        mission: `1. To build a solid foundation in science and mathematics essential for engineering education.  
2. To develop effective communication and interpersonal skills through dedicated language and soft skills training.  
3. To inspire scientific curiosity, ethical reasoning, and sustainable thinking.  
4. To foster a multidisciplinary learning environment that encourages innovation, creativity, and collaborative problem-solving.`,
      },
    ],
  },
  {
    id: "school-of-engineering",
    name: "School of Engineering",
    description:
      "Leading institution offering advanced undergraduate engineering programs.",
    image:
      "https://content.jdmagicbox.com/comp/nanded/v9/9999p2462.2462.120530154113.m7v9/catalogue/matoshri-pratishthan-s-group-of-institutions-khupsarwadi-nanded-colleges-k8dwa8huzm.jpg",
    cardImage: "/images/soe-card.jpg",
    departments: [
      {
        id: "cse",
        name: "Computer Science & Engineering",
        description:
          "B.Tech program with specializations in AI, Cybersecurity, Data Science, and IoT.",
        image: "https://aitsrajampet.ac.in/images/artificial-intelligence.jpg",
        courses: [
          "B.Tech in CSE - AI & ML",
          "Cybersecurity",
          "IoT",
          "Data Science",
        ],
        facilities: [
          "Cisco Networking Academy Lab",
          "Hackathon & Coding Competitions",
          "Industry-aligned Certification Courses",
          "100+ Computing Workstations",
        ],
        about: `MPGI Integrated Campus is recognized as one of the premier technical institutions in the region. The Department of Computer Science and Engineering was established in the year 2009 with an initial intake of 30 students. Since its inception, the department has emerged as one of the most distinguished in the institution, supported by a team of well-qualified faculty members and equipped with modern, state-of-the-art laboratories.

The department is committed to nurturing students with strong academic foundations and practical skills to prepare them for the dynamic challenges of the IT industry. By fostering a culture of innovation, critical thinking, and problem-solving, the department ensures that students are industry-ready upon graduation.

The excellence of the department is reflected in the consistent demand for its graduates in both industry and academia. Strong ties with the industry have shaped a forward-looking teaching methodology that blends theoretical knowledge with hands-on experience. As a result, our graduates have gone on to excel in higher education and secure successful careers in leading organizations.`,

        facultyCount: 18,
        gallery: ["/images/cse-1.jpg", "/images/cse-2.jpg"],
        labs: [
          {
            srNo: 1,
            labName: `Database System & Software       
 Engineering Laboratory:`,
            area: "",
            incharge: "Mr. K. A. Mistry ",
          },
          {
            srNo: 2,
            labName: `Project Phase internship & Project in Industry`,
            area: "",
            incharge: "Mr. K.D. Ibitkar",
          },
          {
            srNo: 3,
            labName: `Natural Language   Processing  &  Data Engineering lab`,
            area: "",
            incharge: "Miss. Maliha Sayyad.",
          },
          {
            srNo: 4,
            labName: `Programing & Machine Learning Lab`,
            area: "",
            incharge: "Mr. K.A. Mistry",
          },
          {
            srNo: 5,
            labName: `Deep Learning & Machine Learning Lab`,
            area: "",
            incharge: "Mrs. Jyoti Sarode",
          },
          {
            srNo: 6,
            labName: `Data Structures & Object-Oriented Lab`,
            area: "",
            incharge: "Miss. Maliha Sayyad",
          },
          {
            srNo: 7,
            labName: `Operating System & Python Programing Lab`,
            area: "",
            incharge: "Mrs. Jyoti Sarode",
          },
        ],
        hod: {
          name: "Mr B.A Khansole",
          designation: "Associate Professor & H.O.D",
          message: `Dear Students and Respected Visitors,

A warm and heartfelt welcome to all of you.

As we are all aware, the world of technology is evolving rapidly with new innovations and advancements emerging every day. In response to this dynamic landscape, the Department of Computer Science and Engineering at MPGI Integrated Campus is committed to providing students with up-to-date knowledge and technical skills. This is achieved through our highly qualified faculty, who bring rich industry experience, and through our well-developed, technologically advanced laboratories.

The department has witnessed significant growth, particularly due to the rapid developments in the field of Computer Science and Engineering. We continuously strive to adapt our teaching methods and curriculum to align with current industry standards and future technological trends.

I am confident that our current batch of students will uphold the department’s reputation by demonstrating a high level of professional competence and making meaningful contributions in their respective careers.

Wishing all our students great success in their academic and professional journeys.`,
          profileImage: cseHod,
        },
        vision: `The Department of Computer Science and Engineering at MPGI Integrated Campus envisions becoming a leading center of excellence in computing education, research, and innovation. The department is committed to nurturing technically proficient, ethically grounded, and socially responsible professionals who can thrive in a rapidly evolving technological world. By fostering a spirit of innovation, continuous learning, and global awareness, the department aims to empower students to make meaningful contributions to industry, academia, and society at large. `,
        mission: `The mission of the Department of Computer Science and Engineering is to deliver high-quality education that blends theoretical knowledge with practical skills in computer science and related technologies. The department seeks to develop students’ analytical thinking, problem-solving capabilities, and creativity through a curriculum that is responsive to the latest industry trends and technological advancements. Through collaborations with industry and research organizations, the department ensures experiential learning opportunities such as internships, projects, and workshops. It also places strong emphasis on ethical practices, effective communication, leadership, and teamwork, preparing students to excel in diverse professional environments. Continuous improvement in faculty development, infrastructure, and academic delivery remains a core focus in the department’s pursuit of excellence.`,
      },
      {
        id: "mech",
        name: "Mechanical and Automation Engineering",
        description:
          "Advanced undergraduate program in robotics, automotive, and thermal systems.",
        image: "https://www.cepathanapuram.ac.in/assets/images/mephoto5.jpg ",
        courses: [
          "B.Tech in Mechanical and Automation Engineering",
          "Robotics",
          "Thermal Systems",
          "Automotive Technology",
        ],
        about: `Department of Mechanical and Automation Engineering
MPGI, Nanded

The Department of Mechanical and Automation Engineering at Matoshri Pratishthan Group of Institutions (Integrated Campus), Nanded, is dedicated to excellence in teaching, research, and industry engagement. The department offers a robust undergraduate program that integrates the foundational concepts of Mechanical and Automation Engineering with emerging technologies in automation, robotics, and intelligent systems.

Established with the aim of preparing students for the evolving demands of modern engineering industries, the department is equipped with state-of-the-art laboratories, modern software tools, and advanced equipment. Our curriculum emphasizes practical learning, interdisciplinary knowledge, and industry-relevant skills.

Our faculty members are highly qualified, experienced, and committed to fostering a student-centric learning environment. The department actively encourages innovation, entrepreneurship, and research among students through technical events, workshops, industrial visits, and collaborative projects.

To promote student engagement and all-round development, we have formed the Mechanical and Automation Engineering Students Association (MAESA). The association regularly organizes technical, cultural, and soft-skill development activities to prepare students for successful careers in industry, research, or higher education.

With a focus on academic excellence, hands-on experience, and professional growth, the Department of Mechanical and Automation Engineering is committed to producing competent, ethical, and future-ready engineers.`,
        facilities: [
          "Advanced CAD/CAM Center",
          "3D Printing & Prototyping Lab",
          "Automotive Workshop",
          "Industry 4.0 Training",
        ],
        facultyCount: 16,
        gallery: ["/images/mech-engg-1.jpg", "/images/mech-engg-2.jpg"],
        labs: [
          {
            srNo: 1,
            labName: "Theory of Machines Lab",
            area: "800 Sq. ft",
            incharge: "Sayyad Shafik",
            majorEquipment:
              "Rope brake dynamometer, four bar chain mechanism, Crank slider mechanism, Synchromesh gear box, differential gear box, brake liner test rig, Industrial gear box, watts mechanism",
          },
          {
            srNo: 2,
            labName: "Engineering Metallurgy Material Science",
            area: "820 Sq. ft.",
            incharge: "C. S. Gill",
            majorEquipment: "", // Not specified
          },
          {
            srNo: 3,
            labName: "Basic Mechanical Engineering Lab",
            area: "800 Sq. ft.",
            incharge: "Sagar Patil",
            majorEquipment:
              "Models, Charts & cut sections of various mechanical equipment",
          },
          {
            srNo: 4,
            labName: "Manufacturing & Machining Workshop",
            area: "2000 Sq. ft.",
            incharge: "Shaikh Burhan",
            majorEquipment:
              "Lathe Machine, Milling Machine, Grinding Machine, Slotting Machine, Welding machine, Carpentry, Sheet Metal",
          },
          {
            srNo: 5,
            labName: "Heat Transfer Lab",
            area: "900 Sq. ft",
            incharge: "C. S. Gill",
            majorEquipment:
              "Stefan Boltzman's Apparatus, Conduction through composite wall, convection of Test Pipe, Pin fin apparatus, Parallel & counter flow heat exchanger, Domestic refrigeration test rig, VCC/Vapor compression test rig, Air conditioning test rig",
          },
          {
            srNo: 6,
            labName: "Engineering Graphics Lab",
            area: "1500 Sq. ft.",
            incharge: "Sagar Patil",
            majorEquipment:
              "Drawing tables (Adjustable), Height Adjustable Stools, Models, Charts",
          },
          {
            srNo: 7,
            labName: "Mechatronics Lab",
            area: "800 Sq. ft.",
            incharge: "Shirse Ankush",
            majorEquipment:
              "Study of different switches and relays, Vane pump test rig, Flow measurement trainer, Gear pump test rig, PLC Programming trainer kit",
          },
          {
            srNo: 8,
            labName: "CAD CAM Lab",
            area: "900 Sq.ft",
            incharge: "Sayyad Shafik",
            majorEquipment:
              "Auto CAD 2024, UG NX 6, CATIA V5-6, Master CAM X9, ANSYS 2024 R2, Latest Configuration Desktops 20 Nos., MATLAB, Creo -11",
          },
          {
            srNo: 9,
            labName: "Mechanical Measurement and Metallurgy Lab",
            area: "800 Sq. ft.",
            incharge: "Sagar Patil",
            majorEquipment:
              "Profile projector, Auto collimator, Tool Maker Microscope, Vernier Caliper Micrometer, Slip gauges, Optical Flat",
          },
          {
            srNo: 10,
            labName: "Steam and Gas Turbine Lab",
            area: "800 Sq. ft.",
            incharge: "C. S. Gill",
            majorEquipment: "", // Not specified
          },
          {
            srNo: 11,
            labName: "Fluid Mechanics Lab",
            area: "1000 Sq.ft.",
            incharge: "Sagar Patil",
            majorEquipment:
              "Verification of Bernoulli’s Theorem, Venturi Orifice Calibration Setup, Losses in Pipes",
          },
          {
            srNo: 12,
            labName: "Automobile Engineering Lab",
            area: "800 Sq. ft.",
            incharge: "Sagar Patil",
            majorEquipment:
              "Cut Section model of SKODA petrol and Diesel Engine, Cut section model of diesel engine, carburetor, Synchromesh gear box, Hydraulic and Mechanical brake, Vehicle lighting system, Fuel supply system, Differential gear box, Gear box, Suspension system, Steering system, Ignition system etc.",
          },
          {
            srNo: 13,
            labName: "Manufacturing Engineering Lab",
            area: "", // Area not specified in list
            incharge: "-", // Incharge not mentioned
            majorEquipment:
              "Lathe Machine, Milling Machine, Drilling Machine, Shaping Machine, sand casting, flame/plasma cutting, and basic sheet metal operations like shearing, blanking, and drawing",
          },
        ],

        hod: {
          name: "Sayyad Shafik R",
          designation:
            "Head of Department - Mechanical and Automation Engineering",
          message: `Welcome to the Department of Mechanical and Automation Engineering at MPGI, Nanded. Our department is committed to delivering quality education by blending core mechanical principles with modern automation technologies. With well-equipped laboratories and a dedicated team of experienced faculty, we provide a learning environment that fosters innovation, critical thinking, and practical skills.

We emphasize holistic development through the Mechanical and Automation Engineering Students Association (MAESA), which offers students opportunities to enhance their technical knowledge, communication skills, and leadership abilities. Our goal is to prepare students to meet industry challenges and become future-ready professionals.

Join us in shaping a dynamic and rewarding career in engineering.`,
          profileImage: mechHod,
        },
        vision:
          "Entrancing education to reach the Unreached: The rural student",
        mission:
          "To provide a congenial learning atmosphere and ambition, thereby enabling students to reach their purpose and target and to become good technocrats and responsible citizens",
      },
      {
        id: "eee",
        name: "Electrical Engineering",
        description:
          "Focused on smart grids, power systems, and renewable technologies.",
        image:
          "https://webfiles.amrita.edu/2019/12/Teywkhaq-about-electrical-and-electronics.jpg ",
        courses: [
          "B.Tech in Electrical Engineering",
          "Smart Grid Systems",
          "Power Systems",
          "Industrial IoT",
        ],
        about: `The Department of Electrical Engineering at MPGI's School of Engineering was established in the Academic Year 2011-12 with an intake of 60 Students. Electrical Engineering is a continuously evolving subject. As technology has advanced, so have the challenges facing the modern engineer. The main job of an electrical engineer is to design and develop more efficient electrical machinery, power and energy systems, and control equipment for the generation, transmission, and distribution of electrical energy and communication. The Department has a healthy mixture of young and experienced faculty members, all of whom display high levels of enthusiasm and dedication. They provide knowledge on theoretical and practical aspects of different areas of electrical engineering. Apart from teaching, the faculties are actively involved in organizing technical workshops, camps, and visits at the Institute to create an environment conducive to experiential learning. The Department firmly believes in imparting a strong hands-on flavor to the courses that a student takes, and therefore places emphasis on the laboratory component, internships, and projects.`,
        facilities: [
          "Smart Grid Simulation Lab",
          "Solar & Wind Energy Stations",
          "PLC & SCADA Training",
          "High Voltage Lab",
        ],
        facultyCount: 14,
        gallery: ["/images/eee-1.jpg", "/images/eee-2.jpg"],
        labs: [
          {
            srNo: 1,
            labName: "Network Theory Lab",
            area: "",
            incharge: "Mrs. Manisha Telange",
          },
          {
            srNo: 2,
            labName: "Power System lab",
            area: "",
            incharge: "Mr. Smitkumar Choudante",
          },
          {
            srNo: 3,
            labName: "AC Machine Lab",
            area: "",
            incharge: "Mr. Azhar Ahmed",
          },
          {
            srNo: 4,
            labName: "DC Machine Lab",
            area: "",
            incharge: "Mr. Azhar Ahmed",
          },
          {
            srNo: 5,
            labName: "Analog & Digital Electronics Lab",
            area: "",
            incharge: "Mr. S. Asad Hashmi",
          },
          {
            srNo: 6,
            labName: "Electrical Machine Design Lab",
            area: "",
            incharge: "Mrs. Prabhavati Waghmare",
          },
          {
            srNo: 7,
            labName: "Control System Engineering Lab",
            area: "",
            incharge: "Mr. Ankush Shirse",
          },
          {
            srNo: 8,
            labName: "Electrical Measurement Lab",
            area: "",
            incharge: "Mr. Smitkumar Choudante",
          },
          {
            srNo: 9,
            labName: "Power System Analysis Lab",
            area: "",
            incharge: "Mrs. Manisha Telange",
          },
          {
            srNo: 10,
            labName: "Microprocessor and Microcontroller Lab",
            area: "",
            incharge: "Mr. S. Asad Hashmi",
          },
          {
            srNo: 11,
            labName: "Power Electronics Lab",
            area: "",
            incharge: "Mrs. Prabhavati Waghmare",
          },
          {
            srNo: 12,
            labName: "High voltage Engineering Lab",
            area: "",
            incharge: "Mrs. Manisha Telange",
          },
        ],
        hod: {
          name: "S. Asad Hashmi",
          designation: "Head of Department - Electrical Engineering",
          message: `I take the privilege to welcome you all to the Department of Electrical Engineering at the School of Engineering, Matoshri Pratishthan Group of Institutions (Integrated Campus), Nanded. The undergraduate course in Electrical Engineering was started in 2011 with the intake of 60 students. The Electrical Engineering is one of the most vibrant and live departments in the institute.
    
    The department seeks to combine excellence in education and well-equipped laboratories. Learning is a continuous process and does not end with the acquisition of a degree. Therefore, students are given a strong foundation related to electrical technology and problem-solving techniques and are made adaptable to changes.
    
    The faculty is well qualified and dynamic and always ready to help students to guide. The Department has formed Electrical Engineering Students Association (EESA), with the aim for all-round development of students that is to enhance their technical, cultural, and communication skills which will help them to sustain in the competition for their better future and to perform best.`,
          profileImage: eeeHod,
        },
        vision:
          "To Become a Lead Center in the Field of Electrical Engineering to Minimize Human Efforts with an Eye on Environment.",
        mission:
          "To Impart Technical Education, Nurture Creativity, Critical Thinking & Application of Comprehensive Engineering Knowledge & Skills to Meet the Global Challenges through Innovation & Research.",
      },
      {
        id: "civil",
        name: "Civil Engineering",
        description:
          "Comprehensive program in civil engineering and construction technology",
        image: "https://i.ytimg.com/vi/b87BLzfNal4/maxresdefault.jpg ",
        courses: [
          "Diploma in Civil Engg",
          "Advanced Construction Tech",
          "Surveying Techniques",
        ],
        about: `The Department of Civil Engineering, MPGIs School of Engineering, Nanded was established in the year 2009 and offers the Under graduate programme B.Tech., in Civil Engineering with an intake of 60 students. The programme is approved by AICTE, New Delhi, and the institution is affiliated to Dr. Babasaheb Ambedkar Technological University, Lonere Dist. Raigad. The department is endowed with quality and excellence to provide all encouragement to each individual. The department is focused on growth and technology trends with well-furnished state of art laboratories. The department has a team of highly qualified faculty members with industrial experience and is striving hard continuously to improve upon the quality of education in engineering and technology. The department is also organizing regular field/industry visits and conducting various technical seminars/guest lectures/workshops to bridge the gap between the industry and academia to enhance the skills of students. An excellent academic and research environment prevails for creative and productive work both for faculty members as well as students.`,
        facilities: [
          "Fully-equipped Material Testing Lab",
          "BIM Software Training Center",
          "On-site internship with construction firms",
          "Modern Surveying Equipment",
        ],
        facultyCount: 12,
        gallery: ["/images/civil-1.jpg", "/images/civil-2.jpg"],
        labs: [
          {
            srNo: 1,
            labName: "Strength of Materials",
            area: "66 m2",
            incharge: "Mr. D.L. Rathod",
          },
          {
            srNo: 2,
            labName: "Surveying",
            area: "66 m2",
            incharge: "Mrs. Asna Fatima Mohammed Kaleemuddin",
          },
          {
            srNo: 3,
            labName: "Hydraulics",
            area: "80 m2",
            incharge: "Mr. L.V. Rathod",
          },
          {
            srNo: 4,
            labName: "Concrete Technology",
            area: "66 m2",
            incharge: "Mr. D.L. Rathod",
          },
          {
            srNo: 5,
            labName: "Transportation Engg.",
            area: "66 m2",
            incharge: "Mr. D.L. Rathod",
          },
          {
            srNo: 6,
            labName: "Geotechnical Engg.",
            area: "66 m2",
            incharge: "Mr. D.L. Rathod",
          },
          {
            srNo: 7,
            labName: "Environmental Engg",
            area: "66 m2",
            incharge: "Mrs. Asna Fatima Mohammed Kaleemuddin",
          },
        ],
        hod: {
          name: "P. D. Pople",
          designation: "Head of Department - Civil Engineering",
          message: `I take the privilege to welcome you all to the Department of Civil Engineering at the School of Engineering, Matoshri Pratishthan Group of Institutions (Integrated Campus), Nanded. The under graduate course in Civil Engineering was started in 2009 with the intake of 60 students. 
The Department, established to impart analytical and application skills in various fields of Civil Engineering, has been transforming youngsters into professionals. The students of Civil Engineering are exposed to various fields such as Structural Engineering, Construction Technology and Management, Water Resources Engineering, Environmental Engineering, Geotechnical Engineering, Transportation Engineering, and many more which enable the students to take up a professional career or higher education of their choice. The Department of Civil Engineering is one of the best, in the vicinity, bestowed with highly qualified staff members and excellent infrastructure. The campus is fully networked with high-speed internet connectivity which gives our students and faculty an edge over their counterparts of other institutions.`,
          profileImage: civilHodEngineering,
        },
        vision:
          "To impart knowledge and excellence with global perspectives to our students and to make ethically strong engineers to build our nation",
        mission:
          "To produce civil engineers of high caliber, technical skills and ethical values to serve the society and to provide knowledge base consultancy services to the community in all areas of civil engineering",
      },
      {
        id: "ece",
        name: "Electronics and Telecommunication",
        description:
          "Program specializing in communication systems, embedded systems, and IoT.",
        image:
          "https://georgetelegraphblog.wordpress.com/wp-content/uploads/2021/01/electronics-and-communication.jpg?w=584",
        about:
          "MPGI Integrated Campus is one of the premier technical institutions of the Region. The department of Electronics and Tele Communication, MPGI Integrated Campus, was established in the year 2023 with an intake of 30 students. It is among the finest in the college having qualified faculty and well equipped laboratories. The department has always strived to inculcate the very best in the students so that they can face the challenges offered by the industry. The department offers B.Tech degree course in Electronics and Tele Communication Engineering. The preeminence of the department can be understood by the ever increasing demands of its fresh graduate. Close interaction with the industry has led to the evolution of a teaching system, which produces diligent and erudite engineers. The young engineers have excelled both in higher education and in industry.",
        courses: [
          "Diploma in Electronics and Telecommunication",
          "Wireless Communication",
          "IoT Applications",
        ],
        facilities: [
          "RF & Microwave Lab",
          "Digital Signal Processing Lab",
          "IoT Prototyping Lab",
          "Industry-Aligned Certification Courses",
        ],
        facultyCount: 10,
        gallery: ["/images/ece-1.jpg", "/images/ece-2.jpg"],
        labs: [
          {
            srNo: 1,
            labName: "Basic Electronics Laboratory",
            area: "Basic Electronics Lab",
            incharge: "Mr. Shaikh Ajij",
            majorEquipmentDetails: [
              { name: "Semiconductor Diode kit" },
              { name: "RC Phase shift Oscillator" },
              { name: "Op-amp study Kit" },
              { name: "Rectifier & Filters" },
              { name: "SCR Characteristics" },
              { name: "UJT Characteristics" },
              { name: "Hartley Oscillator" },
              { name: "Collpits Oscillator" },
              { name: "JFET Amplifier" },
              { name: "Flip-flop Trainer Kit" },
              { name: "BCD to Excess Converter" },
              { name: "Integrator & Differentiator" },
              { name: "Digital Multimeter" },
              {
                name: "SE 701 Display board of different fixed resistors and color coding",
              },
              { name: "SE 703 Display board of fixed and variable capacitors" },
              { name: "SE 704 Display Board of diodes" },
              { name: "SE 705 Display board of transistor" },
              { name: "SE 706 Display board of SCR, DIAC, TRIAC, UJT" },
              { name: "SE 709 Display board of display" },
              { name: "SE 710 display board of Switches" },
              { name: "SE 711 Display board of Band Switches" },
              { name: "SE 712 display board of relays" },
              { name: "SE 713 display board of transformers and coils" },
              { name: "SE 720 Discrete component trainer board" },
              { name: "SE 721 Soldering and Desoldering Practice Trainer" },
              { name: "SE 708 display board of Connectors" },
            ],
          },
          {
            srNo: 2,
            labName: "Digital Electronics Laboratory",
            area: "Digital Circuit Lab",
            incharge: "Dr. Abdullah M.K.",
            majorEquipmentDetails: [
              { name: "Study of Logic Gates" },
              { name: "SD 904 LABEL MPSEN/DC-LAB/SD904-01/15/2010" },
              { name: "SD 904 LABEL MPSEN/DC-LAB/SD904-02/15/2011" },
              { name: "SD 904 LABEL MPSEN/DC-LAB/SD904-03/15/2012" },
              { name: "SD 904 LABEL MPSEN/DC-LAB/SD904-04/15/2013" },
              { name: "SD 904 LABEL MPSEN/DC-LAB/SD904-05/15/2014" },
              { name: "SD 904 LABEL MPSEN/DC-LAB/SD904-06/15/2015" },
              { name: "SD 904 LABEL MPSEN/DC-LAB/SD904-07/15/2017" },
              { name: "SD 904 LABEL MPSEN/DC-LAB/SD904-08/15/2018" },
              { name: "SD 904 LABEL MPSEN/DC-LAB/SD904-09/15/2019" },
              { name: "SD 904 LABEL MPSEN/DC-LAB/SD904-10/15/2020" },
              { name: "SD 904 LABEL MPSEN/DC-LAB/SD904-11/15/2021" },
              { name: "SD 904 LABEL MPSEN/DC-LAB/SD904-12/15/2022" },
              { name: "SD 904 LABEL MPSEN/DC-LAB/SD904-13/5/2023" },
              { name: "SD 904 LABEL MPSEN/DC-LAB/SD904-14/15/2024" },
              { name: "SD 904 LABEL MPSEN/DC-LAB/SD904-15/15/2025" },
              { name: "SE 716 display board of Analog IC’s" },
              { name: "SE 717 Display board of Digital TTL ICs" },
              { name: "SE 718 Display board of Digital CMOS ICs" },
              {
                name: "SE 719 display board of Different ICs (Analog and Digital)",
              },
              { name: "IC Tester" },
            ],
          },
          {
            srNo: 3,
            labName: "Microprocessor and Interfacing Laboratory",
            area: "Microprocessor Lab",
            incharge: "Mr. Shirse A.M.",
            majorEquipmentDetails: [
              {
                name: "Microprocessor 8085 Trainer LABEL- MPSEN/E&TC/µp-lab/µp85-01/05/2010",
              },
              {
                name: "Microprocessor 8085 Trainer LABEL- MPSEN/E&TC/µp-lab/µp85-02/05/2010",
              },
              {
                name: "Microprocessor 8085 Trainer LABEL- MPSEN/E&TC/µp-lab/µp85-03/05/2010",
              },
              {
                name: "Microprocessor 8085 Trainer LABEL- MPSEN/E&TC/µp-lab/µp85-04/05/2010",
              },
              {
                name: "Microprocessor 8085 Trainer LABEL- MPSEN/E&TC/µp-lab/µp85-05/05/2010",
              },
              {
                name: "Add on Cards AD-DA II LABEL-MPSEN/E&TC/µp/ADC-01/10/2010-11",
              },
              {
                name: "Add on Cards XPO ST/DC LABEL-MPSEN/E&TC/µp/ADC-02/10/2010-11",
              },
              {
                name: "Add on Cards AD-DA II LABEL-MPSEN/E&TC/µp/ADC-03/10/2010-11",
              },
              {
                name: "Add on Cards AD-DA II LABEL-MPSEN/E&TC/µp/ADC-04/10/2010-11",
              },
              {
                name: "Add on Cards AD-DA II LABEL-MPSEN/E&TC/µp/ADC-05/10/2010-11",
              },
              {
                name: "Add on Cards SCAN TECH LABEL-MPSEN/E&TC/µp/ADC-06/10/2010-11",
              },
              {
                name: "Add on Cards XPO STDC LABEL-MPSEN/E&TC/µp/ADC-07/10/2010-11",
              },
              {
                name: "Add on Cards TLLC + ELV LABEL-MPSEN/E&TC/µp/ADC-08/10/2010-11",
              },
              {
                name: "Add on Cards SCANTECH LABEL-MPSEN/E&TC/µp/ADC-09/10/2010-11",
              },
              {
                name: "Add on Cards TLLC +ELV LABEL-MPSEN/E&TC/µp/ADC-10/10/2010-11",
              },
              {
                name: "Microprocessor 8086 Trainer LABEL- MPSEN/E&TC/µp-lab/µp86-01/05/2010",
              },
              {
                name: "Microprocessor 8086 Trainer LABEL- MPSEN/E&TC/µp-lab/µp86-02/05/2010",
              },
              {
                name: "Microprocessor 8086 Trainer LABEL- MPSEN/E&TC/µp-lab/µp86-03/05/2010",
              },
              {
                name: "Microprocessor 8086 Trainer LABEL- MPSEN/E&TC/µp-lab/µp86-04/05/2010",
              },
              {
                name: "Microprocessor 8086 Trainer LABEL- MPSEN/E&TC/µp-lab/µp86-05/05/2010",
              },
            ],
          },
          {
            srNo: 4,
            labName: "Electronics Devices and Circuit Laboratory",
            area: "Electronic Devices and Circuit Lab",
            incharge: "Mr. Shaikh Ajij",
            majorEquipmentDetails: [
              { name: "Single stage CE Amplifier (SD 101)" },
              { name: "Bistable Multivibrator using Transistor (SE118)" },
              {
                name: "BJT (Transistorized) Series voltage regulator (SVR) (SB-105)",
              },
              { name: "IC 565 as Phased lock. (SD - 501)" },
              { name: "IC 555 as Astable Multivibrator (SF- 501)" },
              { name: "RC Low, High & Band Pass Filter. (SE-134)" },
              { name: "Monostable Multivibrator using Transistor (SE- 117)" },
              { name: "Two stage RC Coupled Amplifier (SD - 116)" },
              { name: "IC 723 as Positive low voltage Regulator (SB – 107)" },
              {
                name: "IC 741 as Square & Triangular wave Generator (SC – 517)",
              },
              { name: "Astable Multivibrator using Transistor (SE – 116)" },
              { name: "IC 555 as Monostable Multivibrator (SF – 503)" },
              { name: "Diode With & without biased clipper types (SE-127)" },
              { name: "BJT biasing trainer all types (SC-107)" },
              { name: "Phase shift Oscillator (SE -108)" },
              { name: "Collpits Oscillator (SE103)" },
              {
                name: "Voltage Series and Current Series Negative feedback Amplifier (SD-126)",
              },
              {
                name: "Voltage Shunt & current Shunt Negative Feedback Amplifier (SD-127)",
              },
              { name: "Class A Amplifier (SD-104)" },
              { name: "RC Integrator Circuit (SE-132)" },
            ],
          },
          {
            srNo: 5,
            labName: "Embedded System Laboratory",
            area: "Embedded System Lab",
            incharge: "Mr. Shirse A.M",
            majorEquipmentDetails: [
              {
                name: "ARM LPC 2148 Trainer kit with onboard LCD, ADC and other peripherals",
              },
              { name: "ARM7 LPC 2148 Trainer Kit with accessories" },
              { name: "8051 Trainer kit with accessories" },
            ],
          },
          {
            srNo: 6,
            labName: "Digital Communication Laboratory",
            area: "Digital Communication Lab",
            incharge: "",
            majorEquipmentDetails: [
              { name: "PAM Modulation/Demodulation Trainer" },
              { name: "PWM Modulation/Demodulation Trainer" },
              { name: "PPM Modulation/Demodulation Trainer" },
              { name: "PCM Modulation/Demodulation Trainer" },
              { name: "DELTA Modulation/Demodulation Trainer" },
              { name: "ASK Modulation/Demodulation" },
              { name: "FSK Modulation/Demodulation Trainer" },
              { name: "PSK Modulation/Demodulation Trainer" },
            ],
          },
          {
            srNo: 7,
            labName: "Control System Laboratory",
            area: "Control System Lab",
            incharge: "",
            majorEquipmentDetails: [
              { name: "D.C. Position Servomechanism Demonstration" },
              { name: "Synchro Transmitter Receiver Pair" },
            ],
          },
          {
            srNo: 8,
            labName: "Power Electronics Laboratory",
            area: "Power Electronics Lab",
            incharge: "",
            majorEquipmentDetails: [
              { name: "Study of SCR characteristics" },
              { name: "Triggering circuits R, RC & UJT Triggering circuits" },
              { name: "Study of Commutation Methods" },
              { name: "Single Phase Fully Controlled Converter" },
              { name: "Single phase series Inverter" },
              { name: "Single phase Parallel Inverter" },
              { name: "Study of Cyclo Converter" },
            ],
          },
          {
            srNo: 9,
            labName: "Network and Measurement Laboratory",
            area: "Network and Measurement Lab",
            incharge: "",
            majorEquipmentDetails: [
              { name: "Reciprocity Theorem" },
              { name: "Verification of Thevenins & Norton's Theorem" },
              { name: "Tellegeous Theorem" },
              {
                name: "Verification of Superposition & Maximum Transfer Theorem",
              },
              { name: "Millman's Theorem" },
              {
                name: "RC Low Pass, High Pass, Band Stop Filter/RC Low Pass, High Pass Filter",
              },
              { name: "Cascaded Two Port Network" },
              { name: "LDR kit" },
              { name: "Two Port Network Kit" },
              { name: "Lissajous Apparatus" },
              { name: "Study of R.T.D" },
              { name: "Design D.C Voltmeter" },
              { name: "Weign Bridge" },
              { name: "Schring's Bridge Trainer" },
              { name: "Anderson's Bridge" },
              { name: "Wheatstone Bridge" },
              { name: "Maxwell's Bridge" },
              { name: "Bridge 'T' type Attenuator" },
            ],
          },
          {
            srNo: 10,
            labName: "Optical Communication Laboratory",
            area: "Optical Communication Lab",
            incharge: "",
            majorEquipmentDetails: [
              { name: "ST 2501 Fiber optics Trainer" },
              { name: "XL-OF2 Fiber optics Transmission Trainer" },
              { name: "XL-OF3 Measurement of losses in Fiber optics" },
            ],
          },
          {
            srNo: 11,
            labName: "Microwave Communication Laboratory",
            area: "Microwave Communication Lab",
            incharge: "",
            majorEquipmentDetails: [
              {
                name: "NV 9000 series Microwave Test Bench combo Model with Klystron & Gunn Power Supply",
              },
            ],
          },
        ],
        hod: {
          name: "Dr. Abdullah M.K.",
          designation:
            "Head of Department - Electronics & Telecommunication Engineering",
          message:
            "Dear students & respected visitors heartiest welcome to all of you. As all of us know that day by day new technologies and new innovative things are developing and today the world is within reach and by pressing on only one click we are getting whole information about the world. All these things are happening because of marvels fruit of Electronics. Electronics & Telecommunication Engineering is continuously growing, changing, widening, and challenging branch of engineering profession, its shapes the fabric of our global society. The department of Electronics and Telecommunication aims to give the excellent knowledge and trained the students as per the industry requirements so that students can successfully face the challenges in their life. We are providing up to date knowledge and technical development in the field of Electronics and Telecommunication, through technically rich and industry experience faculty and well develop technologically update labs. The department has seen a significant growth especially because of the rapid advances in Electronics and Telecommunication. I am confident that the students of the present batch would justify the credibility of the department by showing a high level of professional competence in their respective job areas.",
          profileImage: eceHod,
        },
        vision:
          "To Train the students with solid technical knowledge and impart ethical values, so that the students will be able to deal any challenge in life successfully.",
        mission:
          "To provide the excellent and skilled technocrats to the world by providing excellent teaching and training.",
      },
      {
        id: "bsh",
        name: "Basic Sciences and Humanities (FE)",
        description:
          "Foundation department focusing on engineering fundamentals, mathematics, physics, chemistry, and communication skills.",
        image: "https://www.lpu.in/academics/images/department/physics.jpg",
        about: `The Department of Basic Science and Humanities started from the inception of the college. Knowledge in basic science forms the base of Engineering. Department of Basic Science and Humanities aims to fulfill this function most efficiently. This Department is devoted to foster the fundamental principles and understanding of science to enhance the student’s basic knowledge of Engineering. Its objective is to provide value-based education to the budding scientists and engineers. The Department comprises of different subjects of study namely Mathematics, Physics, Chemistry, Basic Human Rights  and English. The students of this department are highly benefitted by the knowledge and experienced faculty members of the department. Well-experienced and highly qualified faculty members of the department have made consistent and strenuous efforts to improve the students learning and development processes. Besides academics the Department is actively involved in the development of students’ personality, communication and soft skills to boost them in the modern and globally competitive environment. The department has state-of-the-art laboratories and wel- qualified faculty members.`,
        courses: [
          "Engineering Mathematics I & II",
          "Engineering Physics & Lab",
          "Engineering Chemistry & Lab",
          "Environmental Studies",
          "Communication Skills & Soft Skills",
        ],
        facilities: [
          "Engineering Physics Lab",
          "Engineering Chemistry Lab",
          "Language and Communication Lab",
          "Digital Learning Smart Classrooms",
        ],
        facultyCount: 15,
        gallery: ["/images/bsh-1.jpg", "/images/bsh-2.jpg"],
        labs: [
          {
            srNo: 1,
            labName: "Physics Lab",
            area: "",
            incharge: "Mrs Madhura Chavan",
          },
          {
            srNo: 2,
            labName: "Chemistry Lab",
            area: "",
            incharge: "Mrs Madhura Chavan",
          },
        ],

        hod: {
          name: "Dr. Syeda Rukhsana",
          designation: "Head of Department - Basic Sciences and Humanities",
          message: ` 
Welcome to the Department of Basic Science and Humanities at MATOSHRI PRATISHTHAN GROUP OF INSTITUTIONS SCHOOL OF ENGINEERING NANDED. As the foundational pillar of engineering education, our department plays a crucial role in laying the groundwork for academic journey. On behalf of Basic Science and Humanities Department, I am here to brief you about activities and roll of Basic Science and Humanities Department. BS&H Department is taking care of first year engineering students. The main roll of first year engineering department is to prepare students sound fundamentals in Mathematics, Physics, Chemistry, English, Basic Human Right and Values Along with Basic Technical Subjects Like Mechanics, Programming In C, Basic Electrical and Electronic Engineering, Integrated Personality Development, Health and Wellness and Basic Civil and Mechanical Engineering. Etc We are dedicated to providing students with a strong foundation technical and non-technical subjects that are essential for success in all branches of engineering.
It is also important that the first-year students are prepared for good soft skills mainly in communication, creativity, problem solving, leadership and team management. We give major focus on their development of communication skill by identical listening and speaking in English. by arranging spoken skill in English and training for stage courage and Personal Interview.  Our language experts are providing variety of challenges and methods to develop their communication skills.
We also inbuilt good human values in them to become good citizen and human beings. With good values and ethics, they will be work in the industries and understand challenges of the society and they will become successful in their professional as well as personal life.
Along with this at first year level we are also giving focus to improve their hand skills. We have Workshop Practice where we give chance to students to prepare products through working by metal joining process, for fabrication process. So, with good gazettes they design and manufacture it and they can innovate and take part in inventions.
So, at first year engineering department, we see that the platform of first year students will be built their foundation that whenever they will be for higher level of engineering program, they should be easily survive and face the challenges as the requirements of the industries.
    `,
          profileImage: rukhsanaHodBasicSciencesAndHumanities,
        },
        vision: `To provide students to imbibe best human and professional values.
To encouraged students of all disciplines and subjects not only in their academic pursuit but also in
furthering their career prospects and giving impetus to their creative potentiality.`,
        mission: `To enlarge intellectual perspective and enhance entrepreneurship qualities.
 Develop technical and communicative skills to make the students industry ready.
To inculcate ethical values and promote social responsibility through an innovative learning process in basic sciences and humanities.
To provide students with soft skills and behavioural training programs in order to develop their overall personality and social consciousness.`,
      },
      {
        id: "aids",
        name: "Artificial Intelligence (AI) and Data Science",
        description:
          "B.Tech program with specializations in AI, Cybersecurity, Data Science, and IoT.",
        image: "https://aitsrajampet.ac.in/images/artificial-intelligence.jpg",
        courses: [
          "B.Tech in CSE - AI & ML",
          "Cybersecurity",
          "IoT",
          "Data Science",
        ],
        facilities: [
          "Cisco Networking Academy Lab",
          "Hackathon & Coding Competitions",
          "Industry-aligned Certification Courses",
          "100+ Computing Workstations",
        ],
        about: `MPGI Integrated Campus is recognized as one of the premier technical institutions in the region. The Department of Artificial Intelligence and Data Science was established in the year 2009 with an initial intake of 30 students. Since its inception, the department has emerged as one of the most distinguished in the institution, supported by a team of well-qualified faculty members and equipped with modern, state-of-the-art laboratories.

The department is committed to nurturing students with strong academic foundations and practical skills to prepare them for the dynamic challenges of the IT industry. By fostering a culture of innovation, critical thinking, and problem-solving, the department ensures that students are industry-ready upon graduation.

The excellence of the department is reflected in the consistent demand for its graduates in both industry and academia. Strong ties with the industry have shaped a forward-looking teaching methodology that blends theoretical knowledge with hands-on experience. As a result, our graduates have gone on to excel in higher education and secure successful careers in leading organizations.`,

        facultyCount: 18,
        gallery: ["/images/cse-1.jpg", "/images/cse-2.jpg"],
        labs: [
          {
            srNo: 1,
            labName: `Database System & Software       
 Engineering Laboratory:`,
            area: "",
            incharge: "Mr. K. A. Mistry ",
          },
          {
            srNo: 2,
            labName: `Project Phase internship & Project in Industry`,
            area: "",
            incharge: "Mr. K.D. Ibitkar",
          },
          {
            srNo: 3,
            labName: `Natural Language   Processing  &  Data Engineering lab`,
            area: "",
            incharge: "Miss. Maliha Sayyad.",
          },
          {
            srNo: 4,
            labName: `Programing & Machine Learning Lab`,
            area: "",
            incharge: "Mr. K.A. Mistry",
          },
          {
            srNo: 5,
            labName: `Deep Learning & Machine Learning Lab`,
            area: "",
            incharge: "Mrs. Jyoti Sarode",
          },
          {
            srNo: 6,
            labName: `Data Structures & Object-Oriented Lab`,
            area: "",
            incharge: "Miss. Maliha Sayyad",
          },
          {
            srNo: 7,
            labName: `Operating System & Python Programing Lab`,
            area: "",
            incharge: "Mrs. Jyoti Sarode",
          },
        ],
        hod: {
          name: "Mr B.A Khansole",
          designation: "Associate Professor & H.O.D",
          message: `Dear Students and Respected Visitors,

A warm and heartfelt welcome to all of you.

As we are all aware, the world of technology is evolving rapidly with new innovations and advancements emerging every day. In response to this dynamic landscape, the Department of Computer Science and Engineering at MPGI Integrated Campus is committed to providing students with up-to-date knowledge and technical skills. This is achieved through our highly qualified faculty, who bring rich industry experience, and through our well-developed, technologically advanced laboratories.

The department has witnessed significant growth, particularly due to the rapid developments in the field of Artificial Intelligence and Data Science. We continuously strive to adapt our teaching methods and curriculum to align with current industry standards and future technological trends.

I am confident that our current batch of students will uphold the department’s reputation by demonstrating a high level of professional competence and making meaningful contributions in their respective careers.

Wishing all our students great success in their academic and professional journeys.`,
          profileImage: cseHod,
        },
        vision: `The Department of Artificial Intelligence and Data Science at MPGI Integrated Campus envisions becoming a leading center of excellence in computing education, research, and innovation. The department is committed to nurturing technically proficient, ethically grounded, and socially responsible professionals who can thrive in a rapidly evolving technological world. By fostering a spirit of innovation, continuous learning, and global awareness, the department aims to empower students to make meaningful contributions to industry, academia, and society at large. `,
        mission: `The mission of the Department of Artificial Intelligence and Data Science is to deliver high-quality education that blends theoretical knowledge with practical skills in computer science and related technologies. The department seeks to develop students’ analytical thinking, problem-solving capabilities, and creativity through a curriculum that is responsive to the latest industry trends and technological advancements. Through collaborations with industry and research organizations, the department ensures experiential learning opportunities such as internships, projects, and workshops. It also places strong emphasis on ethical practices, effective communication, leadership, and teamwork, preparing students to excel in diverse professional environments. Continuous improvement in faculty development, infrastructure, and academic delivery remains a core focus in the department’s pursuit of excellence.`,
      },
      {
        id: "aiml",
        name: "Computer Science and Engineering (AIML)",
        description:
          "B.Tech program with specializations in AI, Cybersecurity, Data Science, and IoT.",
        image: "https://aitsrajampet.ac.in/images/artificial-intelligence.jpg",
        courses: [
          "B.Tech in CSE - AI & ML",
          "Cybersecurity",
          "IoT",
          "Data Science",
        ],
        facilities: [
          "Cisco Networking Academy Lab",
          "Hackathon & Coding Competitions",
          "Industry-aligned Certification Courses",
          "100+ Computing Workstations",
        ],
        about: `MPGI Integrated Campus is recognized as one of the premier technical institutions in the region. The Department of Artificial Intelligence and Machine Learning was established in the year 2009 with an initial intake of 30 students. Since its inception, the department has emerged as one of the most distinguished in the institution, supported by a team of well-qualified faculty members and equipped with modern, state-of-the-art laboratories.

The department is committed to nurturing students with strong academic foundations and practical skills to prepare them for the dynamic challenges of the IT industry. By fostering a culture of innovation, critical thinking, and problem-solving, the department ensures that students are industry-ready upon graduation.

The excellence of the department is reflected in the consistent demand for its graduates in both industry and academia. Strong ties with the industry have shaped a forward-looking teaching methodology that blends theoretical knowledge with hands-on experience. As a result, our graduates have gone on to excel in higher education and secure successful careers in leading organizations.`,

        facultyCount: 18,
        gallery: ["/images/cse-1.jpg", "/images/cse-2.jpg"],
        labs: [
          {
            srNo: 1,
            labName: `Database System & Software       
 Engineering Laboratory:`,
            area: "",
            incharge: "Mr. K. A. Mistry ",
          },
          {
            srNo: 2,
            labName: `Project Phase internship & Project in Industry`,
            area: "",
            incharge: "Mr. K.D. Ibitkar",
          },
          {
            srNo: 3,
            labName: `Natural Language   Processing  &  Data Engineering lab`,
            area: "",
            incharge: "Miss. Maliha Sayyad.",
          },
          {
            srNo: 4,
            labName: `Programing & Machine Learning Lab`,
            area: "",
            incharge: "Mr. K.A. Mistry",
          },
          {
            srNo: 5,
            labName: `Deep Learning & Machine Learning Lab`,
            area: "",
            incharge: "Mrs. Jyoti Sarode",
          },
          {
            srNo: 6,
            labName: `Data Structures & Object-Oriented Lab`,
            area: "",
            incharge: "Miss. Maliha Sayyad",
          },
          {
            srNo: 7,
            labName: `Operating System & Python Programing Lab`,
            area: "",
            incharge: "Mrs. Jyoti Sarode",
          },
        ],
        hod: {
          name: "Mr B.A Khansole",
          designation: "Associate Professor & H.O.D",
          message: `Dear Students and Respected Visitors,

A warm and heartfelt welcome to all of you.

As we are all aware, the world of technology is evolving rapidly with new innovations and advancements emerging every day. In response to this dynamic landscape, the Department of Computer Science and Engineering at MPGI Integrated Campus is committed to providing students with up-to-date knowledge and technical skills. This is achieved through our highly qualified faculty, who bring rich industry experience, and through our well-developed, technologically advanced laboratories.

The department has witnessed significant growth, particularly due to the rapid developments in the field of Artificial Intelligence and Machine Learning. We continuously strive to adapt our teaching methods and curriculum to align with current industry standards and future technological trends.

I am confident that our current batch of students will uphold the department’s reputation by demonstrating a high level of professional competence and making meaningful contributions in their respective careers.

Wishing all our students great success in their academic and professional journeys.`,
          profileImage: cseHod,
        },
        vision: `The Department of Artificial Intelligence and Machine Learning at MPGI Integrated Campus envisions becoming a leading center of excellence in computing education, research, and innovation. The department is committed to nurturing technically proficient, ethically grounded, and socially responsible professionals who can thrive in a rapidly evolving technological world. By fostering a spirit of innovation, continuous learning, and global awareness, the department aims to empower students to make meaningful contributions to industry, academia, and society at large. `,
        mission: `The mission of the Department of Artificial Intelligence and Machine Learning is to deliver high-quality education that blends theoretical knowledge with practical skills in computer science and related technologies. The department seeks to develop students’ analytical thinking, problem-solving capabilities, and creativity through a curriculum that is responsive to the latest industry trends and technological advancements. Through collaborations with industry and research organizations, the department ensures experiential learning opportunities such as internships, projects, and workshops. It also places strong emphasis on ethical practices, effective communication, leadership, and teamwork, preparing students to excel in diverse professional environments. Continuous improvement in faculty development, infrastructure, and academic delivery remains a core focus in the department’s pursuit of excellence.`,
      },
    ],
  },

  {
    id: "school-of-management",
    name: "School of Management",
    description:
      "Premier institution offering comprehensive programs in business and management.",
    image:
      "https://content.jdmagicbox.com/comp/lucknow/y4/0522px522.x522.131217104012.w3y4/catalogue/school-of-management-sciences-lucknow-gpo-lucknow-management-institutes-73UUMutp3i.jpg",
    cardImage: "/images/som-card.jpg",
    departments: [
      {
        id: "mba",
        name: "MBA Program",
        description: `The Department of school of management was started in 2009 with two year’s Full time Program of Post graduation in Business Administration. The MBA program was introduced with a vision to create prospective managers with leadership skills, lateral thinking and critical evolution abilities that go to make successful entrepreneurs and corporate Heads of tomorrow.
The goal of department is to prepare executes destined for a successful management career. Since its inception, the department has endeavored to give its students an education encompassing all management disciplines, in order to prepare them for any change in professional life.

`,
        about: `The Department of school of management was started in 2009 with two year’s Full time Program of Post graduation in Business Administration. The MBA program was introduced with a vision to create prospective managers with leadership skills, lateral thinking and critical evolution abilities that go to make successful entrepreneurs and corporate Heads of tomorrow.
The goal of department is to prepare executes destined for a successful management career. Since its inception, the department has endeavored to give its students an education encompassing all management disciplines, in order to prepare them for any change in professional life.

`,
        image: "https://www.spsu.ac.in/wp-content/uploads/2023/10/MBA-2.jpg",
        courses: [
          "MBA in Digital Marketing",
          "MBA in Financial Analytics",
          "MBA in Operations Management",
        ],
        facilities: [
          "Harvard Case Study Methodology",
          "Summer Internships with Fortune 500 Companies",
          "1:1 Executive Mentorship",
        ],
        facultyCount: 20,
        gallery: ["/images/mba-1.jpg", "/images/mba-2.jpg"],
        labs: [],
        hod: {
          name: "Sadanand R. Shinde",
          designation: "DEAN - School of Management",
          message: `The new economic policy—globalization, privatization, and liberalization—has widened the horizon of business. The information technology revolution has transformed this planet into a global village. Hi-tech systems and the supersonic speed of communication have introduced new cross-cultural interactions in the global business scenario. This has also increased the demand for a strong ethical value foundation in a harmonic form.

It is the responsibility of the School of Management to develop holistic leadership with a global vision and a mission of excellence. The School of Management at Matoshri Pratishthan’s Group of Institutes is fully committed to this task.`,
          profileImage: managementDean,
        },
        vision:
          "Shaping future leaders with knowledge, innovation, and ethical business practices to create a lasting impact on society.",
        mission:
          "Educating students for career success, we make every decision to support the career and personal development of our learners. Our curriculum, teaching, and services demonstrate that we value the diverse profiles of our learners.",
      },
    ],
  },
];
