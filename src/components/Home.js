import { Container } from "react-bootstrap"
import Navbar from "./Navbar"
import "../style/LandingPage.css"
import "../style/NavbarPage.css"

const Home = () => {
  return (
    <Container fluid className="p-0 bg-success bg-my">
      <main className="bg-main">
        <Navbar />
        <div class="container text-center border my-container">
          <div class="row align-items-center">
            <div class="col-6">Column</div>
            <div class="col-6">Column</div>
          </div>
        </div>
        <div>Home</div>
      </main>
      
    </Container>
  )
}

export default Home