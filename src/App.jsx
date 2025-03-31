import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {
    const [searchState, setSearchState] = useState('');

    return (
        <>
            <Navbar searchState={searchState} setSearchState={setSearchState}/>
            <Main searchState={searchState}/>
        </>
    )
}

export default App
