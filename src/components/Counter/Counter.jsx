import { observer } from "mobx-react-lite";
import CounterStore from "../../store/counter";

const Counter = observer(() => {
   
    return (
        <div>
            <p>Count = {CounterStore.count}</p>
            <button onClick={()=>CounterStore.increment()}>+</button>
            <button onClick={()=>CounterStore.decrement()}>-</button>
        </div>
    )
}
    
) 
    
    
export default Counter