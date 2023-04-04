export default {
  myFun2: async () => {
    if (Select1.selectedOptionValue == '') {
      showAlert('ไม่ได้เลือกทริป');
			{{resetWidget("Select2",true)}}
			let expense_all = 0
			storeValue('expense_all',expense_all)
	
    } else {
			
      showAlert('ไม่ได้เลือกทริป');
			
			cal_expense.run()
			let expense_all = cal_expense.data[0].sum
			storeValue('expense_all',expense_all)
			
			select_member_from_trip.run()
			
    }
		
  }

	
}
