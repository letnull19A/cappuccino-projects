import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Menu from '@Components/Menu'
import Container from '@Components/Container'
import { ContextPage } from '../context/context.page';

function TimeTablePage(props) {

    const page = useContext(ContextPage);

    useEffect(() => {
        page.changeTitle(props.title);
    })

    return (
        <div className='flex row'>
            <Menu />
            <Scrollbars style={{ height: '100vh', renderThumbHorizontal: null }}>
                <Container element={<p>Time table</p>} />
            </Scrollbars>
        </div>
    );

}

export default TimeTablePage;