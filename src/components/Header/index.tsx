import { Campo } from '../../styles'
import { Container } from './styles'

const Header = () => (
  <Container className="container">
    <ul>
      <li>
        <p>Nome:</p>
        <Campo type="text" />
      </li>
      <li>
        <p>Numero:</p>
        <Campo type="text" />
      </li>
      <li>
        <p>Email:</p>
        <Campo type="text" />
      </li>
    </ul>
    <button>Salvar</button>
    <button>Cancelar</button>
  </Container>
)

export default Header
