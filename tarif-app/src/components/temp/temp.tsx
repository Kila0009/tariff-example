import React, { useState } from 'react';
import { Table } from '@mantine/core';

interface MonthProps {
    year: number;
    month: number;
}

const Month: React.FC<MonthProps> = ({ year, month }) => {
    const [date, setDate] = useState(new Date(year, month));

    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const monthName = date.toLocaleString('default', { month: 'long' });
    const days = Array.from(Array(daysInMonth).keys()).map(day => new Date(year, month, day + 1));
    const dayNames = days.map(day => day.toLocaleString('default', { weekday: 'short' }));
    const dayNumbers = days.map(day => day.getDate());


    
    return (
        <Table striped highlightOnHover withBorder withColumnBorders fontSize='md'>
            <thead>
                <tr>
                    <th colSpan={31}>{monthName} {year}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {dayNames.map((day, index) => (
                        <td key={index}>{day} {dayNumbers[index]}</td>
                    ))}
                </tr>
            </tbody>
        </Table>
    );
}

export default Month;
