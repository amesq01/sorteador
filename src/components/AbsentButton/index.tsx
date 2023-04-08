import { Container } from './styles';

type AbsentButtonProps = {
  fncButton: ()=> void,
  buttonTitle: string,
  bgcolor:string,
}


export function AbsentButton({fncButton, buttonTitle, bgcolor}:AbsentButtonProps){
  return(
    <Container backgroundColor={bgcolor} onClick={fncButton}>
      {buttonTitle}
    </Container>
  );
}
