import { useState } from 'react';
import { Modal, Button, Group, Flex, Text, createStyles, Notification, Space, Badge, Divider } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  notify: {
    backgroundColor: "#25262B"
  },
  text: {
    color: "#ffff"
  },
  

}));

export default function ModalAccept() {
  const [opened, setOpened] = useState(false);
  const { classes } =  useStyles();

  return (
    <>
      <Modal
        radius='lg'
        overflow="inside"
        size='lg'
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={opened}
        onClose={() => setOpened(false)}
        title='Цены, RUB'
      >
        <Divider/>
        <Space h='xs' />

        <Flex justify='center'>
          <Notification className={classes.notify} icon={<IconInfoCircle size={18} />} color="dark"  radius='lg' disallowClose>
            <Text className={classes.text}>Если поле пустое, соответствующие значения не будут изменены.</Text>
          </Notification>
        </Flex>
        <Space h='xs' />

        <Flex 
            mih={50}
            gap="xs"
            justify="flex-start"
            align="center"
            direction="row"
            wrap="wrap">
            <Text>Мини Студия 2сп</Text> 
            <IconInfoCircle size={15} />
            <Badge color='dark'>ChM</Badge>
        </Flex>

        <Flex 
            mih={50}
            gap="xs"
            justify="space-around"
            align="center"
            direction="row"
            wrap="wrap"
          > 
          <Text>SomeTHing</Text>
          <Button>pp</Button>


        </Flex>
        
        
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Press</Button>
      </Group>
    </>
  );
}