export type TextProps = {
	bold?: boolean
	// italic?: boolean
	variant?:
		| "h1"
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "h6"
		| "paragraph"
		| "button"
		| "link"
		| "inline"
	href?: string
	title?: string
	onPress?: (event: unknown) => void
}
