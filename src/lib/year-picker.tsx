'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

interface YearPickerPopoverProps {
  value?: Date;
  onChange: (date: Date) => void;
  placeholder?: string;
}

export function YearPickerPopover({
  value,
  onChange,
  placeholder = 'Pick a date'
}: YearPickerPopoverProps) {
  const [isYearView, setIsYearView] = React.useState(false);
  const [decade, setDecade] = React.useState(() => {
    const currentYear = new Date().getFullYear();
    return Math.floor(currentYear / 10) * 10;
  });
  const [selectedYear, setSelectedYear] = React.useState(() =>
    value instanceof Date ? value.getFullYear() : new Date().getFullYear()
  );

  const years = React.useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => decade + i);
  }, [decade]);

  const handleYearSelect = React.useCallback(
    (year: number) => {
      const newDate = new Date(
        year,
        value instanceof Date ? value.getMonth() : 0,
        1
      );
      setSelectedYear(year);
      onChange(newDate);
      setIsYearView(false);
    },
    [value, onChange, setIsYearView]
  );

  React.useEffect(() => {
    if (value instanceof Date) {
      setSelectedYear(value.getFullYear());
    }
  }, [value]);

  return (
    <div className={'w-full'}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            className={cn(
              'w-full justify-start text-left font-normal',
              !value && 'text-muted-foreground '
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {value ? format(value, 'MMM yyyy') : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          {isYearView ? (
            <div className='p-3'>
              <div className='flex items-center justify-between mb-3'>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => setDecade(d => d - 10)}
                  className='h-8 w-8 p-0'
                >
                  <ChevronLeft className='h-4 w-4' />
                </Button>
                <div className='font-semibold'>
                  {decade} - {decade + 9}
                </div>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => setDecade(d => d + 10)}
                  className='h-8 w-8 p-0'
                >
                  <ChevronRight className='h-4 w-4' />
                </Button>
              </div>
              <div className='grid grid-cols-4 gap-2'>
                {years.map(year => (
                  <Button
                    key={year}
                    variant='ghost'
                    size='default'
                    onClick={() => handleYearSelect(year)}
                    className={cn(
                      'w-full',
                      value instanceof Date &&
                        value.getFullYear() === year &&
                        'bg-primary text-primary-foreground'
                    )}
                  >
                    {year}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <>
              <Button
                variant='ghost'
                onClick={() => setIsYearView(true)}
                className='w-full justify-center py-2 font-normal bg-muted'
              >
                {selectedYear}
              </Button>
              <Calendar
                mode='single'
                selected={value}
                onSelect={date => {
                  if (date) {
                    onChange(new Date(date.getFullYear(), date.getMonth(), 1));
                  }
                }}
                defaultMonth={value || new Date()}
                initialFocus
              />
            </>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}
