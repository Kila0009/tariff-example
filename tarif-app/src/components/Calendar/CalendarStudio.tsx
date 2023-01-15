import 'dayjs/locale/ru';
import { useState } from 'react';
import { RangeCalendar } from '@mantine/dates';
 
export default function CalendarStudio() {
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);

  return (
        <RangeCalendar size='lg' value={value} onChange={setValue} locale="ru" color='dark'/>
    );
}