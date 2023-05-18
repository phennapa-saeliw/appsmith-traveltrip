export default {
	myFun2: async () => {
		if (Select1.selectedOptionValue == '') {
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

			await cal_exp_trip_1.run().then(()=>{
				if(cal_expense.data != 0){
					
					let cal_exp1 = cal_exp_trip_1.data[0].total_expense_amount
					storeValue('cal_exp1',cal_exp1)
					//showAlert('cal = ' + cal_exp1 )
					
				}else{
					showAlert('กรุณารอสักครู่ เเล้วลองใหม่อีกครั้ง',)
				}
				
				
			}, ()=>{
				showAlert('กรุณารอสักครู่ เเล้วลองใหม่อีกครั้ง','error')
			})
			
			await cal_exp_trip_2.run()
			let cal_exp2 = cal_exp_trip_2.data[0].sum
			
			if( cal_exp2 != 0){
				storeValue('cal_exp2',cal_exp2)
				//showAlert('cal = ' + cal_exp2 )
			}else{
				let cal_exp2 = 0
				storeValue('cal_exp2',cal_exp2)
				//showAlert('if cal2 = 0')
			}
			
			await cal_exp_sum_1_and_2.run()
				let expense_all = cal_exp_sum_1_and_2.data[0].expense_all
					storeValue('expense_all',expense_all)
					showAlert('คำนวนค่าใช้จ่ายสำเร็จ','success')
				//showAlert('cal = ' +expense_all)
			
			if(sum_1.text != '0 บาท'){
					showAlert('คำนวนค่าใช้จ่ายสำเร็จ','success')
				}

		}  
		

	}	
	

}