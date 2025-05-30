// colleges.ts
export interface DepartmentConfig {
  slug: string;
  displayName: string;
}

export interface CollegeConfig {
  slug: string;
  displayName: string;
  departments: DepartmentConfig[];
}

export const collegeConfigs: Record<string, CollegeConfig> = {
  engineering: {
    slug: 'school-of-engineering',
    displayName: 'School of Engineering',
    departments: [
      { slug: 'cse', displayName: 'Computer Science & Engineering' },
      { slug: 'mech', displayName: 'Mechanical Engineering' },
      { slug: 'eee', displayName: 'Electrical Engineering' },
      { slug: 'civil', displayName: 'Civil Engineering' },
      { slug: 'ece', displayName: 'Electronics and Telecommunication Engineering' },
    ],
  },
  management: {
    slug: 'school-of-management',
    displayName: 'School of Management',
    departments: [
      { slug: 'mba', displayName: 'MBA' },
      { slug: 'bba', displayName: 'BBA' },
      { slug: 'finance-management', displayName: 'Financial Management' },
      { slug: 'marketing-management', displayName: 'Marketing Management' },
    ],
  },
  polytechnic: {
    slug: 'vishwabharati-polytechnic-institute',
    displayName: 'Vishwabharati Polytechnic Institute',
    departments: [
      { slug: 'civil', displayName: 'Civil Engineering' },
      { slug: 'computer', displayName: 'Computer Engineering' },
      { slug: 'electrical', displayName: 'Electrical Engineering' },
      { slug: 'mechanical', displayName: 'Mechanical Engineering' },
      { slug: 'it', displayName: 'Information Technology' },
      { slug: 'ece', displayName: 'Electronics and Telecommunication' },
    ],
  },
  mpgin: {
    slug: 'matoshri-pratishthan-group-of-institutions',
    displayName: 'Matoshri Pratishthan Group of Institutions',
  },
};

export type CollegeType = keyof typeof collegeConfigs;