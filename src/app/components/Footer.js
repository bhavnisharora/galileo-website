const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "#040615", padding: "30px" }}>
        <div
          style={{
            color: "gray",
            fontSize: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          Share your post on social media using:
        </div>
        <div
          style={{
            color: "white",
            fontSize: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
            fontWeight: "bold",
          }}
        >
          #GalileoFXVideo
        </div>

        <div
          style={{
            color: "gray",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            marginTop: "100px",
          }}
        >
          <div>©copyright all right reserved</div>
          <div>Term & Conditions | Judging Panel</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
