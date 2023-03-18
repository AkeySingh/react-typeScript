type StatusProps = {
  status: 'loading' | 'complete' | 'error'
}

export const Status = (props: StatusProps) => {
  let message

  if (props.status === 'loading') {
    message = 'Loading...'
  } else if (props.status === 'complete') {
    message = 'Data featching successfully'
  } else if (props.status === 'error') {
    message = 'Something went wrong'
  }
  return (
    <>
      <div> Status : {message}</div>
    </>
  )
}
