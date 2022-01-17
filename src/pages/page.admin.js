import React, { useContext, useEffect } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import Menu from '@Components/Menu'
import Container from '@Components/Container'
import { ContextPage } from '../context/context.page'
import { Users, Roles } from './../components/component.tables'

function AdminPage(props) {

	const page = useContext(ContextPage);

	useEffect(() => {
		page.changeTitle(props.title);
	})

	return (
		<div className='flex row'>
			<Menu />
			<Scrollbars style={{ height: '100vh', renderThumbHorizontal: null }}>
				<Container element={
					<>
						<h2>Аккаунты и пользователи</h2>
						<Users />
                  <h2>Роли и права</h2>
						<Roles />
						<h2>Предметы и расписание</h2>
						<h2>Управление хранилищем</h2>
						<h2>База Данных</h2>
					</>
				} />
			</Scrollbars>
		</div>
	);

}

export default AdminPage;