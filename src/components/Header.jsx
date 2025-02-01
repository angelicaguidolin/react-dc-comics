
export default function Header (){
    return ( <header>
      <div className="navigation big-container">
        <nav className="logo-small">
            <img src="../public/img/dc-logo.png" alt="" />
        </nav>
        <nav className="list">
            <ul><a href="#">CHARACTERS</a></ul>
            <ul ><a className="active" href="#">COMICS</a></ul>
            <ul><a href="#">MOVIES</a></ul>
            <ul><a href="#">TV</a></ul>
            <ul><a href="#">GAMES</a></ul>
            <ul><a href="#">COLLACTIBLES</a></ul>
            <ul><a href="#">VIDEO</a></ul>
            <ul><a href="#">FANS</a></ul>
            <ul><a href="#">NEWS</a></ul>
            <ul><a href="#">SHOP</a></ul>
        </nav>
      </div>
    </header>) 
       
    
}