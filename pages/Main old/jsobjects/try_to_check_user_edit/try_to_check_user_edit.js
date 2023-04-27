export default {
	
	userfunc: async () => {
		
		select_from_detail.run()
		let trip_id = select_from_detail.data[0].event_trip_id
		
		storeValue('trip_id',trip_id);
		
		let user_select = JSONForm1CopyCopy.formData.customfield4;
		for( let i = 0; i < user_select.length; i++){
			const user_num = user_select[i];
			
			storeValue('user_num',user_num)
			
			
			// ------------------------------------- ตรวจสอบสมาชิกในทริป  ------------------------------------------------
			
			
			check_user_in_trip3.run()
			let check_member = check_user_in_trip3.data[0].member_id
			
			let member_in_JS = JSONForm1CopyCopy.formData.customfield4

			let found = false;
			for (let i = 0; i < member_in_JS.length; i++) {
				if (member_in_JS[i] === check_member) {
					showAlert('มีผู้ใช้งานอยู่เเล้วในทริป');
					found = true;
				 break;
				}
			}

			if (!found) {
				showAlert('สามารถเพิ่มผู้ใช้งานคนนี้ได้');
			}
			
			
		  // await create_trip_user_JS_2.run()
		}
		
	 
  }
}
