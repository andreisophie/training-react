import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import DescriptionCard from './components/DescriptionCard/DescriptionCard';
import cat1 from './assets/cat1.jpg'
import cat2 from './assets/cat2.png'
import cat3 from './assets/cat3.jpg'
import catMeme from './assets/catMeme.jpg'
import FavoritesNotif from './components/FavoritesNotif/FavoritesNotif';
import { useState } from "react"

function App() {
  const [nrFavorites, setNrFavorites] = useState(0);

  function updateFavorites(value) {
    setNrFavorites(nrFavorites + value);
  }

  const catsArray=[
    {
      profilePic: cat1,
      name: "Cat McCattinson",
      description: "Meow meow",
      gender: "female",
      other: <div>Imi plac mangaielile!</div>
    },
    {
      profilePic: cat2,
      name: "John Clawlibus",
      description: "I don't need a description",
      gender: "male"
    },
    {
      profilePic: cat3,
      name: "Sony Pea",
      description: "Mrrrr",
      gender: "other",
      other: 
        <div>
          <div>I like memes!</div>
          <img src={catMeme}/>
        </div>
    }
  ]

  return (
    <div>
      <FavoritesNotif nrFavorites={nrFavorites}/>
      <div className="title">Cat Tinder</div>
      <div className="profiles d-flex flex-column">
        {catsArray.map((json) => 
          <DescriptionCard 
            profilePic={json.profilePic}
            name = {json.name}
            description = {json.description}
            gender = {json.gender}
            updateFavorites = {updateFavorites}
          >
            {json.other}
          </DescriptionCard>)}
      </div>
    </div>
  );
}

export default App;
