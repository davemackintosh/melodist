import { Fragment, PropsWithChildren } from "react"
import {
	useFonts as useSourceSansProFonts,
	SourceSansPro_400Regular,
} from "@expo-google-fonts/source-sans-pro"
import {
	useFonts as useStaatlichesFonts,
	Staatliches_400Regular,
} from "@expo-google-fonts/staatliches"
import { Text } from "./Text"
import { Box } from "./Box"

export function FontPreloader({
	children,
}: PropsWithChildren<Record<string, unknown>>): JSX.Element {
	const [sourceSansProLoaded] = useSourceSansProFonts({
		SourceSansPro_400Regular,
	})
	const [staatlichesLoaded] = useStaatlichesFonts({ Staatliches_400Regular })

	if (!sourceSansProLoaded || !staatlichesLoaded)
		return (
			<Box>
				<Text>Loading</Text>
			</Box>
		)

	return <Fragment>{children}</Fragment>
}
