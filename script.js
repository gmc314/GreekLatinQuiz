const engl_to_latin = [["water", "aqua, aquae, f"], ["to walk", "ambulo, ambulare"], ["king", "rex, regis, m"]]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array
}
