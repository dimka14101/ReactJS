import React, { Component } from 'react';
import InvitationItem from './Components/InvitationItem';
import GuestSearch from './Components/GuestSearch'
import Header from './Components/Header'
import guests from './guests.json';
import './App.css'

const converted_guests = guests.map( user => ({
	arrived: false,
	guest: user
}));

console.log(converted_guests);

class App extends Component{

	state = {
		guests: converted_guests,
		filter: null,
		query: ""
	}

	changeArriveStatus = ( user_id ) => () => {
		console.log( user_id );
		const changedUsers = this.state.guests.map( user => {
			if( user.guest.index === user_id ){
				user.arrived = !user.arrived;
			}
			return user;
		});

		this.setState({
			guests: changedUsers
		});
	}

	handleSearch = (e) => {
		const { guests } = this.state;
		const query = e.target.value.toLowerCase();
		const results = guests.filter( user => 
									user.guest.name.toLowerCase().indexOf( query ) !== -1 ||
									user.guest.phone.toLowerCase().replace(/[^\w\s]/gi, '').indexOf( query ) !== -1 ||
									user.guest.company.toLowerCase().indexOf( query ) !== -1 ||
									user.guest.email.toLowerCase().indexOf( query ) !== -1 ||
									user.guest.address.toLowerCase().indexOf( query ) !== -1
									 );
		
		console.log('[query]', results );

		this.setState({
			filter: results,
			query: e.target.value
		});
	}

	render(){
		const { guests, query, filter } = this.state;
		const { changeArriveStatus, handleSearch } = this;


		let list = guests;
		if( filter !== null && query.length > 0){
			list = filter;
		}
		console.log('[list]', list );

		return (
			<>
				<div className="App-Position">
					<Header/>
          			<GuestSearch handleChange={handleSearch} query={query}/>
						{
							list.map( (user, key) => ( 
								<InvitationItem 
									key={key}
									user={user} 
									changer={changeArriveStatus} 
								/> 
							)
							)
						}
				</div>
			</>
		);
	}

}

export default App;
