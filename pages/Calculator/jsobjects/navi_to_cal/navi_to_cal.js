export default {
	
	myFun2: async () => {
		navigateTo('Calculator', {}, 'SAME_WINDOW')
		
		let expense_all = 0;
		storeValue('expense_all',expense_all)
		
		let cal_from_event_total = 0;
		storeValue('cal_from_event_total',cal_from_event_total)
		
		}
	}