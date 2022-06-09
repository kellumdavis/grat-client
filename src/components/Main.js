import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import People from '../pages/People'
import Show from '../pages/Show';
import Users from '../pages/Users';

function Main(props) {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Users/>} />
                <Route
                    path="/users/:id"
                    render={(rp) => (
                        <Show
                        {...rp}
                        />
                    )}
                />
            </Routes>
        </main>
    )
}

export default Main