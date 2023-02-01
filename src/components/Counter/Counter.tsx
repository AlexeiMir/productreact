import { FC, useState } from 'react';
import classes from './Counter.module.scss';

export const Counter: FC = () => {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(prev => prev+1)
  }


  return <div>
    <h2>{count}</h2>
    <button className={classes.button} onClick={increment}>counter</button>
    </div>
};