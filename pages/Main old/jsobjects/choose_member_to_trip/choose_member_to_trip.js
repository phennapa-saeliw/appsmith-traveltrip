export default {
  userfunc: async () => {
		// --------------------------- เช็คสมาชิกรอเอาขึ้นไปไว้บนสุด -------------------------------------------------------------
		
		
		// --------------------------- เช็คสมาชิกรอเอาขึ้นไปไว้บนสุด -------------------------------------------------------------
		
		
    select_from_detail.run().then(() => {
      if (select_from_detail.data.length != 0) {
        let trip_id = select_from_detail.data[0].event_trip_id;
        storeValue('trip_id', trip_id);
      } else {
        showAlert('ข้อมูลเท่ากับ 0');
      }
    }, () => {
      showAlert('คิวรี่ไม่ได้');
    });
		
    select_from_detail.run().then(async () => {
			
      if (select_from_detail.data.length != 0) {	
        let trip_id = select_from_detail.data[0].event_trip_id;
        storeValue('trip_id', trip_id);
	
        let user_select = JSONForm1CopyCopy.formData.customfield4;
        for (let i = 0; i < user_select.length; i++) {
          const user_num = user_select[i];
          storeValue('user_num', user_num);
					await create_trip_user_JS_2.run();
					
        }
      }
    });
		
		
		closeModal('show_detail')
		
		
		
		
		
  }
}
