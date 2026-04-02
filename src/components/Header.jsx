import { useState } from 'react'

function Header({ secaoAtiva, onNavegar }) {
  const [menuAberto, setMenuAberto] = useState(false)

  function handleNavLink(alvo) {
    onNavegar(alvo)
    setMenuAberto(false)
  }

  return (
    <header>
      <div className="header-inner">
        <h1 className="logo">
          Rangel<span>.dev</span>
        </h1>
        <button
          className={`hamburger${menuAberto ? ' ativo' : ''}`}
          aria-label="Abrir menu"
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav aria-label="Menu principal" className={menuAberto ? 'nav-aberto' : ''}>
          <ul>
            <li>
              <button
                className={`nav-btn${secaoAtiva === 'sobre' ? ' ativo' : ''}`}
                onClick={() => handleNavLink('sobre')}
              >
                Sobre Mim
              </button>
            </li>
            <li>
              <button
                className={`nav-btn${secaoAtiva === 'projetos' ? ' ativo' : ''}`}
                onClick={() => handleNavLink('projetos')}
              >
                Meus Projetos
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
