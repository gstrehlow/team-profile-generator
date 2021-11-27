const Manager = require('../lib/Manager');

describe('Manager information', ()=>{
    it('Should return all the relevant information of a Manager',()=>{
        const manager = new Manager('Johnny Johnson',1,'JJ123@gmail.com',423);
        let name = manager.getName();
        let id = manager.getID();
        let email = manager.getEmail();
        let office = manager.getOfficeNumber();

        expect(name).toBe('Johnny Johnson');
        expect(id).toBe(1);
        expect(email).toBe('JJ123@gmail.com');
        expect(office).toBe(423);
    });
});