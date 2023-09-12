import { css } from 'styled-components'

export function linesToShow(lines: number) {
  return css`
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}
