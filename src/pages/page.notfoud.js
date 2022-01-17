import React, { useEffect, useContext } from "react";
import { ContextPage } from '../context/context.page';

function NotFoundPage(props) {

    const page = useContext(ContextPage);

    useEffect(() => {
        page.changeTitle(props.title);
    })

    return (
        <h1>Not found(</h1>
    )
}

export default NotFoundPage;