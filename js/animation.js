const animation = () => {
	if (window.innerWidth <= 767) {
		return;
	}

	const elements = Array.from(
		document.querySelectorAll(
			'[data-animate], [data-animate-top], [data-animate-bottom]'
		)
	);

	const loadClassName = (el) => {
		el.classList.add('__animated');
	};

	const handleIntersect = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				loadClassName(entry.target);
				observer.unobserve(entry.target);
			}
		});
	};

	if (window['IntersectionObserver']) {
		const lazyImageObserver = new IntersectionObserver(handleIntersect);
		elements.forEach((element) => lazyImageObserver.observe(element));
	} else {
		elements.forEach((element) => loadClassName(element));
	}
};

document.addEventListener('DOMContentLoaded', animation);
