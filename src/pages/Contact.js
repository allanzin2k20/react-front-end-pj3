import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contact.css';
import MainContainer from '../components/MainContainer'
import {useState, useEffect} from 'react'

const Contact = () => {

const [count, setCount] = useState(0)
const [name, setName] = useState('breno')

useEffect( () =>{
  console.log(count)
},[count])

  return (
    <>
         <Header />
      <MainContainer>
        <h1>Contact</h1>
        <h1>My number is: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Plus 1</button>
        <h1>My name is: {name}</h1>
        <button onClick={() => setName('breno')}>Plus 1</button>
        <button onClick={() => setName('Allan')}>Plus 2</button>
      </MainContainer>
      <Footer />
  </>
 
  )
}

export default Contact                                                 