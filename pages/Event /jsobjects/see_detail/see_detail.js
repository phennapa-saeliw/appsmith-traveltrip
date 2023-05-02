export default {

	myFun2: async () => {
		await SC_detail.run()
		await type_array_to_string.run()
    await select_place_and_lat_lon.run()
		await test_picktime_in_trip.run()
		await n_select_user_join_form_event.run()
		console.log(n_select_user_join_form_event.data)
		
		showModal('see_event_deteil')
}
}