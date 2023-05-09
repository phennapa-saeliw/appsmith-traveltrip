export default {
	
	myFun2: async () => {
	

		check_login.run(() => {
			let result = check_login.data;
			
			if( result.length == 0){
			  console.log(result)
				showAlert('ไม่พบข้อมูลผู้ใช้งาน !','error')
			}
			else{
				
				if(check_login.data[0].member_username == Input_username.text){ 
					console.log(check_login.data[0].member_username)
				
					storeValue('member_username',check_login.data[0].member_username)
					console.log(appsmith.store.member_username)
					
					
					
				if(check_login.data[0].member_password == Input_password.text){
					console.log(check_login.data[0].member_password)
					showAlert('เข้าสู่ระบบสำเร็จ','success')
					navigateTo('Main','SAMEPAGE')
					

				} else{
					showAlert('ชื่อผู้ใช้งาน หรือ รหัสผ่านไม่ถูกต้อง !', 'error');
					
				}
				} 
				
				
			} 
			
		}
											
											
											
		
	)}
}