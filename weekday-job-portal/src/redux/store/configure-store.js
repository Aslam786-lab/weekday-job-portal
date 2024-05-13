
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import jdSaga from '../jdSaga';
import jdReducer from '../jdState'

const sagaMiddleware = createSagaMiddleware();
export  const store = configureStore({
    reducer: {
        jd: jdReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([sagaMiddleware]),
})

sagaMiddleware.run(jdSaga);