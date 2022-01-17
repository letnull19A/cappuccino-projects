import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from './pages/page.auth';
import RegistrationPage from './pages/page.registration';
import NotFoundPage from './pages/page.notfoud';
import ProfilePage from './pages/page.profile';
import MainPage from './pages/page.main';
import DiaryPage from './pages/page.diary';
import SubjectsPage from './pages/page.subjects';
import NotificationsPage from './pages/page.notifications';
import TimeTablePage from './pages/page.timetable';
import MaterialsPage from './pages/page.materials';
import AdminPage from './pages/page.admin';

export const Routing = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/Auth" element={<Navigate to="/Profile/Me" title="Авторизация" />} />
                    <Route path="/Profile/:id" element={<ProfilePage title="Профиль" />} />
                    <Route path="/Registration" element={<RegistrationPage title="Регистрация" />} />
                    <Route path="/Notfound" element={<NotFoundPage title="Не найдено (" />} />
                    <Route path="/Main" element={<MainPage title="Главная" />} />
                    <Route path="/Diary" element={<DiaryPage title="Дневник" />} />
                    <Route path="/Subjects" element={<SubjectsPage title="Предметы" />} />
                    <Route path="/Notifications" element={<NotificationsPage title="Уведомления" />} />
                    <Route path="/Timetable" element={<TimeTablePage title="Расписание" />} />
                    <Route path="/Materials" element={<MaterialsPage title="Материалы" />} />
                    <Route path="/Admin" element={<AdminPage title="Администрирование" />} />
                </Routes>
            </BrowserRouter>
        );
    } else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/Auth" element={<AuthPage />} />
                    <Route path="/" element={<AuthPage />} />
                </Routes>
            </BrowserRouter>
        )
    }
}