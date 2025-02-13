// Import an image from assets folder
import reactImg from '../../assets/react-core-concepts.png';

// Import Header.css file
import './Header.css'

// Create an array
const reactDescriptions = ['Fundamental', 'Crusial', 'Core'];

// Make a function to randomly generate a number between 0-2
function genRandomInt(max) {
  return Math.floor(Math.random()*(max + 1));
}

// Header Component
export default function Header() {
    // Create a variable named description passing that random index to it
    const description = reactDescriptions[genRandomInt(2)];
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }