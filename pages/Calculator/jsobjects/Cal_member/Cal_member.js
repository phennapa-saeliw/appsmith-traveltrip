export default {
  myFun2: async () => {
		
		let expense_member = 0;
		storeValue('expense_member',expense_member);
		
		
			if(Select_trip3.selectedOptionValue.length != 0){
			await select_event_form_trip_id3.run()
			await select_member_from_trip3.run()
			
		}
		
		 if(Select_trip3.selectedOptionValue == ''){
			 
			 resetWidget("Select_event3", true);
			 resetWidget("Select_member3", true);

			 let expense_member = 0
			 storeValue('expense_member',expense_member)
		 }

    if (Select_member3.selectedOptionValue == '') {
      showAlert('ไม่ได้เลือกสมาชิก');
			let expense_member = 0
			storeValue('expense_member',expense_member)
			
    } else{
      // showAlert('เลือกสมาชิกแล้ว')
			
			select_event_form_trip_id3.run()
			
			await cal_expense_member_2.run().then(()=>{
				if(cal_expense_member_2.data.length != 0){
					
					let expense_member = cal_expense_member_2.data[0].total_sum
					if(expense_member == null){
						//showAlert('it null')
						let expense_member = 0
						storeValue('expense_member',expense_member)
						console.log(expense_member)
						//showAlert('expense_member = '+ expense_member)
						select_member_from_trip3.run()
					}else{
					storeValue('expense_member',expense_member)
					//console.log(cal_expense_member_2.data[0].total_sum)
					select_member_from_trip3.run()
					}
								
				} else {
					showAlert('ข้อมูลเท่ากับ 0')
					
				}
			}, ()=>{
				showAlert('คิวรี่ไม่ได้')
			})

			
	     //select_member_from_trip.run()
    } 
		
		
		
  }

	
}
