import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef(({ className, ...props }, ref) => <div ref={ref} className={cn("rounded-xl border bg-card m-10 text-card-foreground shadow", className)} {...props} />)
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />)
CardHeader.displayName = "CardHeader"

const CardTitleH1 = React.forwardRef(({ className, ...props }, ref) => <h1 ref={ref} className={cn("font-bold mt-4 mb-10 leading-none tracking-tight text-center", className)} {...props} />)
CardTitleH1.displayName = "CardTitleH1"

const CardTitleH2 = React.forwardRef(({ className, ...props }, ref) => <h2 ref={ref} className={cn("font-bold mb-4 leading-none tracking-tight text-center", className)} {...props} />)
CardTitleH2.displayName = "CardTitleH2"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => <div ref={ref} className={cn("mb-4 p-6 pt-0 text-center", className)} {...props} />)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitleH1, CardTitleH2, CardDescription, CardContent }
