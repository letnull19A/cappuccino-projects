import { React, useState } from 'react';
import { List, ListItem } from './../components/component.list';
import "./../scss/components/_menu.scss";

function Menu() {

    const menuItems = [
        {
            Name: "Главная",
            Icon: "icon-main",
            Link: "/Main"
        },
        {
            Name: "Профиль",
            Icon: "icon-profile",
            Link: "/Profile/Me"
        },
        {
            Name: "Дневник",
            Icon: "icon-diary",
            Link: "/Diary"
        },
        {
            Name: "Дисциплины",
            Icon: "icon-discipline",
            Link: "/Subjects"
        },
        {
            Name: "Уведомления",
            Icon: "icon-notification",
            Link: "/Notifications"
        },
        {
            Name: "Расписание",
            Icon: "icon-timetable",
            Link: "/Timetable"
        },
        {
            Name: "Материалы",
            Icon: "icon-materials",
            Link: "/Materials"
        }
    ];

    const list = menuItems.map((item) =>
        <ListItem item={item}/>
    );

    return (
        <div className='menu'>
            <List>
                { list }
            </List>
        </div>
    );

}

export default Menu;