const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
}

global.navigator.geolocation = mockGeolocation
URL.createObjectURL = jest.fn(() => 'http://bgimage.jpg')
