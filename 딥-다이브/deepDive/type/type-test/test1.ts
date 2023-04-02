enum Brand {
    Nike = 'nike',
    Adidas = 'adidas',
    Puma = 'puma'
}

const type: typeof Brand = {Nike: Brand.Nike, Adidas: Brand.Adidas, Puma: Brand.Puma};
const type2: keyof typeof Brand = {Nike: 'nike', Adidas: 'adidas', Puma: 'puma'};


interface Brand2 {
    Nike: 'nike';
    Adidas: 'adidas';
    Puma: 'puma';
}

let type3: keyof Brand2
// let type4 