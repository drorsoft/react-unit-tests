import { useState } from 'react';
import './App.css';
import { HackerImage } from './components/HackerImage.tsx';
import { ByDrorSoft } from './components/ByDrorSoft.tsx';
import { AppButton } from './components/AppButton.tsx';
import { AppTextInput } from './components/AppTextInput.tsx';
import { checkURLData } from './api/checkURLData.ts';
import { Results } from './components/Results.tsx';

function App() {
    const [url, setUrl] = useState('cdn.freechatgpt.cloud');
    const [resultData, setResultData] = useState<{domain: string, isSafe: boolean} | null>(null  );

    const checkUrl = async () => {
        const response = await checkURLData(url);
        setResultData({domain: url, isSafe: !response.isMalicious
        })
        console.log(response)
    }

    return (<main className={'flex flex-col gap-10 items-center mb-10'}>
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
                checkUrl().then();
            }}>
                Check URL
            </AppButton>
        </div>
        <Results results={resultData} />

        <div className="read-the-docs">
            <ByDrorSoft />
        </div>
    </main>);
}

export default App;
