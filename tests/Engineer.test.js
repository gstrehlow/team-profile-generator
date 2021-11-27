const Engineer = require('../lib/Engineer');

describe('Engineer information', ()=>{
    it('Should return all the relevant information of an Engineer',()=>{
        const engineer = new Engineer('Joe',2,'joeyboi@person.com','Joeyboi');
        let name = engineer.getName();
        let id = engineer.getID();
        let email = engineer.getEmail();
        let github = engineer.getGitHub();

        expect(name).toBe('Joe');
        expect(id).toBe(2);
        expect(email).toBe('joeyboi@person.com');
        expect(github).toBe('https://github.com/Joeyboi?tab=repositories');
    });
});