import Navbar from "../navbar/navbar";
import '../pages/pages.css'

export default function Pages(){

    return(
        <>
        <Navbar/>
        <div className='pages-conteiner'>
            <h1 className="text-title" style={{padding:10}}>Aplicaciones Web Desarrolladas</h1>
            <div className="page-conteiner">
                <div className="page-info-conteiner">
                    <div className="text-page-conteiner">
                        <h2 className="text-title">MINDY PETSHOP</h2>
                        <p className="text-page">Desarrollo en Front-end, trabajo en equipo,
                            Se utilizo Html, Css y JavaScript</p>
                        <p className="text-page">Creada desde cero, participe del proyecto como lider de grupo. Se trata de una aplicacion web "e-commerce"  de un comercio destinado a mascotas.</p>
                        <p className="text-page"> Si desea visitar la pagina, haga click en la imagen</p>
                    </div>
                    <div className="image-page-conteiner">
                        <a href="https://hassen-avila.github.io/Check-Mindy/index.html" target="_blank">
                        <img className="image-page" src="https://i.postimg.cc/26jWkDYK/Mindy.png" alt="Mindy.png"  />
                        </a>
                    </div>
                </div>
            </div>
            <div className="page-conteiner">
                <div className="page-info-conteiner">
                <div className="image-page-conteiner">
                        <a href="https://mytinerary-hassen.herokuapp.com/" target="_blank">
                        <img className="image-page" src="https://i.postimg.cc/SQHW8jp6/Mytinerary.png" alt="Mytinerary.png"  />
                        </a>
                    </div>
                    <div className="text-page-conteiner">
                        <h2 className="text-title">MYTINERARY VIAJES</h2>
                        <p className="text-page">Desarrollo Front-end & Back-end, Trabajo
                            Individual, Se utilizo JavaScript y MongoDB</p>
                        <p className="text-page">Se trata de una aplicacion web que esta destinada a itinerarios de viajes. En esta oportunidad se creo un apartado de logueo por mail o por cuenta de google, que mediante una base de datos, los usuarios pueden generar, modificar o eliminar comentarios y dar likes</p>
                        <p className="text-page"> Si desea visitar la pagina, haga click en la imagen</p>
                    </div>

                </div>
            </div>  
            <div className="page-info-conteiner">
                    <div className="text-page-conteiner">
                        <h2 className="text-title">TECNOCEL</h2>
                        <p className="text-page">Desarrollo Front-end & Back-end, Trabajo
                            Grupal, Se utilizo JavaScript y MongoDB</p>
                        <p className="text-page">Creada desde cero. Se trata de una aplicacion web "e-commerce"  de un comercio destinado a articulos gammers.</p>
                        <p className="text-page">Se creo un perfil dedicado al administrador para que pueda tener control total sobre los articulos a la venta.</p>
                        <p className="text-page"> Si desea visitar la pagina, haga click en la imagen</p>
                    </div>
                    <div className="image-page-conteiner">
                        <a href="https://tecnocelweb.herokuapp.com/" target="_blank">
                        <img className="image-page" src="https://i.postimg.cc/7PRp216K/Tecnocel.png" alt="Tecnocel.png"  />
                        </a>
                    </div>
            </div>
            <h2 className="text-title" style={{paddingTop:30, paddingBottom:40}}>Me encuentro en continuo desarrollo para poder mejorar mis habilidades al maximo</h2>
        </div>
        </>
    )
}