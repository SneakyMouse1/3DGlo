export const animate = ({
	timing,
	draw,
	duration
}) => {

	let start = performance.now();

	requestAnimationFrame(function animate(time) {
		
        // timeFraction изменяется от 0 до 1
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		// Вычисляем текущее состояние анимации
		let progress = timing(timeFraction);

		draw(progress); // Собсно, рисуем

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}

	});
};