import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import soldTvs from "./helpers/soldTvs.js";
import generateName from "./helpers/nameGenerator.js";
import tvPrice from "./helpers/tvPrice.js";
import calcCM from "./helpers/inchesToCM.js";
import checkImage from "./assets/check.png";
import minusImage from  "./assets/minus.png"

//------- git branch 'uitwerkingen' --------------

// Opdracht 1-----------------------
const sold = soldTvs(inventory, 'sold');
const orgStock = soldTvs(inventory, 'originalStock');
const left = orgStock - sold;



// opdracht 2a-----------------------
let tvName = generateName(bestSellingTv, 'brand', 'type', 'name');



// opdracht 2b-----------------------
let pricing = tvPrice(bestSellingTv, 'price');




// opdracht 2c-----------------------
let sizes = calcCM(bestSellingTv.availableSizes);
console.log(bestSellingTv.availableSizes);





function App() {
    return (
        <>
            <main>
                <article className={"container"}>
                    <header>
                        <h1>Tech it easy dashboard</h1>
                    </header>

                    <article>
                        <section>
                            <h2>Verkoopoverzicht</h2>
                            <div className={"overview"}>
                                <div className="card">
                                    <h3>Aantal verkochte producten</h3>
                                    <span>{sold}</span>
                                </div>
                                <div className="card">
                                    <h3>Aantal ingekochte producten</h3>
                                    <span>{orgStock}</span>
                                </div>
                                <div className="card">
                                    <h3>Aantal te verkopen producten</h3>
                                    <span>{left}</span>
                                </div>
                            </div>
                        </section>
                    </article>
                    <article>
                        <section>

                            <h2>Best verkochte tv</h2>
                            <div className={"best-sold"}>
                                <div className="img-wrapper">
                                    <img src={bestSellingTv.sourceImg} alt="Best selling TV"/>
                                </div>
                                <div className="content-wrapper">
                                    <h3>{tvName}</h3>
                                    <span>{pricing}</span>
                                    <p>{sizes}</p>
                                    <div className="tv-options">

                                        <ul>
                                            <li>
                                                <div className={"icon-img"}><img src={checkImage} alt=""/></div>
                                                <span>wifi</span>
                                            </li>
                                            <li>
                                                <div className={"icon-img"}><img src={minusImage} alt=""/></div>
                                                <span>speech</span>
                                            </li>
                                            <li>
                                                <div className={"icon-img"}><img src={checkImage} alt=""/></div>
                                                <span>hdr</span>
                                            </li>
                                            <li>
                                                <div className={"icon-img"}><img src={checkImage} alt=""/></div>
                                                <span>bluetooth</span>
                                            </li>
                                            <li>
                                                <div className={"icon-img"}><img src={minusImage} alt=""/></div>
                                                <span>ambilight</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>
                </article>
            </main>


        </>
    )
}

export default App
