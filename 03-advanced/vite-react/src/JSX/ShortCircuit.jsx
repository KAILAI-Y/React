import { useState } from 'react'

const ShortCircuit = () => {
  // falsy
  const [text, setText] = useState('')

  //truthy
  const [name, setName] = useState('susan')
  const [user, setUser] = useState(null)
  const [isEditing, setIsEditing] = useState(true)

  return (
    <div>
      {/* {if(someCondition){"wont work"}} */}
      {/* <h4>Falsy OR: {text || 'hello world'}</h4>
      <h4>Falsy AND: {text && 'hello world'}</h4>
      <h4>Truthy OR: {name || 'hello world'}</h4>
      <h4>Falsy AND: {name && 'hello world'}</h4>
      {codeExample} */}
      <h2>{text || 'default value'}</h2>
      {text && (
        <div>
          <h2>whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <someComponent name={user.name} />}
      <h2 style={{ margin: '1rem 0' }}>Ternary Operator</h2>
      <button className="btn">{isEditing ? 'edit' : 'add'}</button>
      {user ? (
        <div>
          <h4>hello there user {user.name}</h4>
          <h2>{name}</h2>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <h2>{name}</h2>
        </div>
      )}
    </div>
  )
}
const someComponent = ({ name }) => {
  return (
    <div>
      <h2>whatever return</h2>
      <h2>{name}</h2>
    </div>
  )
}

export default ShortCircuit
