export default {
  myFun2: async () => {
    if (Select1.selectedOptionValue == '') {
      showAlert('ไม่ได้เลือกทริป');
      resetWidget("Select2", true);
      let expense_all = 0;
      storeValue('expense_all', expense_all);
    } else {
      showAlert('เลือกทริป else');
      await cal_expense.run().then(() => {
        if (cal_expense.data.length != 0) {
          let expense_all = cal_expense.data[0].sum;
          storeValue('expense_all', expense_all);
          
          let expense_history_id_from_trip = cal_expense.data[0].event_history_id;
          storeValue('expense_history_id_from_trip', expense_history_id_from_trip);
          select_member_from_trip.run();
					
          check_member_join_event.run();
          let member_in_event = check_member_join_event.data[0].count;
          storeValue('member_in_event', member_in_event);
					
          cal_expense_individual.run().then(() => {
            if (cal_expense_individual.data.length != 0) {
              let expense_individual = cal_expense_individual.data[0].list_expense_amount;
              storeValue('expense_individual',expense_individual)
							console.log(appsmith.store.expense_individual)
            }
          });
        } else {
          showAlert('ข้อมูลเท่ากับ 0');
        }
      })
			(() => {
        showAlert('คิวรี่ไม่ได้');
      });
    }
  }
};
