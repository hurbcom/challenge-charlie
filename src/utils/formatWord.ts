export default function formatWord(word: string) {
    if (word) {
        word = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        word = word.replace(/[,.-\s]/g, "%C3%");
        word = word.replace(/(%C3%)+/g, "%C3%");
        word = word.replace(/^%C3%|%C3%$/g, "");
    }
    return word;
}