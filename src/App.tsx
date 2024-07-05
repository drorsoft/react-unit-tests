import { useState } from 'react';
import './App.css';
import { HackerImage } from './components/HackerImage.tsx';
import { ByDrorSoft } from './components/ByDrorSoft.tsx';
import { AppButton } from './components/AppButton.tsx';
import { AppTextInput } from './components/AppTextInput.tsx';

function App() {
    const [url, setUrl] = useState('');

    return (<main className={'flex flex-col gap-10 items-center'}>
        <HackerImage />
        <h1>Is This Site Safe</h1>
        <div className={'w-96'}>
            <AppTextInput value={url}
                          className={'w-full h-12'}
                          placeholder={'Enter a URL'}
                          id={'url'}
                          onChange={(ev) => setUrl(ev.target.value)} />


        </div>
        <div className={' w-40  '}>
            <AppButton className={'bg-blue-600 '} onClick={() => {
            }}>
                Check URL
            </AppButton>
        </div>
        <p className="read-the-docs">
            <ByDrorSoft />
        </p>
    </main>);
}

export default App;
