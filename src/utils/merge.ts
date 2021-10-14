import isPlainObject from './isPlainObject';

type Indexed<T = unknown> = {
    [key in string]: T;
};


function merge(lhs: Indexed, rhs: Indexed): Indexed {
    const res = lhs
    for (const key in rhs) {
        if (!rhs.hasOwnProperty(key)) {
            continue;
        }
        if (isPlainObject(lhs[key])) {
            lhs[key] = merge(lhs[key] as Indexed, rhs[key] as Indexed)
        } else {
            lhs[key] = rhs[key]
        }
    }
    return res
}

export default merge