import { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


export default function Nav({setCount,setResults,setArtist}){
    const [search, setSearch] = useState('');
    let history = useHistory();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const res = await axios.get(`https://itunes.apple.com/search?term=${search}&media=music&entity=album&attribute=artistTerm&limit=500`);
            setCount(res.data.resultCount)
            setResults(res.data.results)
            setArtist(search)
            history.push("/CardContrainer");
            
        }catch (err) {
            console.error(err)
        }
       
    }

    return(
        
        <div id="nav">
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <input onChange={(e) => setSearch(e.target.value)} name="search" type="text"  placeholder="Search..."/>
            <input type="submit" value="Search"/>
          </form>
        </div>
    
    )
}