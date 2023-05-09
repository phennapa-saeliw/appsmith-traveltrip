export default {

	async myFun2 () {
		
		if(new_password.inputText != renew_password.inputText ){
			showAlert('รหัสผ่านใหม่ไม่ตรงกัน','error')
			return;
		
		}
		
		await check_password.run()
		let current_pass = check_password.data[0].member_password
		storeValue('current_pass',current_pass)
		
		if(new_password.inputText != current_pass){
			showAlert('รหัสผ่านปัจจุบันไม่ถูกต้อง','error')
			return;
		}
		
		await update_password.run()
		showAlert('เปลี่ยนแปลงรหัสผ่านเรียบร้อย','success')
		
	}
}