export interface Education {
  schoolName: string;
  startYear: Date;
  endYear: Date;
  location: string;
  level: string;
  program: string;
  gpaOptional?: string;
  gpaMaximum?: string;
  description: string;
  isCurrentlyStudying: boolean;
}

export interface WorkExperience {
  companyName: string;
  startYear: Date;
  endYear: Date;
  location: string;
  employmentType: string;
  position: string;
  description: string[];
  isCurrentlyWorking: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  year: Date;
}

export interface Language {
  name: string;
  level: string;
}

export interface OrganizationExperience {
  organizationName: string;
  position: string;
  startYear: Date;
  endYear: Date;
  description: string;
  location: string;
  isCurrentlyActive: boolean;
}

export interface Award {
  name: string;
  year: Date;
  description: string;
}

export interface Skill {
  hardSkill: string;
  softSkill: string;
  softwareSkill: string;
}

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  website?: string;
  address: string;
}

export interface Reference {
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
}

export interface CV {
  personalInfo: PersonalInfo;
  objective: string;
  education: Education[];
  workExperience: WorkExperience[];
  certifications: Certification[];
  organizations: OrganizationExperience[];
  awards: Award[];
  skills: Skill[];
  languages: Language[];
  references: Reference[];
}

export interface CVFormProps {
  data: CV;
  onChange: (data: CV) => void;
}

export interface CVPreviewProps {
  data: CV;
}
