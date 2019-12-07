import Reactotron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
    const tron = Reactotron.configure().connect();

    tron.clear();

    console.tron = tron;
}
