export default {
 
	myFun2: async () => {
    
			
			//UP_select_from_list_expense.run()
			//let member = UP_select_from_list_expense.data[0].member_id
		  //	storeValue('member',member)
			
			let user_select  = JSONForm1Copy.formData.customfield4;

			for(let i=0;i < user_select.length;i++){                         
			const user_num = user_select[i];    
			//console.log(user_num);

			storeValue('user_id',user_num)
				
		  await UP_select_from_list_expense.run()
		  console.log(UP_select_from_list_expense.data)

			}

	}
}