import React, { useCallback, useState, useContext, useEffect } from 'react'
import { useHttp } from './../hooks/hooks.http'
import { ContextDataAuth } from '@Context/DataAuth'

function Users() {

	const { request } = useHttp()
	const { token } = useContext(ContextDataAuth)
	const [list, setList] = useState([])
	var _table;

	const assignList = useCallback(async () => {
		try {
			setList(await request('/api/authificated/profile-data', 'POST', null, { Authorization: `Bearer ${token}` }));
		} catch (err) { }

	}, [list, request])

	useEffect(() => {
		assignList()
	}, [])

	if (list.length > 0) {
		_table = list.map((element, index) => {
			return (
				<tr>
					<th>{index}</th>
					<th>{element.user_name}</th>
					<th>{element.user_surname}</th>
					<th>{element.user_fatherName}</th>
					<th>{element.user_login}</th>
					<th>{element.user_role}</th>
					<th>{element._id}</th>
					<th><input type="checkbox" /></th>
				</tr>
			)
		})
	} else {
		_table = <tr><th colspan='8'>Нет записей</th></tr>
	}

	return (
		<div className='table-container'>
			<div className='table-container_content'>
				<table border='1'>
					<tbody>
						<tr>
							<th>№</th>
							<th>Имя</th>
							<th>Фамилия</th>
							<th>Отчество</th>
							<th>Логин</th>
							<th>Роль</th>
							<th>ID</th>
							<th>Выбор</th>
						</tr>
					</tbody>

					<tbody>
						{
							_table
						}
					</tbody>
				</table>
			</div>
			<div classnName='table-container_functions'>
				<button>Добавить аккаунт</button>
				<button>Редактировать</button>
				<button>Удалить</button>
			</div>
		</div>

	)
}

function Roles() {

	const { request } = useHttp();
	const { token } = useContext(ContextDataAuth);
	const [listRoles, setListRoles] = useState([])
	var _table;

	const getAllRoles = useCallback(async () => {
		try {
			setListRoles(await request('/api/authificated/role-data', 'POST', null, { Authorization: `Bearer ${token}` }))
		} catch (err) { }
	}, [listRoles, request])

	useEffect(() => {
		getAllRoles()
	}, [])

	if (listRoles.length > 0) {
		_table = listRoles.map((element, index) => {
			return (
				<tr>
					<th>{index}</th>
					<th>{element._id}</th>
					<th>{element.role_title}</th>
					<th>{element.role_description || 'Отсутствует'}</th>
					<th><button>Настроить</button></th>
				</tr>
			)
		})
	} else {
		_table = <tr><th colspan='3'>Нет записей</th></tr>
	}

	return (
		<table border='1'>
			<thead>
				<tr>
					<th>№</th>
					<th>ID</th>
					<th>Наименование роли</th>
					<th>Описание</th>
					<th>Права</th>
				</tr>
			</thead>
			<tbody>
				{
					_table
				}
			</tbody>
		</table>
	)

}

export { Users, Roles }