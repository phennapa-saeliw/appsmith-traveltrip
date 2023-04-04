export default {
 
	myFun2: async () => {

			update_trip.run()   // อัพเดทในส่วนของ ชื่อทริป , วันเวลาเริ่มทริปจบทริป
		  
			UP_check_expense.run()
			storeValue('check_member_expense',UP_check_expense.data)
			console.log(appsmith.store.check_member_expense)
			
			
			
		
		
		
		
		
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