export default {
  myFun2: async () => {
    await check_member_on_trip.run();
    let check_array = check_member_on_trip.data;
		
		await check_trip.run()
		storeValue('trip_detail',check_trip.data);

    if (check_array != 0) {
      //showAlert('มีสมาชิกอยู่ในทริปเรียบร้อยแล้ว ไปหน้าถัดไปได้เลย!');
			storeValue('event_trip_detail',list2.triggeredItem)
      navigateTo('Event ', 'SAME_WINDOW');
    } else {
      showAlert('กรุณาเพิ่มสมาชิกที่เข้าร่วมทริป !');
    }
  }
}
