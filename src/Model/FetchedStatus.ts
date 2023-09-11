const FETCH_STATUS = {
  FAIL : -1,
  NOT_YET : 0,
  COMPLETE : 1,
}

type FETCH_STATUS = typeof FETCH_STATUS[keyof typeof FETCH_STATUS];

export {FETCH_STATUS}