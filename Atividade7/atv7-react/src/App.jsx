import './App.css'

import Header from './components/Header'
import Navigation from './components/Navigation'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

// 👇 IMPORTANDO IMAGEM LOCAL
import praia from './assets/praia.jpg'

function App() {

  const post = {
    titulo: "Minha viagem ao Caribe",
    data: "10 de Abril de 2026",
    conteudo: [
      "Foi uma viagem incrível com praias paradisíacas.",
      "A água era cristalina e o clima perfeito.",
      "Recomendo muito esse destino!"
    ],
    imagem: praia,
    legenda: "Praia no Caribe"
  }

  const linksRelacionados = [
    "Viagem para o Havaí",
    "Conhecendo Maldivas",
    "Praias do Nordeste"
  ]

  return (
    <>
      <Header />
      <Navigation />

      <main>
        <Article post={post} />
      </main>

      <Sidebar links={linksRelacionados} />

      <Footer />
    </>
  )
}

export default App