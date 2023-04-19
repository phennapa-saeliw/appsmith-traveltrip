export default {
	myFun2: async () => {
		if (Select1.selectedOptionValue == '') {
			showAlert('ไม่ได้เลือกทริป if');
			
			{{resetWidget("Select2",true)}}
			let expense_all = 0
			storeValue('expense_all',expense_all)
			let expense_individual = 0
			storeValue('expense_individual',expense_individual)
			let member_in_event = 0
			storeValue('member_in_event',member_in_event)

		} else {

			showAlert('เลือกทริป else');

			await cal_expense.run().then(()=>{
				if(cal_expense.data.length != 0){

					let expense_all = cal_expense.data[0].sum
					storeValue('expense_all',expense_all)
					select_member_from_trip.run()
					
					let expense_history_id_from_trip = cal_expense.data[0].event_history_id;
          storeValue('expense_history_id_from_trip', expense_history_id_from_trip);
          select_member_from_trip.run();
		
				}else{
					showAlert('ข้อมูลเท่ากับ 0')
				}
			}, ()=>{
				showAlert('คิวรี่ไม่ได้')
			})
			
			
					
			
			await check_member_join_event.run();
          let member_in_event = check_member_join_event.data[0].count;
          storeValue('member_in_event', member_in_event);
			
			await cal_expense_individual.run() 
          let expense_individual = cal_expense_individual.data[0].expense_per_member
          storeValue('expense_individual',expense_individual)
					console.log(appsmith.store.expense_individual)
            
				
				
				
			// select_member_from_trip.run()

		}

	}


}