export default {

	async trip () {
		
	 if(Select_trip3.selectedOptionLabel = ''){
			showAlert('กรุณาเลือกรายการทริป','error')
			{{resetWidget("Select_member3",true)}}
			{{resetWidget("Select_event3",true)}}
			return;
		}
		
		
		
	},
	
	async event (){
		 if(Select_event3.selectedOptionLabel == ''){
			showAlert('กรุณาเลือกรายการกิจกรรม','error')
			{{resetWidget("Select_member3",true)}}
			{{resetWidget("Select_event3",true)}}
			return;
		}
		
		
	}
	
	
}