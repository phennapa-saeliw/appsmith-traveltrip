export default {
	
	delete_trip: async () => {
		
		await create_trip.run()
		await create_trip_select_user.run()

		 await create_trip_user_JS.run()
 
	}
	
}
}