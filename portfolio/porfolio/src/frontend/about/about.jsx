import '../about/about.css'
import Navbar from '../navbar/navbar'

export default function About(){

    return(
        <>
        <Navbar/>
        <div className='about-conteiner'>
            <div className='info-conteiner'>
            <div className='image'>
            <img className='image' src="https://avatars.githubusercontent.com/u/106329338?s=400&u=57e4c7f73893ee4ae472e74b531219d788b67b1a&v=4" alt="foto-hassen" />
            </div>
            <div className='text-container'>
                <h1 className='text-title'>Bienvenido! </h1>
                <p className='text-about'>¿Sabías que 87.2% Usa Git como control de versiones de sus aplicaciones web? Ahora soy uno de ellos!!😀 Me presento!! Mi nombre es Hassen y tengo 21 años. Soy desarrollador Full-stack Mern 💻, me fascina el mundo de la programación. Desde chico me gusta innovar, solucionar problemas, aprender y aplicar conceptos que voy aprendiendo.
                                          Egresado en desarrollo web en MindHub, el cual tiene un bootcamp con metodología scrum, en el mismo curse más de 700 horas simulando un entorno laboral. Desarrolle aplicaciones web y móviles, ya sea de manera individual como en grupo. Fui líder en un challenge lo que me dio una buena experiencia en tema de organización.
                                          Me encanta aprender sobre nuevas tecnologías y disfruto el llevar a cabo un proyecto, también me interesa la robótica por lo que me gusta aprender lenguajes como C++ o Arduino con el fin de poder continuar aprendiendo…
                                          Disfruto el ayudar a las personas compartiendo mis conocimientos y aprendiendo de las personas con las que me relaciono, espero tener un buen impacto en todos…
                                          Desde ya quiero dejar por sentado que voy a brindar todos mis conocimientos para resolver los obstáculos que se presenten y poner toda mi voluntad para seguir aprendiendo!</p>
            </div>
            </div>
            
            <div className='info-conteiner'>
            <div className='text-container'>
                <h2 className='text-subtitle'>¿Tecnologias que utilizo?</h2>
                <h3 className='text-subtitle'>Full-Stack Developer | MongoDB | Express | ReactJS | NodeJS | ReactNative</h3>
                <p className='text-about'>Al iniciarme en el mundo IT, desarrolle aplicaciones web con HTML5 y CSS puro, luego al Emprender el camino a MERN, pude desarrollar aún más mis conocimientos pudiendo demostrarlos al desarrollar tanto Back-end como Front-end. Siendo este último el área de mi agrado. Cabe destacar que tengo capacidades para poder desempeñarme tanto en ambas disiplinas.</p>
            </div>
            <div className='image'>
            <img className='image-mern' src="https://www.tollelege.es/wp-content/uploads/2021/10/Aplicacion-de-comercio-electronico-MERN-Stack-React-Redux-Node-Express.jpg" alt="foto-mern" />
            </div>
            </div>
            <div className='text-container-center'>
                <h2 className='text-subtitle'>Habilidades blandas</h2>
                <p className='text-about-center'>Eficiencia | Responsable | Trabajo en equipo | Pro-activo | Rápida adaptación | Creatividad | Capacidad de resolución</p>
            </div>
        </div>
        </>
    )
}