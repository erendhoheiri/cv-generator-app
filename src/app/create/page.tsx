'use client';

import { CVForm } from '@/components/cv-form';
import { CVPreview } from '@/components/cv-preview';
import { CV } from '@/types/cv';
import Link from 'next/link';
import { FileText, ArrowLeft, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';

const initialData: CV = {
  personalInfo: {
    fullName: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1234567890',
    linkedin: 'https://linkedin.com/in/johnsmith',
    website: 'https://johnsmith.dev',
    address: 'San Francisco, CA'
  },
  objective:
    'Passionate software engineer with 5+ years of experience building scalable web applications. Seeking to leverage my technical expertise and leadership skills to drive innovation and deliver high-quality solutions.',
  education: [
    {
      schoolName: 'Stanford University',
      startYear: new Date('2014-09-01T00:00:00.000Z'),
      endYear: new Date('2018-06-01T00:00:00.000Z'),
      location: 'Stanford, CA',
      level: 'Bachelor',
      program: 'Computer Science',
      gpaOptional: '3.8',
      gpaMaximum: '4.0',
      description: 'Major in Software Engineering, Minor in Business',
      isCurrentlyStudying: false
    }
  ],
  workExperience: [
    {
      companyName: 'Tech Corp',
      startYear: new Date('2020-01-01T00:00:00.000Z'),
      endYear: new Date('2024-01-01T00:00:00.000Z'),
      location: 'San Francisco, CA',
      description: [
        'Led development of core platform features used by millions of users',
        'Managed team of 5 engineers and coordinated with product/design',
        'Improved system performance by 40% through optimization efforts',
        'Implemented CI/CD pipeline reducing deployment time by 50%'
      ],
      isCurrentlyWorking: true,
      employmentType: 'Full-time',
      position: 'Senior Software Engineer'
    },
    {
      companyName: 'Startup Inc',
      startYear: new Date('2018-06-01T00:00:00.000Z'),
      endYear: new Date('2019-12-31T00:00:00.000Z'),
      location: 'New York, NY',
      description: [
        'Built responsive web applications using React and Node.js',
        'Collaborated with UX team to implement pixel-perfect designs',
        'Wrote unit tests and integration tests to ensure code quality'
      ],
      isCurrentlyWorking: false,
      employmentType: 'Full-time',
      position: 'Software Engineer'
    }
  ],
  certifications: [
    {
      name: 'AWS Solutions Architect',
      year: new Date('2022-01-01T00:00:00.000Z'),
      issuer: 'Amazon Web Services'
    },
    {
      name: 'Professional Scrum Master',
      year: new Date('2021-06-01T00:00:00.000Z'),
      issuer: 'Scrum.org'
    }
  ],
  organizations: [
    {
      organizationName: 'Code for Good',
      position: 'Technical Lead',
      startYear: new Date('2019-01-01T00:00:00.000Z'),
      endYear: new Date('2020-12-31T00:00:00.000Z'),
      location: 'San Francisco, CA',
      description:
        'Led volunteer developer team building applications for non-profits',
      isCurrentlyActive: false
    }
  ],
  awards: [
    {
      name: 'Innovation Award',
      year: new Date('2022-01-01T00:00:00.000Z'),
      description:
        'Awarded for developing novel solution that increased user engagement by 200%'
    }
  ],
  skills: [
    {
      hardSkill:
        'JavaScript, TypeScript, React, Node.js, AWS, Docker, Kubernetes',
      softSkill:
        'Leadership, Communication, Problem Solving, Team Collaboration',
      softwareSkill: 'VS Code, Git, JIRA, Figma, Jenkins'
    }
  ],
  languages: [
    {
      name: 'English',
      level: 'Native'
    },
    {
      name: 'Spanish',
      level: 'Intermediate'
    }
  ],
  references: []
};

export default function CVGenerator() {
  const [cvData, setCvData] = useLocalStorage<CV>('cvData', initialData);

  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950'>
      <header className='sticky top-0 z-50 px-6 h-16 flex items-center border-b border-zinc-200 dark:border-zinc-800 backdrop-blur-sm bg-white/70 dark:bg-zinc-900/70 supports-[backdrop-filter]:bg-white/60'>
        <Link
          href='/'
          className='flex items-center gap-3 font-semibold hover:opacity-80 transition-opacity'
        >
          <FileText className='h-6 w-6 text-slate-700' />
          <span className='text-slate-700 text-lg tracking-tight'>
            ForPeople!
          </span>
        </Link>
        <nav className='ml-auto'>
          <Button asChild variant='ghost' className='group'>
            <Link
              href='/'
              className='flex items-center gap-2 text-zinc-700 dark:text-zinc-300'
            >
              <ArrowLeft className='h-4 w-4 transition-transform group-hover:-translate-x-1' />
              Back to Home
            </Link>
          </Button>
        </nav>
      </header>
      <div className='min-h-screen grid md:grid-cols-[minmax(500px,600px),1fr] transition-all duration-300'>
        <div className='border-r border-zinc-200 dark:border-zinc-800 overflow-y-auto bg-white dark:bg-zinc-900 max-h-[calc(100vh-4rem)] sticky top-16'>
          <CVForm data={cvData} onChange={setCvData} />
        </div>
        <div className='bg-zinc-100 dark:bg-zinc-800 overflow-y-auto max-h-[calc(100vh-4rem)] sticky top-16'>
          <CVPreview data={cvData} />
        </div>
      </div>

      {/* Floating Button */}
      <div className='fixed bottom-2 right-2 z-50'>
        <Link href='https://form.jotform.com/250355193485461' target='_blank'>
          <Button variant='default' className='flex items-center gap-1'>
            <MessageCircle className='h-5 w-5' />
            Give Feedback
          </Button>
        </Link>
      </div>
    </div>
  );
}
