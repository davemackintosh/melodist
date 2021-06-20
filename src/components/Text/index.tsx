import { GenericContainerProps } from "../GenericContainer"
import { TextProps } from "./types"
import { TextGeneric } from "./TextGeneric"
import { css } from "@emotion/react"
import {
	typographyWebPrimary,
	typographyWebSecondary,
	typographyWebPrimaryBold,
	typographyWebButtons,
	typographyWebAdditional,
} from "../../theme"
import { Link } from "react-router-dom"

const fontFamilyFromVariant = (
	variant: TextProps["variant"],
	bold: boolean = false,
	italic: boolean = false,
):
	| typeof typographyWebPrimary
	| typeof typographyWebSecondary
	| typeof typographyWebAdditional
	| typeof typographyWebPrimaryBold => {
	switch (variant) {
		case "h1":
		case "h2":
		case "h3":
		case "h4":
		case "h5": {
			// TODO I don't *Think* there's any italics in the apps so I've ORd this.
			if (bold || italic) return typographyWebPrimaryBold
			return typographyWebPrimary
		}
		case "button":
			return typographyWebButtons
		case "paragraph":
		case "inline":
		default:
			return typographyWebSecondary
	}
}

const P = ({
	className,
	children,
	variant,
	href,
	title,
	onPress,
	css,
}: GenericContainerProps<TextProps>): JSX.Element => {
	switch (variant) {
		case "link":
			if (!href) return <span>ERROR: Link specified with no href.</span>
			else if (href.startsWith("http"))
				return (
					<a
						href={href}
						title={title}
						rel="noopener noreferrer"
						onClick={onPress}
						className={className}
						css={css}
					>
						{children}
					</a>
				)
			return (
				<Link to={href} onClick={onPress} css={css} className={className}>
					{children}
				</Link>
			)
		case "inline":
			return (
				<span className={className} onClick={onPress}>
					{children}
				</span>
			)
		case "paragraph":
		default:
			return (
				<p className={className} onClick={onPress}>
					{children}
				</p>
			)
		case "h1":
			return (
				<h1 className={className} onClick={onPress}>
					{children}
				</h1>
			)
		case "h2":
			return (
				<h2 className={className} onClick={onPress}>
					{children}
				</h2>
			)
		case "h3":
			return (
				<h3 className={className} onClick={onPress}>
					{children}
				</h3>
			)
		case "h4":
			return (
				<h4 className={className} onClick={onPress}>
					{children}
				</h4>
			)
		case "h5":
			return (
				<h5 className={className} onClick={onPress}>
					{children}
				</h5>
			)
	}
}

export const Text = (props: GenericContainerProps<TextProps>): JSX.Element => {
	const fonts = css({
		fontFamily: fontFamilyFromVariant(props.variant, props.bold, false),
		fontWeight: props.bold ? 700 : 500,
	})
	return (
		<TextGeneric<TextProps>
			{...props}
			withComponent={P}
			css={[props.css, fonts]}
		/>
	)
}
