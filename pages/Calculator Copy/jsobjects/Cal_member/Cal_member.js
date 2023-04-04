export default {
  myFun2: async () => {
    if (Select2.selectedOptionValue == '') {
      showAlert('ไม่ได้เลือกสมาชิก');
			let expense_member = 0
			storeValue('expense_member',expense_member)
			
    } else{
      showAlert('เลือกสมาชิกแล้ว')
			cal_expense_member_2.run()
			let expense_member = cal_expense_member_2.data[0].total_sum
			storeValue('expense_member',expense_member)
			
			
			select_member_from_trip.run()
    }
		
  }

	
}
