import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Footer from './components/Footer'

function App() {
  const [secaoAtiva, setSecaoAtiva] = useState(null)

  function handleNavegar(alvo) {
    setSecaoAtiva((atual) => (atual === alvo ? null : alvo))
  }

  useEffect(() => {
    if (!secaoAtiva) return
    const el = document.getElementById(secaoAtiva)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [secaoAtiva])

  return (
    <>
      <Header secaoAtiva={secaoAtiva} onNavegar={handleNavegar} />
      <Hero />
      <main>
        {secaoAtiva === 'sobre' && <Sobre />}
        {secaoAtiva === 'projetos' && <Projetos />}
      </main>
      <Footer />
    </>
  )
}

export default App
