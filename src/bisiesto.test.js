import esBisiesto from "./bisiesto";

describe("Es bisiesto", () => {
  it("deberia retornar el año", () => {
    expect(esBisiesto(1900)).toEqual(1900);
  });
});
