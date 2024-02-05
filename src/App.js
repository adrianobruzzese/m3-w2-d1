import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./components/MyNav"; 
import { Container } from "react-bootstrap";
import WelcomeMessage from "./components/Welcome"; 
import BookReviewsLayout from "./components/CommentsGrid"; 
import Footer from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <NavigationBar brand="EpiBooks" slogan="Explore Your Next Favorite Book!" />
      <WelcomeMessage />
      <Container>
        <BookReviewsLayout />
      </Container>
      <Footer
        leftColumn={
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
          </ul>
        }
        middleColumn={
          <ul>
            <li>Authors</li>
            <li>Book Catalog</li>
            <li>Publishers</li>
          </ul>
        }
        rightColumn={
          <ul>
            <li>Help & Support</li>
            <li>Our Blog</li>
            <li>Careers</li>
          </ul>
        }
      />
    </div>
  );
}

export default App;

