import isPlainObject from './isPlainObject';

type Indexed<T = unknown> = {
    [key in string]: T;
};

function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
    if (!isPlainObject(object)) {
        return object;
    }

    const pathArr = path.split('.');
    if (pathArr.length === 1) {
        object[path] = value;
    } else {
        let current = object;
        for (let i = 0; i < pathArr.length; i++) {
            if (i === pathArr.length - 1) {
                current[pathArr[i]] = value;
            } else {
                current[pathArr[i]] = {};
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                current = current[pathArr[i]];
            }
        }
    }

    return object;
}

export default set;