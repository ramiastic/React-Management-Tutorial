import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

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
    return (
      <div>
        {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })
      }
      </div>
    );
  }
}

export default App;
