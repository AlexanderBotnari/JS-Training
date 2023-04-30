document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');
const textarea = document.querySelector('textarea');

button.addEventListener('click', function () {
    const words = textarea.value.split('\n');
    for (const word of words) {
        const wordToLower = word.toLowerCase().trim();
        const wordParts = wordToLower.split('_');
        if (wordParts.length === 2) {
            let finalWord = '';
            for (let i = 0; i < wordParts.length; i++) {
                const currentPart = wordParts[i];
                const firstChar = currentPart.charAt(0);
                const restOfWord = currentPart.slice(1);
                const camelCasePart = i === 0 ? currentPart : firstChar.toUpperCase() + restOfWord;
                finalWord += camelCasePart;
            }
            console.log(finalWord);
        } else {
            console.log('Incompatible phrase!');
        }
    }
});