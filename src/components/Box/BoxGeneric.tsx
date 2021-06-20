import { css } from "@emotion/react"
import { sizeBreakpointsMedium, sizeBreakpointsSmall } from "../../theme"
import {
	GenericContainer,
	GenericContainerPropsWithComponent,
} from "../GenericContainer"
import { BoxProps } from "./types"

/**
 * A generic box that serves as a base container for most
 * content.
 *
 * For a full list of props and to preview this component go to
 * @link http://localhost:6006/?path=/docs/containers-box--with-styles
 */
export function BoxGeneric<T>(
	props: GenericContainerPropsWithComponent<BoxProps & T>,
): JSX.Element {
	const {
		grid,
		row,
		column,
		small,
		medium,
		large,
		alignContent,
		verticallyAlignContent,
		debugContainer,
		onPress,
		nowrap,
		...rest
	} = props
	const styles = css({
		border: debugContainer ? "1px solid red" : "",
	})
	const flexStyles = grid
		? css({
				flexWrap: nowrap ? "nowrap" : "wrap",
				display: grid ? "flex" : undefined,
				alignItems: alignContent,
				justifyContent: verticallyAlignContent,
		  })
		: null
	const rowStyles = row
		? css({
				flexDirection: "row",
		  })
		: null

	const columnStyles = column
		? css({
				flexDirection: "column",
				flexBasis: "100%",
		  })
		: null

	const smallStyles = small
		? css`
				@media (max-width: ${sizeBreakpointsSmall}px) {
					flex-direction: column;
					flex: ${small} 1 ${(small ?? 1) * 10}%;
				}
		  `
		: null

	const mediumStyles = medium
		? css`
				@media (min-width: ${sizeBreakpointsSmall}px) and (max-width: ${sizeBreakpointsMedium}px) {
					flex: ${medium} 1 ${(medium ?? 1) * 10}%;
				}
		  `
		: null

	const largeStyles = large
		? css`
				@media (min-width: ${sizeBreakpointsMedium}px) {
					flex: ${large} 1 ${(large ?? 1) * 10}%;
				}
		  `
		: null

	return (
		<GenericContainer<BoxProps>
			{...rest}
			css={[
				styles,
				flexStyles,
				rowStyles,
				columnStyles,
				smallStyles,
				mediumStyles,
				largeStyles,
			]}
			onClick={onPress}
		/>
	)
}
