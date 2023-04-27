export default {
  userfunc: async () => {
		
		 let user_select = JSONForm_event_delete_member.formData.customField6;
        for (let i = 0; i < user_select.length; i++) {
          const user_num = user_select[i];
          storeValue('user_num', user_num);
					console.log(user_num)
					await delete_member_form_eventselect.run()
					

		}
		await n_select_user_join_form_event.run()
		await check_member_on_event.run()
		showAlert('ลบสมาชิกสำเร็จ','success')
		showModal('see_event_deteil')
	}
}