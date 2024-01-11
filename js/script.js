



const tabs = document.querySelectorAll('[data-target]'),
	tabContent= document.querySelectorAll('[data-content]');

tabs.forEach(function(tab){
	tab.addEventListener("click", function(){
		const target = document.querySelector(tab.dataset.target)

		tabContent.forEach(function(tabContents){
			tabContents.classList.remove('userBox_active')
		})
		target.classList.add('userBox_active')

		tabs.forEach(function(tab){
			tab.classList.remove('userBox_active')
		})

		tab.classList.add('userBox_active')
	})
})





