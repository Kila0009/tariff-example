import { Center, Container, Paper } from "@mantine/core";

export interface LayoutProps {
    children: JSX.Element
};

export function Layout({children}: LayoutProps): JSX.Element {
    return (
        <Container>
            <Paper>
                {children}
            </Paper>
        </Container>
    );
}