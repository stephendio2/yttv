import styled from "@emotion/styled"

export const MainFooterWrapper = styled.div<DirectionOnly>`
    display: flex;
    height: 10vh;
    flex-direction: ${p => p.direction};
    /* margin: 5px; */
    justify-content: space-between;
    align-items: center;
`
export const FooterWrapper = styled.div<DirectionOnly>`
    display: flex;
    /* height: 15vh; */
    flex-direction: ${p => p.direction};
    /* margin: 5px; */
    justify-content: space-between;
    align-items: center;
`
export const CustomizableWrapper = styled.div<DirectionOnly>`
    display: flex;
    flex-direction: ${p => p.direction};
    justify-content: space-between;
`

interface DirectionOnly {
    direction?: string;
}

interface Layout {
    direction?: string;

}

export const FooterLeft = () => {
  return (
    <>
      <MainFooterWrapper>
        <div>FooterBigLeft</div>
        <FooterWrapper direction="column">
          <div>FooterSmallRight</div>
          <div>FooterSmallerRight</div>
        </FooterWrapper>
      </MainFooterWrapper>
    </>
  )
}

export const FooterRight = () => {
  return (
    <>
      <MainFooterWrapper>
        <FooterWrapper direction="column">
          <div>FooterSmallLeft</div>
          <div>FooterSmallerLeft</div>
        </FooterWrapper>
        <div>FooterBigRight</div>
      </MainFooterWrapper>
    </>
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