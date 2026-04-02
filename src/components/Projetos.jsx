const projetos = [
  {
    id: 1,
    titulo: 'Portfólio Pessoal',
    descricao:
      'Repositório deste mesmo portfólio, desenvolvido com HTML5, CSS3 e JavaScript puro, sem frameworks externos.',
    tag: 'Frontend',
    link: 'https://github.com/mourapontes/react_portfolio',
  },
  {
    id: 2,
    titulo: 'Avalia-O-IMC',
    descricao:
      'Calculadora de IMC que gera sugestões personalizadas de cardápio e atividades físicas de acordo com a faixa de IMC do usuário.',
    tag: 'Saúde & Web App',
    link: 'https://mourapontes.github.io/Avalia-o-IMC/',
  },
  {
    id: 3,
    titulo: 'Rádios Brasil FM',
    descricao:
      'Aplicativo de rádio web com as principais rádios FM brasileiras em transmissão ao vivo 24h. Conta com player integrado, interface intuitiva e opção de compartilhamento nas redes sociais.',
    tag: 'Streaming & Áudio',
    link: 'https://mourapontes.github.io/R-dios-Brasil-FM/',
  },
]

function Projetos() {
  return (
    <section id="projetos" aria-labelledby="titulo-projetos">
      <div className="section-inner">
        <h2 id="titulo-projetos">Meus Projetos</h2>
        <div className="grid-projetos">
          {projetos.map((projeto) => (
            <div key={projeto.id} className="card">
              <span className="card-tag">{projeto.tag}</span>
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Projeto →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projetos
