import React, {useState, useRef, useEffect, createContext} from 'react';
import './App.css';
import Resize from './Resize'
import track1 from './file.mp3';
import Audio from './Audio';
import useToggle from './useToggle'
import Child1 from './Child1';
import Reducer from './Reducer';

export const NameContext = createContext()

function App({name}) {
  // const [mounted, toggleMounted] = useState(true)
  // const audioRef = useRef(null)
  // useEffect(() => {
  //   audioRef.current.play();
  // }, [])

  // const handleClick = () => {
  //   audioRef.current.pause();
  // }

  // const handlePlaying = () => {
  //   audioRef.current.play();
  // }
  // const [isVisible, toggleIsVisisble] = useToggle(true)
  // const [isVisible2, toggleIsVisisble2] = useToggle(false)
  const [count, setCount] = useState(1)
  const [showEmoji, toggleShowEmoji] =useState(false)
  return (
    <div className="App">
      {/* {mounted && <Resize/>}
      <button onClick = {() => toggleMounted(!mounted)}>Toggle Mounted</button> */}
      {/* <audio src={track1} ref={audioRef} />
      <button onClick={handleClick}>Stop Playback</button>
      <button onClick={handlePlaying}>Start playing</button> */}
      {/* <Audio ref={audioRef}/> */}

      {/* {isVisible && <h1>Here I Am</h1>}
      <button onClick={() => toggleIsVisisble(!isVisible)}>Show/Hide</button>
      {isVisible2 && <h1>I'm here too!</h1>}
      <button onClick={() => toggleIsVisisble2(!isVisible2)}>Show/Hide</button> */}

      {/* {isVisible && <h1>Here I Am</h1>}
      <button onClick={toggleIsVisisble}>Show/Hide</button>
      {isVisible2 && <h1>I'm here too!</h1>}
      <button onClick={toggleIsVisisble2}>Show/Hide</button> */}

       {/* <NameContext.Provider value={name}>
         <Child1/>
       </NameContext.Provider> */}

      {/* <h1>{'guiatr'.repeat(count)}</h1>
      <button onClick={() => {
        toggleShowEmoji(true)
        setCount(count + 1)}}>Add Guitar</button>
      <button onClick={() => {
        toggleShowEmoji(false)
        setCount(count - 1)}}>Remove Guitar</button>
      <button onClick={() => {
        toggleShowEmoji(false)
        setCount(1)}}>Reset</button>
      {showEmoji && <h2>'Happy'</h2>} */}

      <Reducer/>
    </div>
  );
}

App.defaultProps = {
  name:'gregg'
}

export default App;
