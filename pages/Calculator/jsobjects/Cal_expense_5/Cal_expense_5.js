export default {
	myFun2: async () => {
		if (Select_trip5.selectedOptionValue == '') {
			//showAlert('ไม่ได้เลือกทริป ');
			
			{{resetWidget("Select2",true)}}
			let expense_all = 0
			storeValue('expense_all',expense_all)
			let expense_individual = 0
			storeValue('expense_individual',expense_individual)
			let member_in_event = 0
			storeValue('member_in_event',member_in_event)

		} else {

			//showAlert('เลือกทริป else');

			await select_member_from_trip5.run()
		
			await cal_expense5.run().then(()=>{
				if(cal_expense5.data.length != 0){
					let expense_all = cal_expense5.data[0].sum
					storeValue('expense_all',expense_all)

					async() => {
						
						await cal_expense_member_5.run()
						let expense_member5 = cal_expense_member_5.data[0].total_sum
						storeValue('expense_member5',expense_member5)
						console.log(expense_member5)
						
					}
					
				}else{
					showAlert('ข้อมูลเท่ากับ 0')
				}
			}, ()=>{
				showAlert('คิวรี่ไม่ได้')
			})

	
		}  	

	}


}