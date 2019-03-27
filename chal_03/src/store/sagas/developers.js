import { call, put, select } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as FavoriteActions } from "../ducks/favorites";

// '*' indicates a generator function (async/await alike but better)
export function* addFavorite(action) {
  try {
    //   const response = yield api.get(`/repos/${action.payload.repository}`);
    /** 'call' first param = method to be executed, second param = params to pass
     * to the method
     */
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    //  'select' allows us to access redux's state data
    const isDuplicate = yield select(state =>
      state.favorites.data.find(fav => fav.id === data.id)
    );

    if (isDuplicate) {
      yield put(FavoriteActions.addFavoriteFailure("Repositório duplicado"));
    } else {
      const repositoryData = {
        id: data.id,
        name: data.full_name,
        description: data.description,
        url: data.html_url
      };

      // 'put' finally dispatches the action to the reducers with appropriate data
      yield put(FavoriteActions.addFavoriteSuccess(repositoryData));
    }
  } catch (err) {
    yield put(
      FavoriteActions.addFavoriteFailure("Erro ao adicionar repositório")
    );
  }
}
