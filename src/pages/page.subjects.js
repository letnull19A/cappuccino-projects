import { React, useEffect, useContext } from 'react'
import "./../scss/other/_backgroundSimple.scss"
import Menu from '@Components/Menu'
import Container from '@Components/Container'
import { Scrollbars } from 'react-custom-scrollbars'
import { ContextPage } from '../context/context.page'

function SubjectsPage(props) {

    const page = useContext(ContextPage);

    useEffect(() => {
        page.changeTitle(props.title);
    })

    return (

        <div className='flex row'>
            <Menu />
            <Scrollbars style={{ height: '100vh', renderThumbHorizontal: null }}>
                <Container element={<p>Subjects</p>} />
            </Scrollbars>
        </div>

    )

}

export default SubjectsPage;