import {inventory} from "./inventory.js";


//-----------Deel 2 - opdracht 1a ----------------- //
const tvTypes = inventory.map((tv)=>{
    return tv.type;
});
console.log('Deel 2 - opdracht 1a');
console.log('Alle TV typers zijn '+tvTypes);

//-----------Deel 2 - opdracht 1b ----------------- //
const soldOutTVs = inventory.filter((soldOutTV)=>{
    return soldOutTV.originalStock === soldOutTV.sold;

});
console.log('----------------------------------------');
console.log('Deel 2 - opdracht 1b');
console.log('Alle info over de uitverkochte TVs: ');
console.log(soldOutTVs);


//-----------Deel 2 - opdracht 1c ----------------- //


const foundTVs = inventory.find((foundTV)=>{
    return foundTV.type === 'NH3216SMART';
});

console.log('----------------------------------------');
console.log('Deel 2 - opdracht 1c');
console.log(foundTVs);


//-----------Deel 2 - opdracht 1d ----------------- //
//------------ Ik snap deze opdracht niet ------------------ //

console.log('----------------------------------------');
console.log('Deel 2 - opdracht 1d');

const sportTVs = inventory.filter((sportTV)=>{
    return sportTV.refreshRate >= 100;
});

// let HDtvColl = [];

const HDtvColl = sportTVs.map((item)=>{
    return{
        name: item.name,
        suitable: true,
    }
});

for (let i =0; i < HDtvColl.length; i ++){
    console.log('Sport TVs '+ HDtvColl[i].suitable);
}

