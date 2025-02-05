'use client';

import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Plus, Minus } from 'lucide-react';
import { format } from 'date-fns';
import { CVPreviewProps } from '../types/cv';
import { useReactToPrint } from 'react-to-print';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const MIN_FONT_SIZE = 12;
const MAX_FONT_SIZE = 24;
const DEFAULT_FONT_SIZE = 16;

export const CVPreview = ({ data }: CVPreviewProps) => {
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = useReactToPrint({
    contentRef,
    documentTitle: `CV_${data.personalInfo.fullName || 'Document'}_${format(
      new Date(),
      'dd-MM-yyyy'
    )}`,
    pageStyle: `
    @page {
      size: A4 portrait;
      margin-top: 10mm;
      margin-bottom: 10mm;
      margin-left: 2mm;
      margin-right: 2mm;
    }
    @page :first {
      margin-top: 0;
    }
    @media print {
      body { 
        -webkit-print-color-adjust: exact; 
      }
    }
    `,
    onAfterPrint: () => {
      console.log('PDF downloaded successfully');
    },
    onPrintError: error => {
      console.error('Failed to download PDF:', error);
    }
  });

  const handleFontSizeChange = (increment: boolean) => {
    setFontSize(prev =>
      increment
        ? Math.min(prev + 1, MAX_FONT_SIZE)
        : Math.max(prev - 1, MIN_FONT_SIZE)
    );
  };

  const renderContactInfo = () => {
    const { phone, email, linkedin, website } = data.personalInfo || {};
    const contacts = [
      phone && (
        <a key='phone' href={`tel:${phone}`} className='text-blue-500'>
          {phone}
        </a>
      ),
      email && (
        <a key='email' href={`mailto:${email}`} className='text-blue-500'>
          {email}
        </a>
      ),
      linkedin && (
        <a
          key='linkedin'
          href={linkedin}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500'
        >
          {linkedin}
        </a>
      ),
      website && (
        <a
          key='website'
          href={website}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500'
        >
          {website}
        </a>
      )
    ].filter(Boolean);

    return contacts.map((contact, index) => (
      <React.Fragment key={index}>
        {contact}
        {index < contacts.length - 1 && <span className='mx-1'>|</span>}
      </React.Fragment>
    ));
  };

  const formatDate = (date: Date, isCurrently?: boolean) => {
    return isCurrently ? 'Present' : format(date, 'MMM yyyy');
  };

  return (
    <div className='h-full flex flex-col'>
      <div className='sticky top-0 border-b border-zinc-200 dark:border-zinc-800 p-2 flex flex-col sm:flex-row items-center justify-between gap-2 backdrop-blur-sm bg-white/70 dark:bg-zinc-900/70'>
        <div className='flex gap-2'></div>

        <div className='flex flex-wrap justify-center items-center gap-4 w-full sm:w-auto'>
          <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600&family=Playfair+Display:wght@400;700&family=Roboto:wght@400;500&family=Source+Sans+Pro:wght@400;600&family=Poppins:wght@400;500;600&family=Montserrat:wght@400;500;600&family=Raleway:wght@400;500;600&family=Ubuntu:wght@400;500&family=Nunito:wght@400;600&display=swap');
          `}</style>
          <Select
            defaultValue='Roboto'
            onValueChange={value => {
              if (contentRef.current) {
                contentRef.current.style.fontFamily = value;
              }
            }}
          >
            <SelectTrigger className='w-[180px] bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border-zinc-200 dark:border-zinc-700 transition-all hover:border-zinc-300 dark:hover:border-zinc-600'>
              <SelectValue placeholder='Pilih Font' />
            </SelectTrigger>
            <SelectContent className='bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700'>
              <SelectItem value='Roboto'>Roboto</SelectItem>
              <SelectItem value='Open Sans'>Open Sans</SelectItem>
              <SelectItem value='Lato'>Lato</SelectItem>
              <SelectItem value='Source Sans Pro'>Source Sans Pro</SelectItem>
              <SelectItem value='Merriweather'>Merriweather</SelectItem>
              <SelectItem value='Playfair Display'>Playfair Display</SelectItem>
              <SelectItem value='Poppins'>Poppins</SelectItem>
              <SelectItem value='Montserrat'>Montserrat</SelectItem>
              <SelectItem value='Raleway'>Raleway</SelectItem>
              <SelectItem value='Ubuntu'>Ubuntu</SelectItem>
              <SelectItem value='Nunito'>Nunito</SelectItem>
              <SelectItem value='Arial'>Arial</SelectItem>
              <SelectItem value='Times New Roman'>Times New Roman</SelectItem>
              <SelectItem value='Helvetica'>Helvetica</SelectItem>
            </SelectContent>
          </Select>

          <Button
            onClick={() => handleDownloadPDF()}
            className='group relative overflow-hidden bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-300'
          >
            <span className='flex items-center gap-2'>
              <Download className='h-4 w-4 transition-transform group-hover:translate-y-1' />
              Download PDF
            </span>
          </Button>
        </div>
      </div>

      <div className='flex-1 p-2 md:p-8 bg-zinc-100 dark:bg-zinc-800 overflow-auto'>
        <div
          ref={contentRef}
          id='cv-content'
          className='max-w-[794px] mx-auto bg-white '
          style={{
            fontSize: `${fontSize}px`,
            minHeight: '297mm',
            width: '100%',
            maxWidth: '210mm',
            padding: '10mm',
            boxSizing: 'border-box',
            pageBreakAfter: 'always',
            pageBreakInside: 'avoid'
          }}
        >
          {/* Header Section */}
          <header className='space-y-1 pt-1 text-center border-b pb-2'>
            <h1 className='text-xl sm:text-2xl font-bold uppercase tracking-wide leading-none'>
              {data.personalInfo?.fullName}
            </h1>
            <div className='flex flex-wrap justify-center items-center gap-1 sm:gap-x-2 text-xs sm:text-sm leading-tight'>
              {renderContactInfo()}
            </div>
            {data.personalInfo?.address && (
              <p className='text-xs sm:text-sm leading-tight'>
                {data.personalInfo.address}
              </p>
            )}
          </header>

          {/* Objective Section */}
          {data.objective && (
            <section className='mt-2 text-justify'>
              <h2 className='text-base sm:text-lg text-center font-semibold leading-none mb-2 mt-2'>
                SUMMARY
              </h2>
              <p className='text-xs sm:text-sm leading-tight'>
                {data.objective}
              </p>
            </section>
          )}

          {/* Work Experience Section */}
          {data.workExperience.length > 0 && (
            <section className='mt-4 sm:mt-6 page-break-inside-avoid'>
              <h2 className='text-base sm:text-lg font-semibold border-b leading-none'>
                WORK EXPERIENCE
              </h2>
              <div className='space-y-0 pt-1'>
                {data.workExperience.map((exp, index) => (
                  <div
                    key={index}
                    className='flex flex-col gap-y-1 sm:gap-y-2 mb-2'
                  >
                    <div className='flex flex-col mt-2 sm:flex-row justify-between leading-tight'>
                      <div className='flex flex-col'>
                        <h3 className='font-semibold'>{exp.companyName}</h3>
                        <div className='flex '>
                          <p className='text-sm sm:text-md'>{exp.position}</p>
                          <span className='mx-1'>-</span>
                          <p className='text-xs sm:text-sm text-gray-600'>
                            {exp.employmentType}
                          </p>
                        </div>
                      </div>
                      <div className='text-left sm:text-right mt-1 sm:mt-0'>
                        <div className='flex flex-col text-xs sm:text-sm'>
                          <p>{exp.location}</p>
                          <p>
                            {exp.startYear && format(exp.startYear, 'MMM yyyy')}{' '}
                            -{' '}
                            {exp.endYear &&
                              formatDate(exp.endYear, exp.isCurrentlyWorking)}
                          </p>
                        </div>
                      </div>
                    </div>
                    {exp.description && (
                      <div className='text-xs sm:text-sm leading-tight'>
                        {exp.description.map((desc, i) => (
                          <div key={i} className='flex'>
                            <span className='mr-2'>•</span>
                            <p className='text-start'>{desc}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications Section */}
          {data.certifications.length > 0 && (
            <section className='mt-4 sm:mt-6 page-break-inside-avoid'>
              <h2 className='text-base sm:text-lg font-semibold border-b leading-none mt-1'>
                CERTIFICATIONS
              </h2>
              <div className='space-y-0 pt-1'>
                {data.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className='flex flex-col sm:flex-row justify-between leading-tight'
                  >
                    <div className='flex'>
                      <h3 className='font-semibold text-xs sm:text-sm'>
                        {cert.name},{' '}
                        <span className='font-normal'>{cert.issuer}</span>
                      </h3>
                    </div>
                    <div className='text-left sm:text-right mt-1 sm:mt-0'>
                      <p className='text-xs sm:text-sm leading-tight'>
                        {cert.year && format(cert.year, 'MMM yyyy')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education Section */}
          {data.education.length > 0 && (
            <section className='mt-4 sm:mt-6 page-break-inside-avoid'>
              <h2 className='text-base sm:text-lg font-semibold border-b leading-none mt-1'>
                EDUCATION
              </h2>
              <div className='space-y-0 pt-1'>
                {data.education.map((edu, index) => (
                  <div
                    key={index}
                    className='flex flex-col sm:flex-row justify-between leading-tight'
                  >
                    <div>
                      <h3 className='font-semibold'>{edu.schoolName}</h3>
                      <div className='flex text-xs sm:text-sm'>
                        <p>{edu.level} of </p>
                        <p className='ml-1'>{edu.program}</p>
                      </div>
                      {edu.gpaOptional && (
                        <p className='text-xs sm:text-sm'>
                          GPA: {edu.gpaOptional}
                          {edu.gpaMaximum && `/${edu.gpaMaximum}`}
                        </p>
                      )}
                      {edu.description && (
                        <p className='text-xs sm:text-sm mt-0.5'>
                          {edu.description}
                        </p>
                      )}
                    </div>
                    <div className='text-left sm:text-right mt-1 sm:mt-0'>
                      <p className='text-xs sm:text-sm'>{edu.location}</p>
                      <p className='text-xs sm:text-sm'>
                        {edu.startYear && format(edu.startYear, 'MMM yyyy')} -{' '}
                        {edu.endYear &&
                          formatDate(edu.endYear, edu.isCurrentlyStudying)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Organizations Section */}
          {data.organizations.length > 0 && (
            <section className='mt-4 sm:mt-6 page-break-inside-avoid'>
              <h2 className='text-base sm:text-lg font-semibold border-b leading-none mt-1'>
                ORGANIZATIONS
              </h2>
              <div className='space-y-0 pt-1'>
                {data.organizations.map((org, index) => (
                  <div key={index} className='flex flex-col gap-y-1 sm:gap-y-2'>
                    <div className='flex flex-col sm:flex-row justify-between leading-tight'>
                      <div className='flex flex-col'>
                        <h3 className='font-semibold'>
                          {org.organizationName}
                        </h3>
                        <p className='text-xs sm:text-sm'>{org.position}</p>
                      </div>
                      <div className='text-left sm:text-right mt-1 sm:mt-0'>
                        <div className='flex flex-col text-xs sm:text-sm'>
                          <p>{org.location}</p>
                          <p>
                            {org.startYear && format(org.startYear, 'MMM yyyy')}{' '}
                            -{' '}
                            {org.endYear &&
                              formatDate(org.endYear, org.isCurrentlyActive)}
                          </p>
                        </div>
                      </div>
                    </div>
                    {org.description && (
                      <div className='text-xs sm:text-sm leading-tight'>
                        <p className='text-justify'>{org.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Awards Section */}
          {data.awards.length > 0 && (
            <section className='mt-4 sm:mt-6 page-break-inside-avoid'>
              <h2 className='text-base sm:text-lg font-semibold border-b leading-none mt-1'>
                AWARDS
              </h2>
              <div className='space-y-0 pt-1'>
                {data.awards.map((award, index) => (
                  <div
                    key={index}
                    className='flex flex-col sm:flex-row justify-between leading-tight'
                  >
                    <div>
                      <h3 className='font-semibold'>{award.name}</h3>
                      {award.description && (
                        <p className='text-xs sm:text-sm mt-0.5'>
                          {award.description}
                        </p>
                      )}
                    </div>
                    <div className='text-left sm:text-right mt-1 sm:mt-0'>
                      <p className='text-xs sm:text-sm leading-tight'>
                        {award.year && format(award.year, 'MMM yyyy')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills Section */}
          {data?.skills?.length > 0 && (
            <section className='mt-4 sm:mt-6 page-break-inside-avoid'>
              <h2 className='text-base sm:text-lg font-semibold border-b leading-none mt-1'>
                SKILLS
              </h2>
              <div className='space-y-0 pt-1'>
                {data.skills.map((skill, index) => (
                  <div className='flex flex-col text-xs sm:text-sm' key={index}>
                    {skill.hardSkill && (
                      <p>
                        <span className='font-semibold'>Hard Skills:</span>{' '}
                        {skill.hardSkill}
                      </p>
                    )}
                    {skill.softSkill && (
                      <p>
                        <span className='font-semibold'>Soft Skills:</span>{' '}
                        {skill.softSkill}
                      </p>
                    )}
                    {skill.softwareSkill && (
                      <p>
                        <span className='font-semibold'>Software Skills:</span>{' '}
                        {skill.softwareSkill}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages Section */}
          {data?.languages?.length > 0 && (
            <section className='mt-4 sm:mt-6 page-break-inside-avoid'>
              <h2 className='text-base sm:text-lg font-semibold border-b leading-none mt-1'>
                LANGUAGES
              </h2>
              <div className='space-y-0 pt-1'>
                {data.languages.map((language, index) => (
                  <div
                    className='flex flex-col text-xs sm:text-sm mb-[1px]'
                    key={index}
                  >
                    <p className='font-semibold'>
                      {language.name} -{' '}
                      <span className='font-normal'>{language.level}</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* References Section */}
          {data?.references?.length > 0 && (
            <section className='mt-4 sm:mt-6 page-break-inside-avoid'>
              <h2 className='text-base sm:text-lg font-semibold border-b leading-none mt-1'>
                REFERENCES
              </h2>
              <div className='space-y-0 pt-1'>
                {data.references.map((ref, index) => (
                  <div
                    key={index}
                    className='flex flex-col sm:flex-row text-xs sm:text-sm'
                  >
                    <div className='flex-1'>
                      <p className='font-semibold'>{ref.name}</p>
                      <div className='flex flex-col'>
                        <p>
                          {ref.position} at {ref.company}
                        </p>
                      </div>
                    </div>
                    <div className='flex-2 mt-1 sm:mt-0'>
                      <div className='flex flex-col text-xs'>
                        <a
                          href={`mailto:${ref.email}`}
                          className='text-blue-500'
                        >
                          {ref.email}
                        </a>
                        <a href={`tel:${ref.phone}`} className='text-blue-500'>
                          {ref.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
