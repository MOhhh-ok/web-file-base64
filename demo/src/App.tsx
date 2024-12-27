import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { base64ToFile, base64ToFileExtension, fileToBase64 } from '../../web-file-kit/src/converts';

function App() {
    const [count, setCount] = useState(0)

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            console.log(file)
            const base64 = await fileToBase64(file)
            console.log(base64)
            const extension = base64ToFileExtension(base64)
            const newFile = base64ToFile(base64, `test.${extension}`);
            console.log(newFile);
        }
    }

    return <>
        <input type="file" onChange={handleFileChange} />
    </>

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
