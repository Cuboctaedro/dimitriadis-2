const tabContainer = document.getElementById('tabs');

if (tabContainer) {
	const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
	
	tabs.forEach((tab) => {
		tab.addEventListener('click', (e) => {
			e.preventDefault();
			const selected = tab.getAttribute('aria-selected') === true;
			const otherTabs = tabs.filter((t) => (t.id !== tab.id));
			if (!selected) {
				const target = document.getElementById(tab.getAttribute('data-target'));
				otherTabs.forEach((t) => {
					t.setAttribute('aria-selected', false);
					document.getElementById(t.getAttribute('data-target')).setAttribute('hidden', true);
				});
				target.removeAttribute('hidden');
				tab.setAttribute('aria-selected', true);
			}
		});
	});
}

const imagesSlider = document.getElementById('images-panel');

if (imagesSlider) {
	const prev = document.getElementById('images-prev');
	const next = document.getElementById('images-next');
	const images = Array.from(document.querySelectorAll('.images-frame'));
	const indexSpan = document.getElementById('images-index');
	let index = 1;
	const setVisibleImage = (i) => {
		images.forEach((image) => {
			if (image.id === `images-frame-${i}`) {
				image.removeAttribute('hidden');
			} else {
				image.setAttribute('hidden', true);
			}
		});
		indexSpan.textContent = i.toString();
	}
	setVisibleImage(index);
	prev.addEventListener('click', (e) => {
		if (index === 1) {
			index = images.length;
		} else {
			index = index - 1;
		}
		setVisibleImage(index);
	});
	next.addEventListener('click', (e) => {
		if (index === images.length) {
			index = 1;
		} else {
			index = index + 1;
		}
		setVisibleImage(index);
	});

}