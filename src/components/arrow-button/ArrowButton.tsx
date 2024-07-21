import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

import clsx from 'clsx';
/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export interface IArrowButton {
	isOpenForm: boolean;
	onClick: OnClick;
}

export const ArrowButton = (props: IArrowButton) => {
	const { isOpenForm, onClick } = props;

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx({
				[styles.container]: true,
				[styles.container_open]: isOpenForm,
			})}
			onClick={onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx({
					[styles.arrow]: true,
					[styles.arrow_open]: isOpenForm,
				})}
			/>
		</div>
	);
};
