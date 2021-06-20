import { createContext, PropsWithChildren, useEffect, useState } from "react"
import { sizeBreakpointsLarge, sizeBreakpointsSmall } from "../theme"

export enum CurrentResponsiveMode {
	SMALL,
	MEDIUM,
	LARGE,
}

export const ResponsiveContext = createContext(CurrentResponsiveMode.SMALL)

export function ResponsiveProvider({
	children,
}: PropsWithChildren<Record<string, unknown>>) {
	const [currentMode, setCurrentMode] = useState(CurrentResponsiveMode.SMALL)
	useEffect(() => {
		const resizeListener = () => {
			if (typeof window !== "undefined")
				if (window?.innerWidth <= sizeBreakpointsSmall)
					setCurrentMode(CurrentResponsiveMode.SMALL)
				else if (
					window?.innerWidth > sizeBreakpointsSmall &&
					window?.innerWidth <= sizeBreakpointsLarge
				)
					setCurrentMode(CurrentResponsiveMode.MEDIUM)
				else if (window?.innerWidth > sizeBreakpointsLarge)
					setCurrentMode(CurrentResponsiveMode.LARGE)
				else setCurrentMode(CurrentResponsiveMode.SMALL)
		}
		if (typeof window !== "undefined") {
			window.addEventListener("resize", resizeListener)
		}
		return () => window.removeEventListener("resize", resizeListener)
	})

	return (
		<ResponsiveContext.Provider value={currentMode}>
			{children}
		</ResponsiveContext.Provider>
	)
}
