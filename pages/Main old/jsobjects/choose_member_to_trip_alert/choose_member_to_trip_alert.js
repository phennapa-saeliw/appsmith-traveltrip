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
					console.log(user_num)
					await check_member_form_user_num.run()
					
					if(check_member_form_user_num.data.length == 0){
						create_trip_user_JS_2.run()
						await check_member_form_user_num.run()
						let name_same = check_member_form_user_num.data[0].member_fullname
						await showAlert('เพิ่มสมาชิก '+ name_same  +' สำเร็จ','success')
						continue
						 }
						
					if(check_member_form_user_num.data.length =! 0){
					let name_same = check_member_form_user_num.data[0].member_fullname
					storeValue('name_same',name_same)
					showAlert('มีผู้ใช้งาน '+ name_same + ' ในทริปอยู่เเล้ว','error') 
					
					} 
						
				}

      }
    });
		
		
		closeModal('show_detail')
		
		
		
		
		
  }
}
