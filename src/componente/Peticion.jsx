import { useEffect } from "react";
import { useState } from "react";

export const Peticion = ({}) => {
  const [Personas, setpersonas] = useState([]);

  const obtenerdato = async () => {
    let repuestas = await fetch("https://dummyjson.com/users");

    let data = await repuestas.json();
    setpersonas(data.users);
  };
  useEffect(() => {
    obtenerdato();
  }, []);
  if (Personas.length == 0) {
    return <h1>cargando</h1>;
  }
  console.log(Personas);
  return (
    <>
      <h1>Usuario</h1>
      {Personas.map((element, index) => {
        return (
          <div key={index}>
            <h3>{element.firstName}</h3>
            <h4>{element.age}</h4>
            <h5>{element.age < 30 ? "Menor de 30" : "Mayor de 30"}</h5>
          </div>
        );
      })}
      ;
    </>
  );
};
