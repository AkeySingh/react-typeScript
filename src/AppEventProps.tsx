import './App.css'
import { Button } from './EventPropsComponents/Button'
import { Input } from './EventPropsComponents/Input'

const AppEventProps = () => {
  return (
    <>
      <div className='App'>
        <div className='parent_personList'>
          <div className='child_personList'>
            <h3>This is Event props Types</h3>
            <Button title='Click' handleClick={(evnet) => console.log(evnet)} />
            <br />
            <br />
            <Input
              val=''
              handleChange={(e) => {
                console.log(e.target.value)
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AppEventProps
