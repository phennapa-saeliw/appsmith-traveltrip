export default {

	myFun2: async () => {
		await SC_event_show_table.run()
		await type_array_to_string2.run()
		await select_member_on_expense.run()
		await n_select_user_join.run()
		showModal('event_cost','SAMEPAGE')
		
	}
}


