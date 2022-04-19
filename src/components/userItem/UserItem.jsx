import React from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../customHooks/useLocalStorage";

const UserItem = ({ user }) => {
	const [favorites, setFavorites] = useLocalStorage("favorites", []);

	const handleAddToFav = (id) => {
		if(favorites.includes(id)) {
			const newSet = favorites.filter( w=> w !==id);
			setFavorites(newSet);
		} else {
			setFavorites([...favorites, id])
		}
		
	}
	
  return (
       <li className="user">
		  <div>
		  <img className="img" src={user.avatar_url} alt={user.login}></img>
		  <div className="user__login">{user.login}</div>
          
		  </div>
        
		  <div className="user__btns">
		  <button onClick = {() => handleAddToFav(user.id)} className={`user__add ${favorites&&favorites.includes(user.id) ? 'fav':''}`} title="Add to Favorites">
		  <svg className="svg-icon" viewBox="0 0 20 20">
							<path d="M17.684,7.925l-5.131-0.67L10.329,2.57c-0.131-0.275-0.527-0.275-0.658,0L7.447,7.255l-5.131,0.67C2.014,7.964,1.892,8.333,2.113,8.54l3.76,3.568L4.924,17.21c-0.056,0.297,0.261,0.525,0.533,0.379L10,15.109l4.543,2.479c0.273,0.153,0.587-0.089,0.533-0.379l-0.949-5.103l3.76-3.568C18.108,8.333,17.986,7.964,17.684,7.925 M13.481,11.723c-0.089,0.083-0.129,0.205-0.105,0.324l0.848,4.547l-4.047-2.208c-0.055-0.03-0.116-0.045-0.176-0.045s-0.122,0.015-0.176,0.045l-4.047,2.208l0.847-4.547c0.023-0.119-0.016-0.241-0.105-0.324L3.162,8.54L7.74,7.941c0.124-0.016,0.229-0.093,0.282-0.203L10,3.568l1.978,4.17c0.053,0.11,0.158,0.187,0.282,0.203l4.578,0.598L13.481,11.723z"></path>
						</svg></button>
          <Link to={`/users/${user.id}`} className="user__more">view more</Link>
		  </div>
    
      </li>



  );
};

export default UserItem;
