type PersonProps = {
  name: {
    fname: string
    lname: string
  }
}

export const Person = (props: PersonProps) => {
  return (
    <>
      <div>
        <h1>
          Hello! {props.name.fname} {props.name.lname}
        </h1>
      </div>
    </>
  )
}
