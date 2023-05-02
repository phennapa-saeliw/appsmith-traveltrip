export default {
	
	func1: async () => {
		// สร้างรายการ
		await JS_create_event.run()

		await JS_event_history_id.run(() => {
		storeValue('history_id', JS_event_history_id.data[0].event_history_id , false )
			
		JS_insert_location.run()

		})
		
		let user_select = JSONForm1Copy.formData.customField6;
    for (let i = 0; i < user_select.length; i++) {
      const user_num = user_select[i];
      //console.log(user_num);

      storeValue('user_id', user_num);

      await insert_member_join_trip.run();

    }
		
		await event_history_trip.run()
		
		
}
}