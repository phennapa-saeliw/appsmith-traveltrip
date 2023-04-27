export default {

	myFun2: async () => {
		
		await check_member_to_expese.run()
		if(check_member_to_expese.data == '' ){
			showAlert('กรุณาเพิ่มสมาชิกในกิจกรรมก่อน !','warning')
			return;
		}
		
		await SC_event_show_table.run()
		await type_array_to_string2.run()
		await select_member_on_expense.run()
		await n_select_user_join.run()
		await n_select_user_join_from_trip.run()
		showModal('event_cost','SAMEPAGE')
		
	}
}


