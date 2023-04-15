export default function Characters(props){
    const {characters} = props
    
    return <div className="characters">
        <h1>
            personajes
        </h1>
        <span className="back-home">volver</span>
        <div className="container-characters">
             {characters.map((character, index) => (
                <div className="character-container" key={index}> <p> <img src={character.image}></img></p> </div>
             ))}
        
        
        </div>

    </div>
}