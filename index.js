import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Home(){
  return (
    <div>
      <Navbar />
      <main className="container">
        <div className="card">
          <h1>Welcome to WebSite100</h1>
          <p className="muted">Plantilla inicial lista para desarrollo con Next.js</p>
          <p>This project includes a fake login page and a protected dashboard example.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
