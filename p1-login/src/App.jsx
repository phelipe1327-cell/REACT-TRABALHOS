import { useState, useEffect } from 'react'
import styles from './styles.module.css'
import logo from './assets/logo-g4.png'

function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [verificar, setVerificar] = useState(false)
  const [mensagem, setMensagem] = useState('')

  useEffect(() => {
    if (verificar === false) return
    if (email === 'phelipe1327@gmail.com' && senha === '1234') {
      setMensagem('Login correto! Bem-vindo.')
    } else {
      setMensagem('Email ou senha incorretos.')
    }
  }, [verificar])

  function clicarEntrar() {
    setVerificar(!verificar)
  }

  return (
    <div className={styles.pagina}>

      <img src={logo} className={styles.logo} />

      <div className={styles.card}>

        <h2 className={styles.titulo}>Acesse ou crie sua conta G4</h2>

        <label className={styles.label}>Email *</label>

        <input
          className={styles.input}
          type="email"
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className={styles.label}>Senha *</label>
        <input
          className={styles.input}
          type="password"
          placeholder="Digite sua senha..."
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <p className={styles.link}>Esqueceu ou ainda não possui senha?</p>

        {mensagem && <p className={styles.mensagem}>{mensagem}</p>}

        <button className={styles.botao} onClick={clicarEntrar}>
          Entrar
        </button>

        <div className={styles.divisor}>
          <span>ou</span>
        </div>

        <button className={styles.botaoSSO}>Login com SSO</button>

        <p className={styles.rodape}>
          Ainda não possui uma conta? <span className={styles.linkDestaque}>Criar Conta</span>
        </p>

        <p className={styles.rodape}>
         Ao criar ou acessar sua conta, você está de acordo com os  <span className={styles.linkDestaque}>Termos de Uso e ciente da Política de Privacidade</span>
        </p>

      </div>
    </div>
  )
}

export default App