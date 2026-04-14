import { Link } from "react-router-dom";
const styles = {
  settingBtn: {
    padding: "0.5rem 1.25rem",
    position: "fixed",
    bottom: "1rem",
    left: "1rem",
    borderRadius: "0.5rem",
    backgroundColor: "orangered"
  }
};
const SettingBtn = () => {
  return (
    <>
      <Link to="/setting">
        <button style={styles.settingBtn} id="settingBtn">
          Setting
        </button>
      </Link>
    </>
  );
};

export default SettingBtn;
