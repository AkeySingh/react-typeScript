type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  title: string
}

export const Button = (props: ButtonProps) => {
  return (
    <button className='custum_button' onClick={props.handleClick}>
      {props.title}
    </button>
  )
}
