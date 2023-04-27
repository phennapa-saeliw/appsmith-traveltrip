export default {

	myFun2: async () => {

		
		 let user_select = JSONForm_event_add_member.formData.customField6;
        for (let i = 0; i < user_select.length; i++) {
          const user_num = user_select[i];
          storeValue('user_num', user_num);
					console.log(user_num)
					await check_member_on_event.run()
					
					if(check_member_on_event.data.length == 0){
						await create_member_to_event.run()
						showAlert('เพิ่มสมาชิกสำเร็จ','success')
						
						
						continue
						 }
					
						if(check_member_on_event.data.length =! 0){
					let name_same = check_member_on_event.data[0].member_fullname
					storeValue('name_same',name_same)
					showAlert('มีผู้ใช้งาน '+ name_same + ' ในทริปอยู่เเล้ว','error') 
					
					} 
						

		}
		await n_select_user_join_form_event.run()
		showModal('see_event_deteil')
	}
}
	