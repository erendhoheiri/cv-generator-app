import { ReactNode } from 'react';
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion';
import { LucideIcon } from 'lucide-react';

interface FormSectionProps {
  value: string;
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}

export function FormSection({
  value,
  icon: Icon,
  title,
  children
}: FormSectionProps) {
  return (
    <AccordionItem
      value={value}
      className='border rounded-lg mb-4 shadow-xs hover:shadow-sm transition-shadow duration-200'
    >
      <AccordionTrigger className='hover:no-underline px-4 py-1 bg-white dark:bg-zinc-900 rounded-t-lg'>
        <div className='flex items-center gap-3 w-full'>
          <div className='p-2 rounded-full bg-teal-50 dark:bg-teal-900/20'>
            <Icon className='h-5 w-5 text-teal-600 dark:text-teal-400' />
          </div>
          <span className='font-medium text-zinc-800 dark:text-zinc-200'>
            {title}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className='px-4 py-3 bg-zinc-50/50 dark:bg-zinc-800/50 rounded-b-lg'>
        <div className='space-y-4'>{children}</div>
      </AccordionContent>
    </AccordionItem>
  );
}
