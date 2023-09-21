import { user } from "../../fixtures/API/user";
import { setUp, tearDown, token } from "../../support/API/helper";

describe('API Test collections', () => {
    let id;
    before('setUP', () => {
        setUp().then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body.data.email).to.equal(user.email);
            id = response.body.data.id;
        });
    });

    after('cleanUp', async () => {
        const response = await tearDown(id);

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
        expect(response.body.data.email).to.equal(user.email);
    });

    it('Put Request', async () => {
        user.name = 'esosa ruth oghagbon';
        const response = await cy.request({
            method: 'PUT',
            url: `/public/v1/users/${id}`,
            headers: {
                Authorization: token,
            },
            body: user,
        });

        expect(response.status).to.equal(200);
        expect(response.body.data.id).to.equal(id);
        expect(response.body.data.name).to.equal('esosa ruth oghagbon');
        expect(response.body.data.email).to.equal(user.email);
    });
});