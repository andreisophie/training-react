import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import DescriptionCard from './components/DescriptionCard/DescriptionCard';
import cat1 from './assets/cat1.jpg'
import cat2 from './assets/cat2.png'
import cat3 from './assets/cat3.jpg'
import catMeme from './assets/catMeme.jpg'

function App() {
  const catsArray=[
    {
      profilePic: cat1,
      name: "Cat McCattinson",
      description: "Meow meow",
      other: <div>Imi plac mangaielile!</div>
    },
    {
      profilePic: cat2,
      name: "John Clawlibus",
      description: "Scrrrch"
    },
    {
      profilePic: cat3,
      name: "Sony Pea",
      description: "Mrrrr",
      other: 
        <div>
          <div>I like memes!</div>
          <img src={catMeme}/>
        </div>
    }
  ]

  return (
    <div>
      <div className="title">Cat Tinder</div>
      <div className="profiles d-flex flex-column">
        {catsArray.map((json) => 
          <DescriptionCard 
            profilePic={json.profilePic}
            name = {json.name}
            description = {json.description}
          >
            {json.other}
          </DescriptionCard>)}
      </div>
    </div>
  );
}

export default App;
