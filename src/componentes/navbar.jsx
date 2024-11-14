import './navbar.css'
import { Link } from 'react-router-dom'

function NavButton({href,text}){
    return(
        <Link className='btn-nav' to={href}>
        {text}
        </Link>
    )
}
function Navbar({links}){
    console.log({links})
    const tittle="Space"
    return (
        <nav class="navbar">
        <div>
        <h1>{tittle}</h1>
        </div>
        {
            links.map((link,id)=>(
                <NavButton href={link.href} text={link.text} key={id}/>
            ))
        }
        </nav>
    )
}
export default Navbar;