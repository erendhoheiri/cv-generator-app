'use client';

import React from 'react';
import { Skill } from '@/types/cv';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface SkillEntryProps {
  value: Skill;
  onChange: (value: Skill) => void;
}

export function SkillEntry({ value, onChange }: SkillEntryProps) {
  const handleChange = (field: keyof Skill, newValue: string) => {
    onChange({
      ...value,
      [field]: newValue
    });
  };

  return (
    <div className='space-y-0 p-0 sm:p-2'>
      <div className='flex flex-col gap-4'>
        <div className='space-y-2'>
          <Label htmlFor='hardSkill'>Hard Skills</Label>
          <Input
            id='hardSkill'
            placeholder='Enter hard skills (e.g. Programming, Data Analysis)'
            value={value.hardSkill}
            onChange={e => handleChange('hardSkill', e.target.value)}
            className='w-full resize-none overflow-visible'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='softSkill'>Soft Skills</Label>
          <Input
            id='softSkill'
            placeholder='Enter soft skills (e.g. Leadership, Communication)'
            value={value.softSkill}
            onChange={e => handleChange('softSkill', e.target.value)}
            className='w-full resize-none overflow-visible'
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='softwareSkill'>Software Skills</Label>
          <Input
            id='softwareSkill'
            placeholder='Enter software skills (e.g. MS Office, Adobe)'
            value={value.softwareSkill}
            onChange={e => handleChange('softwareSkill', e.target.value)}
            className='w-full resize-none overflow-visible'
          />
        </div>
      </div>
    </div>
  );
}
