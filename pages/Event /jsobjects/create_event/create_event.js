export default {
	
	func1: async () => {
		// สร้างรายการ
		await JS_create_event.run()

		await JS_event_history_id.run(() => {
		storeValue('history_id', JS_event_history_id.data[0].event_history_id , false )
			
		JS_insert_location.run()
			
			
			
		})
		
		
		
		
		
}
}