import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PersonalInfo } from '@/types/cv';

interface PersonalInfoProps {
  personalInfo: PersonalInfo;
  onChange: (field: string, value: string) => void;
}

export function PersonalInfoSection({
  personalInfo,
  onChange
}: PersonalInfoProps) {
  return (
    <>
      <div>
        <Label htmlFor='fullName'>
          Full Name <span className='text-red-500'>*</span>
        </Label>
        <Input
          id='fullName'
          value={personalInfo.fullName}
          onChange={e => onChange('fullName', e.target.value)}
          required
        />
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <Label htmlFor='email'>
            Email <span className='text-red-500'>*</span>
          </Label>
          <Input
            id='email'
            type='email'
            value={personalInfo.email}
            onChange={e => onChange('email', e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor='phone'>Phone Number</Label>
          <Input
            id='phone'
            type='tel'
            value={personalInfo.phone}
            onChange={e => onChange('phone', e.target.value)}
          />
        </div>
      </div>
      <div>
        <Label htmlFor='linkedin'>LinkedIn URL</Label>
        <Input
          id='linkedin'
          type='url'
          value={personalInfo.linkedin}
          onChange={e => onChange('linkedin', e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor='website'>Portfolio URL (Optional)</Label>
        <Input
          id='website'
          type='url'
          value={personalInfo.website}
          onChange={e => onChange('website', e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor='address'>
          Address <span className='text-red-500'>*</span>
        </Label>
        <Textarea
          id='address'
          value={personalInfo.address}
          onChange={e => onChange('address', e.target.value)}
          required
        />
      </div>
    </>
  );
}
