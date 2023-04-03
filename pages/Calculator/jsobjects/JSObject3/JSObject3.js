export default {
  myFun2: async () => {
    if (Select3.selectedOptionValue == '') {
      showAlert('ไม่ได้เลือกทริป');
			
    } else {
      showAlert('เลือกทริปแล้ว');
    }
  }
}
