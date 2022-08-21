import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

global.axiosMock = new MockAdapter(axios);
