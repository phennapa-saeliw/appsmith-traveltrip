export default {

	myFun2: async () => {
		await update_event_trip.run()
		await update_place.run()
		await event_history_trip.run()
		await SC_detail.run()
		
		showAlert('แก้ไขกิจกรรมสำเร็จ','success')
		showModal('see_event_deteil')
	}
}