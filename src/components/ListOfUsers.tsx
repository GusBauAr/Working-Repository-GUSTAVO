import {Card, Table,TableHead,TableRow,TableHeaderCell,TableBody,TableCell} from "@tremor/react"


const users:{
    id:string;
    name: string;
    email: string;
    github :string;

}[]=[ 
    {
    id:"1",
    name:"gustavo",
    email:"gustavo@gmail.com",
    github:"gusbauar"
    },
    


];
export function ListOfUsers () {
  
    return (
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell> Id </TableHeaderCell>
              <TableHeaderCell> Nombre </TableHeaderCell>
              <TableHeaderCell> Email </TableHeaderCell>
              <TableHeaderCell> Acciones </TableHeaderCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>
                  Acciones
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
}