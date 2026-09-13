import Header from './components/Header'


import Hero from './components/Hero'

import Card from './components/Card'

import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <Hero />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex justify-center gap-6">
  <Card />
  <Card />
  <Card />
</div>
      </section>
      <Footer />
    </>
  )
}

export default App