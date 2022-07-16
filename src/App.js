import './App.css';
import { ActionCableConsumer } from 'react-actioncable-provider';
import React, { useState } from 'react'

function App() {
  const [room, setRoom] = useState([])

  const handleReceived = (message) => {
    setRoom(message)
  }

  console.log(room)

  return (
    <div className="App">
      <header className="App-header">
        <ActionCableConsumer channel={{ channel: 'RoomsChannel' }} onReceived={handleReceived}></ActionCableConsumer>
      </header>
    </div>
  );
}

export default App;
