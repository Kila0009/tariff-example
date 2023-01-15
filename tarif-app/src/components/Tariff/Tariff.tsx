import { Paper, Flex } from '@mantine/core';
import TabsTariff from '../Tabs/TabsTariff';
import TabsYears from '../Tabs/TabsYears';

export default function TariffComponent() {
    return (
        <Paper 
            shadow="lg" 
            radius="md" 
            p="md" 
            withBorder
            sx={{width: 2000}}>
            <Flex
                mih={50}
                justify="flex-start"
                align="center"
                direction="row">
                    <TabsYears />
            </Flex>
                <TabsTariff />
        </Paper>
    );
}