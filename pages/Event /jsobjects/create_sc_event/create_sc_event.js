export default {

  myFun2: async () => {

    // --------------------- check member  ------------------------ //

    if (SC_event_form.formData.customField6 != '') {

      showAlert('เข้า1')
      let one_or_two = 1
      storeValue('one_or_two', one_or_two)
      await SC_event_create.run();

    } else {
      showAlert('เข้า 2')
      let one_or_two = 2
      storeValue('one_or_two', one_or_two)
      await SC_event_create.run();

    }

    // --------------------- check member  ------------------------ //

    let user_select = SC_event_form.formData.customField6;
    for (let i = 0; i < user_select.length; i++) {
      const user_num = user_select[i];
      //console.log(user_num);

      storeValue('user_id', user_num);

      await SC_select_id_for_member.run();

      if (await SC_select_id_for_member.run()) {

        let id_expense = SC_select_id_for_member.data[0].list_expense_id;
        storeValue('id_expense', id_expense);
        await SC_create_expense_for_member.run();

      }
    }
		
		await SC_event_show_table.run()
		
		storeValue('tab','Tab 1')
		showAlert('เพิ่มรายการสำเร็จ','success')
		
		
		
  }
}
