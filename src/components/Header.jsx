const NavRight= [
  {
      id: 1,
      url: "#",
      name: "CHARACTERS",
      active: false
  },
  {
      id: 2,
      url: "#",
      name: "COMICS",
      active: true
  },
  {
      id: 3,
      url: "#",
      name: "MOVIES",
      active: false
  },
  {
      id: 4,
      url: "#",
      name: "TV",
      active: false
  },
  {
      id: 5,
      url: "#",
      name: "GAMES",
      active: false
  },
  {
      id: 6,
      url: "#",
      name: "COLLECTIBLES",
      active: false
  },
  {
      id: 7,
      url: "#",
      name: "VIDEOS",
      active: false
  },
  {
      id: 8,
      url: "#",
      name: "FANS",
      active: false
  },
  {
      id: 9,
      url: "#",
      name: "NEWS",
      active: false
  },
  {
      id: 10,
      url: "#",
      name: "SHOP",
      active: false
  },
 

]


export default function Header (){
    return ( <header>
      <div className="navigation big-container">
        <nav className="logo-small">
            <img src="../public/img/dc-logo.png" alt="" />
        </nav>
        <nav className="list">
            {NavRight.map((navig)=>{
                return (
                  <ul key={navig.id} >
                  <a href={navig.url} className={navig.active ? "active" : ""}>{navig.name}</a>
                  </ul>
                )
              })}
            
             
            
        </nav>
      </div>
    </header>) 
       
    
}