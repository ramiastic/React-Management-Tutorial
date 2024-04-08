import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { withStyles } from '@mui/styles'


const styles = theme =>({
  root: {
    width : '100%',
    overflowX: "auto"
    
  },
  table:{
    minWidth:1080
  }
})
// const styles = theme => ({
//   root:  {
//     width: '100%',
//     marginTop: theme.spacing.unit * 3,
//     overflowX: "auto"
//   },
//   table: {
//     minWidt: 1080
//   }
// })

const customers = [
{
  'id' : 1,
  'image' : 'https://picsum.photos/id/1/64',
  'name' : '홍길동',
  'birthday' : '08000',
  'gender' : '남자',
  'job' : '대학생'
},
{
  "id": 2,
  "image": "https://picsum.photos/id/2/64",
  "name": "이몽룡",
  "birthday": "850302",
  "gender": "남자",
  "job": "대학생"
},
{
  "id": 3,
  "image": "https://picsum.photos/id/3/64",
  "name": "심청",
  "birthday": "900405",
  "gender": "여자",
  "job": "대학생"
},
{
  "id": 4,
  "image": "https://picsum.photos/id/4/64",
  "name": "김철수",
  "birthday": "950701",
  "gender": "남자",
  "job": "대학생"
},
{
  "id": 5,
  "image": "https://picsum.photos/id/5/64",
  "name": "박영희",
  "birthday": "981215",
  "gender": "여자",
  "job": "대학생"
},
{
  "id": 6,
  "image": "https://picsum.photos/id/6/64",
  "name": "손오공",
  "birthday": "800330",
  "gender": "남자",
  "job": "대학생"
}
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);})}
          </TableBody>
        </Table>

      </Paper>
    );
  }
}

export default withStyles(styles)(App);
