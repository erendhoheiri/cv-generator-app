import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { Certification } from '../../types/cv';
import { MonthYearPicker } from '@/lib/month-year-picker';

interface CertificationEntryProps {
  certification: Certification;
  onChange: (certification: Certification) => void;
  onDelete: () => void;
}

export function CertificationEntry({
  certification,
  onChange,
  onDelete
}: CertificationEntryProps) {
  return (
    <div className='space-y-4 p-2 sm:p-4 border rounded-lg'>
      <div className='flex flex-col sm:flex-row justify-between items-start gap-4'>
        <div className='flex-1 space-y-4 w-full'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <Input
              placeholder='Certification Name'
              value={certification.name}
              onChange={e =>
                onChange({ ...certification, name: e.target.value })
              }
              className='w-full'
            />
            <Input
              placeholder='Issuer'
              value={certification.issuer}
              onChange={e =>
                onChange({ ...certification, issuer: e.target.value })
              }
              className='w-full'
            />
            <div className='w-full'>
              <MonthYearPicker
                value={certification.year}
                onChange={date => onChange({ ...certification, year: date })}
                placeholder='Select start month/year'
              />
            </div>
          </div>
        </div>
        <Button
          variant='ghost'
          size='icon'
          onClick={onDelete}
          className='text-destructive sm:mt-0 mt-2'
        >
          <Trash2 className='h-4 w-4' />
        </Button>
      </div>
    </div>
  );
}
