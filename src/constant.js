export const createApiActionTypes = (namespace, type) => [
  `${namespace}/${type}_REQUEST`,
  `${namespace}/${type}_SUCCESS`,
  `${namespace}/${type}_FAIL`,
];
