export default {
	
	userfunc: async () => {
		await select_name_to_id.run()
		let member_id = select_name_to_id.data[0].member_id
		storeValue('member_id',member_id)
		
		await create_trip.run()
		await create_trip_select_user.run()
		
		let trip_id = create_trip_select_user.data[0].event_trip_id
		
		storeValue('trip_id',trip_id)
		
	 let user_select  = JSONForm1.formData.customField4;
	
	 for(let i=0;i < user_select.length;i++){                         
			const user_num = user_select[i];    
		 //console.log(user_num);
		 
		 storeValue('user_id',user_num)
		 
		 
		 await create_trip_user_JS.run()
 
	}
	
}
}