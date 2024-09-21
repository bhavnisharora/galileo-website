import styles from "../style.module.css";

const Criteria = () => {
  return (
    <>
      <div className={styles.judgingCriteria}>
        <h2>Judging Criteria</h2>
        <div className={styles.criteriaGrid}>
          <div className={styles.criteriaItem}>
            Quality of content: <strong>HD</strong>
          </div>
          <div className={styles.criteriaItem}>
            Video production: <strong>Premium</strong>
          </div>
          <div className={styles.criteriaItem}>
            Sound quality: <strong>Good</strong>
          </div>
          <div className={styles.criteriaItem}>
            Social media upload: <strong>3+ platforms</strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default Criteria;
