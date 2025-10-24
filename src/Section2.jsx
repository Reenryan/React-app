import styles from './CSS/Section2.module.css';
function Section2 (){
return(
 <div className={styles.container} >
    <h1 >New</h1>
    <div>
        <h2>Hydrogen VS Electric Cars</h2>
        <p>Will hydrogen fuels gas ever catch up to <br/> EVs ?</p>
    </div>
    <hr />
    <div>
        <h2>The Downside Of AI Artistry</h2>
        <p>What are the possible adverse effects of <br/>the on-demand Ai image generetaion ? </p>
    </div>
    <hr />
    <div>
        <h2>Is VC Funding Drying Up </h2>
        <p>Private funding  by VC firms is down 50% <br/>YOY .We take a look at what that means.</p>
    </div>
 </div>
)

}
export default Section2;