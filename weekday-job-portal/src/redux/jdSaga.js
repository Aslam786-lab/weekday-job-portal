import { call, put, select, takeEvery } from "redux-saga/effects";
import { fetchJdSuccess } from "./jdState";

function* fetchJd() {
  try {
    const offset = yield select(state => state.jd.offset);
    const limit = 10;

    const response = yield call(
      fetch,
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          limit: limit,
          offset: offset,
        }),
      }
    );
    const data = yield response.json();
    if (data && data.jdList) {
      const filteredJd = data.jdList.filter(
        (item) => !Object.values(item).includes(null)
      );
      const newOffset = offset + limit;
      yield put(fetchJdSuccess({filteredJd, offset: newOffset, totalCount: data.totalCount }));
    }
  } catch (error) {
    console.error(error);
  }
}

export default function* jdSaga() {
  yield takeEvery("jd/fetchJdRequest", fetchJd);
}
