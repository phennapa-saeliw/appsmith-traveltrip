export default {
	
	reset_expense_all: async () => {
		
		let expense_all = 0
		storeValue('expense_all',expense_all)
	},

	myFun2: async () => {
		{
				
    if (Select_event.selectedOptionValue == '') {
      
			let cal_from_event_total = 0
			storeValue('cal_from_event_total',cal_from_event_total) 
			
			return;
			
    }
	}
}
}