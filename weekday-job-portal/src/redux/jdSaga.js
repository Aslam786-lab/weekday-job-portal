import { call, put, select, takeEvery } from "redux-saga/effects";
import { fetchJdSuccess } from "./jdState";

function* fetchJd() {
  try {

    const response = yield call(
      fetch,
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          limit: 10,
          offset: 0,
        }),
      }
    );
    const data = yield response.json();
    yield put(fetchJdSuccess({filteredJd: data.jdList }));
    
  } catch (error) {
    console.error(error);
  }
}

export default function* jdSaga() {
  yield takeEvery("jd/fetchJdRequest", fetchJd);
}
