import img from '../assets/katya.jpg';
import './about.css'
function About(){
    return(
        <>
        <div className='centrar content'>
            <div className='centrar-card'>
            <img src={img}/>
            <h2>Katya Echazarreta</h2>
            <span>@katvoltage</span>
            <p className='description'>Katya Celeste Echazarreta González, conocida como Katya Echazarreta, es una ingeniera electrónica y divulgadora científica mexicana. En junio de 2022 se convirtió en la primera mujer mexicana en viajar al espacio exterior como parte de la misión Blue Origin NS-21 a bordo de una nave espacial New Shepard</p>
            </div>
        </div>
        </>
    )
}

export default About;