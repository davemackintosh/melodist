import { Text as RNText, ViewProps } from "react-native"
import { GenericContainerProps } from "../GenericContainer"
import { TextProps } from "./types"
import { TextGeneric } from "./TextGeneric"
import { css } from "@emotion/react"
import {
	typographyMobilePrimary,
	typographyMobilePrimaryBold,
	typographyMobileSecondary,
} from "../../theme"

const fontFamilyFromVariant = (
	variant: TextProps["variant"],
):
	| typeof typographyMobilePrimary
	| typeof typographyMobileSecondary
	| typeof typographyMobilePrimaryBold => {
	switch (variant) {
		case "h1":
		case "h2":
		case "h3":
		case "h4":
		case "h5":
			return typographyMobilePrimaryBold
		case "paragraph":
		case "inline":
		case "button":
		default:
			return typographyMobileSecondary
	}
}

const accessibilityRoleFromVariant = (
	variant: TextProps["variant"],
): ViewProps["accessibilityRole"] => {
	switch (variant) {
		case "h1":
		case "h2":
		case "h3":
		case "h4":
		case "h5":
			return "header"
		case "paragraph":
		case "inline":
		case "button":
		default:
			return "text"
	}
}
const accessibilityLevelFromVariant = (
	variant: TextProps["variant"],
): number => {
	switch (variant) {
		case "h1":
			return 1
		case "h2":
			return 2
		case "h3":
			return 3
		case "h4":
			return 4
		case "h5":
			return 5
		case "paragraph":
		case "inline":
		case "button":
		default:
			return 1
	}
}

export const Text = (
	props: GenericContainerProps<TextProps & ViewProps>,
): JSX.Element => (
	<TextGeneric<ViewProps>
		{...props}
		accessibilityRole={accessibilityRoleFromVariant(props.variant)}
		aria-level={accessibilityLevelFromVariant(props.variant)}
		css={css({
			fontFamily: fontFamilyFromVariant(props.variant),
		})}
		withComponent={RNText}
	/>
)
