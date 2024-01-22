function translateToPigLatin(input) {
    if (!input || input.trim().length === 0 || input.trim().length === 1) {
        console.log("Input can't be translated.");
        return;
    }

    const words = input.split(" ");

    const translatedWords = words.map(word => {
        const lowercaseWord = word.toLowerCase();
        if (/[aeiou]/.test(lowercaseWord[0])) {
            return word + 'way';
        } else {
            const firstVowelIndex = lowercaseWord.search(/[aeiou]/);
            const translatedWord = word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + 'ay';
            return (word[0] === word[0].toUpperCase()) ? translatedWord.charAt(0).toUpperCase() + translatedWord.slice(1) : translatedWord;

        }
    }

    const result = translatedWords.join(" ");
    switch (translatedWords.length) {
        case 1:
            console.log("Translation for 1 word:", result);
            break;
        default:
            console.log("Translation for multiple words:", result);
            break;
        }
    }
    translateToPigLatin("apple makes phones");