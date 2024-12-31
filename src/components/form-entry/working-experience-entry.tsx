'use client';

import { WorkExperience } from '@/types/cv';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Trash2 } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { YearPickerPopover } from '@/lib/year-picker';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

interface WorkExperienceEntryProps {
  experience: WorkExperience;
  onChange: (value: WorkExperience) => void;
  onDelete: () => void;
}

export function WorkingExperienceEntry({
  experience,
  onChange,
  onDelete
}: WorkExperienceEntryProps) {
  return (
    <div className='space-y-4 p-2 sm:p-4 border rounded-lg'>
      <div className='flex flex-col sm:flex-row justify-between items-start gap-4'>
        <div className='flex-1 space-y-4 w-full'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <Input
              placeholder='Company Name'
              value={experience.companyName}
              onChange={e =>
                onChange({ ...experience, companyName: e.target.value })
              }
            />
            <Input
              placeholder='Position'
              value={experience.position}
              onChange={e =>
                onChange({ ...experience, position: e.target.value })
              }
            />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <Input
              placeholder='Location'
              value={experience.location}
              onChange={e =>
                onChange({ ...experience, location: e.target.value })
              }
            />
            <Select
              value={experience.employmentType}
              onValueChange={value =>
                onChange({ ...experience, employmentType: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder='Select employment type' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='Full-time'>Full-time</SelectItem>
                <SelectItem value='Freelance'>Freelance</SelectItem>
                <SelectItem value='Contract'>Contract</SelectItem>
                <SelectItem value='Internship'>Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
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

          <div className='flex items-center gap-2'>
            <Switch
              id='isCurrentlyWorking'
              checked={experience.isCurrentlyWorking}
              onCheckedChange={checked =>
                onChange({ ...experience, isCurrentlyWorking: checked })
              }
            />
            <Label htmlFor='isCurrentlyStudying'>
              I&apos;m currently working here
            </Label>
          </div>

          <div className='space-y-2'>
            <div className='flex items-center gap-2'>
              <Label className='text-sm' htmlFor='description'>
                Job Description
              </Label>
            </div>
            {experience.description.map((desc, index) => (
              <div key={index} className='flex gap-2 items-center'>
                <span className='text-lg'>•</span>
                <Input
                  placeholder='Add job description or achievement'
                  value={desc}
                  onChange={e => {
                    const newDesc = [...experience.description];
                    newDesc[index] = e.target.value;
                    onChange({ ...experience, description: newDesc });
                  }}
                />
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => {
                    const newDesc = experience.description.filter(
                      (_, i) => i !== index
                    );
                    onChange({ ...experience, description: newDesc });
                  }}
                >
                  <Trash2 className='h-4 w-4' />
                </Button>
              </div>
            ))}
            <Button
              variant='outline'
              onClick={() => {
                onChange({
                  ...experience,
                  description: [...experience.description, '']
                });
              }}
              className='w-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors duration-200'
            >
              <Plus className='h-4 w-4' />
              Add New Point
            </Button>
          </div>
        </div>

        <Button
          variant='ghost'
          size='icon'
          className='text-destructive self-start'
          onClick={onDelete}
        >
          <Trash2 className='h-4 w-4' />
        </Button>
      </div>
    </div>
  );
}
