import { Container } from "react-bootstrap"
import Navbar from "./Navbar"

const Home = () => {
  return (
    <Container>
      <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
        <Navbar />
        <div>Home</div>
      </main>
      
    </Container>
  )
}

export default Home