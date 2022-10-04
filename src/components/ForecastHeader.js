import styles from '../styles/components/ForecastHeader.module.sass'

const ForecastHeader = () => {
  return (
    <div className="container p-4 my-4">
      <h1>Previsão do tempo</h1>
      <div className={styles.howItWorks}>
                <h4>Como funciona</h4>
                <ul>
                    <li>1. Esta aplicação consulta dados da API HG Brasil</li>
                    <li>2. Selecione uma cidade para obter detalhes sobre a previsão do tempo </li>
                    <li>3. O sistema informará os dados atuais, bem como a previsão do tempo para os próximos 5 dias</li>
                </ul>
            </div>
    </div>
  )
}

export default ForecastHeader