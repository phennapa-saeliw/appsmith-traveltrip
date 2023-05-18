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
			return;

		} else {

			/* //showAlert('เลือกทริป else');

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

			*/
			await select_member_from_trip5.run()
			
		}
			if (Select_member5.selectedOptionValue == ''){
				//showAlert('รอเลือกสมาชิกแปปนึงเด้')
				return;
			}else{
				
				await cal_exp_5_1.run()
			let cal_ex51 = cal_exp_5_1.data[0].total_expense_amount
			if(cal_ex51 != null){
				storeValue('cal_ex51',cal_ex51)
				//showAlert('cal = ' + cal_ex51)
			}else{
				let cal_ex51 = 0
				storeValue('cal_ex51',cal_ex51)
				//showAlert('cal = 0')
			}
			
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
		//showAlert('expense = '+ expense_event)
			
		result_expense_event += expense_event;
		storeValue('result_expense_event',result_expense_event)
		//showAlert('result ='+ result_expense_event )

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
			//showAlert('expense = '+ expense_event)
			
			result_expense_event += expense_event;
			storeValue('result_expense_event',result_expense_event)
			//showAlert('result ='+ result_expense_event )
			//continue;
			
		}


	} // อันนี้ในลูปนรก

				await cal_exp_5_sum_1_and_2.run()
				let expense_all = cal_exp_5_sum_1_and_2.data[0].expense_all
				storeValue('expense_all',expense_all)
				
				showAlert('คำนวณเสร็จสิ้น','success')
				
				
			} // หาไม่เจอ ; _ ;
			

	},
		reset : async () => {
			
			let expense_all = 0
			storeValue('expense_all',expense_all)
		}

}