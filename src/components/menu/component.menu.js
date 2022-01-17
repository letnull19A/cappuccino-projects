import { React, useState } from 'react';
import { List, ListItem } from './../list/component.list'
import "./scss/_menu.scss";

function Menu() {

    const menuItems = [
        {
            Name: "Главная",
            Icon: "icon-main",
            Link: "/Main",
            Title: "Главная",
            Target: ["All"]
        },
        {
            Name: "Профиль",
            Icon: "icon-profile",
            Link: "/Profile/Me",
            Title: "Профиль",
            Target: ["All"]
        },
        {
            Name: "Дневник",
            Icon: "icon-diary",
            Link: "/Diary",
            Title: "Дневник",
            Target: ["Student"]
        },
        {
            Name: "Дисциплины",
            Icon: "icon-discipline",
            Link: "/Subjects",
            Title: "Дисциплины",
            Target: ["Student"]
        },
        {
            Name: "Уведомления",
            Icon: "icon-notification",
            Link: "/Notifications",
            Title: "Уведомления",
            Target: ["All"]
        },
        {
            Name: "Расписание",
            Icon: "icon-timetable",
            Link: "/Timetable",
            Title: "Расписание",
            Target: ["All", "Student"]
        },
        {
            Name: "Материалы",
            Icon: "icon-materials",
            Link: "/Materials",
            Title: "Материалы",
            Target: ["Student"]
        },
        {
            Name: "Администрация",
            Icon: null,
            Link: "/Admin",
            Title: "Администрация",
            Target: ["Admin"]
        },
        {
            Name: "Документация",
            Icon: null,
            Link: "/Docs",
            Title: "Документация",
            Target: ["Admin"]
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