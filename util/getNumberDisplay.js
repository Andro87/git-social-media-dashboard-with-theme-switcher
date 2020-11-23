
// We want to turn any number with more than 5 digits to 3 digits and a K.
const getNumberDisplay = number => {
    if (number > 9999) {
        return (number / 1000).toString() + "k"
    }

    return number.toString();
}

export default getNumberDisplay