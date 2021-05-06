import Card from '../../components/card'

export default function CardContainer({results}){
    return(
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
    )
}