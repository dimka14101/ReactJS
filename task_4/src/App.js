import React, { Component } from 'react';
import InvitationItem from './Components/InvitationView/InvitationItem';
import GuestSearch from './Components/InvitationView/GuestSearch'
import Header from './Components/InvitationView/Header'
import Button from './Components/InvitationView/Button'
import ArrayHelper from './Helpers/ArrayHelper'
import * as cnst from './Constants/UIConstants'

import RadarChart from './Components/RadarChart'

import { ThemeContext } from './Helpers/ContextHelper';
import ThemeSwitch from './Components/ThemeSwitch'

import guests from './guests.json';
import './App.css'

const defaultItemsOnPage = 10;
const initialGuestList = guests.map( user => ({
	arrived: false,
	guest: user
}));

console.log(initialGuestList);

class App extends Component{

	state = {
		guests: initialGuestList.slice(0, defaultItemsOnPage),
		filter: null,
		query: "",
		resultCount: defaultItemsOnPage,
    pageIndex: 2,
    themeMode: 'light'
  }
  
  changeTheme = ( themeMode ) => () => {
    this.setState({ themeMode });
  }

	loadMore = ( pageIndex ) => () => {
		console.log("[LoadMore] Action started");

		if (this.state.resultCount === initialGuestList.length) {
			return;
		}

		let slicedGuests = ArrayHelper.getMoreItems(pageIndex, 
													defaultItemsOnPage,
													this.state.resultCount,
			 										initialGuestList);

		this.setState({
			guests:slicedGuests,
			resultCount: slicedGuests.length,
			pageIndex: ++pageIndex
		});
	}

	showAllGuests = () => () => {
		console.log("[ShowAll] Action started");
		const newPageIndex = Math.ceil(initialGuestList.length/defaultItemsOnPage);

		this.setState({
			guests:initialGuestList,
			resultCount: initialGuestList.length,
			pageIndex: newPageIndex
		});
	}

	changeArriveStatus = ( userId ) => () => {
		console.log("[ChangeArriveStatus] Action started");

		const changedUsers = this.state.guests.map( user => {
			if( user.guest._id === userId ){
				user.arrived = !user.arrived;
			}
			return user;
		});

		this.setState({
			guests: changedUsers
		});

		//just for animation and visualization
		setTimeout(() =>{
			let filteredGuests = changedUsers.filter( user => {
				return  user.arrived === false;
			});
			this.setState({
				guests: filteredGuests,
				resultCount: filteredGuests.length
		});
		}, 1000);
	}

	handleSearch = (e) => {
		console.log("[Search] Action started");
		const { guests } = this.state;
		const query = e.target.value.toLowerCase();
		const results = ArrayHelper.filterByKey(guests, query);

		this.setState({
			filter: results,
			query: e.target.value,
			resultCount: results.length
		});
	}

	render(){
		console.log("[MainRender] Action started");

		const { guests, query, filter, resultCount, pageIndex, themeMode } = this.state;
		const { changeArriveStatus, handleSearch, loadMore, showAllGuests, changeTheme } = this;

		let list = guests;
		if( filter !== null && query.length > 0){
			list = filter;
		}

		return (
			<>
          {/* Uncomment line below for Chart */}
          {/* <RadarChart/> */}

        <ThemeContext.Provider value={{ themeMode, changeTheme }}>
          <div 
            className={`App-Position ${themeMode}`}
          >
					  <Header/>
            <ThemeSwitch />
            <GuestSearch handleChange={handleSearch} query={query} resultCount={resultCount}/>
              {
                resultCount > 0 ?
                  list.map( (user, key) => ( 
                    <InvitationItem 
                      key = { key }
                      user = { user } 
                      changer = { changeArriveStatus } 
                    /> 
                  )
                  )	
                : <>
                  <div 
                    style={{textAlign:"center"}}
                  >
                    { cnst.NO_GUEST_FOUND }
                  </div>
                </>
              }
              {
                resultCount < initialGuestList.length ? 
                  <div className='App-Footer'> 
                    <Button 
                      index = { pageIndex }
                      changer = { loadMore }
                      text = { cnst.LOAD_MORE }
                      theme = "footer-button"
                    />
                    <Button 
                      index = { list.length }
                      changer = { showAllGuests }
                      text = { cnst.SHOW_ALL }
                      theme = "footer-button"
                    />
                  </div>
                : <></>
              }
				  </div>
        </ThemeContext.Provider>
			</>
		);
	}

}

export default App;
