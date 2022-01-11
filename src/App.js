import React, { useState, useEffect } from 'react'
import { TaskRow } from './components/TaskRow'
import { TaskBanner } from './components/TaskBanner'
import { TaskCreator } from './components/TaskCreator'
import { VisibilityControl } from './components/VisibilityControl'

function App() {

  const [userName, setUserName] = useState('Fazt')
  const [taskItems, setTaskItems] = useState([
    {name: 'Task One', done: false},
    {name: 'Task Two', done: false},
    {name: 'Task Three', done: true},
    {name: 'Task Four', done: false}
  ])

  const [showCompleted, setShowCompleted] = useState(true)

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data != null) {
      setTaskItems(JSON.parse(data))
    } else {
      setTaskItems([
        {name: 'Task One Example', done: false},
        {name: 'Task Two Example', done: false},
        {name: 'Task Three Example', done: true},
        {name: 'Task Four Example', done: false}
      ])
      setUserName('Fazt Example')
      setShowCompleted(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  const createNewTask = taskName => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, {name: taskName, done: false}])
    }
  }

  const toggleTask = task =>
    setTaskItems(
      taskItems.map(
        t => t.name === task.name ? {...t, done: !t.done} : t
      )
    )

  const taskTableRows = doneValue => {
    return taskItems
      .filter(task => task.done === doneValue)
      .map(task => (
        <TaskRow tareaa={task} checkboxRow={toggleTask} key={task.name} />
      ))
  }
    
    return (
      <>

        <TaskBanner username={userName} listaDeTareas={taskItems} />

        <TaskCreator callback={createNewTask} />

        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{taskTableRows(false)}</tbody>
        </table>

        <div className="bg-white text-center p-2">
          <VisibilityControl
            description='Completed Task'
            isChecked={showCompleted}
            cb={checked => setShowCompleted(checked)}
          />
        </div>

        {
          showCompleted && (
            <table className='table table-striped table-bordered'>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>
                {taskTableRows(true)}
              </tbody>
            </table>
          )
        }

      </>
    );
  }
  
  export default App;
  