module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('countries',
      [
        {
          "id": 1,
          "name": "Afghanistan",
          "country_code": "AF",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 2,
          "name": "Aland Islands",
          "country_code": "AX",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 3,
          "name": "Albania",
          "country_code": "AL",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 4,
          "name": "Algeria",
          "country_code": "DZ",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 5,
          "name": "American Samoa",
          "country_code": "AS",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 6,
          "name": "Andorra",
          "country_code": "AD",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 7,
          "name": "Angola",
          "country_code": "AO",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 8,
          "name": "Anguilla",
          "country_code": "AI",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 9,
          "name": "Antarctica",
          "country_code": "AQ",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 10,
          "name": "Antigua And Barbuda",
          "country_code": "AG",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 11,
          "name": "Argentina",
          "country_code": "AR",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 12,
          "name": "Armenia",
          "country_code": "AM",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 13,
          "name": "Aruba",
          "country_code": "AW",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 14,
          "name": "Australia",
          "country_code": "AU",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 15,
          "name": "Austria",
          "country_code": "AT",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 16,
          "name": "Azerbaijan",
          "country_code": "AZ",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 17,
          "name": "Bahamas The",
          "country_code": "BS",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 18,
          "name": "Bahrain",
          "country_code": "BH",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 19,
          "name": "Bangladesh",
          "country_code": "BD",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 20,
          "name": "Barbados",
          "country_code": "BB",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 21,
          "name": "Belarus",
          "country_code": "BY",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 22,
          "name": "Belgium",
          "country_code": "BE",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 23,
          "name": "Belize",
          "country_code": "BZ",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 24,
          "name": "Benin",
          "country_code": "BJ",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 25,
          "name": "Bermuda",
          "country_code": "BM",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 26,
          "name": "Bhutan",
          "country_code": "BT",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 27,
          "name": "Bolivia",
          "country_code": "BO",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 28,
          "name": "Bosnia and Herzegovina",
          "country_code": "BA",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 29,
          "name": "Botswana",
          "country_code": "BW",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 30,
          "name": "Bouvet Island",
          "country_code": "BV",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 31,
          "name": "Brazil",
          "country_code": "BR",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 32,
          "name": "British Indian Ocean Territory",
          "country_code": "IO",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 33,
          "name": "Brunei",
          "country_code": "BN",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 34,
          "name": "Bulgaria",
          "country_code": "BG",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 35,
          "name": "Burkina Faso",
          "country_code": "BF",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 36,
          "name": "Burundi",
          "country_code": "BI",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 37,
          "name": "Cambodia",
          "country_code": "KH",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 38,
          "name": "Cameroon",
          "country_code": "CM",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 39,
          "name": "Canada",
          "country_code": "CA",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 40,
          "name": "Cape Verde",
          "country_code": "CV",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 41,
          "name": "Cayman Islands",
          "country_code": "KY",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 42,
          "name": "Central African Republic",
          "country_code": "CF",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 43,
          "name": "Chad",
          "country_code": "TD",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 44,
          "name": "Chile",
          "country_code": "CL",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 45,
          "name": "China",
          "country_code": "CN",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 46,
          "name": "Christmas Island",
          "country_code": "CX",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 47,
          "name": "Cocos (Keeling) Islands",
          "country_code": "CC",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 48,
          "name": "Colombia",
          "country_code": "CO",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 49,
          "name": "Comoros",
          "country_code": "KM",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 50,
          "name": "Congo",
          "country_code": "CG",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 51,
          "name": "Congo The Democratic Republic Of The",
          "country_code": "CD",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 52,
          "name": "Cook Islands",
          "country_code": "CK",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 53,
          "name": "Costa Rica",
          "country_code": "CR",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 54,
          "name": "Cote D'Ivoire (Ivory Coast)",
          "country_code": "CI",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 55,
          "name": "Croatia (Hrvatska)",
          "country_code": "HR",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 56,
          "name": "Cuba",
          "country_code": "CU",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 57,
          "name": "Cyprus",
          "country_code": "CY",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 58,
          "name": "Czech Republic",
          "country_code": "CZ",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 59,
          "name": "Denmark",
          "country_code": "DK",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 60,
          "name": "Djibouti",
          "country_code": "DJ",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 61,
          "name": "Dominica",
          "country_code": "DM",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 62,
          "name": "Dominican Republic",
          "country_code": "DO",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 63,
          "name": "East Timor",
          "country_code": "TL",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 64,
          "name": "Ecuador",
          "country_code": "EC",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 65,
          "name": "Egypt",
          "country_code": "EG",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 66,
          "name": "El Salvador",
          "country_code": "SV",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 67,
          "name": "Equatorial Guinea",
          "country_code": "GQ",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 68,
          "name": "Eritrea",
          "country_code": "ER",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 69,
          "name": "Estonia",
          "country_code": "EE",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 70,
          "name": "Ethiopia",
          "country_code": "ET",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 71,
          "name": "Falkland Islands",
          "country_code": "FK",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 72,
          "name": "Faroe Islands",
          "country_code": "FO",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 73,
          "name": "Fiji Islands",
          "country_code": "FJ",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 74,
          "name": "Finland",
          "country_code": "FI",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 75,
          "name": "France",
          "country_code": "FR",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 76,
          "name": "French Guiana",
          "country_code": "GF",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 77,
          "name": "French Polynesia",
          "country_code": "PF",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 78,
          "name": "French Southern Territories",
          "country_code": "TF",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 79,
          "name": "Gabon",
          "country_code": "GA",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 80,
          "name": "Gambia The",
          "country_code": "GM",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 81,
          "name": "Georgia",
          "country_code": "GE",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 82,
          "name": "Germany",
          "country_code": "DE",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 83,
          "name": "Ghana",
          "country_code": "GH",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 84,
          "name": "Gibraltar",
          "country_code": "GI",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 85,
          "name": "Greece",
          "country_code": "GR",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 86,
          "name": "Greenland",
          "country_code": "GL",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 87,
          "name": "Grenada",
          "country_code": "GD",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 88,
          "name": "Guadeloupe",
          "country_code": "GP",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 89,
          "name": "Guam",
          "country_code": "GU",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 90,
          "name": "Guatemala",
          "country_code": "GT",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 91,
          "name": "Guernsey and Alderney",
          "country_code": "GG",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 92,
          "name": "Guinea",
          "country_code": "GN",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 93,
          "name": "Guinea-Bissau",
          "country_code": "GW",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 94,
          "name": "Guyana",
          "country_code": "GY",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 95,
          "name": "Haiti",
          "country_code": "HT",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 96,
          "name": "Heard and McDonald Islands",
          "country_code": "HM",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 97,
          "name": "Honduras",
          "country_code": "HN",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 98,
          "name": "Hong Kong S.A.R.",
          "country_code": "HK",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 99,
          "name": "Hungary",
          "country_code": "HU",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 100,
          "name": "Iceland",
          "country_code": "IS",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 101,
          "name": "India",
          "country_code": "IN",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 102,
          "name": "Indonesia",
          "country_code": "ID",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 103,
          "name": "Iran",
          "country_code": "IR",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 104,
          "name": "Iraq",
          "country_code": "IQ",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 105,
          "name": "Ireland",
          "country_code": "IE",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 106,
          "name": "Israel",
          "country_code": "IL",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 107,
          "name": "Italy",
          "country_code": "IT",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 108,
          "name": "Jamaica",
          "country_code": "JM",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 109,
          "name": "Japan",
          "country_code": "JP",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 110,
          "name": "Jersey",
          "country_code": "JE",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 111,
          "name": "Jordan",
          "country_code": "JO",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 112,
          "name": "Kazakhstan",
          "country_code": "KZ",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 113,
          "name": "Kenya",
          "country_code": "KE",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 114,
          "name": "Kiribati",
          "country_code": "KI",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 115,
          "name": "Korea North\n",
          "country_code": "KP",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 116,
          "name": "Korea South",
          "country_code": "KR",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 117,
          "name": "Kuwait",
          "country_code": "KW",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 118,
          "name": "Kyrgyzstan",
          "country_code": "KG",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 119,
          "name": "Laos",
          "country_code": "LA",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 120,
          "name": "Latvia",
          "country_code": "LV",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 121,
          "name": "Lebanon",
          "country_code": "LB",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 122,
          "name": "Lesotho",
          "country_code": "LS",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 123,
          "name": "Liberia",
          "country_code": "LR",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 124,
          "name": "Libya",
          "country_code": "LY",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 125,
          "name": "Liechtenstein",
          "country_code": "LI",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 126,
          "name": "Lithuania",
          "country_code": "LT",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 127,
          "name": "Luxembourg",
          "country_code": "LU",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 128,
          "name": "Macau S.A.R.",
          "country_code": "MO",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 129,
          "name": "Macedonia",
          "country_code": "MK",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 130,
          "name": "Madagascar",
          "country_code": "MG",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 131,
          "name": "Malawi",
          "country_code": "MW",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 132,
          "name": "Malaysia",
          "country_code": "MY",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 133,
          "name": "Maldives",
          "country_code": "MV",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 134,
          "name": "Mali",
          "country_code": "ML",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 135,
          "name": "Malta",
          "country_code": "MT",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 136,
          "name": "Man (Isle of)",
          "country_code": "IM",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 137,
          "name": "Marshall Islands",
          "country_code": "MH",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 138,
          "name": "Martinique",
          "country_code": "MQ",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 139,
          "name": "Mauritania",
          "country_code": "MR",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 140,
          "name": "Mauritius",
          "country_code": "MU",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 141,
          "name": "Mayotte",
          "country_code": "YT",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 142,
          "name": "Mexico",
          "country_code": "MX",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 143,
          "name": "Micronesia",
          "country_code": "FM",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 144,
          "name": "Moldova",
          "country_code": "MD",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 145,
          "name": "Monaco",
          "country_code": "MC",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 146,
          "name": "Mongolia",
          "country_code": "MN",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 147,
          "name": "Montenegro",
          "country_code": "ME",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 148,
          "name": "Montserrat",
          "country_code": "MS",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 149,
          "name": "Morocco",
          "country_code": "MA",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 150,
          "name": "Mozambique",
          "country_code": "MZ",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 151,
          "name": "Myanmar",
          "country_code": "MM",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 152,
          "name": "Namibia",
          "country_code": "NA",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 153,
          "name": "Nauru",
          "country_code": "NR",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 154,
          "name": "Nepal",
          "country_code": "NP",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 155,
          "name": "Netherlands Antilles",
          "country_code": "AN",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 156,
          "name": "Netherlands The",
          "country_code": "NL",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 157,
          "name": "New Caledonia",
          "country_code": "NC",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 158,
          "name": "New Zealand",
          "country_code": "NZ",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 159,
          "name": "Nicaragua",
          "country_code": "NI",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 160,
          "name": "Niger",
          "country_code": "NE",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 161,
          "name": "Nigeria",
          "country_code": "NG",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 162,
          "name": "Niue",
          "country_code": "NU",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 163,
          "name": "Norfolk Island",
          "country_code": "NF",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 164,
          "name": "Northern Mariana Islands",
          "country_code": "MP",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 165,
          "name": "Norway",
          "country_code": "NO",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 166,
          "name": "Oman",
          "country_code": "OM",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 167,
          "name": "Pakistan",
          "country_code": "PK",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 168,
          "name": "Palau",
          "country_code": "PW",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 169,
          "name": "Palestinian Territory Occupied",
          "country_code": "PS",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 170,
          "name": "Panama",
          "country_code": "PA",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 171,
          "name": "Papua new Guinea",
          "country_code": "PG",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 172,
          "name": "Paraguay",
          "country_code": "PY",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 173,
          "name": "Peru",
          "country_code": "PE",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 174,
          "name": "Philippines",
          "country_code": "PH",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 175,
          "name": "Pitcairn Island",
          "country_code": "PN",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 176,
          "name": "Poland",
          "country_code": "PL",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 177,
          "name": "Portugal",
          "country_code": "PT",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 178,
          "name": "Puerto Rico",
          "country_code": "PR",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 179,
          "name": "Qatar",
          "country_code": "QA",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 180,
          "name": "Reunion",
          "country_code": "RE",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 181,
          "name": "Romania",
          "country_code": "RO",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 182,
          "name": "Russia",
          "country_code": "RU",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 183,
          "name": "Rwanda",
          "country_code": "RW",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 184,
          "name": "Saint Helena",
          "country_code": "SH",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 185,
          "name": "Saint Kitts And Nevis",
          "country_code": "KN",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 186,
          "name": "Saint Lucia",
          "country_code": "LC",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 187,
          "name": "Saint Pierre and Miquelon",
          "country_code": "PM",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 188,
          "name": "Saint Vincent And The Grenadines",
          "country_code": "VC",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 189,
          "name": "Saint-Barthelemy",
          "country_code": "BL",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 190,
          "name": "Saint-Martin (French part)",
          "country_code": "MF",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 191,
          "name": "Samoa",
          "country_code": "WS",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 192,
          "name": "San Marino",
          "country_code": "SM",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 193,
          "name": "Sao Tome and Principe",
          "country_code": "ST",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 194,
          "name": "Saudi Arabia",
          "country_code": "SA",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 195,
          "name": "Senegal",
          "country_code": "SN",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 196,
          "name": "Serbia",
          "country_code": "RS",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 197,
          "name": "Seychelles",
          "country_code": "SC",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 198,
          "name": "Sierra Leone",
          "country_code": "SL",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 199,
          "name": "Singapore",
          "country_code": "SG",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 200,
          "name": "Slovakia",
          "country_code": "SK",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 201,
          "name": "Slovenia",
          "country_code": "SI",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 202,
          "name": "Solomon Islands",
          "country_code": "SB",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 203,
          "name": "Somalia",
          "country_code": "SO",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 204,
          "name": "South Africa",
          "country_code": "ZA",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 205,
          "name": "South Georgia",
          "country_code": "GS",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 206,
          "name": "South Sudan",
          "country_code": "SS",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 207,
          "name": "Spain",
          "country_code": "ES",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 208,
          "name": "Sri Lanka",
          "country_code": "LK",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 209,
          "name": "Sudan",
          "country_code": "SD",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 210,
          "name": "Suriname",
          "country_code": "SR",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 211,
          "name": "Svalbard And Jan Mayen Islands",
          "country_code": "SJ",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 212,
          "name": "Swaziland",
          "country_code": "SZ",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 213,
          "name": "Sweden",
          "country_code": "SE",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 214,
          "name": "Switzerland",
          "country_code": "CH",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 215,
          "name": "Syria",
          "country_code": "SY",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 216,
          "name": "Taiwan",
          "country_code": "TW",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 217,
          "name": "Tajikistan",
          "country_code": "TJ",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 218,
          "name": "Tanzania",
          "country_code": "TZ",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 219,
          "name": "Thailand",
          "country_code": "TH",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 220,
          "name": "Togo",
          "country_code": "TG",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 221,
          "name": "Tokelau",
          "country_code": "TK",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 222,
          "name": "Tonga",
          "country_code": "TO",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 223,
          "name": "Trinidad And Tobago",
          "country_code": "TT",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 224,
          "name": "Tunisia",
          "country_code": "TN",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 225,
          "name": "Turkey",
          "country_code": "TR",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 226,
          "name": "Turkmenistan",
          "country_code": "TM",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 227,
          "name": "Turks And Caicos Islands",
          "country_code": "TC",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 228,
          "name": "Tuvalu",
          "country_code": "TV",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 229,
          "name": "Uganda",
          "country_code": "UG",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 230,
          "name": "Ukraine",
          "country_code": "UA",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 231,
          "name": "United Arab Emirates",
          "country_code": "AE",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 232,
          "name": "United Kingdom",
          "country_code": "GB",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 233,
          "name": "United States",
          "country_code": "US",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 234,
          "name": "United States Minor Outlying Islands",
          "country_code": "UM",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 235,
          "name": "Uruguay",
          "country_code": "UY",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 236,
          "name": "Uzbekistan",
          "country_code": "UZ",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 237,
          "name": "Vanuatu",
          "country_code": "VU",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 238,
          "name": "Vatican City State (Holy See)",
          "country_code": "VA",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 239,
          "name": "Venezuela",
          "country_code": "VE",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 240,
          "name": "Vietnam",
          "country_code": "VN",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 241,
          "name": "Virgin Islands (British)",
          "country_code": "VG",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 242,
          "name": "Virgin Islands (US)",
          "country_code": "VI",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 243,
          "name": "Wallis And Futuna Islands",
          "country_code": "WF",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 244,
          "name": "Western Sahara",
          "country_code": "EH",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 245,
          "name": "Yemen",
          "country_code": "YE",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 246,
          "name": "Zambia",
          "country_code": "ZM",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        },
        {
          "id": 247,
          "name": "Zimbabwe",
          "country_code": "ZW",
          "createdAt": "2023-03-25T01:10:09.000Z",
          "updatedAt": "2023-03-25T01:10:09.000Z"
        }
      ]
    );
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('countries', null, {});
  }
};