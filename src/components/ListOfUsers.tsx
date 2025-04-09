import {Badge,Card,Table,TableBody,TableCell,TableHead,TableHeaderCell,TableRow,Title} from '@tremor/react'


export function ListOfUsers () {
  

  return (
    <Card>
      <Title>
        Usuarios
        <Badge></Badge>
      </Title>
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
              <TableCell style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  style={{
									  width: '32px',
									  height: '32px',
									  borderRadius: '50%',
									  marginRight: '8px'
                  }}
                  src={`https://unavatar.io/github/${item.github}`}
                  alt={item.name}
                />
                {item.name}
              </TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>
                <button type='button'>
                 
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}