/**
 * 'all' method allows us to work with multiple sagas
 * similar to redux's 'combine reducers'
 *  */
import { all, takeLatest } from "redux-saga/effects";
import { Types as FavoriteTypes } from "../ducks/favorites";
import { addFavorite } from "./favorites";

/**
 * '*' here indicates a 'generator' javascript function
 * 'generator' allows us to work with asynchronous requests
 * similarly to async/await but with further functionalities
 * just out of curiosity: as of mar/2019 babel converts async/await calls to
 * generator
 */
export default function* rootSaga() {
  /**
   *  'yield' = 'await'
   * 'takeLatest' cancels the current executions of the referenced
   * action ('ADD_FAVORITE_REQUEST' in this case) and takes the new one
   * in case, for exemple, of multiple user clicks on the same button
   * 'takeEvery' is another option which would execute all user requested action
   * clicks */

  yield all([takeLatest(FavoriteTypes.ADD_REQUEST, addFavorite)]);
}
