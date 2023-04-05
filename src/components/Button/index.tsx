
import { Container, DrawnJuror} from './styles';

type ButtonProps = {
  fnc: ()=>void,
  title: string
}

export function Button({fnc, title}:ButtonProps){
  return(
    <Container onClick={fnc}>
      <DrawnJuror>{title}</DrawnJuror>
    </Container>
  );
}
