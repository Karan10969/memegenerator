
export default function MemeImage(props){

    return(
        <div className="meme-image">
            <img src={props.meme} className="meme"/>
            <h3 className="top-text">{props.top}</h3>
            <h3 className="bottom-text">{props.bottom}</h3>
        </div>
    )
}