import _ from "lodash";

export const createLoadingSelector = actions => state => {
  return _(actions).some(action => _.get(state, `loading.${action}`));
};

export const createNotificationSelector = actions => state => {
  return _(actions)
      .some(action => _.get(state, `error.${action}`));
};
