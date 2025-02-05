import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2 } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Education } from '@/types/cv';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { MonthYearPicker } from '@/lib/month-year-picker';

interface EducationEntryProps {
  education: Education;
  onChange: (education: Education) => void;
  onDelete: () => void;
}

export function EducationEntry({
  education,
  onChange,
  onDelete
}: EducationEntryProps) {
  const handleChange =
    (field: keyof Education) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onChange({
        ...education,
        [field]: e.target.value
      });
    };

  return (
    <div className='space-y-4 p-2 sm:p-4 border rounded-lg'>
      <div className='flex flex-col sm:flex-row justify-between items-start gap-4'>
        <div className='flex-1 space-y-4 w-full'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <Label htmlFor='schoolName'>
                School Name <span className='text-red-500'>*</span>
              </Label>
              <Input
                id='schoolName'
                value={education.schoolName}
                onChange={handleChange('schoolName')}
                required
              />
            </div>

            <div>
              <Label htmlFor='location'>
                Location <span className='text-red-500'>*</span>
              </Label>
              <Input
                id='location'
                value={education.location}
                onChange={handleChange('location')}
                required
              />
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <Label htmlFor='startYear'>
                Start Year <span className='text-red-500'>*</span>
              </Label>
              <MonthYearPicker
                value={education.startYear}
                onChange={date => onChange({ ...education, startYear: date })}
                placeholder='Select start month/year'
              />
            </div>
            <div>
              <Label htmlFor='endYear'>
                End Year <span className='text-red-500'>*</span>
              </Label>
              <MonthYearPicker
                value={education.endYear}
                onChange={date => onChange({ ...education, endYear: date })}
                placeholder='Select end month/year'
              />
            </div>
          </div>

          <div className='flex items-center space-x-2'>
            <Switch
              id='isCurrentlyStudying'
              checked={education.isCurrentlyStudying}
              onCheckedChange={checked =>
                onChange({ ...education, isCurrentlyStudying: checked })
              }
            />
            <Label htmlFor='isCurrentlyStudying'>Currently studying here</Label>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <Label htmlFor='level'>
                Level <span className='text-red-500'>*</span>
              </Label>
              <Select
                value={education.level}
                onValueChange={value =>
                  onChange({ ...education, level: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder='Select level' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='Bachelor'>Bachelor</SelectItem>
                  <SelectItem value='Master'>Master</SelectItem>
                  <SelectItem value='Doctoral'>Doctoral</SelectItem>
                  <SelectItem value='Diploma'>Diploma</SelectItem>
                  <SelectItem value='Associate '>Associate </SelectItem>
                  <SelectItem value='High School'>High School</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor='program'>
                Program <span className='text-red-500'>*</span>
              </Label>
              <Input
                id='program'
                value={education.program}
                onChange={handleChange('program')}
                required
              />
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <Label htmlFor='gpaOptional'>GPA (Optional)</Label>
              <Input
                id='gpaOptional'
                value={education.gpaOptional}
                onChange={handleChange('gpaOptional')}
              />
            </div>
            <div>
              <Label htmlFor='gpaMaximum'>GPA Maximum</Label>
              <Input
                id='gpaMaximum'
                value={education.gpaMaximum}
                onChange={handleChange('gpaMaximum')}
              />
            </div>
          </div>

          <div>
            <Label htmlFor='description'>Description (Optional)</Label>
            <Textarea
              id='description'
              value={education.description}
              onChange={handleChange('description')}
              className='min-h-[150px]'
            />
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
