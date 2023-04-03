export default {
  myFun2: async () => {
    if (Select4.selectedOptionValue == '') {
      showAlert('ไม่ได้เลือกทริป');
			
    } else {
      showAlert('เลือกทริปแล้ว');
			select_member_from_trip.run()
    }
  }
}
