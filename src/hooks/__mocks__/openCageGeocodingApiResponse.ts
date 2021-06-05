export const openCageGeocodingApiResponse = {
  documentation: 'https://opencagedata.com/api',
  licenses: [
    {
      name: 'see attribution guide',
      url: 'https://opencagedata.com/credits',
    },
  ],
  rate: {
    limit: 2500,
    remaining: 2494,
    reset: 1622937600,
  },
  results: [
    {
      annotations: {
        DMS: {
          lat: "22° 54' 24.55056'' S",
          lng: "43° 10' 22.09440'' W",
        },
        MGRS: '23KPQ8740465631',
        Maidenhead: 'GG87jc92gi',
        Mercator: {
          x: -4805974.557,
          y: -2604128.937,
        },
        OSM: {
          edit_url: 'https://www.openstreetmap.org/edit?node=6129129579#map=16/-22.90682/-43.17280',
          note_url: 'https://www.openstreetmap.org/note/new#map=16/-22.90682/-43.17280&layers=N',
          url: 'https://www.openstreetmap.org/?mlat=-22.90682&mlon=-43.17280#map=16/-22.90682/-43.17280',
        },
        UN_M49: {
          regions: {
            AMERICAS: '019',
            BR: '076',
            LATIN_AMERICA: '419',
            SOUTH_AMERICA: '005',
            WORLD: '001',
          },
          statistical_groupings: ['LEDC'],
        },
        callingcode: 55,
        currency: {
          decimal_mark: ',',
          html_entity: 'R$',
          iso_code: 'BRL',
          iso_numeric: '986',
          name: 'Brazilian Real',
          smallest_denomination: 5,
          subunit: 'Centavo',
          subunit_to_unit: 100,
          symbol: 'R$',
          symbol_first: 1,
          thousands_separator: '.',
        },
        flag: '🇧🇷',
        geohash: '75cm9tfw0g24dcckxsjc',
        qibla: 67.61,
        roadinfo: {
          drive_on: 'right',
          road: 'Praça do Expedicionário',
          speed_in: 'km/h',
        },
        sun: {
          rise: {
            apparent: 1622885340,
            astronomical: 1622880540,
            civil: 1622883840,
            nautical: 1622882220,
          },
          set: {
            apparent: 1622924040,
            astronomical: 1622928780,
            civil: 1622925480,
            nautical: 1622927160,
          },
        },
        timezone: {
          name: 'America/Sao_Paulo',
          now_in_dst: 0,
          offset_sec: -10800,
          offset_string: '-0300',
          short_name: 'BRT',
        },
        what3words: {
          words: 'reboot.splash.tagging',
        },
      },
      bounds: {
        northeast: {
          lat: -22.9067696,
          lng: -43.172754,
        },
        southwest: {
          lat: -22.9068696,
          lng: -43.172854,
        },
      },
      components: {
        'ISO_3166-1_alpha-2': 'BR',
        'ISO_3166-1_alpha-3': 'BRA',
        _category: 'commerce',
        _type: 'bicycle_rental',
        bicycle_rental: 'Praça do Expedicionário',
        city: 'Rio de Janeiro',
        city_district: 'Zona Central do Rio de Janeiro',
        continent: 'South America',
        country: 'Brasil',
        country_code: 'br',
        county: 'Região Metropolitana do Rio de Janeiro',
        municipality: 'Região Geográfica Imediata do Rio de Janeiro',
        postcode: '20030-080',
        quarter: 'Castelo',
        region: 'Região Sudeste',
        road: 'Praça do Expedicionário',
        state: 'Rio de Janeiro',
        state_code: 'RJ',
        state_district: 'Região Geográfica Intermediária do Rio de Janeiro',
        suburb: 'Centro',
      },
      confidence: 9,
      formatted: 'Praça do Expedicionário, Centro, Rio de Janeiro - RJ, 20030-080, Brasil',
      geometry: {
        lat: -22.9068196,
        lng: -43.172804,
      },
    },
  ],
  status: {
    code: 200,
    message: 'OK',
  },
  stay_informed: {
    blog: 'https://blog.opencagedata.com',
    twitter: 'https://twitter.com/OpenCage',
  },
  thanks: 'For using an OpenCage API',
  timestamp: {
    created_http: 'Sat, 05 Jun 2021 23:37:52 GMT',
    created_unix: 1622936272,
  },
  total_results: 1,
};
