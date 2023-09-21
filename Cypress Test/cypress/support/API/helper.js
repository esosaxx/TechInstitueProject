export const randomString = Math.floor(Math.random() * 1000);

export const token = Cypress.env('token');

import { user } from "../../fixtures/API/user";

export const setUp = () => {
    const request = cy.request({
        method: 'POST',
        url: '/public/v1/users',
        headers: {
            Authorization: token
        },
        body: user,
    });
    return request;
};

export const tearDown = async (id) => {
    const response = await cy.request({
        method: 'DELETE',
        url: `/public/v1/users/${id}`,
        headers: {
            Authorization: token,
        },
    });

    return response;  
};