export default {

	myFun2: async () => {
		await update_event_trip.run()
		await update_place.run()
		
		showAlert('แก้ไขกิจกรรมสำเร็จ','success')
	}
}