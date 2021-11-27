const Intern = require('../lib/Intern');

describe('Intern information', ()=>{
    it('Should return all the relevant information of an Intern',()=>{
        const intern = new Intern('Peter',32,'peter@parker.com','Yale University');
        let name = intern.getName();
        let id = intern.getID();
        let email = intern.getEmail();
        let school = intern.getSchool();

        expect(name).toBe('Peter');
        expect(id).toBe(32);
        expect(email).toBe('peter@parker.com');
        expect(school).toBe('Yale University');
    });
});