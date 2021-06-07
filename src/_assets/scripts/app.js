import PhotoSwipe from "photoswipe";
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";


const openPhotoSwipe = function(button) {
	const pswpElement = document.querySelectorAll(".pswp")[0];
	let options = {
		history: true,
		focus: false,

		showAnimationDuration: 200,
		hideAnimationDuration: 200
	};

	let items = JSON.parse(button.dataset.gallery);

	let gallery = new PhotoSwipe(
		pswpElement,
		PhotoSwipeUI_Default,
		items,
		options
	);
	gallery.init();
};

const pswpButtons = document.querySelectorAll('[data-gallery]');

if ( pswpButtons ) {
	pswpButtons.forEach(function(button) {
		button.addEventListener('click', function() {
			openPhotoSwipe(button);
		})
	});
	
}

