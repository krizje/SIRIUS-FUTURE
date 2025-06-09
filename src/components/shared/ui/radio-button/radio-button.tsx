import styles from './radio-button.module.scss';

interface CustomRadioProps {
    name: string;
    value: string;
    defaultChecked?: boolean;
    onChange: (value: string) => void;
    label?: string;
}

export const RadioButton: React.FC<CustomRadioProps> = ({ name, value, defaultChecked, onChange, label }) => {
    return (
        <label className={styles.wrapper}>
            <input
                type="radio"
                name={name}
                value={value}
                defaultChecked={defaultChecked}
                onChange={() => onChange(value)}
                className={styles.hiddenRadio}
            />
            <span className={styles.circle} />
            {label && <span className={styles.label}>{label}</span>}
        </label>
    );
};
