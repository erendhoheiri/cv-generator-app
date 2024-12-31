import {
  User,
  Target,
  Briefcase,
  Award,
  Users,
  Trophy,
  GraduationCap,
  Wrench
} from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CVFormProps } from '../types/cv';
import { Education, WorkExperience } from '../types/cv';
import { FormSection } from './form-entry/form-section';
import { PersonalInfoSection } from './form-entry/personal-info';
import { EducationEntry } from './form-entry/education-entry';
import { WorkingExperienceEntry } from './form-entry/working-experience-entry';
import { OrganizationExperienceEntry } from './form-entry/organization-experience-entry';
import { AwardEntry } from './form-entry/awards-entry';
import { CertificationEntry } from './form-entry/certification-entry';
import { SkillEntry } from './form-entry/skill-entry';
import { LanguageEntry } from './form-entry/languange-entry';
import { ReferenceEntry } from './form-entry/reference-entry';

export function CVForm({ data, onChange }: CVFormProps) {
  const handleChange =
    (field: keyof typeof data) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onChange({
        ...data,
        [field]: e.target.value
      });
    };

  return (
    <div className='space-y-6 p-4'>
      <Accordion type='single' collapsible className='w-full'>
        <FormSection value='personal' icon={User} title='Personal Information'>
          <PersonalInfoSection
            personalInfo={{
              fullName: data.personalInfo?.fullName || '',
              email: data.personalInfo?.email || '',
              phone: data.personalInfo?.phone || '',
              linkedin: data.personalInfo?.linkedin || '',
              website: data.personalInfo?.website || '',
              address: data.personalInfo?.address || ''
            }}
            onChange={(field, e) => {
              onChange({
                ...data,
                personalInfo: {
                  ...data.personalInfo,
                  [field]: e
                }
              });
            }}
          />
        </FormSection>

        <FormSection value='objective' icon={Target} title='Career Objective'>
          <div>
            <Label htmlFor='objective'>Career Objective</Label>
            <Textarea
              id='objective'
              value={data.objective}
              onChange={handleChange('objective')}
              placeholder='Write your career objective'
              className='min-h-[100px]'
            />
          </div>
        </FormSection>

        <FormSection
          value='experience'
          icon={Briefcase}
          title='Working Experience'
        >
          <div className='space-y-4'>
            {data.workExperience.map((work, index) => (
              <WorkingExperienceEntry
                key={index}
                experience={work}
                onChange={(updatedWork: WorkExperience) => {
                  const newWorkExperience = [...data.workExperience];
                  newWorkExperience[index] = updatedWork;
                  onChange({ ...data, workExperience: newWorkExperience });
                }}
                onDelete={() => {
                  const newWorkExperience = [...data.workExperience];
                  newWorkExperience.splice(index, 1);
                  onChange({ ...data, workExperience: newWorkExperience });
                }}
              />
            ))}
            <Button
              variant='outline'
              onClick={() => {
                onChange({
                  ...data,
                  workExperience: [
                    ...data.workExperience,
                    {
                      companyName: '',
                      startYear: new Date(),
                      endYear: new Date(),
                      location: '',
                      description: [],
                      isCurrentlyWorking: false,
                      employmentType: '',
                      position: ''
                    }
                  ]
                });
              }}
              className='w-full'
            >
              + Add Working Experience
            </Button>
          </div>
        </FormSection>

        <FormSection value='certifications' icon={Award} title='Certifications'>
          <div className='space-y-4'>
            {data.certifications.map((cert, index) => (
              <CertificationEntry
                key={index}
                certification={cert}
                onChange={updatedCert => {
                  const newCertifications = [...data.certifications];
                  newCertifications[index] = updatedCert;
                  onChange({ ...data, certifications: newCertifications });
                }}
                onDelete={() => {
                  const newCertifications = [...data.certifications];
                  newCertifications.splice(index, 1);
                  onChange({ ...data, certifications: newCertifications });
                }}
              />
            ))}
            <Button
              variant='outline'
              onClick={() => {
                onChange({
                  ...data,
                  certifications: [
                    ...data.certifications,
                    { name: '', year: new Date(), issuer: '' }
                  ]
                });
              }}
              className='w-full'
            >
              + Add Certification
            </Button>
          </div>
        </FormSection>

        <FormSection
          value='education'
          icon={GraduationCap}
          title='Education History'
        >
          <div className='space-y-4'>
            {data.education.map((edu, index) => (
              <EducationEntry
                key={index}
                education={edu}
                onChange={updatedEdu => {
                  const newEducation = [...data.education];
                  newEducation[index] = updatedEdu;
                  onChange({ ...data, education: newEducation });
                }}
                onDelete={() => {
                  const newEducation = [...data.education];
                  newEducation.splice(index, 1);
                  onChange({ ...data, education: newEducation });
                }}
              />
            ))}
            <Button
              variant='outline'
              onClick={() => {
                const newEducation: Education = {
                  schoolName: '',
                  startYear: new Date(),
                  endYear: new Date(),
                  location: '',
                  level: '',
                  program: '',
                  gpaOptional: '',
                  gpaMaximum: '',
                  description: '',
                  isCurrentlyStudying: false
                };
                onChange({
                  ...data,
                  education: [...data.education, newEducation]
                });
              }}
              className='w-full'
            >
              + Add Education
            </Button>
          </div>
        </FormSection>

        <FormSection
          value='organizations'
          icon={Users}
          title='Organization Experience'
        >
          <div className='space-y-4'>
            {data.organizations.map((org, index) => (
              <OrganizationExperienceEntry
                key={index}
                experience={org}
                onChange={updatedOrg => {
                  const newOrganizations = [...data.organizations];
                  newOrganizations[index] = updatedOrg;
                  onChange({ ...data, organizations: newOrganizations });
                }}
                onDelete={() => {
                  const newOrganizations = [...data.organizations];
                  newOrganizations.splice(index, 1);
                  onChange({ ...data, organizations: newOrganizations });
                }}
              />
            ))}
            <Button
              variant='outline'
              onClick={() => {
                onChange({
                  ...data,
                  organizations: [
                    ...data.organizations,
                    {
                      organizationName: '',
                      position: '',
                      startYear: new Date(),
                      endYear: new Date(),
                      location: '',
                      description: '',
                      isCurrentlyActive: false
                    }
                  ]
                });
              }}
              className='w-full'
            >
              + Add Organization
            </Button>
          </div>
        </FormSection>

        <FormSection value='awards' icon={Trophy} title='Awards'>
          <div className='space-y-4'>
            {data.awards.map((award, index) => (
              <AwardEntry
                key={index}
                award={award}
                onChange={updatedAward => {
                  const newAwards = [...data.awards];
                  newAwards[index] = updatedAward;
                  onChange({ ...data, awards: newAwards });
                }}
                onDelete={() => {
                  const newAwards = [...data.awards];
                  newAwards.splice(index, 1);
                  onChange({ ...data, awards: newAwards });
                }}
              />
            ))}
            <Button
              variant='outline'
              onClick={() => {
                onChange({
                  ...data,
                  awards: [
                    ...data.awards,
                    { name: '', year: new Date(), description: '' }
                  ]
                });
              }}
              className='w-full'
            >
              + Add Award
            </Button>
          </div>
        </FormSection>

        <FormSection value='skills' icon={Wrench} title='Skills'>
          <div className='space-y-4'>
            {data.skills.map((skill, index) => (
              <SkillEntry
                key={index}
                value={skill}
                onChange={updatedSkill => {
                  const newSkills = [...data.skills];
                  newSkills[index] = updatedSkill;
                  onChange({ ...data, skills: newSkills });
                }}
              />
            ))}
            {data.skills.length === 0 && (
              <Button
                variant='outline'
                onClick={() => {
                  onChange({
                    ...data,
                    skills: [
                      ...data.skills,
                      { hardSkill: '', softSkill: '', softwareSkill: '' }
                    ]
                  });
                }}
                className='w-full'
              >
                + Add Skill
              </Button>
            )}
          </div>
        </FormSection>

        <FormSection value='languages' icon={Users} title='Languages'>
          <div className='space-y-4'>
            {data.languages?.map((language, index) => (
              <LanguageEntry
                key={index}
                value={language}
                onDelete={() => {
                  const newLanguages = [...(data.languages || [])];
                  newLanguages.splice(index, 1);
                  onChange({ ...data, languages: newLanguages });
                }}
                onChange={updatedLanguage => {
                  const newLanguages = [...(data.languages || [])];
                  newLanguages[index] = updatedLanguage;
                  onChange({ ...data, languages: newLanguages });
                }}
              />
            ))}
            <Button
              variant='outline'
              onClick={() => {
                onChange({
                  ...data,
                  languages: [
                    ...(data.languages || []),
                    { name: '', level: '' }
                  ]
                });
              }}
              className='w-full'
            >
              + Add Language
            </Button>
          </div>
        </FormSection>

        <FormSection value='references' icon={Users} title='References'>
          <div className='space-y-4'>
            {data.references?.map((reference, index) => (
              <ReferenceEntry
                key={index}
                value={reference}
                onDelete={() => {
                  const newReferences = [...(data.references || [])];
                  newReferences.splice(index, 1);
                  onChange({ ...data, references: newReferences });
                }}
                onChange={updatedReference => {
                  const newReferences = [...(data.references || [])];
                  newReferences[index] = updatedReference;
                  onChange({ ...data, references: newReferences });
                }}
              />
            ))}
            <Button
              variant='outline'
              onClick={() => {
                onChange({
                  ...data,
                  references: [
                    ...(data.references || []),
                    {
                      name: '',
                      email: '',
                      phone: '',
                      company: '',
                      position: ''
                    }
                  ]
                });
              }}
              className='w-full'
            >
              + Add Reference
            </Button>
          </div>
        </FormSection>
      </Accordion>
    </div>
  );
}
