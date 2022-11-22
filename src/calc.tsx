import {useState} from 'react';
import './calc.css';

export default function Calc(){
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState('');
    //const [shouldConcatenate,setShouldConcatenate] = useState(true);

    const inputNum = (e: React.FormEvent<HTMLButtonElement>) => {
        let input = +(e.target as HTMLButtonElement).value;
        if(num === 0){
            setNum(input);
        } else /*if (shouldConcatenate) */{
            setNum(num+input);
        }
    }

    function clear() {
        setNum(0);
        //setShouldConcatenate(true);
    }

    function operatorHandler(e : React.FormEvent<HTMLButtonElement>) {
        let operatorInput = (e.target as HTMLButtonElement).value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
        //setShouldConcatenate(true);
    }

    function calculate() {
        if (operator === "/") {
            setNum(oldNum / oldNum);
        } else if (operator === "X") {
            setNum(oldNum * oldNum);
        } else if (operator === "-") {
            setNum(oldNum - oldNum);
        }else if (operator === "+") {
            setNum(oldNum + oldNum);
        }
        //etShouldConcatenate(false);
    }

    return (
        <div>
            <div className='wrapper'>
                <h1 className='result'>{num}</h1>
                <div className="btnContainer">
                    <button/>
                    <button/>
                    <button/>
                    <button onClick={clear}>AC</button>
                    <button className='grey' onClick={inputNum} value={1}>1</button>
                    <button className='grey' onClick={inputNum} value={2}>2</button>
                    <button className='grey' onClick={inputNum} value={3}>3</button>
                    <button className='orange' onClick={operatorHandler} value={'/'}>/</button>
                    <button className='grey' onClick={inputNum} value={4}>4</button>
                    <button className='grey' onClick={inputNum} value={5}>5</button>
                    <button className='grey' onClick={inputNum} value={6}>6</button>
                    <button className='orange' onClick={operatorHandler} value={'X'}>X</button>
                    <button className='grey' onClick={inputNum} value={7}>7</button>
                    <button className='grey' onClick={inputNum} value={8}>8</button>
                    <button className='grey' onClick={inputNum} value={9}>9</button>
                    <button className='orange' onClick={operatorHandler} value={'-'}>-</button>
                    <button className='grey' onClick={inputNum} value={0}>0</button>
                    <button className='grey' onClick={inputNum} value={"."}>,</button>
                    <button className='orange' onClick={operatorHandler} value={'+'}>+</button>
                    <button className='orange' onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )

}
