export default {

	myFun2: async () => {
		await SC_detail.run()
		await type_array_to_string.run()
    await select_place_and_lat_lon.run()
		showModal('see_event_deteil')
}
}