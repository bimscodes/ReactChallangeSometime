import './App.css';
import Navbar from './components/navbar/navbar';
const App =()=> {
  const username ="Bimal";
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

let content;
let isLogin =true;
  if(isLogin){
    content=<Navbar/>;
    
  }
  else{
content="user is not logged in"
  }
  return (
    <div className="App">
      {content}
      <header className="App-header">
        <h5>Welcome To React {username}</h5>
        <img alt={user.username} src={user.imageUrl} style={{width:user.imageSize,height:user.imageSize}}/>
       <button className='myname' >i'm button</button>
      </header>
    </div>
  );
}

export default App;
