type InputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  val: String
}

export const Input = (props: InputProps) => {
  return <input style={{ padding: '10px' }} type='text' onChange={props.handleChange} />
}
