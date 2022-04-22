import styled from "@emotion/styled"
import Text from "./Text"

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLeft/>
      <HeaderRight/>
    </HeaderWrapper>
  )
}

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5vh;
  padding-top: 1rem;
  overflow: hidden;
`


export const HeaderLeft = () => {
  return (
    <HeaderButtonWrapper flex={1} justifyContent={`start`}>
      <Text>HeaderLeft</Text>
    </HeaderButtonWrapper>
  )
}

interface HeaderButtonProps {
  flex?: number;
  marginLeft?: number;
  justifyContent?: string;
}

export const HeaderButtonWrapper = styled.div<HeaderButtonProps>`
  display: flex;
  justify-content: ${p => p.justifyContent ?? `space-around`};
  margin-left: ${p => p.marginLeft}em;
  flex: ${p => p.flex};
`

export const HeaderItemWrapper = styled.div`
  padding: 0rem 3rem 0rem 3rem;
`

export const HeaderRight = () => {
  return (
    <HeaderButtonWrapper justifyContent={`end`}>
    <HeaderItemWrapper>One</HeaderItemWrapper>
    <HeaderItemWrapper>Two</HeaderItemWrapper>
    <HeaderItemWrapper>Three</HeaderItemWrapper>
    <HeaderItemWrapper>Four</HeaderItemWrapper>
    <HeaderItemWrapper>Five</HeaderItemWrapper>
    </HeaderButtonWrapper>
  )
}

export default Header