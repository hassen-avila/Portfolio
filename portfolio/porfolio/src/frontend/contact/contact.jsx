import Navbar from "../navbar/navbar";
import '../contact/contact.css'

export default function Contact(){
    return(
        <>
        <Navbar/>
        <div className="contact-conteiner">
            <div className="card">
            <h1 className="text-contact">Contactame</h1>
            <p className="text-contact-p">Email: <a href="mailto:hassenavilaquintero@gmail.com" target="_blank">hassenavilaquintero@gmail.com</a></p>
            <p className="text-contact-p">Wpp: <a href="tel:+5493548502388" target="_blank">+5493548502388</a></p>
            <p className="text-contact-p">Linkedin: <a href="https://www.linkedin.com/in/hassen-avila-quintero/" target="_blank">Hassen Avila</a></p>
            <h3 className="text-contact">Puede ver mi trabajo en</h3>
            <p className="text-contact-p">Github: <a href="https://github.com/hassen-avila" target="_blank">hassen-avila</a></p>
            <h3 className="text-contact">Redes Sociales</h3>
            <p className="text-contact-p">Instagram: <a href="https://www.instagram.com/avila_hassen/" target="_blank">avila_hassen</a></p>
            </div>
        </div>
        </>
    )
}