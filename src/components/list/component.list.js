import { React } from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import './scss/_list.scss'

function List(props) {
    return (
        <div className='list'>
            {props.children}
        </div>
    );
}

function ListItem(props) {

    const isMatch = useMatch(props.item.Link);

    return (
        <NavLink to={props.item.Link} className={isMatch ? 'active' : 'disactive'}>
            <div className='list-item'>

                <div className='list-item__icon'>
                    <div className={'icon ' + props.item.Icon}></div>
                </div>

                <div className='list-item__content'>

                    <a className='list-item__content-link' >{props.item.Name}</a>

                </div>

                <div className='triangle'></div>

            </div>
        </NavLink >
    );
}

export { List, ListItem };