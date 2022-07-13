/*
* Task 1: Days to New Year
*/
function getDaysToNewYear(date) {
    if(typeof(date) === 'object') {
        // let newYear = new Date(2022,01,01);
        let newYear = new Date(2022,0o1,0o1);
        let result = (newYear - date) / (1000 * 3600 * 24);
        return result
      } else {
        let newYear = new Date('01,01,2022');
        let dateParts = date.split(".");
        let dateObject = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
        let result = (newYear - dateObject) / (1000 * 3600 * 24);
        return result
      }
}

/*
* Task 2: Last to first
*/
function lastToFirst(value) {
    // Your implementation here
    throw new Error('Not implemented');
}

/*
* Task 3: Group organization users
*/
/*
    const users = [
        {name: 'Bill', login: 'bill01', surname: 'Jobs', type: 'EMPLOYEE', address: {officeId: 123, placeId: 1222}},
        {name: 'Fill', login: 'fill007', surname: 'Filler', type: 'CONTRACTOR', contractorCompanyName: 'Microsoft'},
        {name: 'Alex', login: 'alex777', type: 'EMPLOYEE', address: {officeId: 222, placeId: 333}},
        {name: 'John', login: 'coolJohn', type: 'CONTRACTOR', contractorCompanyName: 'Apple'},
    ];

    const result = {
        employees: [
            {name: "Bill", login: "bill01", surname: "Jobs", type: "EMPLOYEE", address: {officeId: 123, placeId: 1222}},
            {name: "Alex", login: "alex777", type: "EMPLOYEE", address: {officeId: 222, placeId: 333}}
        ],
        contractors: [
            {name: "Fill", login: "fill007", surname: "Filler", type: "CONTRACTOR", contractorCompanyName: "Microsoft"},
            {name: "John", login: "coolJohn", type: "CONTRACTOR", contractorCompanyName: "Apple"}
        ]
    }
*/
function groupOrgUsers(users) {
    // Your implementation here
    throw new Error('Not implemented');
}


export {getDaysToNewYear, lastToFirst, groupOrgUsers};

