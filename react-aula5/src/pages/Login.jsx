import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Login = () => {
  return ( 
    <>
        <div>
          <form>
            <h3>Seja Bem-vindo</h3>
            <label htmlFor="email">Email</label>
            <InputText
              id='email'
              type='email'
              placeholder='email@email.com'/>
            <label htmlFor="senha">Senha</label>
            <IconField>
                  <InputIcon InputIcon className="pi pi-eye"> </InputIcon>
                  <InputText
                    id='senha'
                    placeholder='********'
                  />
            </IconField>
            <Button 
              label="Entrar"
              type='submit'
            />
          </form>
        </div>
    </>
   );
}
 
export default Login;