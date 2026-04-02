function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <p className="footer-nome">
          Rangel<span>.dev</span>
        </p>
        <nav className="footer-links" aria-label="Links sociais">
          <a
            href="https://github.com/mourapontes"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
        <p className="footer-copy">© 2026 — Feito com React &amp; Vite</p>
      </div>
    </footer>
  )
}

export default Footer
