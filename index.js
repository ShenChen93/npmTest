const JSON_PROPERTIES = '_links'
const R = require('ramda')

var myObj = {
    part_one: {
      name: 'My Name',
      something: '123',
      _links: {
        test: 'test123'
      }
    },
    part_two: [
      {
        name: 'name',
        dob: 'dob',
        _links: {
          something: 'else',
          and: 'more'
        }
      },
      {
        _links: 'foobar',
        name: 'name',
        dob: 'dob'
      }
    ],
    _links: {
      one: 1,
      two: 2
    }
  }

  function _cleanResponseBody(reqResponseBody) {
    if (reqResponseBody) {
        Object.keys(reqResponseBody).forEach((key) => {
            if (JSON_PROPERTIES.includes(key)) {
                reqResponseBody = R.omit([key], reqResponseBody);
            } else if (typeof reqResponseBody[key] === 'object') {
                reqResponseBody[key] = _cleanResponseBody(reqResponseBody[key]);
            }
        });
    }
    return reqResponseBody;
}

console.log(_cleanResponseBody(myObj));