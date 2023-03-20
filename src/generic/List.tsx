import React from 'react'

type ListProps<T> = {
  items: T[]
  onClick: (vlaue: T) => void
  children?: React.ReactNode
}

export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <>
      <div className='row text-center'>
        {items.length > 0
          ? items.map((item, index) => {
              return (
                <>
                  {index + 1}. {item}
                </>
              )
            })
          : ''}
      </div>
    </>
  )
}
