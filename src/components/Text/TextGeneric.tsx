import { css } from "@emotion/react"
import {
	colorFontBase,
	sizeFontHeading1,
	sizeFontHeading2,
	sizeFontHeading3,
	sizeFontHeading4,
	sizeFontHeading5,
} from "../../theme"
import {
	GenericContainer,
	GenericContainerPropsWithComponent,
} from "../GenericContainer"
import { TextProps } from "./types"

const fontSizeFromVariant = (variant: TextProps["variant"]): number => {
	switch (variant) {
		case "h1":
			return sizeFontHeading1
		case "h2":
			return sizeFontHeading2
		case "h3":
			return sizeFontHeading3
		case "h4":
			return sizeFontHeading4
		case "h5":
		case "paragraph":
		case "inline":
		case "button":
		default:
			return sizeFontHeading5
	}
}

/**
 * Generic text component for rendering text. Text on native cannot ever not be
 * inside a Text component so we use this to ensure cross platform support for
 * both the native use-case and the web use-case.
 *
 * For a full list of props and to preview this component go to
 * @link http://localhost:6006/?path=/docs/text--with-styles
 */
export function TextGeneric<T>(
	props: GenericContainerPropsWithComponent<TextProps & T>,
): JSX.Element {
	const fonts = css({
		color: colorFontBase,
		textDecoration: "none",
		fontSize: fontSizeFromVariant(props.variant),
	})
	return <GenericContainer<TextProps> {...props} css={[props.css, fonts]} />
}
