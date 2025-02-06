'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

interface MonthYearPickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const MonthYearPicker = React.memo(function MonthYearPicker({
  value,
  onChange,
  placeholder = 'Select date',
  disabled = false
}: MonthYearPickerProps) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  const [selectedMonth, setSelectedMonth] = React.useState<number>(
    value instanceof Date ? value.getMonth() : currentMonth
  );
  const [selectedYear, setSelectedYear] = React.useState<number>(
    value instanceof Date ? value.getFullYear() : currentYear
  );

  // Update local state when value prop changes
  React.useEffect(() => {
    if (value instanceof Date && !isNaN(value.getTime())) {
      setSelectedMonth(value.getMonth());
      setSelectedYear(value.getFullYear());
    }
  }, [value]);

  // Only trigger onChange when user explicitly changes a value
  const handleMonthChange = (value: string) => {
    const newMonth = parseInt(value);
    setSelectedMonth(newMonth);
    if (onChange) {
      const newDate = new Date(selectedYear, newMonth);
      onChange(newDate);
    }
  };

  const handleYearChange = (value: string) => {
    const newYear = parseInt(value);
    setSelectedYear(newYear);
    if (onChange) {
      const newDate = new Date(newYear, selectedMonth);
      onChange(newDate);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          className='w-full justify-start text-left font-normal'
          disabled={disabled}
        >
          <Calendar className='mr-2 h-4 w-4' />
          {value ? format(value, 'MMMM yyyy') : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full p-4' align='center'>
        <div className='w-full grid gap-4 '>
          <Select
            value={selectedMonth.toString()}
            onValueChange={handleMonthChange}
          >
            <SelectTrigger>
              <SelectValue placeholder='Select month' />
            </SelectTrigger>
            <SelectContent>
              {months.map((month, index) => (
                <SelectItem key={month} value={index.toString()}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={selectedYear.toString()}
            onValueChange={handleYearChange}
          >
            <SelectTrigger>
              <SelectValue placeholder='Select year' />
            </SelectTrigger>
            <SelectContent>
              {years.map(year => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </PopoverContent>
    </Popover>
  );
});
