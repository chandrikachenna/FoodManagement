import React from 'react'
import { Link } from 'react-router-dom'
import { Text } from './styledComponents'

function App() {
   return (
      <div className='App'>
         <header className='App-header'>
            <a
               className='App-link'
               href='https://reactjs.org'
               target='_blank'
               rel='noopener noreferrer'
            >
               Learn React
            </a>
            <Link to='/food-management/home'>
               <Text>Food Management</Text>
            </Link>
         </header>
      </div>
   )
}

export default App
