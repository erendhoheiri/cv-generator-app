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
    <div className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="hardSkill">Hard Skills</Label>
        <Input
          id="hardSkill"
          placeholder="Enter hard skills (e.g. Programming, Data Analysis)"
          value={value.hardSkill}
          onChange={(e) => handleChange('hardSkill', e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="softSkill">Soft Skills</Label>
        <Input
          id="softSkill"
          placeholder="Enter soft skills (e.g. Leadership, Communication)"
          value={value.softSkill}
          onChange={(e) => handleChange('softSkill', e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="softwareSkill">Software Skills</Label>
        <Input
          id="softwareSkill"
          placeholder="Enter software skills (e.g. MS Office, Adobe)"
          value={value.softwareSkill}
          onChange={(e) => handleChange('softwareSkill', e.target.value)}
        />
      </div>
    </div>
  );
}
