const engl_to_latin = [["water", "aqua, aquae, f"], ["to walk", "ambulo, ambulare"], ["king", "rex, regis, m"]]


question_element = document.getElementById("question")
text_container = document.getElementById("text-container")

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array
}

shuffled_words = shuffleArray(engl_to_latin)