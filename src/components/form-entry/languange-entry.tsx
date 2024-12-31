'use client';

import { Language } from '@/types/cv';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

interface LanguageEntryProps {
  value: Language;
  onChange: (value: Language) => void;
  onDelete: () => void;
}

export function LanguageEntry({
  value,
  onChange,
  onDelete
}: LanguageEntryProps) {
  const handleChange = (field: keyof Language, newValue: string) => {
    onChange({
      ...value,
      [field]: newValue
    });
  };

  return (
    <div className='space-y-4 p-2 sm:p-4 border rounded-lg'>
      <div className='flex flex-col sm:flex-row justify-between items-start gap-4'>
        <div className='flex-1 space-y-4 w-full'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <Label htmlFor='name'>Language Name</Label>
              <Input
                id='name'
                placeholder='Enter language name'
                value={value.name}
                onChange={e => handleChange('name', e.target.value)}
                className='w-full'
              />
            </div>

            <div>
              <Label htmlFor='level'>Proficiency Level</Label>
              <Select
                value={value.level}
                onValueChange={value => handleChange('level', value)}
              >
                <SelectTrigger id='level' className='w-full'>
                  <SelectValue placeholder='Select proficiency level' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='Native'>Native</SelectItem>
                  <SelectItem value='Fluent'>Fluent</SelectItem>
                  <SelectItem value='Advanced'>Advanced</SelectItem>
                  <SelectItem value='Intermediate'>Intermediate</SelectItem>
                  <SelectItem value='Basic'>Basic</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <Button
          variant='ghost'
          size='icon'
          onClick={onDelete}
          className='text-destructive self-start'
        >
          <Trash2 className='h-4 w-4' />
        </Button>
      </div>
    </div>
  );
}
