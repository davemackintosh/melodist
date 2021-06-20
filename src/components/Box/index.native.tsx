import { BoxGeneric } from "./BoxGeneric"
import { BoxProps } from "./types"
import { GenericContainerProps } from "../GenericContainer"
import { View, ViewProps } from "react-native"
import { css } from "@emotion/react"

export const Box = (props: GenericContainerProps<BoxProps & ViewProps>) => {
	const styles = css({
		paddingVertical: props.paddingV,
		paddingHorizontal: props.paddingH,
		marginVertical: props.marginV,
		marginHorizontal: props.marginH,
	})
	return (
		<BoxGeneric<ViewProps>
			{...props}
			css={[props.css, styles]}
			withComponent={View}
		/>
	)
}
