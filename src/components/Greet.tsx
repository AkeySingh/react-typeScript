type GreetProps = {
  name: string
  messagesCount?: number
  isLogedIn: boolean
}
export const Greet = (props: GreetProps) => {
  const { messagesCount = 0 } = props
  return (
    <>
      <div>
        {props.isLogedIn ? (
          <h1>
            Welcome {props.name}! you have {messagesCount} unreed messages
          </h1>
        ) : (
          <h1>Welcome you are a new user</h1>
        )}
      </div>
    </>
  )
}
