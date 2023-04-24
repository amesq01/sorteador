import {
  Container,
  Label,
  ItemsContainer,
  Item,
} from './styles';

import { ClipboardText } from '@phosphor-icons/react';
import { ToastContainer, toast } from 'react-toastify';


type TestProps = {
  data: Array<string>,
  label?: string,
  borderColor?: boolean,
}



export function ResultItem({ label, data, borderColor }: TestProps) {

  function notifyToast() {
    toast.success('Copiado', {
      position: 'top-right',
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  }

  console.log(data);

  function handleClipBoard() {
    if (data.length > 0) {
      const string = data.join(', ');
      navigator.clipboard.writeText(string);
      notifyToast();
    }
  }



  return (
    <>

      {
        data.length > 0 &&
        <Container border={borderColor}>

          <Label >
            {label}
            <div>
              <ClipboardText size={20} onClick={handleClipBoard} style={{ cursor: 'pointer' }} />
            </div>
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

      <ToastContainer />

    </>
  );
}
