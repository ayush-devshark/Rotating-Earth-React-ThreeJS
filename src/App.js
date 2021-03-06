import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Earth } from './components/earth';
import { TopSection } from './components/topSection';

function App() {
    return (
        <div className='App'>
            <TopSection />
            <Canvas>
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default App;
