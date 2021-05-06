import React, { useState } from 'react';
import axios from 'axios';
import Card from '../../components/card'
import Counter from '../../components/counter'


export default function Nav(){
    const [search, setSearch] = useState('');
    const [results, setResults] = useState();
    const [count, setCount] = useState();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const res = await axios.get(`https://itunes.apple.com/search?term=${search}&media=music&entity=album&attribute=artistTerm&limit=500`);
            setCount(res.data.resultCount)
            setResults(res.data.results)
            
        }catch (err) {
            console.error(err)
        }
       
    }

    return(
        <>
        <div id="nav">
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <input onChange={(e) => setSearch(e.target.value)} name="search" type="text"  placeholder="Search..."/>
            <input type="submit" value="Search"/>
          </form>
        </div>
        <Counter count={count} artist={search}/>
        <main>
            <div id="container-card">
            {results && results.map((i)=>(
                <Card 
                    key={i.collectionId}
                    img={i.artworkUrl60}
                    title={i.collectionName}   
                /> 
                ))}
            </div>
        </main>
          </>
    )
}