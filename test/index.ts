import * as assert from "assert";
import {getDaysToNewYear, lastToFirst, groupOrgUsers} from '../src';

describe('getDaysToNewYear', () => {

    it('should return 1 for given input "31.12.2021"', () => {
        assert.strictEqual(getDaysToNewYear('31.12.2021'), 1);
    });

    it('should return 72 for given input "22.10.2021"', () => {
        assert.strictEqual(getDaysToNewYear('22.10.2021'), 72);
    });

    it('should return 609 for given input "03.05.2020"', () => {
        assert.strictEqual(getDaysToNewYear('03.05.2020'), 609);
    });

    it('should return 1 for given input new Date("12-31-2021")', () => {
        assert.strictEqual(getDaysToNewYear(new Date('12-31-2021')), 1);
    });

    it('should return 201 for given input new Date(2021, 5, 15)', () => {
        assert.strictEqual(getDaysToNewYear(new Date(2021, 5, 15)), 201);
    });

    it('should return 3586 for given input new Date(2012, 2, 8)', () => {
        assert.strictEqual(getDaysToNewYear(new Date(2012, 2, 8)), 3586);
    });

});

describe('lastToFirst', () => {
    it('should return "loop" for given input "pool"', () => {
        assert.strictEqual(lastToFirst('loop'), 'pool');
    });

    it('should return "test" for given input "test"', () => {
        assert.strictEqual(lastToFirst('test'), 'test');
    });

    it('should return "version" for given input "nersiov"', () => {
        assert.strictEqual(lastToFirst('version'), 'nersiov');
    });

    it('should return "abc" for given input "cba"', () => {
        assert.strictEqual(lastToFirst('abc'), 'cba');
    });

    it('should return "b" for given input "b"', () => {
        assert.strictEqual(lastToFirst('b'), 'b');
    });
});


describe('groupOrgUsers', () => {
    it('should group demo users data', () => {
        const users: any = [
            {name: 'Bill', login: 'bill01', surname: 'Jobs', type: 'EMPLOYEE', address: {officeId: 123, placeId: 1222}},
            {name: 'Fill', login: 'fill007', surname: 'Filler', type: 'CONTRACTOR', contractorCompanyName: 'Microsoft'},
            {name: 'Alex', login: 'alex777', type: 'EMPLOYEE', address: {officeId: 222, placeId: 333}},
            {name: 'John', login: 'coolJohn', type: 'CONTRACTOR', contractorCompanyName: 'Apple'},
        ];
        const expected = {employees:[{name:"Bill",login:"bill01",surname:"Jobs",type:"EMPLOYEE",address:{officeId:123,placeId:1222}},{name:"Alex",login:"alex777",type:"EMPLOYEE",address:{officeId:222,placeId:333}}],contractors:[{name:"Fill",login:"fill007",surname:"Filler",type:"CONTRACTOR",contractorCompanyName:"Microsoft"},{name:"John",login:"coolJohn",type:"CONTRACTOR",contractorCompanyName:"Apple"}]};
        const result = groupOrgUsers(users);
        assert.deepStrictEqual(result, expected);
    });
});
