import React, { useContext, useEffect } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import Menu from '@Components/Menu'
import "./../scss/other/_backgroundSimple.scss"
import Container from '@Components/Container'
import { ContextPage } from '../context/context.page'

function DiaryPage(props) {

    const page = useContext(ContextPage);

    useEffect(() => {
        page.changeTitle(props.title);
    })

    return (
        <div className='flex row'>
            <Menu />
            <Scrollbars style={{ height: '100vh', renderThumbHorizontal: null }}>
                <Container element={ <p>Diary Page</p> } />
            </Scrollbars>
        </div>
    );
}

export default DiaryPage;