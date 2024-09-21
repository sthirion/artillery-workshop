const Faker = require("faker");

function saveBookingIds(req, response, context, ee, next) {
    // const bookingIds = JSON.parse(responseData);
    const bookingIds = response;
    console.log(req,response);
    context.vars.bookingTest = response.body;
    return next();
}

function testData(context, ee, next) {
    context.vars.firstName = Faker.name.firstName();
    context.vars.lastName = Faker.name.lastName();
    return next();
}

function percentCalculation(req, res, context, ee, next) {
    let jsonBody = JSON.parse(res.body);
    context.vars.probability = jsonBody.probability * 100;
    return next();
}

function countryCalculation(req, res, context, ee, next) {
    let jsonBody = JSON.parse(res.body);
    let prob = (isNaN(jsonBody.country[0].probability))? 0 : jsonBody.country[0].probability * 100;
    context.vars.probability = prob.toFixed (2);
    return next();
}

module.exports = {
    saveBookingIds: saveBookingIds,
    testData: testData,
    percentCalculation,
    countryCalculation
};