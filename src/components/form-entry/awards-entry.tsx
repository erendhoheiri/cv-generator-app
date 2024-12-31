import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { Award } from '../../types/cv';
import { Textarea } from '@/components/ui/textarea';
import { YearPickerPopover } from '@/lib/year-picker';

interface AwardEntryProps {
  award: Award;
  onChange: (award: Award) => void;
  onDelete: () => void;
}

export function AwardEntry({ award, onChange, onDelete }: AwardEntryProps) {
  return (
    <div className='space-y-4 p-4 border rounded-lg'>
      <div className='flex justify-between items-start gap-4'>
        <div className='flex-1 space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <Input
              placeholder='Award Name'
              value={award.name}
              onChange={e => onChange({ ...award, name: e.target.value })}
            />
            <YearPickerPopover
              value={award.year}
              onChange={date => onChange({ ...award, year: date })}
              placeholder='Select start month/year'
            />
          </div>
          <div className='w-full'>
            <Textarea
              placeholder='Explanation of the award'
              value={award.description}
              onChange={e =>
                onChange({ ...award, description: e.target.value })
              }
            />
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
