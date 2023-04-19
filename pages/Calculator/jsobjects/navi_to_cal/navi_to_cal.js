export default {
	
	myFun2: async () => {
		navigateTo('Calculator', {}, 'SAME_WINDOW')
		clearStore()
		
		if(expense_all = undefined){
			 let expense_all = 0;
				storeValue('expense_all',expense_all)
		}
	}
}