type Point = {
    x: number;
    y: number;
}

type P = keyof Point;

type Arrayish = {
    [n: number]: string
}
type A = keyof Arrayish;

type Mapish = {
    [k: string]: boolean
}
type M = keyof Mapish
