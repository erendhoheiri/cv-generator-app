'use client';

import { CVForm } from '@/components/cv-form';
import { CVPreview } from '@/components/cv-preview';
import { CV } from '@/types/cv';
import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';

const initialData: CV = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    website: '',
    address: ''
  },
  objective: '',
  education: [],
  workExperience: [],
  certifications: [],
  organizations: [],
  awards: [],
  skills: [],
  languages: [],
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
    </div>
  );
}
