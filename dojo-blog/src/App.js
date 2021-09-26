// import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = 'https://www.google.com';
  //
  return (
    <div className='App'>
      <div className='content'>
        <h1>{title}</h1>
        <p>{likes}</p>
        <p>{'Hello, React'}</p>
        <p>{[1, 2, 3]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Google site</a>
      </div>
    </div>
  );
}

export default App;
