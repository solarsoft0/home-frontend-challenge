import { RouteStepType } from '../types/common'

export const routeStep: string[] = Object.values(RouteStepType)
export const totalStepNo: number = routeStep.indexOf('summary')