export default {
	
	userfunc: async () => {
		
		select_from_detail.run()
		let trip_id = select_from_detail.data[0].event_trip_id
		
		storeValue('trip_id',trip_id)
	  
		
	  let user_select  = JSONForm1CopyCopy.formData.customField4;
	
 	  for(let i=0;i < user_select.length;i++){                         
	 		const user_num = user_select[i];    
		 //console.log(user_num);
		 
		 storeValue('user_id',user_num)

		 await create_trip_user_JS.run()
 
	} 
	
}
}