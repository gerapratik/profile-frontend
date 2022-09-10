import React from 'react';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Navbar from '../pages/Navbar';

const ContentContainer = () => {
    return (
        <>
            <Router>
                <Navbar />
                    <Routes>
                        <Route path ="/" element={
                        <ProtectedRoute>
                            <Profile/>
                        </ProtectedRoute>
                        }/>
                        <Route path ="/login" element={
                        <PublicRoute>
                            <Login/>
                        </PublicRoute>
                        }/>
                        <Route path ="/register" element={
                        <PublicRoute>
                            <Register/>
                        </PublicRoute>
                        }/>
                    
                    </Routes>
            </Router>
        </>
    )
}

export default ContentContainer;