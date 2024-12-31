'use client';

import { OrganizationExperience } from '@/types/cv';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Trash2 } from 'lucide-react';
import { YearPickerPopover } from '@/lib/year-picker';

interface OrganizationExperienceEntryProps {
  experience: OrganizationExperience;
  onChange: (value: OrganizationExperience) => void;
  onDelete: () => void;
}

export function OrganizationExperienceEntry({
  experience,
  onChange,
  onDelete
}: OrganizationExperienceEntryProps) {
  return (
    <div className='space-y-4 p-4 border rounded-lg'>
      <div className='flex justify-between items-start gap-4'>
        <div className='flex-1 space-y-4'>
          <div className='w-full'>
            <Input
              placeholder='Organization Name'
              value={experience.organizationName}
              onChange={e =>
                onChange({ ...experience, organizationName: e.target.value })
              }
            />
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <Input
              placeholder='Position'
              value={experience.position}
              onChange={e =>
                onChange({ ...experience, position: e.target.value })
              }
            />
            <Input
              placeholder='Location'
              value={experience.location}
              onChange={e =>
                onChange({ ...experience, location: e.target.value })
              }
            />
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <YearPickerPopover
              value={experience.startYear}
              onChange={date => onChange({ ...experience, startYear: date })}
              placeholder='Select start month/year'
            />
            <YearPickerPopover
              value={experience.endYear}
              onChange={date => onChange({ ...experience, endYear: date })}
              placeholder='Select end month/year'
            />
          </div>

          <Textarea
            placeholder='Activity description and achievements in the organization'
            value={experience.description}
            onChange={e =>
              onChange({ ...experience, description: e.target.value })
            }
          />
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