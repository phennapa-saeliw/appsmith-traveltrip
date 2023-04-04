export default {
	myFun2: async () => {
		if (Select1.selectedOptionValue == '') {
			showAlert('ไม่ได้เลือกทริป if');
			{{resetWidget("Select2",true)}}
			let expense_all = 0
			storeValue('expense_all',expense_all)

		} else {

			showAlert('เลือกทริป else');

			await cal_expense.run().then(()=>{
				if(cal_expense.data.length != 0){

					let expense_all = cal_expense.data[0].sum
					storeValue('expense_all',expense_all)
					select_member_from_trip.run()
				}else{
					showAlert('ข้อมูลเท่ากับ 0')
				}
			}, ()=>{
				showAlert('คิวรี่ไม่ได้')
			})


			// select_member_from_trip.run()

		}

	}


}
