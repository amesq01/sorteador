import {
  Container,
  Label,
  ItemsContainer,
  Item,
} from './styles';

type TestProps = {
  data: Array<string>,
  label:string
}

export function ShowListJurors({ label,data}:TestProps){
  return(

    <Container>

      <Label>
        {label}
      </Label>

      <ItemsContainer>
        {
          data.map((item)=>

            <Item key={item}>
              {item}
            </Item>

          )
        }
      </ItemsContainer>

    </Container>
  );
}

