const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
];
function contarOvejas(ovejas) {
  // aquí tu magia
  ovejas = ovejas.filter(
    (oveja) =>
      oveja.color.toLowerCase().includes("rojo") &&
      oveja.name.toLowerCase().includes("n","a")
  );
  return ovejas;
}

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
