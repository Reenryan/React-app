import imgPage from './assets/image-web-3-desktop.jpg';
import styles from './CSS/Section1.module.css';
function Section1() {
    return(
        <div className={styles.outer}>
            <div className={styles.container} >
                <img src={imgPage} alt="desktop web image" className={styles.coverImage} />
                <div className={styles.details1} >
                    <h1>The Bright <br/> Future Of <br/>Web 3.0 ?</h1>
                </div>
                <div className={styles.details2} >
                    <pre className={styles.message} >
                        We dive into the next eveolution of the web that
                        claims to put the power of the platforms back
                        into the hands of the people.But is it really 
                        fullfiling its promise?</pre>
                    <button className={styles.btn} >READ MORE</button>
                </div>
            </div>
        </div>

    )

}
export default Section1;