import { Container, Spinner, Title } from './styles';


export function OverlayLoading() {
  return (

    <Container>
      <Spinner />
      <Title>Aguarde... </Title>
    </Container>
  );
}
