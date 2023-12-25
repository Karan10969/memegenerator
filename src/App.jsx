import React, {useState} from 'react'
import MemesData from './MemesData'
import Nav from './Nav.jsx'
//import MemeTexts from './MemeTexts'
import MemeImage from './MemeImage'

export default function App(){

const [memeImage, setMeme] = useState("")
const [memeText, setMemeText] = useState({
      upperText: "",
      bottomText: ""
})
const [memeType, setMemeType] = useState()


function changeText(){
      const {name, value} = event.target

      setMemeText( prevTexts => ({
            ...prevTexts,
            [name]: value
      }) )
}

function buttonClicked(){
  const randomMeme = Math.floor((Math.random() * MemesData.length))

    
  setMeme(MemesData[randomMeme].img)
}

function changeImage(){
  const {name, value} = event.target


    for(let i=0; i<MemesData.length; i++)
    {
      if(MemesData[i].type === value){
        console.log(MemesData[i].type)
        setMeme(MemesData[i].img)
      }
      
    }
}


    return(
        <div className="meme-app">
          <Nav />
            <div className="meme-texts">
              
              <label htmlFor="topText">Enter top text</label>

              <input 
              id="topText"
              type="text" 
              name="upperText"
              onChange={changeText}
              value={memeText.upperText}
              />

              <label htmlFor="bottomText">Enter bottom text</label>

              <input 
              id="bottomText"
              type="text" 
              name="bottomText"
              onChange={changeText}
              value={memeText.bottomText}
              />

              <button onClick={buttonClicked}>Generate Random Meme Image</button>

              <select
              id="selectType"
              name="selectMeme"
              onChange={changeImage}
              >
                <option value="default">--Choose Emotion for Meme--</option>
                <option value="angry">Angry</option>
                <option value="sad">Sad</option>
                <option value="disappointed">Disappointed</option>
                <option value="laugh">Laugh</option>

              </select>

          </div>
          <MemeImage
            meme={memeImage}
            top={memeText.upperText}
            bottom={memeText.bottomText}
          />
        </div>
    )
}