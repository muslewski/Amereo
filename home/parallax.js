				let moon = document.getElementById('moon');
				let ptaki = document.getElementById('ptaki');
				let back = document.getElementById('back');
				let front = document.getElementById('front');
				let text = document.getElementById('text');
				let btn = document.getElementById('btn');
				let header = document.querySelector('header');

				window.addEventListener('scroll', function(){
				let value = window.scrollY;
				ptaki.style.left = value * 0.24 + 'px';
				moon.style.top = value * 0.8 + 'px';
				back.style.top = value * 0.4 + 'px';
				front.style.top = value * 0 + 'px';
				text.style.marginLeft = value * 2 + 'px';
				text.style.marginTop = value * 1 + 'px';
				btn.style.marginTop = value * 1 + 'px';
				header.style.top = value * 0.5 + 'px';})