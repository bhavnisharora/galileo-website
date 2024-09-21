import styles from "../style.module.css";
import Link from "next/link";
import { RiMovie2Fill } from "react-icons/ri";

const PrizeAmount = () => {
  return (
    <>
      <div className={styles.contestDetails}>
        <div className={styles.prize}>
          <h2>$5,000</h2>
          <p>Minimum participants </p>
          <span className={styles.digits}> 09 </span>
          <p>Submission Deadline</p>
          <span className={styles.digits}> 10 Oct 2024 </span>

          <div
            className="filter"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              color: "blue",
              fontSize: "100px",
              opacity: "0.4",
              marginBottom: "20px",
            }}
          >
            <RiMovie2Fill />
          </div>
        </div>
        <div className={styles.description}>
          <h2>What is Galileo FX Video Contest 2024?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non sine
            causa ex iis memoriae ducit...
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non sine
            causa ex iis memoriae...
          </p>

          <div style={{ marginTop: "20px" }}>
            <Link
              href="/"
              className={styles.btnPrimary}
              style={{ marginTop: "20px" }}
            >
              Enter the Contest
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrizeAmount;
