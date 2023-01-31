const layersOrder = [
    { name: 'background', number: 4 },
    { name: 'base_pig', number: 1 },
    //{ name: 'eyes', number: 4 },
    { name: 'eye_mask', number: 4 },
    { name: 'piercing', number: 4 },
   // { name: 'glasses', number: 5 },
    { name: 'smoking', number: 4 },
];
  
const format = {
    width: 1000,
    height: 1000
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 30;

module.exports = { layersOrder, format, rarity, defaultEdition };