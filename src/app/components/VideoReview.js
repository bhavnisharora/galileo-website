import styles from "../style.module.css";
import Link from "next/link";
import Image from "next/image";
import { BiSolidCameraMovie } from "react-icons/bi";
import { RiMovie2Fill } from "react-icons/ri";
const VideoReview = () => {
  return (
    <>
      <div
        className="filter"
        style={{
          position: "absolute",
          top: "20%",
          right: "3%",
          rotate: "0deg",
          color: "blue",
          fontSize: "50px",
        }}
      >
        <RiMovie2Fill />
      </div>
      <div
        className="filter"
        style={{
          position: "absolute",
          top: "50%",
          right: "10%",
          color: "blue",
          fontSize: "100px",
        }}
      >
        <BiSolidCameraMovie />
      </div>

      <div style={{ marginTop: "60px" }} className={styles.contestIntro}>
        <h1>Galileo FX Video Review Contest 2024</h1>
        <p>
          Share Your Experience,
          <span className={styles.contestIntroPrize}> Win $5,000</span>
        </p>
        <Link href="/" className={styles.btnPrimary}>
          Enter the Contest
        </Link>

        <div className={styles.shadowContainer}>
          <Image
            src="/shadow.png"
            className={styles.logo}
            width={160}
            height={180}
            alt="logo"
          />
        </div>
      </div>

      <div
        className="filter1"
        style={{
          position: "absolute",
          top: "30%",
          left: "10%",
          color: "blue",
          fontSize: "70px",
        }}
      >
        <RiMovie2Fill />
      </div>

      <div
        className="filter1"
        style={{
          position: "absolute",
          top: "10%",
          rotate: "0deg",
          left: "20%",
          color: "blue",
          fontSize: "50px",
        }}
      >
        <BiSolidCameraMovie />
      </div>
    </>
  );
};

export default VideoReview;
