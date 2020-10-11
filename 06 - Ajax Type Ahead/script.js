
// Being dutch, I had to make this for Dutch places of course.
// Unfortunatly this data set has no state (dutch: provincie) or population entries.
// so it just searches for names of places.

const searchInput = document.querySelector(".search")
const suggestions = document.querySelector(".suggestions")
const endpoint = "https://opendata.cbs.nl/ODataApi/odata/83958NED/Woonplaatsen"
const steden = [];

const getUnique = (array, compare) => {
    const unique = array.map(e => e[compare])
        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
        // eliminate the dead keys & store unique objects
        .filter(e => array[e]).map(e => array[e]);
    return unique;
}

fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        const st = getUnique(data.value, 'Title').map(obj => obj.Title)
        steden.push(...st)
    })

const findMatches = (zoekterm, steden) => {
    return steden.filter(stad => {
        return stad.startsWith(zoekterm);
    })
}

const displayMatches = (e) => {
    const zoekterm = e.target.value.substring(0, 1).toUpperCase() + e.target.value.substring(1);
    const matchArray = findMatches(zoekterm, steden)
    const html = matchArray.map(stad => {
        const stadNaam = stad.replace(zoekterm, `<span class="hl">${zoekterm}</span>`)
        return `<li class="name"><span>${stadNaam}</span></li>`
    }).join("");
    suggestions.innerHTML = html;
    document.querySelectorAll(".name").forEach(elem => elem.addEventListener("click", () => {
        searchInput.value = elem.textContent
    }))
}

searchInput.addEventListener("input", displayMatches)