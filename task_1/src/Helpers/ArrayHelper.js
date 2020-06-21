import React, { Component } from 'react'

class ArrayHelper extends Component{

    static filterByKey (array, query) {
        let results = array.filter( item => 
            item.guest.name.toLowerCase().indexOf( query ) !== -1 ||
            item.guest.phone.toLowerCase().replace(/[^\w\s]/gi, '').indexOf( query ) !== -1 ||
            item.guest.company.toLowerCase().indexOf( query ) !== -1 ||
            item.guest.email.toLowerCase().indexOf( query ) !== -1 ||
            item.guest.address.toLowerCase().indexOf( query ) !== -1
             );

        console.log('[filterByKey] key=', query,' result ->', results );

        return results;
    }

    static getMoreItems(pageIndex, defaultItemsOnPage, showedCount, guests) {
        let showedGuestCount = pageIndex * defaultItemsOnPage;

		showedGuestCount = showedGuestCount > guests.length ? 
								guests.length : showedGuestCount;
		
		console.log('[LoadMore] current = ', guests.length, " will be shown =", showedGuestCount );

		if (showedCount === guests.length) {
			console.log('[LoadMore] maximum showed = ', showedGuestCount, " from -> ",guests.length);
			return guests;
		}

        let slicedGuests = guests.slice(0, showedGuestCount);

        slicedGuests = slicedGuests.filter( user => {
			return  user.arrived === false;
		});
        
        return slicedGuests;
    }  
}

export default ArrayHelper;

