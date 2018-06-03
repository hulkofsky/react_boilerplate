export const select = (contact) => {
    return {
        type: "CONTACT_SELECTED",
        payload: contact
    };
};

export const search = (searchCriteria) => { 
    return {
        type: "SEARCH",
        payload: searchCriteria
    };
};