export default {
  myFun2: async () => {
		
		 if (Select_event.selectedOptionValue == '') {
      
			let cal_from_event_total = 0
			storeValue('cal_from_event_total',cal_from_event_total) 
			resetWidget("Select_member3", true);
			let expense_member = 0
			 storeValue('expense_member',expense_member)
		 
		 }
	
    if (Select_trip.selectedOptionValue == '') {
      //showAlert('ไม่ได้เลือกทริป');
      resetWidget("Select2", true);
      let expense_all = 0;
      storeValue('expense_all', expense_all);
			
			resetWidget("Select_event", true);
			
			let expense_individual = 0
      storeValue('expense_individual',expense_individual)
			
			let cal_from_event_total = 0
			storeValue('cal_from_event_total',cal_from_event_total)  

			
    } else {
      //showAlert('เลือกทริป')
			
			await select_event_form_trip_id.run()

			await cal_expense2.run().then(()=>{
				if(cal_expense2.data.length != 0){

					let expense_all2 = cal_expense2.data[0].sum
					storeValue('expense_all2',expense_all2)
					
					

				}
			})

					if(Select_event.selectedOptionLabel != ''){
						
					//await select_event_form_trip_id.run()	
					await check_member_join_event.run()
					let member_in_event = check_member_join_event.data[0].count;
          storeValue('member_in_event', member_in_event);
						
					}else{
						//showAlert('กรุณาเลือกกิจกรรม')
						return;
						
					}
					
					
					await cal_expense_individual.run() 
          let expense_individual = cal_expense_individual.data[0].expense_per_member
          storeValue('expense_individual',expense_individual)
					console.log(appsmith.store.expense_individual)
			
					await cal_expense2_but_from_event.run()
					let cal_from_event_total = cal_expense2_but_from_event.data[0].sum
					storeValue('cal_from_event_total',cal_from_event_total)
					showAlert('คำนวนค่าใช้จ่ายสำเร็จ','success')
			
					await select_member_from_trip.run()
			
					
					
			
    } 
					
  } 
};
