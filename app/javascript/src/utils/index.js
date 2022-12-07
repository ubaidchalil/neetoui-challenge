import dayjs from "dayjs";
import * as R from "ramda";

export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);

export const formatDateToDayAndTime = date =>
  dayjs(date).format("MMMM, hh:mmA");

export const formatDateToTimeSinceNow = date => dayjs(date).fromNow();
