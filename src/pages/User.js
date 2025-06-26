import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import users from '../data/user';


export default function Users() {
  return (
    <Table  className='table-row'>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell><TableCell>Email</TableCell>
          <TableCell>Role</TableCell><TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user, i) => (
          <TableRow key={i}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
            <TableCell>
              <Button size="small">Edit</Button>
              <Button size="small" color="error">Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}