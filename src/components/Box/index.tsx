import { PropsWithChildren } from "react"
import { BoxGeneric } from "./BoxGeneric"
import { BoxProps } from "./types"
import { GenericContainerProps } from "../GenericContainer"
import { css } from "@emotion/react"

const Div = (
	props: PropsWithChildren<
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
	>,
): JSX.Element => <div {...props} />

export const Box = (props: GenericContainerProps<BoxProps>) => {
	const styles = css({
		padding: props.padding,
		paddingTop: props.paddingV,
		paddingBottom: props.paddingV,
		paddingLeft: props.paddingH,
		paddingRight: props.paddingH,
		margin: props.margin,
		marginTop: props.marginV,
		marginBottom: props.marginV,
		marginLeft: props.marginH,
		marginRight: props.marginH,
	})

	return (
		<BoxGeneric<BoxProps>
			css={[props.css, styles]}
			withComponent={Div}
			{...props}
		/>
	)
}
