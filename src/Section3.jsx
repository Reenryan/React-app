import gaming from './assets/image-gaming-growth.jpg';
import rectro from './assets/image-retro-pcs.jpg';
import topLaptops from './assets/image-top-laptops.jpg';
import styles from './CSS/Section3.module.css';

function Section3(){
    return(
        <div className={styles.outer}>
            <div className={styles.inner}>
                <img  className={styles.img} src={rectro} alt="pcs images" />
                <div className={styles.innertext} >
                    <h1>01</h1>
                    <h2>Reviving Rectro PCs</h2>
                    <p>What happens when old PCs<br/> are given modern upgrades? </p>
                </div>
            </div>
            <div className={styles.inner}>
                <img  className={styles.img} src={topLaptops} alt="Top laptops" />
                <div className={styles.innertext} >
                    <h1>02</h1>
                    <h2>Top 10 Laptops Of 2025</h2>
                    <p>Our best picks for various <br/>needs and budgets</p>
                </div>
            </div>
            <div className={styles.inner}>
                <img  className={styles.img} src={gaming} alt="Gaming image" />
                <div className={styles.innertext} >
                    <h1>03</h1>
                    <h2>The Growth Of Gaming</h2>
                    <p>How  the pandemic has<br/> sparkled fresh opportunities</p>
                </div>
            </div>

        </div>
    )

}
export default Section3;