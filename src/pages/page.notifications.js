import { React, useEffect, useContext } from 'react'
import { ContextPage } from '../context/context.page'
import Menu from '@Components/Menu'
import "./../scss/other/_backgroundSimple.scss"
import { Scrollbars } from 'react-custom-scrollbars'
import Container from '@Components/Container'

function NotificationsPage(props) {

	const page = useContext(ContextPage);

	useEffect(() => {
		page.changeTitle(props.title);
	})

	return (
		<div className='flex row'>
			<Menu />
			<Scrollbars style={{ height: '100vh', renderThumbHorizontal: null }}>
				<Container element={<p>Notifications</p>} />
			</Scrollbars>
		</div>
	);

}

export default NotificationsPage;