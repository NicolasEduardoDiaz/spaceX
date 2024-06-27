import {
    getAllRocketEngineTotal,
    getAllRocketEngineThrustVacuumTotal
} from "../modules/rockets.js";

export const informRocketEngineThrustSeaLevel = async(thrust_sea_level) => {
    let {kN: totalKN} = await getAllRocketEngineTotal();
    let porcentaje = (thrust_sea_level.kN * 100) / totalKN

    let div = document.createElement('div');
    div.classList.add("carousel_item")
    let divFirst = document.createElement('div');
    divFirst.classList.add("item_progress_bar");
    divFirst.style=`background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-dradient(var(--color--three) ${porcentaje}%, transparent 0)`
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress_value");
    let strong = document.createElement('strong');
    strong.textContent = "Atmospheric acceleration"
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${porcentaje.toFixed(2)}%`

    let smallLast = document.createElement('small');
    let kN = new Intl.NumberFormat('cop').format(thrust_sea_level.kN)
    let lbf = new Intl.NumberFormat('cop').format(thrust_sea_level.lbf)
    smallLast.innerHTML = `${kN} kN <br> ${lbf} lbf`

    divFirstChildren.append(strong, smallFirst, smallLast)
    divFirst.append(divFirstChildren)
    div.append(divFirst)
    let section_information_1 = document.querySelector("#section_information_1");
    section_information_1.innerHTML = "";
    section_information_1.append(div)
}

export const informRocketEngineThrustVacuum = async(thrust_vacuum) => {
    let {kN:totalKN} = await getAllRocketEngineThrustVacuumTotal();
    let porcentaje = (thrust_vacuum.kN * 100) / totalKN;

    let div = document.createElement('div');
    div.classList.add("carousel_item")
    let divFirst = document.createElement('div');
    divFirst.classList.add("item_progress_bar");
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color--three) ${porcentaje}%, transparent 0)`
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress_value")
    let strong = document.createElement('strong');
    strong.textContent = "speed in space"
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${porcentaje.toFixed(2)} %`

    let smallLast = document.createElement('small');
    let kN = new Intl.NumberFormat('cop').format(thrust_vacuum.kN)
    let lbf = new Intl.NumberFormat('cop').format(thrust_vacuum.lbf)
    smallLast.innerHTML = `${kN} kN <br> ${lbf} Lbf`

    divFirstChildren.append(strong, smallFirst, smallLast)
    divFirst.append(divFirstChildren)
    div.append(divFirst)
    let section_information_1 = document.querySelector("#section_information-1");
    section_information_1.append(div)
}