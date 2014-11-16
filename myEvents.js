myEvents = [
	{"id": 0, "firstName": "James", "lastName": "King", "reports": 4, "title": "President and CEO", "department": "Corporate", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "http://media-cdn.tripadvisor.com/media/photo-t/02/a3/60/11/filename-bunker-jpg-thumbnail0.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
    {"id": 1, "firstName": "Julie", "lastName": "Taylor", "managerId": 0, "managerName": "James King", "reports": 2, "title": "VP of Marketing", "department": "Marketing", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "http://media-cdn.tripadvisor.com/media/photo-t/04/b5/96/56/off-the-eaten-path-tours.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"}
];

exports.findAll = function (req, res, next) {
    var name = req.query.name;
    if (name) {
        res.send(myEvents.filter(function(employee) {
            return (employee.firstName);
        }));
    } else {
        res.send(myEvents);
    }
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(myEvents[id]);
};

exports.findReports = function (req, res, next) {
    var id = parseInt(req.params.id),
        response,
        reports = [],
        employee;

    response = {
        id: id,
        firstName: myEvents[id].firstName,
        title: myEvents[id].title,
        pic: myEvents[id].pic
    }

    for (var i=0; i<myEvents.length; i++) {
        employee = myEvents[i];
        if (employee.managerId === id) {
            reports.push({id: employee.id, firstName: employee.firstName,  pic: employee.pic});
        }
    }

    response.reports = reports;

    res.send(response);
};