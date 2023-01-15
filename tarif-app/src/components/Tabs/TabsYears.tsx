import { createStyles, Button } from '@mantine/core';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
    activeButton:{
        backgroundColor: '#0D3F3E',
        borderColor: '#0D3F3E',
        color: '#fff',
    },
    button:{
        color: '#0D3f3E',
        borderColor: '#0D3F3E',
    }
}));


export default function TabsYears(props: {status: any; setStatus: any}): JSX.Element {
    const { classes } =  useStyles();
    const { status, setStatus } = props;

    return (
        <Button.Group>
            <Button variant='outline' radius='md' size='xs' color='dark' value={2021} >2021</Button>
            <Button variant='outline' radius='md' size='xs' color='dark' value={2022}>2022</Button>
            <Button variant='outline' radius='md' size='xs' color='dark'>2023</Button>
            <Button variant='outline' radius='md' size='xs' color='dark' value={2024}>2024</Button>
            <Button variant='outline' radius='md' size='xs' color='dark' value={2025}>2025</Button>
        </Button.Group>
    );
}