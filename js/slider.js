window.addEventListener('load', function(){
	new Glider(document.querySelector('.section__carousel--item-list'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.section__carousel--dots',
		arrows: {
			prev: '.section__carousel--btn-left',
			next: '.section__carousel--btn-right'
		},
		responsive: [
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				 }
			},
			,{
				breakpoint: 800,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			}
		]
	});
});