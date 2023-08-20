import esBisiesto from "./bisiesto";

describe("Es bisiesto", () => {
  it("deberia retornar que no es bisiesto", () => {
    expect(esBisiesto(2001)).toEqual("No es bisiesto");
  });
  it("deberia retornar que es bisiesto", () => {
    expect(esBisiesto(2000)).toEqual("Es bisiesto");
  });
  it("deberia retornar que no es bisiesto", () => {
    expect(esBisiesto(2100)).toEqual("No es bisiesto");
  });
  it("deberia retornar que no es bisiesto", () => {
    expect(esBisiesto(2008)).toEqual("Es bisiesto");
  });
  it("deberia retornar que no es bisiesto", () => {
    expect(esBisiesto(2017)).toEqual("No es bisiesto");
  });
});
