export default {

	tabb1: async () => {
		resetWidget('Select1','true')
		let expense_all = 0
		storeValue('expense_all',expense_all)
		
		{{storeValue('tabb','Tab 1')}}
	
	},
	tabb2: async () => {

		resetWidget('Select_trip','true')
		resetWidget('Select_event','true')
		let cal_from_event_total = 0
		storeValue('cal_from_event_total',cal_from_event_total)
		
		{storeValue('tabb','Tab 2')}
		
	},
	tabb3: async () => {
		
		resetWidget('Select_trip3','true')
		resetWidget('Select_event3','true')
		resetWidget('Select_member3','true')
		
		let expense_member = 0
		storeValue('expense_member',expense_member)
		
		{{storeValue('tabb','Tab 3')}}
		
	},
	tabb4: async () => {

		resetWidget('Select_trip4','true')
		resetWidget('Select_event4','true')
		resetWidget('Select_member4','true')
		
		let expesne_form_event4 = 0
		storeValue('expesne_form_event4',expesne_form_event4)
		
		{{storeValue('tabb','Tab 4')}}
		
	},
	tabb5: async () => {

		resetWidget('Select_trip5','true')
		resetWidget('Select_event5','true')
		resetWidget('Select_member5','true')
		
		let expesne_form_event5 = 0
		storeValue('expesne_form_event5',expesne_form_event5)
		
		let expense_member = 0
		storeValue('expense_member',expense_member)
		
		{{storeValue('tabb','Tab 5')}}
		
	}
}