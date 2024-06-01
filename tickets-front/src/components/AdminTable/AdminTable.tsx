import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { IEvent } from "../../common/common.interfaces";
import { EVENTS } from "../../common/common.data";
import "./AdminTable.css";
import GenericButton from "../GenericButton/GenericButton";

interface AdminTableProps {
  events?: IEvent[];
}

const AdminTable: React.FC<AdminTableProps> = ({ events }) => {
  return (
    <div>
      <div className="admin-actions">
        <h2>Actions</h2>
        <div>
          <GenericButton title="Add event" onClick={() => {}} />
        </div>
      </div>
      {EVENTS && EVENTS.length > 0 ? (
        <TableContainer component={Paper}>
          <Table className="admin-table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {EVENTS.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.name}</TableCell>
                  <TableCell>{event.description}</TableCell>
                  <TableCell>{event.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>No events to display</p>
      )}
    </div>
  );
};

export default AdminTable;