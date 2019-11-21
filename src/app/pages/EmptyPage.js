import React, { useEffect, useState, useMemo } from "react";

function EmptyPage() {
  const [data, setData] = useState();
  const headers = useMemo(
    () => [
      "apellidos",
      "calificacion",
      "cedula",
      "ciudad",
      "comentarios",
      "cv",
      "disponibilidad",
      "email",
      "especialidades",
      "nombres",
      "origen",
      "skype",
      "state",
      "telefono"
    ],
    []
  );

  const imprimir = item => {
    console.log("item", item)

    const filtro = data.filter( item => item.telefonos.includes(123123123));
    console.log(filtro, "Filtro telefono")
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://happy-test2.herokuapp.com/api/applicants",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZG1pbiIsImlhdCI6MTU3MzQzMTg4NywiZXhwIjoxNTc0NjQxNDg3fQ.lmkR7W8uIxDBH6L8230Fr6I9-nsfCeNPTTo8waZWfns"
          },
          mode: "cors"
        }
      );

      let data = await response.json();
      console.log(data);
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      {data && (
        <table class="table table-striped">
          <thead>
            <tr>
              {headers.map(header => (
                <th scope="col">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.cedula}>
                <td>{item.apellidos}</td>
                <td>{item.calificacion}</td>
                <td>{item.cedula}</td>
                <td>{item.ciudad}</td>
                <td>{item.comentarios}</td>
                <td>{item.cv}</td>
                <td>{item.disponibilidad}</td>
                <td>{item.email}</td>
                <td>{item.especialidades}</td>
                <td>{item.nombres}</td>
                <td>{item.origen}</td>
                <td>{item.skype}</td>
                <td>{item.state}</td>
                <td>
                  {item.telefonos.map(telefono => (
                    <p key={telefono}>{telefono}</p>
                  ))}
                </td>
                <td><button className="btn btn-primary" onClick={()=>imprimir(item)}>Imprimir</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default EmptyPage;
