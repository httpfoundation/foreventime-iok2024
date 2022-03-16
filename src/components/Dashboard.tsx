import { Grid, useMediaQuery, Box, Tooltip }  from "@mui/material"
import { styled, useTheme } from "@mui/material/styles"
import Bubble from "./Bubble/Bubble"
import { DashboardItemType } from "../types"
import React, { useMemo } from "react"


interface DashboardItemProps {
	title?: string,
	subtitle?: string,
	corner?: 'bl' | 'br' | 'tl' | 'tr' | 'none',
	size?: 'xs' | 'lg' | 'xl' | 'xxl',
	color?: 'light' | 'primary',
	shadow?: boolean,
	smallText?: boolean,
	darkText?: boolean,
	icon?: boolean,
	children?: React.ReactNode,
	img?: any,
	caption?: string,
	to?: string, 
	xs: number, 
	xl?: number,
	lg?: number,
	imgWidth?: string, 
	empty?: boolean,
	light?: boolean,
	timeout?: number,
	tooltipPlacement?: "bottom" | "left" | "right" | "top" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start" | undefined,
	onClick?: () => void,

}




const Dashboard = (props : {items: DashboardItemType[]}) => {
    const {items} = props
    const theme = useTheme();
    const upperThanLg = useMediaQuery(theme.breakpoints.up("lg"))
	const upperThanMd = useMediaQuery(theme.breakpoints.up("md"))
    const upperThanXl = useMediaQuery(theme.breakpoints.up("xl"))
    const size = upperThanXl ? "xl" : upperThanLg ? "lg" : "xs"
    const xs = 12
    const xl = 3
    const lg = 3

	const sortedItems = useMemo(() => !upperThanMd ? [...items].sort((a,b) => a.mobileOrder - b.mobileOrder) : [...items], [items, upperThanMd])
    return (
		<Box display="flex" alignItems="center" justifyContent="center">
			<Grid
				container
				direction={"row"}
				spacing={5}
				sx={{ maxHeight: "calc(100vh - 162px)",  maxWidth: (size==="xl") ? "100%" : "80%"  }}
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				{sortedItems.map((item, key) => {
					const {caption, title, corner, light, img, link, onClick} = item
					return  (

						<DashboardItem
							caption={caption}
							img={img}
							to={link}
							xs={xs}
							xl={xl}
							lg={lg}
							size={size}
							title={title}
							light={light}
							corner={corner}
							onClick={onClick}
							key={key + (upperThanMd ? "mobile" : "desktop")}
							timeout = {1000}
							tooltipPlacement = {(key<4) ? "top" : "bottom"}
						/>
					)
					
				})}
			</Grid>
		</Box>
    )
}



export const DashboardItem = (props: DashboardItemProps) => {

    const { img, caption, title, to, imgWidth, corner, size, xs, xl, lg, empty, light, timeout, tooltipPlacement, onClick } = props
	if (empty) return <Grid item xs={xs} xl={xl} lg={lg} display="flex" ></Grid>
	

    return (
		<Grid item xs={xs} xl={xl} lg={lg} display="flex" alignItems="center" justifyContent="center" textAlign="center" >
						<Bubble 
							size={size} 
							corner={corner} 
							light={light} 
							to={to} 
							onClick={onClick} 
							caption={caption} 
							timeout={timeout} 
							title={title || ""}
							tooltipPlacement = {tooltipPlacement}
							img={img} 
							imgWidth={imgWidth} />
						
				</Grid>
    )
}



	


export default Dashboard