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

			await cal_expense.run().then(()=>{
				if(cal_expense.data.length != 0){

					let expense_all = cal_expense.data[0].sum
					storeValue('expense_all',expense_all)
					showAlert('คำนวนค่าใช้จ่ายสำเร็จ','success')
			
				}else{
					showAlert('กรุณารอสักครู่ เเล้วลองใหม่อีกครั้ง',)
				}
				
				
			}, ()=>{
				showAlert('กรุณารอสักครู่ เเล้วลองใหม่อีกครั้ง','error')
			})
			
			
			if(sum_1.text != '0 บาท'){
					showAlert('คำนวนค่าใช้จ่ายสำเร็จ','success')
				}

		}  
		

	}	
	

}