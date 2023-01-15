import { Layout } from '@/components/Layout/Layout';
import TariffComponent from '@/components/Tariff/Tariff';
import { Center } from '@mantine/core';



export default function TariffIndexPage(): JSX.Element{
    return(
        <Layout>
            <Center style={{ height: 'max-content' }}>
                <TariffComponent />
            </Center>
        </Layout>
    );
}