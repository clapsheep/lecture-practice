import styles from './A11yHidden.module.css';

export default function A11yHidden({
  as: ComponentName = 'span',
  ...restProps
}) {
  return (
    <ComponentName
      className={styles.group}
      styles={{ fontSize: 100 }}
      {...restProps}
    />
  );
}
