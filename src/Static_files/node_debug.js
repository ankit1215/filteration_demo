const userData = require('./data.js').data;

const gender_filters = ['Male'],
    blood_group_filters = ['A'];

const getFilteredData = (inputArray, filters) => {
    let filteredData = [];

    filteredData = filters.reduce((acc, curVal, curIndex, filters) => {
        let filteredData = acc.length > 0 ? acc : inputArray;

        if (curVal?.data === true || curVal?.data?.length > 0) {
            filteredData = filteredData?.filter((item) =>
                curVal?.data?.includes(item[curVal?.type])
            );
        }

        return filteredData;
    }, []);

    return filteredData;
};

let filteredUsers = getFilteredData(userData, [
    { data: gender_filters, type: 'gender' },
    { data: blood_group_filters, type: 'blood_group' },
]);

// console.log('Filtered users => ', filteredUsers);
