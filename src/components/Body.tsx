import styled from "@emotion/styled"

export const BodyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80vh;
  background-color: salmon;
  padding-top: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  overflow: hidden;
  align-items: center;
`

export const BodyPartWrapper = styled.div`
    display: flex;
`

export const LeftWrapper = styled.div`
    display: flex;
    width: 85%;
    flex-direction: column;
`

export const BodyLeft = () => {
  return (
   <LeftWrapper>
    <div>Sample Title</div>
    <div>I'm baby flexitarian DIY master cleanse, salvia bespoke schlitz tousled man bun ramps aesthetic jean shorts quinoa. Retro mustache hot chicken cred, subway tile raw denim pour-over gochujang. Meditation wayfarers deep v iPhone retro shabby chic cray etsy tote bag sriracha lyft shoreditch leggings disrupt williamsburg.</div>
    <div>Sample Bottom</div>
   </LeftWrapper> 
  )
}

export const BodyRight = () => {
  return (
    <BodyPartWrapper>
    <div>BodyRight</div>
    </BodyPartWrapper>
  )
}

const Body = () => {
  return (
      <BodyWrapper>
          <BodyLeft/>
       </BodyWrapper>
  )
}
export default Body