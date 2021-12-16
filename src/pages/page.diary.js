import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Scrollbars } from 'react-custom-scrollbars';
import Menu from './../components/component.menu';
import "./../scss/other/_backgroundSimple.scss";

function DiaryPage() {
    return (
        <div className='flex row'>
            <Menu />
            <Scrollbars style={{ renderThumbHorizontal: null }}>
                <p>Diary Page</p>
            </Scrollbars>
        </div>
    );
}

export default DiaryPage;