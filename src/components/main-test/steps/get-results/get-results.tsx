import CryEmoji from '@assets/images/cry.png';

import styles from './get-results.module.scss';

export const GetResults = () => {
    return (
        <section className={styles.root} id="sharable">
            <h1 className={styles.title}>**Психологический отчёт о ребёнке 8 лет**</h1>
            <div className={styles.explanation}>
                <img className={styles.cryEmoji} src={CryEmoji} />
                <p className={styles.text}>
                    Дорогие разработчики и провряющие, к сожалению ваш API на запрос получения отчета выдает 500 ошибку.
                    Но я все равно сделал функционал скачивания и поделиться🙃
                </p>
            </div>
        </section>
    );
};
