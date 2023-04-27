export default {
  userfunc: async () => {
		
		 let user_select = JSONForm_Delete_member.formData.customfield4;
        for (let i = 0; i < user_select.length; i++) {
          const user_num = user_select[i];
          storeValue('user_num', user_num);
					console.log(user_num)
					await delete_member_form_tripselect.run()
					

		}
		check_member_on_trip_detail.run()
		showAlert('ลบสมาชิกสำเร็จ','success')
		showModal('show_detail')
	}
}