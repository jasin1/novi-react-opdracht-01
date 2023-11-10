import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import soldTvs from "./helpers/soldTvs.js";
import generateName from "./helpers/nameGenerator.js";
import tvPrice from "./helpers/tvPrice.js";
import calcCM from "./helpers/inchesToCM.js";

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
                                            <li><img src="assets/check.png" alt=""/>wifi</li>
                                            <li><img src="assets/minus.png" alt=""/>speech</li>
                                            <li><img src="assets/check.png" alt=""/>hdr</li>
                                            <li><img src="assets/check.png" alt=""/>bluetooth</li>
                                            <li><img src="assets/minus.png" alt=""/>ambilight</li>
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
