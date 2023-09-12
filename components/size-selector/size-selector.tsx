import { ReactNode, useState } from 'react'
import { SelectSizeButton } from '@/components/size-selector/size-selector-button.styled'
import { SizeSelectorRootContainer } from '@/components/size-selector/size-selector.styled'

type Props = {
  sizes: string[]
}

export function SizeSelector({ sizes }: Props) {
  const [selected, setSelected] = useState('')

  function onSelectSize(size: string) {
    setSelected(size)
  }

  return (
    <SizeSelectorRootContainer>
      {sizes.map((size) => (
        <SelectSizeButton key={size} selected={selected === size} onClick={() => onSelectSize(size)}>
          {size}
        </SelectSizeButton>
      ))}
    </SizeSelectorRootContainer>
  )
}
