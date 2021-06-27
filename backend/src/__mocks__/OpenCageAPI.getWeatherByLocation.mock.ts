/**
 * To updated this mock call this endpoint and replace this it;
 * https://api.opencagedata.com/geocode/v1/json?q=33.44,-94.04&key=c63386b4f77e46de817bdf94f552cddf&language=en
 */

export default {
  documentation: 'https://opencagedata.com/api',
  licenses: [
    {
      name: 'see attribution guide',
      url: 'https://opencagedata.com/credits'
    }
  ],
  rate: {
    limit: 2500,
    remaining: 2497,
    reset: 1624320000
  },
  results: [
    {
      annotations: {
        DMS: {
          lat: "33° 26' 24.27900'' N",
          lng: "94° 2' 23.99424'' W"
        },
        FIPS: {
          county: '05091',
          state: '05'
        },
        MGRS: '15SVT0333000559',
        Maidenhead: 'EM23xk55eo',
        Mercator: {
          x: -10468484.742,
          y: 3930318.494
        },
        OSM: {
          edit_url: 'https://www.openstreetmap.org/edit?way=12860431#map=17/33.44008/-94.04000',
          note_url: 'https://www.openstreetmap.org/note/new#map=17/33.44008/-94.04000&layers=N',
          url: 'https://www.openstreetmap.org/?mlat=33.44008&mlon=-94.04000#map=17/33.44008/-94.04000'
        },
        UN_M49: {
          regions: {
            AMERICAS: '019',
            NORTHERN_AMERICA: '021',
            US: '840',
            WORLD: '001'
          },
          statistical_groupings: [
            'MEDC'
          ]
        },
        callingcode: 1,
        currency: {
          alternate_symbols: [
            'US$'
          ],
          decimal_mark: '.',
          disambiguate_symbol: 'US$',
          html_entity: '$',
          iso_code: 'USD',
          iso_numeric: '840',
          name: 'United States Dollar',
          smallest_denomination: 1,
          subunit: 'Cent',
          subunit_to_unit: 100,
          symbol: '$',
          symbol_first: 1,
          thousands_separator: ','
        },
        flag: '🇺🇸',
        geohash: '9vvnhpd4t4qb44s05pcm',
        qibla: 45.47,
        roadinfo: {
          drive_on: 'right',
          road: 'East 18th Street',
          speed_in: 'mph'
        },
        sun: {
          rise: {
            apparent: 1624273680,
            astronomical: 1624267500,
            civil: 1624271940,
            nautical: 1624269840
          },
          set: {
            apparent: 1624238880,
            astronomical: 1624245060,
            civil: 1624240620,
            nautical: 1624242720
          }
        },
        timezone: {
          name: 'America/Chicago',
          now_in_dst: 1,
          offset_sec: -18000,
          offset_string: '-0500',
          short_name: 'CDT'
        },
        what3words: {
          words: 'offer.backward.variety'
        }
      },
      bounds: {
        northeast: {
          lat: 33.4401275,
          lng: -94.0399484
        },
        southwest: {
          lat: 33.4400275,
          lng: -94.0400484
        }
      },
      components: {
        'ISO_3166-1_alpha-2': 'US',
        'ISO_3166-1_alpha-3': 'USA',
        _category: 'building',
        _type: 'building',
        city: 'Texarkana',
        continent: 'North America',
        country: 'United States',
        country_code: 'us',
        county: 'Miller County',
        house_number: '340',
        postcode: '71854',
        road: 'East 18th Street',
        state: 'Arkansas',
        state_code: 'AR'
      },
      confidence: 10,
      formatted: '340 East 18th Street, Texarkana, AR 71854, United States of America',
      geometry: {
        lat: 33.4400775,
        lng: -94.0399984
      }
    }
  ],
  status: {
    code: 200,
    message: 'OK'
  },
  stay_informed: {
    blog: 'https://blog.opencagedata.com',
    twitter: 'https://twitter.com/OpenCage'
  },
  thanks: 'For using an OpenCage API',
  timestamp: {
    created_http: 'Mon, 21 Jun 2021 01:36:16 GMT',
    created_unix: 1624239376
  },
  total_results: 1
}
