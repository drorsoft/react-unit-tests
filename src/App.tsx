import { useState } from 'react';
import './App.css';
import { HackerImage } from './components/HackerImage.tsx';
import { ByDrorSoft } from './components/ByDrorSoft.tsx';
import { AppButton } from './components/AppButton.tsx';
import { AppTextInput } from './components/AppTextInput.tsx';

function App() {
    const [count, setCount] = useState('');

    return (<main className={'flex flex-col gap-10 items-center'}>

        <HackerImage />

        <h1>Is This Site Safe</h1>
        <div className={''}>
            <AppTextInput value={count}
                          label={'Enter a URL'}
                          id={'url'}
                          onChange={(ev)=> setCount(ev.target.value)}/>

            <AppButton className={'bg-blue-600'} onClick={()=>{} }>
                count is {count}
            </AppButton>

        </div>
        <p className="read-the-docs">
            <ByDrorSoft />
        </p>
    </main>);
}

export default App;
