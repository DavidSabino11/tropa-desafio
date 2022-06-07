import '../styles/global.css'
import '../styles/pages/login.css'
import logo from '../image/logo.svg'
import notebook from '../image/notebook.svg'
import bemVindo from '../image/bemVindo.svg'
import rectangleBlack from '../image/RectangleBlack.svg'
import { Link } from 'react-router-dom'

function Login(){
    return(
        <div id='page-login'>
        <div className="content-wrapper">
          <div className="text-wrapper">
            <img src={logo} alt="Logo" />
            
            <img src={bemVindo} className="bemVindo" alt="bemVindo" />
  
            <input type="text" placeholder=' Digite seu email'></input>
            <input type="text" placeholder=' Digite sua senha'></input>

            <Link to="/dashboard">
                <button>Acessar</button>
            </Link>
          </div>
          <div className="img-wrapper">
          <div className="not">
              <img src={notebook} alt="not" />
            </div>
            <div className="rec">
              <img src={rectangleBlack} alt="not" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;