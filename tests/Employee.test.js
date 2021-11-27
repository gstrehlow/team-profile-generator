const Employee = require('../lib/Employee');

describe('Employee information', ()=>{
    it('Should return all the relevant information of an Employee',()=>{
        const employee = new Employee('Joe',3,'joe@joe.com');
        let name = employee.getName();
        let id = employee.getID();
        let email = employee.getEmail();

        expect(name).toBe('Joe');
        expect(id).toBe(3);
        expect(email).toBe('joe@joe.com');
    });
}); 