import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from './pages/page.auth';
import RegistrationPage from './pages/page.registration';
import NotFoundPage from './pages/page.notfoud';
import ProfilePage from './pages/page.profile';
import MainPage from './pages/page.main';
import DiaryPage from './pages/page.diary';

export const Routing = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/Auth" element={<Navigate to="/Profile/Me" />} />
                    <Route exact path="/Profile/:id" element={<ProfilePage />} />
                    <Route path="/Registration" element={<RegistrationPage />} />
                    <Route path="/Notfound" element={<NotFoundPage />} />
                    <Route path="/Main" element={<MainPage />} />
                    <Route path="/Diary" element={<DiaryPage />} />
                </Routes>
            </BrowserRouter>
        );
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Auth" element={<AuthPage />} />
            </Routes>
        </BrowserRouter>
    )
}