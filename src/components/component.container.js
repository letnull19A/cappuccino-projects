import { React } from 'react';
import "./../scss/foundation/_container.scss";

function Container(props) {
    return(
        <div className='container'>
            {props.element}
        </div>
    );
}

export default Container;