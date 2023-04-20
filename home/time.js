			var today = new Date();
			//var hour = today.getHours();
			var hour =6 ;
			
			var img = document.getElementById("moon");
			var img2 = document.getElementById("ptaki");
			var img3 = document.getElementById("back");
			var img4 = document.getElementById("front");
			var before = document.getElementById('before');
			let fontColor = document.getElementById('text');

			if (hour > 6 && hour < 22) {
			img.src="home/sun.png";
			img.alt="sun";
			img2.src="home/ptaki-day.png";
			img2.alt="ptaki";
			img3.src="home/back-day.png";
			img3.alt="back";
			img4.src="home/front-day.png";
			img4.alt="front";
			document.body.style.backgroundColor = '#ffc439';
			before.style.backgroundImage = 'linear-gradient(to top,#ffc439,transparent)';
			fontColor.style.color = '#4c2017';
			} 
			else {
			img.src="home/moon.png";
			img.alt="moon";
			img2.src="home/ptaki.png";
			img2.alt="ptaki";
			img3.src="home/back.png";
			img3.alt="back";
			img4.src="home/front.png";
			img4.alt="front";
			document.body.style.backgroundColor = '#211f56';
			before.style.backgroundImage = 'linear-gradient(to top,#211f56,transparent)';
			fontColor.style.color = '#fff';
			}