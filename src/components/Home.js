import { Container } from "react-bootstrap"
import Navbar from "./Navbar"
import "../style/LandingPage.css"
import "../style/NavbarPage.css"

const Home = () => {
  return (
    <Container fluid className="p-0 bg-success bg-my">
      <main className="bg-main">
        <Navbar />
        <div className="container text-center border my-container">
          <div className="row align-items-center my-con-col">
            <div className="col-6 border">Column</div>
            <div className="col-6 border">Column</div>
          </div>
        </div>
        <div>Home</div>
      </main>
      
    </Container>
  )
}

export default Home