export default {

	myFun2: async () => {
		
				if(input_username.inputText == ''){
					showAlert('กรุณากรอก username')
					return;
				}
		
				if(input_password1.inputText == ''){
					showAlert('กรุณากรอก Password')
					return;
				}
		
				if(input_password2.inputText == ''){
					showAlert('กรุณากรอก Re-Password ')
					return;
				} 
		
				if(input_firstname.inputText == ''){
				showAlert('กรุณากรอก fistname !')
				return;
				}
		
				if(input_lastname.inputText == ''){
				showAlert('กรุณากรอก lastname !')
				return;
				}
		
		
				await check_email.run()
				let result_email = check_email.data;
				if(result_email.length != 0){
					showAlert('มีผู้ใช้งานอีเมลนี้อยู่เเล้ว!','error');
					return;
				} //showAlert('เช็คไปต่อ')
			
			
		
			check_username.run(() => {
			let result = check_username.data;
			
				
				if( result.length != 0 ){
					console.log(result)

					showAlert('มีผู้ใช้งานบัญชีนี้อยู่เเล้ว!','error');
					return;
					
				} 
				
				//else 
					// showAlert('ใช้งานบัญชีนี้ได้','success')
				
			  let p1 = input_password1.inputText;
				let p2 = input_password2.inputText;
				
				if( p1 != p2 ){
					showAlert('รหัสผ่านไม่ตรงกัน','error')
					return;
					
				} //else
					//showAlert('รหัสผ่านตรงกัน','success')
					register.run(showAlert('สมัครสมาชิกสำเร็จ','success'),navigateTo('Login','SAMEPAGE'))
					
			}	
		
	)
		

	} 	

}