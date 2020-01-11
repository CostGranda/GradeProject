import React, { useEffect, useState, useMemo } from "react";
import Table from "../components/Table";
import localServices from "../services/LocalStorageService";
import { BASE_ENDPOINT } from "../../constanst";

import "./Empty.scss";

function ApplicantTablePage() {
  const [data, setData] = useState();
  const [needReload, setReload] = useState(false);

  const columnsTable = useMemo(
    () => [
      {
        Header: "ID Number",
        accessor: "identification",
        filter: "fuzzyText"
      },
      {
        Header: "Names",
        accessor: "names",
        filter: "fuzzyText"
      },
      {
        Header: "Surnames",
        accessor: "surnames",
        filter: "fuzzyText"
      },
      {
        Header: "Availability",
        accessor: "availability",
        filter: "fuzzyText"
      },
      {
        Header: "Comments",
        accessor: "description"
      },
      {
        Header: "Date",
        accessor: "Date",
        filter: "fuzzyText"
      }
    ],
    []
  );

  const fetchData = async () => {
    const token = localServices.getCurrentAccountId("token");
    const response = await fetch(`${BASE_ENDPOINT}alerts`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.token}`
      },
      mode: "cors"
    });
    let data = await response.json();
    const newData = data.map(item => ({
      ...item,
      availability: item.availability
        ? item.availability.split("T", 1)
        : undefined,
      Date: item.Date ? item.Date.split("T", 1) : undefined
    }));

    setReload(false);
    setData(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (needReload) {
      fetchData();
    }
  }, [needReload]);

  return (
    <>
      {" "}
      {data && (
        <div className="table-container">
          <Table
            columns={columnsTable}
            data={data}
            createRoute="/createAlarm"
            updateRoute="/UpdateAlarm"
            setReload={setReload}
          />
        </div>
      )}{" "}
    </>
  );
}

export default ApplicantTablePage;
