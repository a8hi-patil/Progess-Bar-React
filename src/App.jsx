import { useState } from 'react'
import './App.css'
function App() {
  const [colors, setColors] = useState(['red', 'green', 'black', 'grey', 'blue', 'white', 'orange'])
  let [count, setCount] = useState(colors.length)
  const [bgColor, setBgColor] = useState('grey')
  const addColor = (e) => {
    e.preventDefault()
    count++;
    setColors([...colors, e.target[0].value])
    setCount((prev) => prev + 1)

  }
  const changeH1andH5 = () => {

    document.getElementsByTagName('h1')[0].style.color = 'black';
    document.getElementsByTagName('h5')[0].style.color = 'black';
    document.getElementsByTagName('h5')[1].style.color = 'black';
  }
  const changeH1andH52 = () => {

    document.getElementsByTagName('h1')[0].style.color = 'white';
    document.getElementsByTagName('h5')[0].style.color = 'white';
    document.getElementsByTagName('h5')[1].style.color = 'white';
  }
  return (
    <>
      <div className="screen" style={{ backgroundColor: bgColor }} >
        <div>
          <h1>Bg Changer</h1>
          <h5>Avaible colors {count}</h5>
          <form onSubmit={addColor} ><h5>Add Color</h5>
            <input type="text" name="col" id="col" />
            <button type='submit' >Submit</button>
          </form></div>
        <div className='dashboard' style={{ backgroundColor: bgColor }} >
          {colors.map((color) => {
            if (color === 'black') {
              return <button
                onMouseOver={() => {
                  setBgColor(color)
                  changeH1andH52()
                }} key={color}
                style={{ backgroundColor: color, color: 'white' }}
              > {color}</button>
            } else if (color === 'white') {
              return <button
                onMouseOver={() => {
                  setBgColor(color)
                  changeH1andH5()
                }} key={color}
                style={{ backgroundColor: color, color: 'black' }}
              > {color}</button>
            } else {
              return <button
                onMouseOver={() => setBgColor(color)} key={color}
                style={{ backgroundColor: color }}
              > {color}</button>
            }
          })}
        </div>

      </div >



    </>
  )
}

export default App
