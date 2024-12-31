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

  console.log(cvData);

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-4 lg:px-6 h-16 flex items-center border-b'>
        <Link href='/' className='flex items-center gap-2 font-semibold'>
          <FileText className='h-6 w-6' />
          <span>ForPeople!</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Button asChild className='text-white bg-red-500 hover:bg-red-600'>
            <Link href='/'>
              <ArrowLeft className='h-4 w-4' />
              Back to Home
            </Link>
          </Button>
        </nav>
      </header>
      <div className='min-h-screen grid md:grid-cols-[550px,1fr]'>
        <div className='border-r overflow-auto'>
          <CVForm data={cvData} onChange={setCvData} />
        </div>
        <div className='bg-gray-200'>
          <CVPreview data={cvData} />
        </div>
      </div>
    </div>
  );
}
