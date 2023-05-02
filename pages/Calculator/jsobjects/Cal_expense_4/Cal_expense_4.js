export default {

	myFun2: async () => {
		
			
			

			if(Select_trip4.selectedOptionValue.length != 0){
			await select_event_form_trip_id4.run()
			await select_member_from_event4.run()
	
			
		}
		
		 if(Select_trip4.selectedOptionValue == ''){
			 
			 resetWidget("Select_event4", true);
			 resetWidget("Select_member4", true);

			 let expense_member4 = 0
			 storeValue('expense_member4',expense_member4)
			 
			 let expesne_form_event4 = 0
			storeValue('expesne_form_event4',expesne_form_event4)
		 }
		
		
    if (Select_member4.selectedOptionValue == '') {
      //showAlert('ไม่ได้เลือกสมาชิก');
			let expesne_form_event4 = 0
			storeValue('expesne_form_event4',expesne_form_event4)
			
    } else{
      //showAlert('เลือกสมาชิกแล้ว')
			
			await select_event_form_trip_id4.run()
			
			await check_member_join_event4.run()
			let member_join_event4 = check_member_join_event4.data[0].count
			storeValue('member_join_event4',member_join_event4)
			console.log(member_join_event4)
			
			await cal_expense4_but_from_event_1.run() // <------------------ จ่ายคนเดียว				
			let expense1 = cal_expense4_but_from_event_1.data[0].sum
			storeValue('expense1',expense1)
			// console.log(expense1)
			if(cal_expense4_but_from_event_1.data[0].sum != null ){
				// showAlert('1 not null')	
			}else{
				let expense1 = 0
				storeValue('expense1',expense1)
				console.log(expense1)
			}
			
			await cal_expense4_but_from_event_2.run()   // <------------------ จ่ายหลายคน
			let expense2 = cal_expense4_but_from_event_2.data[0].sum
			storeValue('expense2',expense2)
			// console.log(expense2)
			if(cal_expense4_but_from_event_2.data[0].sum != null ){
				// showAlert('2 not null')	
			}else{
				let expense2 = 0
				storeValue('expense2',expense2)
				console.log(expense2)
			}
			
			
			await cal_expense_member_4.run().then(()=>{
				if(cal_expense_member_4.data.length != 0){
					let expense_member4 = cal_expense_member_4.data[0].total_sum
					if(expense_member4 == null){
						//showAlert('it null')
						let expense_member4 = 0
						storeValue('expense_member4',expense_member4)
						
						
					}else{
						storeValue('expense_member4',expense_member4)
						console.log(expense_member4)
						
					}					
					//select_member_from_trip3.run()
				} else {
					showAlert('ข้อมูลเท่ากับ 0')
					
				}
			}, ()=>{
				showAlert('คิวรี่ไม่ได้')
			})

			await cal_expense4_but_from_event.run()
			let expesne_form_event4 = cal_expense4_but_from_event.data[0].sum
			storeValue('expesne_form_event4',expesne_form_event4)
			console.log(expesne_form_event4)   // <----------------- คำนวณสุดท้าย
		 

    } 
		
		
  }

	
}

