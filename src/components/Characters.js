import '../App.css'
export default function Characters(props){
    const {characters ,setCharacters} = props
    const resetCharacters = () => {
           setCharacters(null)
    }
    return <div className="characters">
        <h1>
            personajes
        </h1>
        <span className="back-home" onClick={resetCharacters}>volver</span>

        <div className="container-characters"  style={{background:"black"}} >
             {characters.map((character, index) => (
                <div className="character-container" id="contenedor" key={index}> <h1 style= {{color:"#a47148"}}  >{character.name} </h1> 
                <div>  <img src={character.image} ></img> <br></br>
                
                <i style={{color:"gray"}}> origen: {character.origin.name}</i>  <br></br>
                <i style={{color:"black"}}> episodios de aparicion: {character.episode.length}</i>  <br></br>
                <i style={{color:"withe"}}> especie: {character.species}</i>  <br></br>
                <i style={{color:"#bc6c25"}}> genero: {character.gender}</i>  <br></br>
                <i style={{color:"#588157"}}>origen: {character.origin.name}</i>   <br></br>
                <i style={{color:"#0077b6"}}>status:</i> <i>
                    {character.status === "Alive" ?(
                        <>   <span className="alive" />vivo
                        </>
                    ) : (
                        <>
                         <span className="dead" />muerto
                        </>
                    )
                }
                    
                    
                 </i>  <br></br>
                 </div>

                
                
                 </div>
             ))}
        
        
        </div>

    </div>
}