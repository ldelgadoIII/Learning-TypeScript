"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const raccoon_meadows_log_1 = require("./raccoon-meadows-log");
const wolf_point_log_1 = require("./wolf-point-log");
function combineVolunteers(volunteers) {
    return volunteers.map(volunteer => {
        let id = volunteer.id;
        if (typeof id === "string") {
            id = parseInt(id, 10);
        }
        return {
            id: id,
            name: volunteer.name,
            activites: volunteer.activities
        };
    });
}
function isVerified(verified) {
    if (typeof verified === "string") {
        verified === "Yes" ? true : false;
    }
    return verified;
}
function calculateHours(volunteers) {
    return volunteers.map((volunteer) => {
        let hours = 0;
        volunteer.activities.forEach((activity) => {
        });
        return {
            id: volunteer.id,
            name: volunteer.name,
            hours: hours,
        };
    });
}
const combinedVolunteers = combineVolunteers([].concat(wolf_point_log_1.wolfPointVolunteers, raccoon_meadows_log_1.raccoonMeadowsVolunteers));
console.log(combinedVolunteers);
