import styled from "@emotion/styled"

export const FooterWrapper = styled.div<DirectionOnly>`
    display: flex;
    flex-direction: ${p => p.direction};
    margin: 5px;
    justify-content: space-between;
`

interface DirectionOnly {
    direction?: string;
}

export const FooterLeft = () => {
  return (
    <>
    <FooterWrapper >
    <div>FooterBigLeft</div>
    <FooterWrapper direction="column">
        <div>FooterSmallRight</div>
        <div>FooterSmallerRight</div>
    </FooterWrapper>
    </FooterWrapper>
    </>
  )
}

export const FooterRight = () => {
  return (
    <div>FooterRight</div>
  )
}

const Footer = () => {
  return (
    <FooterWrapper direction="row">
        <FooterLeft/>
        <FooterRight/>
    </FooterWrapper>
  )
}
export default Footer