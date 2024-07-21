import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from '../text';

import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select';
import {
	ArticleStateType,
	OptionType,
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	defaultArticleState,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { useState } from 'react';
import clsx from 'clsx';

export interface IArticleParamsForm {
	setState: (value: ArticleStateType) => void;
}
export const ArticleParamsForm = (props: IArticleParamsForm) => {
	const { setState } = props;

	const [articleState, setArticleState] =
		useState<ArticleStateType>(defaultArticleState);

	const [isOpen, setIsOpen] = useState<boolean>(false);
	//typeof window !== 'undefined' ? useState(false) : useState(false);

	const handleArticleStateChange = (param: string) => {
		return (value: OptionType) => {
			setArticleState((prev) => ({
				...prev,
				[param]: value,
			}));
		};
	};

	const handleArticleStateResert = () => {
		setArticleState(defaultArticleState);
		setState(defaultArticleState);
	};

	const handleArticleStateSubmitForm = (evt: React.SyntheticEvent) => {
		evt.preventDefault();
		setState(articleState);
	};

	return (
		<>
			<ArrowButton
				isOpenForm={isOpen}
				onClick={
					() => setIsOpen((prev) => !prev)
					//typeof window !== 'undefined' ? () => setIsOpen(!isOpen) : () => setIs
				}
			/>
			<div
				onClick={() => setIsOpen((prev) => !prev)}
				className={clsx(styles.overlay, isOpen && styles.overlay_open)}>
			</div>
			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form
					className={styles.form}
					onSubmit={handleArticleStateSubmitForm}
					onReset={handleArticleStateResert}>
					<Text uppercase={true} weight={800} size={31}>
						Задайте параметры
					</Text>
					<Select
						title='шрифт'
						selected={articleState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={handleArticleStateChange('fontFamilyOption')}
					/>
					<RadioGroup
						title='размер шрифта'
						name='fontSizeOption'
						selected={articleState.fontSizeOption}
						options={fontSizeOptions}
						onChange={handleArticleStateChange('fontSizeOption')}
					/>
					<Select
						title='цвет шрифта'
						selected={articleState.fontColor}
						options={fontColors}
						onChange={handleArticleStateChange('fontColor')}
					/>
					<Separator />
					<Select
						title='цвет фона'
						selected={articleState.backgroundColor}
						options={backgroundColors}
						onChange={handleArticleStateChange('backgroundColor')}
					/>
					<Select
						title='ширина контента'
						selected={articleState.contentWidth}
						options={contentWidthArr}
						onChange={handleArticleStateChange('contentWidth')}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
