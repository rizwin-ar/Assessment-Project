import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './views/signin-page';
import Homepage from './views/homepage';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/homepage" element={<Homepage />} />
        </Routes>
    );
}

export default App;
