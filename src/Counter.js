import { counterAtom } from './atoms';
import { useRecoilState } from "recoil";


function Counter() {
    const [counter, setCounter] = useRecoilState(counterAtom);
  
    return (
      <div className="App">
        <p>{counter}</p>
        <button onClick={()=>{setCounter(count => count+1)}}>incremenet</button>
      </div>
    )
  
  }

export default Counter;