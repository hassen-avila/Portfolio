import '../home/home.css'
import {Link as LinkRouter} from "react-router-dom"

export default function home() {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "grid",
          placeItems: "center",
          background: "black"
        }}
      >
        <Anim>
          <LinkRouter
                to='/about-me'
              >
          <div
            className="random-container"
            style={{
              width: 500,
              height: 200,
              display: "flex",
              alignItems:"center",
              justifyContent:"center",
              flexDirection:"column"
            }}
          >
          
          <h1 className='name-text'>AVILA HASSEN</h1>
          <h3 className='title-text'>Full-stack Developer MERN & Mobile Apps</h3>
          
          </div>
          </LinkRouter>
        </Anim>
      </div>
    );
  }
  
  function Anim({ children }) {
    return (
      <div style={{ position: "relative", borderRadius: 2, overflow: "hidden" }}>
        {children}
  
        <i className="line line-top" />
        <i className="line line-right" />
        <i className="line line-bottom" />
        <i className="line line-left" />
      </div>
    );
  }