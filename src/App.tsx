import { useState } from 'react';
import './App.css';
import { HackerImage } from './components/HackerImage.tsx';
import { ByDrorSoft } from './components/ByDrorSoft.tsx';

function App() {
    const [count, setCount] = useState(0);

    return (
        <main className={'flex flex-col gap-10 items-center'}>
            <div className={'flex flex-row justify-center'}>

        <HackerImage />
            </div>
        <h1>Is This Site Safe</h1>
        <div className= {''}>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>

        </div>
        <p className="read-the-docs">
        <ByDrorSoft />
        </p>
        </main>
     );
}

export default App;
