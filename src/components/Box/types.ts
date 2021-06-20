export type BoxProps = {
	/**
	 * Does this box align items in a grid?
	 * @type boolean
	 * @default false
	 */
	grid?: boolean

	/**
	 * Is this box a row in a grid?
	 * @type boolean
	 * @default false
	 */
	row?: boolean

	/**
	 * Is this box a column in a row?
	 * @type boolean
	 * @default false
	 */
	column?: boolean

	/**
	 * How many columns; relatively to others in the column grid, does this column
	 * take on small and below screens.
	 * @type number
	 */
	small?: number

	/**
	 * How many columns; relatively to others in the column grid, does this column
	 * take on medium screens.
	 * @type number
	 */
	medium?: number

	/**
	 * How many columns; relatively to others in the column grid, does this column
	 * take on large and above screens.
	 * @type number
	 */
	large?: number

	/**
	 * Set this flag if you don't want a <Box /> to collapse to column mode on
	 * mobile.
	 * @type boolean
	 */
	noMobileCollapse?: boolean

	nowrap?: boolean

	alignContent?: "flex-start" | "center" | "flex-end"
	verticallyAlignContent?: "flex-start" | "center" | "flex-end"

	/**
	 * Applies a red border to the box to debug it's layout and bounds.
	 * cascades
	 */
	debugContainer?: boolean

	/**
	 * What should happen when this is pressed on?
	 */
	onPress?: (event: unknown) => void
}
