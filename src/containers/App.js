import React,{useState,useEffect} from "react";
import SearchBox from '../components/SearchBox';
import CardList from "../components/CardList";
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';

function App() {
    const[robots,setRobots] = useState([])
    const[searchfield,setsearchfield] = useState('')
    const[count,setCount] = useState(0)

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {setRobots(users)});
        console.log(count)
    },[count])

    const onSearchChange = (event) => {
        setsearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    console.log(robots,searchfield)
        return !robots.length ?
            <h1>Loading Results</h1>:
            (
                <div className='tc'> 
                    <h1 className='f2'>Welcome to the Robo Family</h1>
                    <button onClick={() => setCount(count+1)}>Hey!</button>
                    <SearchBox searchChange={onSearchChange}/>
                    <ErrorBoundry>
                        <Scroll>
                    <CardList robots={filteredRobots}/>
                        </Scroll> 
                    </ErrorBoundry>    
                </div>
            );  
    }           
export default App;