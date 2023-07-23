import './App.css';
import {Left}  from './component/Left';
import  Left1  from './component/Left1';
import Middle from './component/Middle';
import Right from './component/Right';
function App() {
  return (
    <>
    <div className='main'>
    <Left/>
    <Left1/>
    <Middle/>
    <Right/>
    </div>

    </>
  );
}

export default App;
