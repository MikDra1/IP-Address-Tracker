import { ThreeDots } from "react-loader-spinner";
import styles from './Loader.module.css'

function Loader() {
  return (
    <div className={styles.loader}>
      <ThreeDots
        visible={true}
        height="200"
        width="200"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
