
export default function Card(props){
    const {img, title} = props
    
    return(
        
            <div className="card">
                <img className="card-avatar" src={img} alt="pic"/>
                <p>{title}</p>
            </div>
        
    )
}