import '../App.css';
import Button from './Button';
import Greet from './Greet';
import Message from './Message';
import Hello from './Hello';

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
      <br></br>
      <br></br>
        <img src="https://preview.redd.it/251ddf94vz561.png?width=757&format=png&auto=webp&s=8ec801b821eaa2b5e65ebee266232cdddd22ca99" className="App-logo" alt="logo" />
        <p>{Hello()}</p>
        <Greet name="Paimon" heroName="Emergency Food"/>
        <p>ehe te nandayo <b> (ง︡'-'︠)ง </b></p>
        <Button />
        <Message/>
        <a
          className="App-link"
          href="https://youtu.be/VcOSUOpACq0"
          target="_blank"
          rel="noopener noreferrer"
        >
           Stream mo to! (ง︡'-'︠)ง
        </a>
        <br></br>
      </header>
    </div>
  );
}

export default Home;
