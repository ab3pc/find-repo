import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, setCategory } from '../../store/usersSlice';
import Pagination from '../pagination/Pagination';
import UserItem from './UserItem';

const Users = ({input}) => {
	const {users, total_count, category, error} = useSelector(state => state.usersSlice );
	const dispatch = useDispatch();
	const handleCategory = (e) => {
			const sortObj = {
				'followers': {sort:'followers', order: 'desc'},
				'joined': {sort:'joined', order: 'asc'},
				'repositories': {sort:'repositories', order: 'desc'},
			}

		dispatch(setCategory(e.target.value));
		dispatch(fetchUsers({ inputValue: input, ...sortObj[e.target.value]}));
	}

 return (
	  <>
	  
	  <ul className="users__list">
		{users.length === 0 ? '' : <div className='sort'>Sort by: 
				<select className='sort_by' name="category" defaultValue={category} onChange={handleCategory}>
					<option value={'followers'}>rating</option>
					<option value={'joined'}>oldest</option>
					<option value={'repositories'}>repositories</option>
				
				</select>
			</div>}
		{users.length === 0 ? "Can't find any repository." : users.map(user => <UserItem key={user.id} user={user}/>
		)}
		{error ? error && <div className='error'>{error}</div>:  (total_count > 11 ? <Pagination input={input}/>:(null))   }
	
	</ul>

	  
	  </>
	
  )
}

export default Users