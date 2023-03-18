import { border, borderBottom } from '@mui/system'

type PersonListProps = {
  names: {
    fname: string
    lname: string
  }[]
}

export const PersonList = (props: PersonListProps) => {
  return (
    <>
      <div className='parent_personList'>
        <div className='child_personList'>
          <h3>List of Persons</h3>
          {props.names.length > 0
            ? props.names.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{ display: 'block', padding: '5px', fontSize: '20px', borderBottom: '1px solid grey' }}
                  >
                    {index + 1} : {item.fname} {item.lname}
                  </div>
                )
              })
            : null}
        </div>
      </div>
    </>
  )
}
