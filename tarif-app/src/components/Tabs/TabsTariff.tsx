import ModalAccept from '@/utils/modalAccept';
import { Badge, Tabs, Button } from '@mantine/core';
import CalendarStudio from '../Calendar/CalendarStudio';
import Tempp from '../temp/temp1';

export default function TabsTariff(): JSX.Element {
  return (
    <Tabs color="dark" radius='md' variant="outline" defaultValue="Studio">
      <Tabs.List>
        <Tabs.Tab 
            value="Studio"
            rightSection={<Badge color="dark" size="sm" radius="lg" variant="filled">ChM</Badge>}>
                Студия 2сп  
        </Tabs.Tab>

        <Tabs.Tab 
            value="Deluxe"
            rightSection={<Badge color="dark" size="sm" radius="lg" variant="filled">ChM</Badge>}>
                Делюкс 2сп
        </Tabs.Tab>
        
        <Tabs.Tab
            value="Halflux"
            rightSection={<Badge color="dark" size="sm" radius="lg" variant="filled">ChM</Badge>}>
                Полулюкс 2+2
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="Studio" pt="xs">
        <CalendarStudio />
      </Tabs.Panel>

      <Tabs.Panel value="Deluxe" pt="xs">
          <Tempp />
      </Tabs.Panel>

      <Tabs.Panel value="Halflux" pt="xs">
        <ModalAccept />
      </Tabs.Panel>
    </Tabs>
  );
}