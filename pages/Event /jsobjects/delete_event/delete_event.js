export default {

	myFun2: async () => {
		await Delete_event.run()
		showAlert('ลบกิจกรรมเรียบร้อย','success')
		closeModal('confirm_delete')
		await event_history_trip.run()
	}
}