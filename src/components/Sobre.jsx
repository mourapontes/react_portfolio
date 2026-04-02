function Sobre() {
  return (
    <section id="sobre" aria-labelledby="titulo-sobre">
      <div className="section-inner">
        <h2 id="titulo-sobre">Sobre Mim</h2>
        <div className="sobre-conteudo">
          <div className="avatar" aria-hidden="true">RM</div>
          <div className="sobre-texto">
            <p>
              Olá! Sou <strong>Rangel Moura Pontes</strong>, apaixonado por
              tecnologia e criação de soluções web.
            </p>
            <p>
              Estudante de{' '}
              <strong>Tecnologia de Sistemas para Internet</strong> pela
              UESPI/NEAD, sempre buscando aprender novas tecnologias e
              construir projetos que solucionem problemas reais.
            </p>
            <ul className="habilidades">
              <li>HTML5 &amp; CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Responsividade</li>
              <li>Git &amp; GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre
