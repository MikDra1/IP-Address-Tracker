/* eslint-disable react/prop-types */

import styles from './Hero.module.css'

function Hero({setIpInput, handleFetch, ipInput}) {
    return (
        <section className={styles.hero}>
            <h1>IP Adress Tracker</h1>

            <div className={styles.form}>
      <input
        type="text"
        value={ipInput}
        onChange={(e) => setIpInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleFetch();
          }
        }}
        placeholder='Search for any IP address or domain'
      />
      <button onClick={handleFetch}>
        <img src="./images/icon-arrow.svg" alt="" />
      </button>
      </div>
        </section>
    )
}

export default Hero
