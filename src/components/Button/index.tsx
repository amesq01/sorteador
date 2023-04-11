
import { Container, DrawnJuror } from './styles';

type ButtonProps = {
  fnc: () => void,
  title: string,
  font?: boolean,
  paddingHorizontal?: boolean,
}

export function Button({ fnc, title, font, paddingHorizontal }: ButtonProps) {
  return (
    <Container font={font} onClick={fnc} paddingHorizontal={paddingHorizontal}>
      <DrawnJuror>{title}</DrawnJuror>
    </Container>
  );
}
