import { React, useEffect } from 'react';
import Container from './../components/component.container';
import Form from './../components/component.form';
import "./../scss/other/_backgroundAuth.scss";

function AuthPage() {

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