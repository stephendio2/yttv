import styled from "@emotion/styled"
import { CustomizableWrapper } from "./Footer"
import Text from "./Text"

export const BodyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 85vh;
  overflow: hidden;
  align-items: center;
`

export const BodyPartWrapper = styled.div`
    display: flex;
`

export const LeftWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  height: 60%;
`

export const BodyLeft = () => {
  return (
   <LeftWrapper>
    <Text>Sample Title</Text>
      <CustomizableWrapper>
        <Text flexGrow={4.5}>I'm baby flexitarian DIY master cleanse, salvia bespoke schlitz tousled man bun ramps aesthetic jean shorts quinoa. Retro mustache hot chicken cred, subway tile raw denim pour-over gochujang. Meditation wayfarers deep v iPhone retro shabby chic cray etsy tote bag sriracha lyft shoreditch leggings disrupt williamsburg.</Text>
        <Text flexGrow={1}>Right Side</Text>
      </CustomizableWrapper>
    <Text>Sample Bottom</Text>
   </LeftWrapper> 
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