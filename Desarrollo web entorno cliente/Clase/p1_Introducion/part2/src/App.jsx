import { useState, useEffect } from 'react'
import { Note, Notification } from './componentes'
import axios from 'axios'
import noteService from './services/notes'

const Footer = () =>{
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return(
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2024</em>
    </div>
  )
}

const App = () => {
 // Estado que guarda todas las notas
  const [notes, setNotes] = useState([])

  // Estado del input para la nueva nota
  const [newNote, setNewNote] = useState("Nueva nota")

  // Estado para mostrar todas o solo las importantes
  const [showAll, setShowAll] = useState(true)

  const [errorMessage, setErrorMessage] = useState("some error happend...")

  
  useEffect(() =>{
    noteService
    .getAll()
    .then(initialNotes =>{
      setNotes(initialNotes)
    })
  }, [])
  
  console.log('render', notes.length, 'notes')

 const toggleImportanceOf = id => {
  const note = notes.find(n => n.id === id)
  const changedNote = { ...note, important: !note.important }

  noteService
    .update(id, changedNote).then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
    .catch(error => {
      setErrorMessage(
        `Note '${note.content}' was already removed from server`
      )
      setTimeout(() =>{
        setErrorMessage(null)
      }, 5000)
      setNotes(notes.filter(n => n.id !== id))
    })
}
  // Función que se ejecuta al enviar el formulario
  const addNote = event => {
    event.preventDefault() // evita recargar la página

    // Objeto de la nueva nota
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5, // true o false aleatorio
    }
    noteService
    .create(noteObject)
    .then(returnedNotes =>{
      //Response.data son los datos que sirven que devuelve el server
      setNotes(notes.concat(returnedNotes))
      setNewNote('')
    })
  }
  // Se ejecuta cada vez que cambia el input
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  // Decide qué notas se muestran
  const noteToShow = showAll ? notes : notes.filter(note => note.important == true)

  return (
    <div>
      <h1>Notes</h1>
      < Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {noteToShow.map(note =>
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  )
}
export default App
