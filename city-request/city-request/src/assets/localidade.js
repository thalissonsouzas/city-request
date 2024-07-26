// src/localidade.js
let localidades = [
  { latitude: -23.671679948832917, longitude: -46.434782283227634, comentario: "Buraco profundo na via, risco de acidente." },
  { latitude: -23.686640720831463, longitude: -46.43613095976406, comentario: "Árvore com galhos baixos que atrapalham a passagem dos pedestres." },
  { latitude: -23.658478359486395, longitude: -46.45667030182224, comentario: "Praça pública com bancos quebrados e lixo acumulado." },
  { latitude: -23.67967482843936, longitude: -46.4469524201252, comentario: "Luminárias na rua apagadas, aumenta o risco de crimes." },
  { latitude: -23.689719159596308, longitude: -46.426109417724064, comentario: "Asfalto esburacado, principalmente na área onde os ônibus param." },
  { latitude: -23.671679948832917, longitude: -46.434782283227634, comentario: "Poda de árvore necessária, galhos estão bloqueando a visão dos motoristas." },
  { latitude: -23.686640720831463, longitude: -46.43613095976406, comentario: "Falta de sinalização de trânsito na esquina, perigos para motoristas e pedestres." },
  { latitude: -23.658478359486395, longitude: -46.45667030182224, comentario: "Acúmulo de água parada em buraco na calçada, risco de dengue." },
  { latitude: -23.67967482843936, longitude: -46.4469524201252, comentario: "Calçada danificada e perigosa para pedestres, especialmente para cadeirantes." },
  { latitude: -23.689719159596308, longitude: -46.426109417724064, comentario: "Poste de iluminação quebrado, área muito escura à noite." },
  { latitude: -23.67381246023895, longitude: -46.43240704253059, comentario: "Placas de sinalização de rua caídas, confusão para motoristas." },
  { latitude: -23.67654141686568, longitude: -46.43126541501931, comentario: "Bueiro entupido causando alagamento na rua durante chuvas." },
  { latitude: -23.68400706032654, longitude: -46.43976044196542, comentario: "Buraco na rua não sinalizado, causa acidentes com frequência." },
  { latitude: -23.68289672783545, longitude: -46.43751971764224, comentario: "Árvore precisando de poda, galhos estão caindo em cima da calçada." },
  { latitude: -23.68637469058313, longitude: -46.42666846889774, comentario: "Buraco na calçada com risco de queda para pedestres." },
  { latitude: -23.68857324415391, longitude: -46.42624901279412, comentario: "Rua com muita sujeira e entulho, difícil de transitar." },
  { latitude: -23.68375934217548, longitude: -46.43154709948896, comentario: "Falta de manutenção no parquinho da praça, brinquedos quebrados." },
  { latitude: -23.67095466220812, longitude: -46.43774901767995, comentario: "Desnível na calçada, perigoso para pessoas com deficiência visual." },
  { latitude: -23.67685021991999, longitude: -46.42913790824298, comentario: "Pintura de faixas de pedestres desbotada, dificultando a visibilidade." },
  { latitude: -23.682366079794896, longitude: -46.45422122193365, comentario: "Árvore em frente a um ponto de ônibus precisa de poda para liberar o espaço." },
  { latitude: -23.67857512081264, longitude: -46.42534906922874, comentario: "Falta de lixeiras na praça, lixo acumulado por toda parte." },
  { latitude: -23.68488703167477, longitude: -46.43961585004246, comentario: "Calçada com rachaduras, perigosa para crianças e idosos." },
];


export const getLocalidade = () => {
  return localidades;
};

export const addLocalidade = (latitude, longitude, comentario) => {
  localidades.push({ latitude, longitude, comentario });
};
  
  export default localidades;
  