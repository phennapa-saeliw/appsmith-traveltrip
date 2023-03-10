export default {

	myFun2: async () => {
		
			check_username.run(() => {
			let result = check_username.data;
			
				
				if( result.length != 0 ){
					console.log(result)

					showAlert('มีผู้ใช้งานบัญชีนี้อยู่เเล้ว!','error')
				} //else 
					// showAlert('ใช้งานบัญชีนี้ได้','success')
				
			  let p1 = input_password1.inputText;
				let p2 = input_password2.inputText;
				
				if( p1 != p2 ){
					showAlert('รหัสผ่านไม่ตรงกัน','error')
					
				} //else
					//showAlert('รหัสผ่านตรงกัน','success')
				
			
		
			}
		
		
		
	)}

}