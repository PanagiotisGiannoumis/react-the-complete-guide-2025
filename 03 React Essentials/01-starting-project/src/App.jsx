// Import an image from assets folder
import reactImg from './assets/react-core-concepts.png';

// Import CORE_CONCEPTS array from data.js
import { CORE_CONCEPTS } from './data.js';

// Create an array
const reactDescriptions = ['Fundamental', 'Crusial', 'Core'];

// Make a function to randomly generate a number between 0-2
function genRandomInt(max) {
  return Math.floor(Math.random()*(max + 1));
}

// Header Component
function Header() {
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

// Alternative way tocreate CoreConcept Component
// function CoreConcept(props) {
//   return(
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

// CoreConcept Component
function CoreConcept({title, image, description}) {
  return(
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

// App Component
function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Component with props(custom attributes) */}
            <CoreConcept 
            title={CORE_CONCEPTS[0].title} 
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
