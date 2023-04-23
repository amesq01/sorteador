import {
  Container,
  Label,
  ItemsContainer,
  Item,
} from './styles';

type TestProps = {
  data: Array<string>,
  label?: string,
  borderColor?: boolean,
}

export function ResultItem({ label, data, borderColor }: TestProps) {
  return (
    <>
      {
        data.length > 0 &&
        <Container border={borderColor}>

          <Label>
            {label}
          </Label>

          <ItemsContainer>

            {
              data.map((item, index) =>

                <Item key={item}>
                  {item}
                </Item>

              )
            }
          </ItemsContainer>

        </Container>
      }
    </>
  );
}

