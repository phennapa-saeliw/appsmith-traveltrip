export default {
	
	async myFun2 () {
		
		await check_email.run()
		
		
		
		if(check_email.data.length != 0 ){
			//showAlert('มีบัญชี')
			let your_password = check_email.data[0].member_password
			storeValue('your_password',your_password)
			
			await Send_mail_to_user.run()
			showAlert('ระบบได้ทำการส่งอีเมลเเล้วเรียบร้อย กรุณาตรวจสอบอีเมลของผู้ใช้งาน','success')
			
		} else {
			showAlert('ไม่พบอีเมลนี้ในระบบ','error')
			return;
		}
	}
}