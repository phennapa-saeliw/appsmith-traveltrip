export default {
  userfunc: async () => {
	
		
    select_from_detail.run().then(() => {
      if (select_from_detail.data.length != 0) {
        let trip_id = select_from_detail.data[0].event_trip_id;
        storeValue('trip_id', trip_id);
				//showAlert('เก็บ trip id เรียบร้อย')
      } else {
        showAlert('ข้อมูลเท่ากับ 0');
      }
    }, () => {
      showAlert('คิวรี่ไม่ได้');
    });
		
     select_from_detail.run().then(async () => {
			
      if (select_from_detail.data.length != 0) {	
        let trip_id = select_from_detail.data[0].event_trip_id
        storeValue('trip_id', trip_id)
				// showAlert('if1')
				
        let user_select = JSONForm_Add_member.formData.customfield4
        for (let i = 0; i < user_select.length; i++) {
          const user_num = user_select[i];
          storeValue('user_num', user_num);
					console.log(user_num)
					
					await check_member_form_user_num.run()
					if(check_member_form_user_num.data.length == 0 ){
						// showAlert('if2')
						await create_trip_user_JS_2.run()
						await check_member_on_trip_detail.run()
						await check_member_form_user_num.run()
						
						let name_not_same = check_member_form_user_num.data[0].member_fullname	 //--------------------ไม่ทำงาน ?
						storeValue('name_not_same',name_not_same)		//--------------------ไม่ทำงาน ?
						await showAlert('เพิ่มสมาชิก '+ name_not_same  +' สำเร็จ','success')	//--------------------ไม่ทำงาน ?
						console.log(name_not_same)
						
						continue
						}
					
					await check_member_form_user_num.run()	
					if(check_member_form_user_num.data.length =! 0){
					let name_same = check_member_form_user_num.data[0].member_fullname
					storeValue('name_same',name_same)
					showAlert('มีผู้ใช้งาน '+ name_same + ' ในทริปอยู่เเล้ว','error') 
						// showAlert('if4')
					
					} 
						
				}

      }
    }); 
		
		await check_member_on_trip_detail.run()
		showModal('show_detail')
		
  }
}
