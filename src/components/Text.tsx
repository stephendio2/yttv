import styled from "@emotion/styled"

const Text = styled.div<TextProps>`
   font-size: ${p => p.fontSize};
   font-Weight: ${p => p.fontWeight};
   font-Style: ${p => p.fontStyle};
   font-Family: ${p => p.fontFamily};
   flex-grow: ${p => p.flexGrow ?? 0};
   flex-shrink: ${p => p.flexShrink ?? 0};
   flex-basis: ${p => p.flexBasis ?? 0};
`

interface TextProps {
    fontSize?: string;
    fontWeight?: string;
    fontStyle?: string;
    fontFamily?: string;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: number;
}

export default Text