const links=[
      {
          id: 1,
          image: "public/img/buy-comics-digital-comics.png",
          name: "DIGITAL COMICS"
      
  
      },
      {
          id: 2 ,
          image: "public/img/buy-comics-merchandise.png",
          name: "DC MERCHANDISE"
      },
      {
          id: 3 ,
          image: "public/img/buy-comics-subscriptions.png",
          name: "SUBSCRIPTION"
      },
      {
          id: 4 ,
          image: "public/img/buy-comics-shop-locator.png",
          name: "COMIC SHOP LOCATOR"
      },
      {
          id: 5 ,
          image: "public/img/buy-dc-power-visa.svg",
          name: "DC POWER VISA"
      },
  ]
export default function Main (){
      return (<main>
        <section className="jumbotron"></section> 
      <section className="big.container">
            <div className=" comics-section">
                   <h1>content gose here</h1>
            </div>
            <div className="second-sect">
                  <nav className="navigator ">
                      <ul className="list-2">
                        {links.map((link)=>{
                              return(
                         <li key={link.name}><img className="img-size" src={link.image} alt="" />DIGITAL COMINCS</li>
                        )
                        })}
                        </ul>  
                  </nav>
            </div>
            </section>
      </main>)
}