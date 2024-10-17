let personType = "Non-Subscriber";
let authorizedAccess;

switch (personType) {
    case "Employee":
        authorizedAccess = "You are authorized to access 'Dietary Services'";
        break;

    case "Enrolled Member":
        authorizedAccess = "You are authorized to access 'Dietary Services and one-on-one interaction with a dietician'";
        break;

    case "Subscriber":
        authorizedAccess = "You are authorized to partially access 'Dietary Services'";
        break;

    case "Non-Subscriber":
        authorizedAccess = "You need to enroll or at least subscribe first to avail this facility";
        break;
};

console.log("Authorized access? " + authorizedAccess);