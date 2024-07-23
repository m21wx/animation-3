

	let btn= document.querySelector('.icons .iconsBox');
	let box= document.querySelector('.animation-3 .box1');
	
	
	btn.addEventListener('click',()=>{
		
		box.classList.toggle('anmited')
		if(box.classList.contains('anmited')){
			btn.innerHTML = `<i class="fa-regular fa-circle-stop"></i>`
		}else{
			btn.innerHTML = `<i class="fa-solid fa-play"></i> `
		}
	
		
	})