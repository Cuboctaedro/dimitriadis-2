import PhotoSwipe from "photoswipe";
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";

const pswpButtons = document.querySelectorAll('[data-gallery]');

console.log('new');


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

if ( pswpButtons ) {
	Array.prototype.forEach.call(pswpButtons, function(button) {
		button.addEventListener('click', function() {
			penPhotoSwipe(button);
		})
	});
	
}

