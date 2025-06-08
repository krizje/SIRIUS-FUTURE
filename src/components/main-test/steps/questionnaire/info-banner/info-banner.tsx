import { Icon } from '@components/shared/icon/icon';
import styles from './info-banner.module.scss';

export const InfoBanner = () => {
    return (
        <section className={styles.root}>
            <div className={styles.item}>
                <Icon name="like" className={styles.icon} />
                <p className={styles.text}>
                    Пожалуйста, внимательно прочитайте каждый вопрос и выберите наиболее подходящий вариант ответа,
                    отражающий поведение и эмоциональное состояние вашего ребенка в течение последних 2-4 недель.
                    Отвечайте максимально честно и искренне, так как от этого зависит точность оценки
                    психоэмоционального развития Вашего ребенка.
                </p>
            </div>
            <div className={styles.item}>
                <Icon name="flag" className={styles.icon} />
                <p className={styles.text}>Все вопросы обязательны к заполнению.</p>
            </div>
        </section>
    );
};
