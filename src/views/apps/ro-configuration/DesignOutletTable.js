import React from "react";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import ReactTable from "react-table";
import { makeData } from "../../tables/react-tables/TableData";
import "react-table/react-table.css";
import "../../../assets/scss/plugins/extensions/react-tables.scss";

class DesignOutletTable extends React.Component {
  state = {
    data: makeData(),
  };
  render() {
    const { data } = this.state;

    return (
      <Card>
        <CardHeader>
          <CardTitle>Simple</CardTitle>
        </CardHeader>
        <CardBody>
          <ReactTable
            data={data}
            columns={[
              {
                Header: "Tank",
                columns: [
                  {
                    Header: "Select Tank",
                    accessor: "firstName",
                  },
                  {
                    Header: "Product Mapped",
                    accessor: "firstName",
                  },
                  {
                    Header: "Capacity",
                    id: "lastName",
                    accessor: (d) => d.lastName,
                  },
                ],
              },
              {
                Header: "Mpd",
                columns: [
                  {
                    Header: "Select Mpd",
                    accessor: "age",
                  },
                  {
                    Header: "Bay to Mpd",
                    accessor: "status",
                  },
                ],
              },
              {
                Header: "Bay",
                columns: [
                  {
                    Header: "No.",
                    accessor: "age",
                  },
                  {
                    Header: "Nozzle",
                    accessor: "status",
                  },
                ],
              },
              {
                Header: "Nozzle",
                columns: [
                  {
                    Header: "No.",
                    accessor: "visits",
                  },
                  {
                    Header: "Tank",
                    accessor: "status",
                  },
                ],
              },
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </CardBody>
      </Card>
    );
  }
}
export default DesignOutletTable;
