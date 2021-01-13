import { OptionsType, RouteStepType } from '../types/common'

export const routeStep: string[] = Object.values(RouteStepType)
export const totalStepNo: number = routeStep.indexOf('summary')

export const salaryOptions: OptionsType = {
  BETWEEN_0_TO_1: {
    key: 'BETWEEN_0_TO_1',
    value: '0 - 1.000',
  },
  BETWEEN_1_TO_2: {
    key: 'BETWEEN_1_TO_2',
    value: '1.000 - 2.000',
  },
  BETWEEN_2_TO_3: {
    key: 'BETWEEN_2_TO_3',
    value: '2.000 - 3.000',
  },
  BETWEEN_3_TO_4: {
    key: 'BETWEEN_3_TO_4',
    value: '3.000 - 4.000',
  },
  MORE_THAN_4: {
    key: 'MORE_THAN_4',
    value: 'More than 4.000',
  },
}
