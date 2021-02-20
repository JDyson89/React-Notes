import './App.css';

let studentData = [
  {
    id: 1,
    name: "Eddy",
    color: "chartreuse",
    school: "Nebula Academy",
  },
  {
    id: 2,
    name: "Chelsea",
    color: "purple",
    school: "Nebula Academy",
  },
  {
    id: 3,
    name: "Tauseef",
    color: "orange",
    school: "Nebula Academy",
  },
  {
    id: 4,
    name: "Maurice",
    color: "red",
    school: "Nebula Academy",
  },
  {
    id: 5,
    name: "D'aja",
    color: "blue",
    school: "Nebula Academy",
  },
  {
    id: 6,
    name: "Jasmine",
    color: "pink",
    school: "Nebula Academy",
  },
  {
    id: 7,
    name: "Anitria",
    color: "blue",
    school: "Nebula Academy",
  },
];


//injecting a function
// function App(){
//   return (
//     <div>
//       <StudentList />
//       <StudentList />
//       <StudentList />
//       <StudentList />
//     </div>
//   );
// }

function App(){
  return studentData.map((student) => (
    <div className='studentCard'>
      <h1>{student.name} is a {student.school} student</h1>
    </div>
  )); 
}

export default App;
