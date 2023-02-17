const timezones = [
	{
		code: "Pacific/Midway",
		offset: "-11:00"
	},
	{
		code: "Pacific/Niue",
		offset: "-11:00"
	},
	{
		code: "Pacific/Pago_Pago",
		offset: "-11:00"
	},
	{
		code: "America/Adak",
		offset: "-10:00"
	},
	{
		code: "Pacific/Honolulu",
		offset: "-10:00"
	},
	{
		code: "Pacific/Rarotonga",
		offset: "-10:00"
	},
	{
		code: "Pacific/Tahiti",
		offset: "-10:00"
	},
	{
		code: "Pacific/Marquesas",
		offset: "-09:30"
	},
	{
		code: "America/Anchorage",
		offset: "-09:00"
	},
	{
		code: "America/Juneau",
		offset: "-09:00"
	},
	{
		code: "America/Metlakatla",
		offset: "-09:00"
	},
	{
		code: "America/Nome",
		offset: "-09:00"
	},
	{
		code: "America/Sitka",
		offset: "-09:00"
	},
	{
		code: "America/Yakutat",
		offset: "-09:00"
	},
	{
		code: "Pacific/Gambier",
		offset: "-09:00"
	},
	{
		code: "America/Los_Angeles",
		offset: "-08:00"
	},
	{
		code: "America/Tijuana",
		offset: "-08:00"
	},
	{
		code: "America/Vancouver",
		offset: "-08:00"
	},
	{
		code: "Pacific/Pitcairn",
		offset: "-08:00"
	},
	{
		code: "America/Boise",
		offset: "-07:00"
	},
	{
		code: "America/Cambridge_Bay",
		offset: "-07:00"
	},
	{
		code: "America/Chihuahua",
		offset: "-07:00"
	},
	{
		code: "America/Creston",
		offset: "-07:00"
	},
	{
		code: "America/Dawson",
		offset: "-07:00"
	},
	{
		code: "America/Dawson_Creek",
		offset: "-07:00"
	},
	{
		code: "America/Denver",
		offset: "-07:00"
	},
	{
		code: "America/Edmonton",
		offset: "-07:00"
	},
	{
		code: "America/Fort_Nelson",
		offset: "-07:00"
	},
	{
		code: "America/Hermosillo",
		offset: "-07:00"
	},
	{
		code: "America/Inuvik",
		offset: "-07:00"
	},
	{
		code: "America/Mazatlan",
		offset: "-07:00"
	},
	{
		code: "America/Ojinaga",
		offset: "-07:00"
	},
	{
		code: "America/Phoenix",
		offset: "-07:00"
	},
	{
		code: "America/Whitehorse",
		offset: "-07:00"
	},
	{
		code: "America/Yellowknife",
		offset: "-07:00"
	},
	{
		code: "America/Bahia_Banderas",
		offset: "-06:00"
	},
	{
		code: "America/Belize",
		offset: "-06:00"
	},
	{
		code: "America/Chicago",
		offset: "-06:00"
	},
	{
		code: "America/Costa_Rica",
		offset: "-06:00"
	},
	{
		code: "America/El_Salvador",
		offset: "-06:00"
	},
	{
		code: "America/Guatemala",
		offset: "-06:00"
	},
	{
		code: "America/Indiana/Knox",
		offset: "-06:00"
	},
	{
		code: "America/Indiana/Tell_City",
		offset: "-06:00"
	},
	{
		code: "America/Managua",
		offset: "-06:00"
	},
	{
		code: "America/Matamoros",
		offset: "-06:00"
	},
	{
		code: "America/Menominee",
		offset: "-06:00"
	},
	{
		code: "America/Merida",
		offset: "-06:00"
	},
	{
		code: "America/Mexico_City",
		offset: "-06:00"
	},
	{
		code: "America/Monterrey",
		offset: "-06:00"
	},
	{
		code: "America/North_Dakota/Beulah",
		offset: "-06:00"
	},
	{
		code: "America/North_Dakota/Center",
		offset: "-06:00"
	},
	{
		code: "America/North_Dakota/New_Salem",
		offset: "-06:00"
	},
	{
		code: "America/Rainy_River",
		offset: "-06:00"
	},
	{
		code: "America/Rankin_Inlet",
		offset: "-06:00"
	},
	{
		code: "America/Regina",
		offset: "-06:00"
	},
	{
		code: "America/Resolute",
		offset: "-06:00"
	},
	{
		code: "America/Swift_Current",
		offset: "-06:00"
	},
	{
		code: "America/Tegucigalpa",
		offset: "-06:00"
	},
	{
		code: "America/Winnipeg",
		offset: "-06:00"
	},
	{
		code: "Pacific/Easter",
		offset: "-06:00"
	},
	{
		code: "Pacific/Galapagos",
		offset: "-06:00"
	},
	{
		code: "America/Atikokan",
		offset: "-05:00"
	},
	{
		code: "America/Bogota",
		offset: "-05:00"
	},
	{
		code: "America/Cancun",
		offset: "-05:00"
	},
	{
		code: "America/Cayman",
		offset: "-05:00"
	},
	{
		code: "America/Detroit",
		offset: "-05:00"
	},
	{
		code: "America/Eirunepe",
		offset: "-05:00"
	},
	{
		code: "America/Grand_Turk",
		offset: "-05:00"
	},
	{
		code: "America/Guayaquil",
		offset: "-05:00"
	},
	{
		code: "America/Havana",
		offset: "-05:00"
	},
	{
		code: "America/Indiana/Indianapolis",
		offset: "-05:00"
	},
	{
		code: "America/Indiana/Marengo",
		offset: "-05:00"
	},
	{
		code: "America/Indiana/Petersburg",
		offset: "-05:00"
	},
	{
		code: "America/Indiana/Vevay",
		offset: "-05:00"
	},
	{
		code: "America/Indiana/Vincennes",
		offset: "-05:00"
	},
	{
		code: "America/Indiana/Winamac",
		offset: "-05:00"
	},
	{
		code: "America/Iqaluit",
		offset: "-05:00"
	},
	{
		code: "America/Jamaica",
		offset: "-05:00"
	},
	{
		code: "America/Kentucky/Louisville",
		offset: "-05:00"
	},
	{
		code: "America/Kentucky/Monticello",
		offset: "-05:00"
	},
	{
		code: "America/Lima",
		offset: "-05:00"
	},
	{
		code: "America/Nassau",
		offset: "-05:00"
	},
	{
		code: "America/New_York",
		offset: "-05:00"
	},
	{
		code: "America/Nipigon",
		offset: "-05:00"
	},
	{
		code: "America/Panama",
		offset: "-05:00"
	},
	{
		code: "America/Pangnirtung",
		offset: "-05:00"
	},
	{
		code: "America/Port-au-Prince",
		offset: "-05:00"
	},
	{
		code: "America/Rio_Branco",
		offset: "-05:00"
	},
	{
		code: "America/Thunder_Bay",
		offset: "-05:00"
	},
	{
		code: "America/Toronto",
		offset: "-05:00"
	},
	{
		code: "America/AnguillaSandy Hill",
		offset: "-04:00"
	},
	{
		code: "America/Antigua",
		offset: "-04:00"
	},
	{
		code: "America/Aruba",
		offset: "-04:00"
	},
	{
		code: "America/Asuncion",
		offset: "-04:00"
	},
	{
		code: "America/Barbados",
		offset: "-04:00"
	},
	{
		code: "America/Blanc-Sablon",
		offset: "-04:00"
	},
	{
		code: "America/Boa_Vista",
		offset: "-04:00"
	},
	{
		code: "America/Campo_Grande",
		offset: "-04:00"
	},
	{
		code: "America/Caracas",
		offset: "-04:00"
	},
	{
		code: "America/Cuiaba",
		offset: "-04:00"
	},
	{
		code: "America/Curacao",
		offset: "-04:00"
	},
	{
		code: "America/Dominica",
		offset: "-04:00"
	},
	{
		code: "America/Glace_Bay",
		offset: "-04:00"
	},
	{
		code: "America/Goose_Bay",
		offset: "-04:00"
	},
	{
		code: "America/Grenada",
		offset: "-04:00"
	},
	{
		code: "America/Guadeloupe",
		offset: "-04:00"
	},
	{
		code: "America/Guyana",
		offset: "-04:00"
	},
	{
		code: "America/Halifax",
		offset: "-04:00"
	},
	{
		code: "America/Kralendijk",
		offset: "-04:00"
	},
	{
		code: "America/La_Paz",
		offset: "-04:00"
	},
	{
		code: "America/Lower_Princes",
		offset: "-04:00"
	},
	{
		code: "America/Manaus",
		offset: "-04:00"
	},
	{
		code: "America/Marigot",
		offset: "-04:00"
	},
	{
		code: "America/Martinique",
		offset: "-04:00"
	},
	{
		code: "America/Moncton",
		offset: "-04:00"
	},
	{
		code: "America/Montserrat",
		offset: "-04:00"
	},
	{
		code: "America/Porto_Velho",
		offset: "-04:00"
	},
	{
		code: "America/Port_of_Spain",
		offset: "-04:00"
	},
	{
		code: "America/Puerto_Rico",
		offset: "-04:00"
	},
	{
		code: "America/Santiago",
		offset: "-04:00"
	},
	{
		code: "America/Santo_Domingo",
		offset: "-04:00"
	},
	{
		code: "America/St_Barthelemy",
		offset: "-04:00"
	},
	{
		code: "America/St_Kitts",
		offset: "-04:00"
	},
	{
		code: "America/St_Lucia",
		offset: "-04:00"
	},
	{
		code: "America/St_Thomas",
		offset: "-04:00"
	},
	{
		code: "America/St_Vincent",
		offset: "-04:00"
	},
	{
		code: "America/Thule",
		offset: "-04:00"
	},
	{
		code: "America/Tortola",
		offset: "-04:00"
	},
	{
		code: "Atlantic/Bermuda",
		offset: "-04:00"
	},
	{
		code: "America/St_Johns",
		offset: "-03:30"
	},
	{
		code: "America/Araguaina",
		offset: "-03:00"
	},
	{
		code: "America/Argentina/Buenos_Aires",
		offset: "-03:00"
	},
	{
		code: "America/Argentina/Catamarca",
		offset: "-03:00"
	},
	{
		code: "America/Argentina/Cordoba",
		offset: "-03:00"
	},
	{
		code: "America/Argentina/Jujuy",
		offset: "-03:00"
	},
	{
		code: "America/Argentina/La_Rioja",
		offset: "-03:00"
	},
	{
		code: "America/Argentina/Mendoza",
		offset: "-03:00"
	},
	{
		code: "America/Argentina/Rio_Gallegos",
		offset: "-03:00"
	},
	{
		code: "America/Argentina/Salta",
		offset: "-03:00"
	},
	{
		code: "America/Argentina/San_Juan",
		offset: "-03:00"
	},
	{
		code: "America/Argentina/San_Luis",
		offset: "-03:00"
	},
	{
		code: "America/Argentina/Tucuman",
		offset: "-03:00"
	},
	{
		code: "America/Argentina/Ushuaia",
		offset: "-03:00"
	},
	{
		code: "America/Bahia",
		offset: "-03:00"
	},
	{
		code: "America/Belem",
		offset: "-03:00"
	},
	{
		code: "America/Cayenne",
		offset: "-03:00"
	},
	{
		code: "America/Fortaleza",
		offset: "-03:00"
	},
	{
		code: "America/Godthab",
		offset: "-03:00"
	},
	{
		code: "America/Maceio",
		offset: "-03:00"
	},
	{
		code: "America/Miquelon",
		offset: "-03:00"
	},
	{
		code: "America/Montevideo",
		offset: "-03:00"
	},
	{
		code: "America/Paramaribo",
		offset: "-03:00"
	},
	{
		code: "America/Punta_Arenas",
		offset: "-03:00"
	},
	{
		code: "America/Recife",
		offset: "-03:00"
	},
	{
		code: "America/Santarem",
		offset: "-03:00"
	},
	{
		code: "America/Sao_Paulo",
		offset: "-03:00"
	},
	{
		code: "Antarctica/Palmer",
		offset: "-03:00"
	},
	{
		code: "Antarctica/Rothera",
		offset: "-03:00"
	},
	{
		code: "Atlantic/Stanley",
		offset: "-03:00"
	},
	{
		code: "America/Noronha",
		offset: "-02:00"
	},
	{
		code: "Atlantic/South_Georgia",
		offset: "-02:00"
	},
	{
		code: "America/Scoresbysund",
		offset: "-01:00"
	},
	{
		code: "Atlantic/Azores",
		offset: "-01:00"
	},
	{
		code: "Atlantic/Cape_Verde",
		offset: "-01:00"
	},
	{
		code: "Africa/Abidjan",
		offset: "+00:00"
	},
	{
		code: "Africa/Accra",
		offset: "+00:00"
	},
	{
		code: "Africa/Bamako",
		offset: "+00:00"
	},
	{
		code: "Africa/Banjul",
		offset: "+00:00"
	},
	{
		code: "Africa/Bissau",
		offset: "+00:00"
	},
	{
		code: "Africa/Casablanca",
		offset: "+00:00"
	},
	{
		code: "Africa/Conakry",
		offset: "+00:00"
	},
	{
		code: "Africa/Dakar",
		offset: "+00:00"
	},
	{
		code: "Africa/El_Aaiun",
		offset: "+00:00"
	},
	{
		code: "Africa/Freetown",
		offset: "+00:00"
	},
	{
		code: "Africa/Lome",
		offset: "+00:00"
	},
	{
		code: "Africa/Monrovia",
		offset: "+00:00"
	},
	{
		code: "Africa/Nouakchott",
		offset: "+00:00"
	},
	{
		code: "Africa/Ouagadougou",
		offset: "+00:00"
	},
	{
		code: "Africa/Sao_Tome",
		offset: "+00:00"
	},
	{
		code: "America/Danmarkshavn",
		offset: "+00:00"
	},
	{
		code: "Antarctica/Troll",
		offset: "+00:00"
	},
	{
		code: "Atlantic/Canary",
		offset: "+00:00"
	},
	{
		code: "Atlantic/Faroe",
		offset: "+00:00"
	},
	{
		code: "Atlantic/Madeira",
		offset: "+00:00"
	},
	{
		code: "Atlantic/Reykjavik",
		offset: "+00:00"
	},
	{
		code: "Atlantic/St_Helena",
		offset: "+00:00"
	},
	{
		code: "Europe/Dublin",
		offset: "+00:00"
	},
	{
		code: "Europe/Guernsey",
		offset: "+00:00"
	},
	{
		code: "Europe/Isle_of_Man",
		offset: "+00:00"
	},
	{
		code: "Europe/Jersey",
		offset: "+00:00"
	},
	{
		code: "Europe/Lisbon",
		offset: "+00:00"
	},
	{
		code: "Europe/London",
		offset: "+00:00"
	},
	{
		code: "Africa/Algiers",
		offset: "+01:00"
	},
	{
		code: "Africa/Bangui",
		offset: "+01:00"
	},
	{
		code: "Africa/Brazzaville",
		offset: "+01:00"
	},
	{
		code: "Africa/Ceuta",
		offset: "+01:00"
	},
	{
		code: "Africa/Douala",
		offset: "+01:00"
	},
	{
		code: "Africa/Kinshasa",
		offset: "+01:00"
	},
	{
		code: "Africa/Lagos",
		offset: "+01:00"
	},
	{
		code: "Africa/Libreville",
		offset: "+01:00"
	},
	{
		code: "Africa/Luanda",
		offset: "+01:00"
	},
	{
		code: "Africa/Malabo",
		offset: "+01:00"
	},
	{
		code: "Africa/Ndjamena",
		offset: "+01:00"
	},
	{
		code: "Africa/Niamey",
		offset: "+01:00"
	},
	{
		code: "Africa/Porto-Novo",
		offset: "+01:00"
	},
	{
		code: "Africa/Tunis",
		offset: "+01:00"
	},
	{
		code: "Africa/Windhoek",
		offset: "+01:00"
	},
	{
		code: "Arctic/Longyearbyen",
		offset: "+01:00"
	},
	{
		code: "Europe/Amsterdam",
		offset: "+01:00"
	},
	{
		code: "Europe/Andorra",
		offset: "+01:00"
	},
	{
		code: "Europe/Belgrade",
		offset: "+01:00"
	},
	{
		code: "Europe/Berlin",
		offset: "+01:00"
	},
	{
		code: "Europe/Bratislava",
		offset: "+01:00"
	},
	{
		code: "Europe/Brussels",
		offset: "+01:00"
	},
	{
		code: "Europe/Budapest",
		offset: "+01:00"
	},
	{
		code: "Europe/Copenhagen",
		offset: "+01:00"
	},
	{
		code: "Europe/Gibraltar",
		offset: "+01:00"
	},
	{
		code: "Europe/Ljubljana",
		offset: "+01:00"
	},
	{
		code: "Europe/Luxembourg",
		offset: "+01:00"
	},
	{
		code: "Europe/Madrid",
		offset: "+01:00"
	},
	{
		code: "Europe/Malta",
		offset: "+01:00"
	},
	{
		code: "Europe/Monaco",
		offset: "+01:00"
	},
	{
		code: "Europe/Oslo",
		offset: "+01:00"
	},
	{
		code: "Europe/Paris",
		offset: "+01:00"
	},
	{
		code: "Europe/Podgorica",
		offset: "+01:00"
	},
	{
		code: "Europe/Prague",
		offset: "+01:00"
	},
	{
		code: "Europe/Rome",
		offset: "+01:00"
	},
	{
		code: "Europe/San_Marino",
		offset: "+01:00"
	},
	{
		code: "Europe/Sarajevo",
		offset: "+01:00"
	},
	{
		code: "Europe/Skopje",
		offset: "+01:00"
	},
	{
		code: "Europe/Stockholm",
		offset: "+01:00"
	},
	{
		code: "Europe/Tirane",
		offset: "+01:00"
	},
	{
		code: "Europe/Vaduz",
		offset: "+01:00"
	},
	{
		code: "Europe/Vatican",
		offset: "+01:00"
	},
	{
		code: "Europe/Vienna",
		offset: "+01:00"
	},
	{
		code: "Europe/Warsaw",
		offset: "+01:00"
	},
	{
		code: "Europe/Zagreb",
		offset: "+01:00"
	},
	{
		code: "Europe/Zurich",
		offset: "+01:00"
	},
	{
		code: "Africa/Blantyre",
		offset: "+02:00"
	},
	{
		code: "Africa/Bujumbura",
		offset: "+02:00"
	},
	{
		code: "Africa/Cairo",
		offset: "+02:00"
	},
	{
		code: "Africa/Gaborone",
		offset: "+02:00"
	},
	{
		code: "Africa/Harare",
		offset: "+02:00"
	},
	{
		code: "Africa/Johannesburg",
		offset: "+02:00"
	},
	{
		code: "Africa/Juba",
		offset: "+02:00"
	},
	{
		code: "Africa/Khartoum",
		offset: "+02:00"
	},
	{
		code: "Africa/Kigali",
		offset: "+02:00"
	},
	{
		code: "Africa/Lubumbashi",
		offset: "+02:00"
	},
	{
		code: "Africa/Lusaka",
		offset: "+02:00"
	},
	{
		code: "Africa/Maputo",
		offset: "+02:00"
	},
	{
		code: "Africa/Maseru",
		offset: "+02:00"
	},
	{
		code: "Africa/Mbabane",
		offset: "+02:00"
	},
	{
		code: "Africa/Tripoli",
		offset: "+02:00"
	},
	{
		code: "Asia/Amman",
		offset: "+02:00"
	},
	{
		code: "Asia/Beirut",
		offset: "+02:00"
	},
	{
		code: "Asia/Damascus",
		offset: "+02:00"
	},
	{
		code: "Asia/Famagusta",
		offset: "+02:00"
	},
	{
		code: "Asia/Gaza",
		offset: "+02:00"
	},
	{
		code: "Asia/Hebron",
		offset: "+02:00"
	},
	{
		code: "Asia/Jerusalem",
		offset: "+02:00"
	},
	{
		code: "Asia/Nicosia",
		offset: "+02:00"
	},
	{
		code: "Europe/Athens",
		offset: "+02:00"
	},
	{
		code: "Europe/Bucharest",
		offset: "+02:00"
	},
	{
		code: "Europe/Chisinau",
		offset: "+02:00"
	},
	{
		code: "Europe/Helsinki",
		offset: "+02:00"
	},
	{
		code: "Europe/Kaliningrad",
		offset: "+02:00"
	},
	{
		code: "Europe/Kiev",
		offset: "+02:00"
	},
	{
		code: "Europe/Mariehamn",
		offset: "+02:00"
	},
	{
		code: "Europe/Riga",
		offset: "+02:00"
	},
	{
		code: "Europe/Sofia",
		offset: "+02:00"
	},
	{
		code: "Europe/Tallinn",
		offset: "+02:00"
	},
	{
		code: "Europe/Uzhgorod",
		offset: "+02:00"
	},
	{
		code: "Europe/Vilnius",
		offset: "+02:00"
	},
	{
		code: "Europe/Zaporozhye",
		offset: "+02:00"
	},
	{
		code: "Africa/Addis_Ababa",
		offset: "+03:00"
	},
	{
		code: "Africa/Asmara",
		offset: "+03:00"
	},
	{
		code: "Africa/Dar_es_Salaam",
		offset: "+03:00"
	},
	{
		code: "Africa/Djibouti",
		offset: "+03:00"
	},
	{
		code: "Africa/Kampala",
		offset: "+03:00"
	},
	{
		code: "Africa/Mogadishu",
		offset: "+03:00"
	},
	{
		code: "Africa/Nairobi",
		offset: "+03:00"
	},
	{
		code: "Antarctica/Syowa",
		offset: "+03:00"
	},
	{
		code: "Asia/Aden",
		offset: "+03:00"
	},
	{
		code: "Asia/Baghdad",
		offset: "+03:00"
	},
	{
		code: "Asia/Bahrain",
		offset: "+03:00"
	},
	{
		code: "Asia/Kuwait",
		offset: "+03:00"
	},
	{
		code: "Asia/Qatar",
		offset: "+03:00"
	},
	{
		code: "Asia/Riyadh",
		offset: "+03:00"
	},
	{
		code: "Europe/Istanbul",
		offset: "+03:00"
	},
	{
		code: "Europe/Kirov",
		offset: "+03:00"
	},
	{
		code: "Europe/Minsk",
		offset: "+03:00"
	},
	{
		code: "Europe/Moscow",
		offset: "+03:00"
	},
	{
		code: "Europe/Simferopol",
		offset: "+03:00"
	},
	{
		code: "Europe/Volgograd",
		offset: "+03:00"
	},
	{
		code: "Indian/Antananarivo",
		offset: "+03:00"
	},
	{
		code: "Indian/Comoro",
		offset: "+03:00"
	},
	{
		code: "Indian/Mayotte",
		offset: "+03:00"
	},
	{
		code: "Asia/Tehran",
		offset: "+03:30"
	},
	{
		code: "Asia/Baku",
		offset: "+04:00"
	},
	{
		code: "Asia/Dubai",
		offset: "+04:00"
	},
	{
		code: "Asia/Muscat",
		offset: "+04:00"
	},
	{
		code: "Asia/Tbilisi",
		offset: "+04:00"
	},
	{
		code: "Asia/Yerevan",
		offset: "+04:00"
	},
	{
		code: "Europe/Astrakhan",
		offset: "+04:00"
	},
	{
		code: "Europe/Samara",
		offset: "+04:00"
	},
	{
		code: "Europe/Saratov",
		offset: "+04:00"
	},
	{
		code: "Europe/Ulyanovsk",
		offset: "+04:00"
	},
	{
		code: "Indian/Mahe",
		offset: "+04:00"
	},
	{
		code: "Indian/Mauritius",
		offset: "+04:00"
	},
	{
		code: "Indian/Reunion",
		offset: "+04:00"
	},
	{
		code: "Asia/Kabul",
		offset: "+04:30"
	},
	{
		code: "Antarctica/Mawson",
		offset: "+05:00"
	},
	{
		code: "Asia/Aqtau",
		offset: "+05:00"
	},
	{
		code: "Asia/Aqtobe",
		offset: "+05:00"
	},
	{
		code: "Asia/Ashgabat",
		offset: "+05:00"
	},
	{
		code: "Asia/Atyrau",
		offset: "+05:00"
	},
	{
		code: "Asia/Dushanbe",
		offset: "+05:00"
	},
	{
		code: "Asia/Karachi",
		offset: "+05:00"
	},
	{
		code: "Asia/Oral",
		offset: "+05:00"
	},
	{
		code: "Asia/Qyzylorda",
		offset: "+05:00"
	},
	{
		code: "Asia/Samarkand",
		offset: "+05:00"
	},
	{
		code: "Asia/Tashkent",
		offset: "+05:00"
	},
	{
		code: "Asia/Yekaterinburg",
		offset: "+05:00"
	},
	{
		code: "Indian/Kerguelen",
		offset: "+05:00"
	},
	{
		code: "Indian/Maldives",
		offset: "+05:00"
	},
	{
		code: "Asia/Colombo",
		offset: "+05:30"
	},
	{
		code: "Asia/Kolkata",
		offset: "+05:30"
	},
	{
		code: "Asia/Kathmandu",
		offset: "+05:45"
	},
	{
		code: "Antarctica/Vostok",
		offset: "+06:00"
	},
	{
		code: "Asia/Almaty",
		offset: "+06:00"
	},
	{
		code: "Asia/Bishkek",
		offset: "+06:00"
	},
	{
		code: "Asia/Dhaka",
		offset: "+06:00"
	},
	{
		code: "Asia/Omsk",
		offset: "+06:00"
	},
	{
		code: "Asia/Qostanay",
		offset: "+06:00"
	},
	{
		code: "Asia/Thimphu",
		offset: "+06:00"
	},
	{
		code: "Asia/Urumqi",
		offset: "+06:00"
	},
	{
		code: "Indian/Chagos",
		offset: "+06:00"
	},
	{
		code: "Asia/Yangon",
		offset: "+06:30"
	},
	{
		code: "Indian/Cocos",
		offset: "+06:30"
	},
	{
		code: "Antarctica/Davis",
		offset: "+07:00"
	},
	{
		code: "Asia/Bangkok",
		offset: "+07:00"
	},
	{
		code: "Asia/Barnaul",
		offset: "+07:00"
	},
	{
		code: "Asia/Hovd",
		offset: "+07:00"
	},
	{
		code: "Asia/Ho_Chi_Minh",
		offset: "+07:00"
	},
	{
		code: "Asia/Jakarta",
		offset: "+07:00"
	},
	{
		code: "Asia/Krasnoyarsk",
		offset: "+07:00"
	},
	{
		code: "Asia/Novokuznetsk",
		offset: "+07:00"
	},
	{
		code: "Asia/Novosibirsk",
		offset: "+07:00"
	},
	{
		code: "Asia/Phnom_Penh",
		offset: "+07:00"
	},
	{
		code: "Asia/Pontianak",
		offset: "+07:00"
	},
	{
		code: "Asia/Tomsk",
		offset: "+07:00"
	},
	{
		code: "Asia/Vientiane",
		offset: "+07:00"
	},
	{
		code: "Indian/Christmas",
		offset: "+07:00"
	},
	{
		code: "Asia/Brunei",
		offset: "+08:00"
	},
	{
		code: "Asia/Choibalsan",
		offset: "+08:00"
	},
	{
		code: "Asia/Hong_Kong",
		offset: "+08:00"
	},
	{
		code: "Asia/Irkutsk",
		offset: "+08:00"
	},
	{
		code: "Asia/Kuala_Lumpur",
		offset: "+08:00"
	},
	{
		code: "Asia/Kuching",
		offset: "+08:00"
	},
	{
		code: "Asia/Macau",
		offset: "+08:00"
	},
	{
		code: "Asia/Makassar",
		offset: "+08:00"
	},
	{
		code: "Asia/Manila",
		offset: "+08:00"
	},
	{
		code: "Asia/Shanghai",
		offset: "+08:00"
	},
	{
		code: "Asia/Singapore",
		offset: "+08:00"
	},
	{
		code: "Asia/Taipei",
		offset: "+08:00"
	},
	{
		code: "Asia/Ulaanbaatar",
		offset: "+08:00"
	},
	{
		code: "Australia/Perth",
		offset: "+08:00"
	},
	{
		code: "Australia/Eucla",
		offset: "+08:45"
	},
	{
		code: "Asia/Chita",
		offset: "+09:00"
	},
	{
		code: "Asia/Dili",
		offset: "+09:00"
	},
	{
		code: "Asia/Jayapura",
		offset: "+09:00"
	},
	{
		code: "Asia/Khandyga",
		offset: "+09:00"
	},
	{
		code: "Asia/Pyongyang",
		offset: "+09:00"
	},
	{
		code: "Asia/Seoul",
		offset: "+09:00"
	},
	{
		code: "Asia/Tokyo",
		offset: "+09:00"
	},
	{
		code: "Asia/Yakutsk",
		offset: "+09:00"
	},
	{
		code: "Pacific/Palau",
		offset: "+09:00"
	},
	{
		code: "Australia/Adelaide",
		offset: "+09:30"
	},
	{
		code: "Australia/Broken_Hill",
		offset: "+09:30"
	},
	{
		code: "Australia/Darwin",
		offset: "+09:30"
	},
	{
		code: "Antarctica/DumontDUrville",
		offset: "+10:00"
	},
	{
		code: "Antarctica/Macquarie",
		offset: "+10:00"
	},
	{
		code: "Asia/Ust-Nera",
		offset: "+10:00"
	},
	{
		code: "Asia/Vladivostok",
		offset: "+10:00"
	},
	{
		code: "Australia/Brisbane",
		offset: "+10:00"
	},
	{
		code: "Australia/Currie",
		offset: "+10:00"
	},
	{
		code: "Australia/Hobart",
		offset: "+10:00"
	},
	{
		code: "Australia/Lindeman",
		offset: "+10:00"
	},
	{
		code: "Australia/Melbourne",
		offset: "+10:00"
	},
	{
		code: "Australia/Sydney",
		offset: "+10:00"
	},
	{
		code: "Pacific/Chuuk",
		offset: "+10:00"
	},
	{
		code: "Pacific/GuamVillage",
		offset: "+10:00"
	},
	{
		code: "Pacific/Port_Moresby",
		offset: "+10:00"
	},
	{
		code: "Pacific/Saipan",
		offset: "+10:00"
	},
	{
		code: "Australia/Lord_Howe",
		offset: "+10:30"
	},
	{
		code: "Antarctica/Casey",
		offset: "+11:00"
	},
	{
		code: "Asia/Magadan",
		offset: "+11:00"
	},
	{
		code: "Asia/Sakhalin",
		offset: "+11:00"
	},
	{
		code: "Asia/Srednekolymsk",
		offset: "+11:00"
	},
	{
		code: "Pacific/Bougainville",
		offset: "+11:00"
	},
	{
		code: "Pacific/Efate",
		offset: "+11:00"
	},
	{
		code: "Pacific/Guadalcanal",
		offset: "+11:00"
	},
	{
		code: "Pacific/Kosrae",
		offset: "+11:00"
	},
	{
		code: "Pacific/Norfolk",
		offset: "+11:00"
	},
	{
		code: "Pacific/Noumea",
		offset: "+11:00"
	},
	{
		code: "Pacific/Pohnpei",
		offset: "+11:00"
	},
	{
		code: "Antarctica/McMurdo",
		offset: "+12:00"
	},
	{
		code: "Asia/Anadyr",
		offset: "+12:00"
	},
	{
		code: "Asia/Kamchatka",
		offset: "+12:00"
	},
	{
		code: "Pacific/Auckland",
		offset: "+12:00"
	},
	{
		code: "Pacific/Fiji",
		offset: "+12:00"
	},
	{
		code: "Pacific/Funafuti",
		offset: "+12:00"
	},
	{
		code: "Pacific/Kwajalein",
		offset: "+12:00"
	},
	{
		code: "Pacific/Majuro",
		offset: "+12:00"
	},
	{
		code: "Pacific/Nauru",
		offset: "+12:00"
	},
	{
		code: "Pacific/Tarawa",
		offset: "+12:00"
	},
	{
		code: "Pacific/Wake",
		offset: "+12:00"
	},
	{
		code: "Pacific/Wallis",
		offset: "+12:00"
	},
	{
		code: "Pacific/Chatham",
		offset: "+12:45"
	},
	{
		code: "Pacific/Apia",
		offset: "+13:00"
	},
	{
		code: "Pacific/Enderbury",
		offset: "+13:00"
	},
	{
		code: "Pacific/Fakaofo",
		offset: "+13:00"
	},
	{
		code: "Pacific/Tongatapu",
		offset: "+13:00"
	},
	{
		code: "Pacific/Kiritimati",
		offset: "+14:00"
	}
];
export default timezones;
