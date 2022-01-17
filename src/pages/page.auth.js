import { React, useEffect } from 'react'
import Container from '@Components/Container'
import Form from './../components/form/component.form'
import "./../scss/other/_backgroundAuth.scss"

function AuthPage(props) {

    document.title = props.title;

    useEffect(() => {
        document.body.classList.remove("colorless");
        document.body.classList.add("colorfull");
    });
    
    return (
        <>
            <Container element={<Form />} />
        </>
    )

}

export default AuthPage;