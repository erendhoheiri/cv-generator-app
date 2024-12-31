import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { Certification } from '../../types/cv';
import { YearPickerPopover } from '@/lib/year-picker';

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
    <div className='space-y-4 p-4 border rounded-lg'>
      <div className='flex justify-between items-start gap-4'>
        <div className='flex-1 space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <Input
              placeholder='Certification Name'
              value={certification.name}
              onChange={e =>
                onChange({ ...certification, name: e.target.value })
              }
            />
            <Input
              placeholder='Issuer'
              value={certification.issuer}
              onChange={e =>
                onChange({ ...certification, issuer: e.target.value })
              }
            />
            <div className='flex gap-2'>
              <YearPickerPopover
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
          className='text-destructive'
        >
          <Trash2 className='h-4 w-4' />
        </Button>
      </div>
    </div>
  );
}
