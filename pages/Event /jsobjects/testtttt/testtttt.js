export default {
	
	test: async () => {
		
		JS_create_event.run()
		
		await JS_select_event_history.run(() => {storeValue('history_id',)})
		showAlert("value " + appsmith.store.history_id)
		
		{{List1.selectedItem.event_trip_id}}
		/*	
		JS_insert_location.run()
			let location_id = JS_select_location_id.data.event_trip_id
			storeValue('location_id',location_id)
		
		JS_select_location_id.run()
		storeValue('event_id')
		
		JS_insert_location_id.run()
		*/
		
	/*
	 let user_select  = JSONForm1Copy.formData.customField6;
	
	 for(let i=0;i < user_select.length;i++){                         
			const user_num = user_select[i];    
		 //console.log(user_num);
		 
		 storeValue('user_id',user_num)
		 

	}
	 */
}
}