import { randomString, token } from "../../support/API/helper";

describe('API Test collections', () => {
 const email = `esosa${randomString}@tsi.com`;
    let id;

    before('setUP', () => {
        cy.request({
            method: 'POST',
            url: '/public/v1/users',
            headers: {
                Authorization: token,
            },
            body: {
                name: 'esosa oghagbon',
                email,
                gender: 'female',
                status: 'active',
            },
        }).then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body.data.email).to.equal(email);
            id = response.body.data.id;
        });
    });

    after('cleanUp', async () => {
        const response = await cy.request({
            method: 'DELETE',
            url: `/public/v1/users/${id}`,
            headers: {
                Authorization: token,
            },
        });

        expect(response.status).to.equal(204);
    });

    it('get Request', async () => {
        const response = await cy.request({
            method: 'GET',
            url: `/public/v1/users/${id}`,
            headers: {
                Authorization: token,
            },
        });

        expect(response.status).to.equal(200);
        expect(response.body.data.id).to.equal(id);
        expect(response.body.data.name).to.equal('esosa oghagbon');
        expect(response.body.data.email).to.equal(email);
    });
});