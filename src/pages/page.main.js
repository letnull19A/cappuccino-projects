import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Scrollbars } from 'react-custom-scrollbars';
import Menu from './../components/component.menu';
import "./../scss/other/_backgroundSimple.scss";

function MainPage() {
    return (
        <div className='flex row'>
            <Menu />
            <Scrollbars style={{ renderThumbHorizontal: null }}>
                <p>Main Page</p>
            </Scrollbars>
        </div>
    );
}

export default MainPage;