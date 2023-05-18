export default {

	async myFun2 () {
	
		check_amount_event.run();
		let data = check_amount_event.data;
		let num = data.map(obj => obj.event_history_id);
		storeValue('num', num);
		
		let result_expense_event = 0;
		//storeValue('result_expense_event',result_expense_event)
		
		for (let i = 0; i < num.length; i++) {
		const count_event = num[i];
		storeValue('count_event', count_event);
		//showAlert('count_event = ' + count_event);
			
		await cal_exp_5_2.run()
		let sum_cal5_2 = cal_exp_5_2.data[0].sum
		if(sum_cal5_2 != null){
		storeValue('sum_cal5_2',sum_cal5_2)	
		//showAlert('sum ='+ sum_cal5_2)
		
		await check_count_member_cal5.run()
		let member_in_event = check_count_member_cal5.data[0].count
		//storeValue('member_in_event',member_in_event)

		await cal_exp_5_2_and_count.run()
		let expense_event = cal_exp_5_2_and_count.data[0].expense_event
		storeValue('expense_event',expense_event)
		showAlert('expense = '+ expense_event)
			
		result_expense_event += expense_event;
		storeValue('result_expense_event',result_expense_event)
		showAlert('result ='+ result_expense_event )

		}else{
			let sum_cal5_2 = 0
			storeValue('sum_cal5_2',sum_cal5_2)
			//showAlert('sum ='+ sum_cal5_2)
			
			await check_count_member_cal5.run()
			let count_event = check_count_member_cal5.data[0].count
			storeValue('count_event',count_event)

			await cal_exp_5_2_and_count.run()
			let expense_event = cal_exp_5_2_and_count.data[0].expense_event
			storeValue('expense_event',expense_event)
			showAlert('expense = '+ expense_event)
			
			result_expense_event += expense_event;
			storeValue('result_expense_event',result_expense_event)
			showAlert('result ='+ result_expense_event )
			//continue;
			
		}


}


		
		
		
		
	}
}