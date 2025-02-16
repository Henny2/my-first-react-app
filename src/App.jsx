// this is a component, was the example that was created for us
// our app component will serve as the root component, 
// we will create furhter components and include in the app component

import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"
import Student from "./Student"
import Card from "./Card"

function App() {
  return (
    // empty set of ankle brackets are called fragment, used to follow the rules of a component only being able to return one element
    <>
      <Header></Header>
      <Food></Food>
      <Student name="Henny" age={28} isStudent={false}></Student >
      <Student name="Jamie" age={14} isStudent={true}></Student >
      <Student name="Liam" age={22} isStudent={true}></Student >
      <Footer></Footer>

      <hr />
      <Card>

      </Card>
    </>
  )
}

export default App
