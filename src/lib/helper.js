export default class Helper {
  static isNotNullAndUndefined(obj, props = []) {
    let bIsNullorUndefined = obj === null || obj === undefined;
    let curObj = null;

    if (!bIsNullorUndefined) {
      curObj = obj;
      if (props !== null) {
        for (let idx = 0; idx < props.length; idx++) {
          bIsNullorUndefined =
            curObj[props[idx]] === null || curObj[props[idx]] === undefined;
          curObj = curObj[props[idx]]; // Set the curObj[props[idx]] to curObj so that it will recursive down the depth of the object

          if (bIsNullorUndefined) {
            break;
          }
        }
      }
    }

    return !bIsNullorUndefined;
  }
}
