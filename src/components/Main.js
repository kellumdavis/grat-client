import React,{ useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from '../pages/Users'
import Show from '../pages/Show';


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