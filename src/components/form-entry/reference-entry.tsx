'use client';

import { Reference } from '@/types/cv';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

interface ReferenceEntryProps {
  value: Reference;
  onChange: (value: Reference) => void;
  onDelete: () => void;
}

export function ReferenceEntry({
  value,
  onChange,
  onDelete
}: ReferenceEntryProps) {
  const handleChange = (field: keyof Reference, newValue: string) => {
    onChange({
      ...value,
      [field]: newValue
    });
  };

  return (
    <div className='space-y-4 p-4 border rounded-lg'>
      <div className='flex justify-between items-start gap-4'>
        <div className='flex-1 space-y-4'>
          <div className='w-full'>
            <div>
              <Label htmlFor='name'>Full Name</Label>
              <Input
                id='name'
                placeholder='Enter reference name'
                value={value.name}
                onChange={e => handleChange('name', e.target.value)}
              />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div>
              <Label htmlFor='company'>Company</Label>
              <Input
                id='company'
                placeholder='Enter company name'
                value={value.company}
                onChange={e => handleChange('company', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor='position'>Position</Label>
              <Input
                id='position'
                placeholder='Enter position'
                value={value.position}
                onChange={e => handleChange('position', e.target.value)}
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='Enter email address'
                value={value.email}
                onChange={e => handleChange('email', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor='phone'>Phone Number</Label>
              <Input
                id='phone'
                placeholder='Enter phone number'
                value={value.phone}
                onChange={e => handleChange('phone', e.target.value)}
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
