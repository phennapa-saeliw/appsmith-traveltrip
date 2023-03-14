export default {

	myFun2: async () => {
		
		await SC_event_create.run()
	
	   let user_select  = SC_event_form.formData.customField6;
		 for(let i=0;i < user_select.length;i++){                         
			const user_num = user_select[i];    
		 //console.log(user_num);
		 
		 storeValue('user_id',user_num)
			 
			await SC_select_id_for_member.run()
		
		 let id_expense = SC_select_id_for_member.data[0].list_expense_id
		 storeValue('id_expense',id_expense)
			 
			 await SC_select_id_for_member.run()
		 
		 await SC_create_expense_for_member.run()
		
	}}
}