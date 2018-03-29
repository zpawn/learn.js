export const updateObject = (oldObject, updatedProps) => {
    return {
        ...oldObject,
        ...updatedProps
    }
};


export const checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
        const pattern = /.+@.+\..+/g;
        return pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        return pattern.test(value) && isValid;
    }

    return isValid;
};
