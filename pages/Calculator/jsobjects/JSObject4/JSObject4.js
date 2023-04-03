export default {
  myFun2: async () => {
    if (Select2.selectedOptionValue == '') {
      showAlert('ไม่ได้เลือกทริป');
			
    } else {
      showAlert('เลือกทริปแล้ว');
    }
  }
}
