import { useState } from 'react';
import { expect, it,describe } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

 const Count = () => {
  const [count, setCount] = useState(0)
  return <button onClick={()=>setCount(p=>p+1)}>{"Count " + count}</button>
 }

describe('Counter', () => {
    it ("show Hello", ()=> {
      render (<Count/>)
      const hello = screen.queryByTestId("Hello")
      expect(hello).toBeTruthy()
    })
});

