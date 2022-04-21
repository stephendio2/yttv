import styled from "@emotion/styled"

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
  background-color: salmon;
  padding-top: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  overflow: hidden;
`


export const HeaderLeft = () => {
  return (
    <HeaderButtonWrapper flex={1}>
    <div>HeaderLeft</div>
    </HeaderButtonWrapper>
  )
}

interface HeaderButtonProps {
  flex: number;
  marginLeft?: number;
}

export const HeaderButtonWrapper = styled.div<HeaderButtonProps>`
  display: flex;
  justify-content: space-around;
  margin-left: ${p => p.marginLeft}em;
  flex: ${p => p.flex};
`

export const HeaderRight = () => {
  return (
    <HeaderButtonWrapper flex={5} marginLeft={10}>
    <div>One</div>
    <div>Two</div>
    <div>Three</div>
    <div>Four</div>
    </HeaderButtonWrapper>
  )
}

export default Header