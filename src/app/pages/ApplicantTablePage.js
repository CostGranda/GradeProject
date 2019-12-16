import React, { useEffect, useState, useMemo } from "react";
import Table from "../components/Table";

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
        const response = await fetch(
            "https://happy-test2.herokuapp.com/api/alerts",
            {
                method: "GET",
                headers: {
                    Authorization:
                        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBZG1pbiIsImlhdCI6MTU3NjA2NTAwOSwiZXhwIjoxNTc3Mjc0NjA5fQ.HI24Ypq1mvX4-sV3T0o5_1ybgcAypcCIvopAkHXQvO8"
                },
                mode: "cors"
            }
        );
        let data = await response.json();
        const newData = data.map(item => ({
            ...item,
            availability: item.availability
                ? new Date(item.availability).toDateString()
                : undefined,
            Date: item.Date
                ? new Date(item.Date).toDateString()
                : undefined
        }));

        setReload(false)
        setData(newData);
    };


    useEffect(() => {
        fetchData();
      }, []);
    
      useEffect(()=>{
        if(needReload) {
          fetchData();
        }
      }, [needReload])


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
