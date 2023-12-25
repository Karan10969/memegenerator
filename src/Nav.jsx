import NavLogo from './assets/meme-nav.png'

export default function Nav(){

    return(
        <nav className="navbar">
            <img src={NavLogo} className="nav-image"/>
            <h2>Meme-Generator</h2>
            <h3>React Project</h3>
        </nav>
    )
}