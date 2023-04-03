export default {
  
	myFun2: async () => {
	
		 let user_select  = JSONForm1Copy.formData.customfield4;
	
	   for(let i=0;i < user_select.length;i++){                         
		 const user_num = user_select[i];    
		 //console.log(user_num);
		 
		 storeValue('user_id',user_num)  // left เรียกใช้ , right ค่า
		
		 await check_user_in_trip2.run()
		 console.log(check_user_in_trip2.data)
		 
			 
			
		
	 }
		
	}
}